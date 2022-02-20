class App {
  constructor(selector) {
    this.appElement = document.querySelector(selector);
    this.componentsByname = {};
  }
  addComponent(component) {
    this.componentsByname[component.name] = component;
    component.model = this.proxify(component.model);
  }
  showComponent(name){
    this.currentComponent = this.componentsByname[name];

    if(this.currentComponent){
      this.currentComponent.controller(this.currentComponent.model);
    }
    this.updateView();
  }
  updateView(){
    if(this.currentComponent){
      this.appElement.innerHTML = this.currentComponent.view(this.currentComponent.model);
    }else{
      this.appElement.innerHTML = `<h3> not found </h3>`;
    }

  }
  proxify(model){
    const self = this;
    return new Proxy(model, {
      set(target, property, value){
        console.log('changing ', property, 'from ', target[property], 'to ', value);
        target[property] = value;
        self.updateView();
        return true;
      }
    })
  }
}
