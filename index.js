//  10

const count = (obj) => Object.keys(obj).length;

// 9

function filter(arr, fn) {
  return arr.slice().filter((elem) => fn(elem));
}

//  8

function pluck(objects, fieldName) {
  return objects.map((elem) => elem[fieldName]);
}

//  7

var ctx = { x: 7 };

function testThis(a) {
  console.log("x=" + this.x + ", a=" + a);
}

const bind = (fn, context) => {
  return fn.bind(context);
};

const bondFn = bind(testThis, ctx);
bondFn(500);

// 6

const test = (a, b, c, s) => {
  return "a=" + a + ",b=" + b + ",c=" + c;
};

const partialAny = (fn, ...args) => {
  return function (d) {
    const undefElem = args.map((elem) => {
      return elem === undefined ? d : elem;
    });
    return fn(...undefElem);
  };
};

const test1 = partialAny(test, 1, undefined, 3);
console.log(test1(5));

// 5

function add(a, b) {
  return a + b;
}
function mult(a, b, c, d) {
  return a * b * c * d;
}

const partial = (fn, ...n) => {
  return function (...args) {
    const arr = n.concat(args);
    return fn(...arr);
  };
};

const add5 = partial(add, 5);
const mult1 = partial(mult, 2, 3);

console.log(add5(3));
console.log(mult1(4, 5));

4

function square(x) {
  return x * x;
}
function add(a, b) {
  return a + b;
}

const fmap = (a, gen) => {
  return function (...args) {
    const y = gen(...args);
    return a(y);
  };
};

const squareAdd1 = fmap(square, add);
console.log(squareAdd1(5, 7));

3

function square(x) {
  return x * x;
}

function map(fn, array) {
  return array.map((elem) => fn(elem));
}

console.log(map(square, [1, 2, 3, 4]));

2

const newArr = [];

function take(fn, count) {
  newArr.push(fn());
  return count > 1 ? take(fn, count - 1) : newArr;
}

// const take = (fn, count) => {
//   const newArr = [];
//   let result = fn();
//   for (let i = 0; i < count; i++) {
//     result = fn();
//     newArr.push(result);
//   }
//   return newArr;
// };

const addNum = (a) => {
  return function () {
    return (a += 1);
  };
};
const add1 = addNum(3);

console.log(take(add1, 5));

// 1

function sequence(start = 0, step = 1) {
  return function () {
    return (start += step);
  };
}

const generator1 = sequence(5, 2);

console.log(generator1());
console.log(generator1());
console.log(generator1());
