const camelCase = require('camelcase');

const processStr = ($str) => {

  const processedStr = camelCase($str);

  return processedStr;

}

console.log(processStr('yada-yada-yada'));