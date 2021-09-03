let citiesInTheWorld = [
  ['Amsterdam', 'The Netherlands'],
  ['Moscow', 'Russia'],
  ['Los Angeles', 'The United States'],
  ['Seoul', 'Korea'],
  ['Jakarta', 'Indonesia']
];

let obj = {};
for (let i = 0; i < citiesInTheWorld.length; i++) {
  for (let j = 0; j < citiesInTheWorld[i].length; j++) {
    let key = citiesInTheWorld[i][j];
    let value = citiesInTheWorld[i][j + 1];
    obj[key] = value;
    break;
  }
}
console.log(obj);
