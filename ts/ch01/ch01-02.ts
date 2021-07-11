const add = (x: number, y: number): number => x + y;
const multiply = (x: number, y: number): number => x * y;

const flockA = 4;
const flockB = 2;
const flockC = 0;

const result =
    multiply(flockA, add(flockB, flockB));
// 16

console.log(result);

export {}
