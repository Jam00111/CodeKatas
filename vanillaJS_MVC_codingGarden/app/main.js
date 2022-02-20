const app = new App('#app');
const api = new API();

const breweryTemplate = (brewery) => `
<section class="dog-listing">
  <a href="#/breweries/${brewery.id}">
    <h3 class="name">${brewery.name}</h3>
    <section>
        <p>${brewery.name}</p>
        <p>Type: ${brewery.brewery_type}</p>
      <p>Phone: ${brewery.phone}</p>
    </section>
  </a>
</section>
`;

app.addComponent({
  name: 'brewery',
  model: {
    brewery: []
  },
  view(model) {
    const breweryHTML = model.brewery.reduce((html, brewery) => html + `<li>${breweryTemplate(brewery)}</li>`, '')
    return `
    <ul class="">
    ${breweryHTML}
    </ul>

    `;
  },
  controller(model) {
    api
      .getDogs()
      .then(result => {
        model.brewery = result;
      });
  }
});

app.addComponent({
  name: 'brewery1',
  model: {
    brewery: {}
  },
  view(model) {
    return breweryTemplate(model.brewery);
  },
  controller(model) {
    api
      .getBrewery(router.params[1])
      .then(result => {
        console.log("result");
        console.log(result);
        model.brewery = result;
      })
  }
});

const router = new Router(app);

router.addRoute('brewery', '^#/breweries$');
router.addRoute('brewery1', '^#/breweries/(([a-z]+[-][a-z]+)*)$');
