const { expect } = require("chai");
const partitionStudentsByScore = require("../src/solution");

describe("partitionStudentsByScore", () => {
        it("should return an array of separating students less than or equal to given score", () => {
          let students = [
              { name: "Leo Yeon-Joo", score: 8.9 },
              { name: "Morgan Sutton", score: 7.4 },
              { name: "Natalee Vargas", score: 9.2 },
          ];


          let actual = partitionStudentsByScore(students, 8);
          let expected = [
              [ { name: 'Morgan Sutton', score: 7.4 } ],
              [
                { name: 'Leo Yeon-Joo', score: 8.9 },
                { name: 'Natalee Vargas', score: 9.2 }
              ]
            ];
          expect(actual).to.eql(expected);
        });
  
        it("it should return an array of all students in one array", () => {
          let students = [
              { name: "Leo Yeon-Joo", score: 8.9 },
              { name: "Morgan Sutton", score: 7.4 },
              { name: "Natalee Vargas", score: 9.2 },
          ];
          let actual = partitionStudentsByScore(students, 81);
          let expected = [
              [
                { name: 'Leo Yeon-Joo', score: 8.9 },
                { name: 'Morgan Sutton', score: 7.4 },
                { name: 'Natalee Vargas', score: 9.2 }
              ],
              []
            ];
          expect(actual).to.eql(expected);  
        });
  
        it("it should return an array of two empty arrays", () => {
          let students = [[], []];
          let actual = partitionStudentsByScore(students, 81);
          let expected = [[], []];
          expect(actual).to.eql(expected);  
        });
});