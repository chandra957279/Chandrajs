const marval_heros = ["Thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// console.log(marval_heros);
// console.log(marval_heros[3][1]);

const allHeros = marval_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marval_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)