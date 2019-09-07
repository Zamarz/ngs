// Scalar values
const answer = 42;
const greeting = 'Hello';

// Arrays and Objects
const numbers = [3, 4, 6];
const person = Object.freeze({
  firstName: 'Diego',
  lastName: 'monteagudo',
  group:{id:2,name:'gamers'}
});
console.log(numbers);


person.firstName='alvaro';
person.lastName= 'asdasdasd';
person.group.name='Actores';
console.log(person);