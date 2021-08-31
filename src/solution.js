/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

let students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];


function partitionStudentsByScore(students, score) {
  if (students.length === 0) return [[], []];
  let result = [];
  let underScore = students.filter(student => student.score <= score);
  let overScore = students.filter(student => student.score > score);
  result = [underScore, overScore]
  return result;
}

console.log(partitionStudentsByScore(students, 8));

module.exports = partitionStudentsByScore;