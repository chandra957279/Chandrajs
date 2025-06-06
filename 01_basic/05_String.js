const name = "tuntun"
const repoCount = 50

console.log(name + repoCount + " value");
console.log(`My name is ${name} my repoCont is ${repoCount}`);

const gameName = new String('tuntun')
console.log(gameName[4]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "    tuntun     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://github.com/"
console.log(url.replace('git' ,'gitHub'));











