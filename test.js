const animals = [
  { name: "Fluffy", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" },
];

const isDog = (animals) => {
  return animals.species === "dog";
};
// let dogs = [];
// for (let i = 0; i < animals.length; i++) {
//   if (animals[i].species === "dog") {
//     dogs.push(animals[i]);
//   }
// }

// console.log(dogs);
const dogs = animals.filter(isDog);
const notDog = animals.filter((animal) => !isDog(animal));
console.log("dogs", dogs);

console.log("not a dog", notDog);
