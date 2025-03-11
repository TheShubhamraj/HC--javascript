const marverHeros = ["thor", "Ironman ", "hulk"]
const dcHeros =['superman',"flash","batman"]

// marverHeros.push(dcHeros)// pushes another array as an element

// console.log(marverHeros);
// console.log(marverHeros[3][1])
const newMarvel =marverHeros.concat(dcHeros)
console.log(newMarvel);

// Use .concat() if you want to preserve immutability (e.g., when working with functional programming or React state updates).
// Use .push() if you want to modify the original array in place.

// Spread - same as concat
const all_new_heros = [... marverHeros,...dcHeros  ]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],6,7,[8,9,[5,6]]]

const real_another_array = another_array.flat(5)
console.log(real_another_array);


console.log(Array.isArray("Shubham raj"))
console.log(Array.from("shubham raj "));
console.log(Array.from({name:"hitesh"}))/// insteresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


