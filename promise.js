const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (expression) =>  {
    const checkTheaterIXX = await promiseTheaterIXX(expression)
    const checkTheaterVGC = await promiseTheaterVGC(expression)

    
    var countIXX = checkTheaterIXX.filter(function(element){
      return element.hasil == expression;
    }).length
    
    var countVGC = checkTheaterVGC.filter(function(element){
      return element.hasil == expression;
    }).length
    
    let count = countIXX + countVGC

    return count 
};

module.exports = {
  promiseOutput,
};
