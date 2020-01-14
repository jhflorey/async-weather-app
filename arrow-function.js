function hello(name) {
  console.log(`Hello ${name}`);
}
function sum(a, b) {
  return a + b;
}

hello("Tuan")

// arrow function
// DOi voi truong hop ham co 1 tham so, co the bo dau ()
const hello2 = name => { // () => {} <---> function(){}
  console.log(`Hello ${name}`);
}

hello2("Nam")

const sum2 = (a, b) => a + b // => : return