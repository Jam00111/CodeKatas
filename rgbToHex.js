/*

*/
function rgb(r, g, b){
  return converter(r) + converter(g) + converter(b);
}
function converter(val){
  val = (val<0 ? 0 : val);
  val = (val>255 ? 255 : val);
  val = (val.toString(16) !== '0' ? val.toString(16).toUpperCase() : '00');
  return val.length === 1 ? '0'+val : val;
}
