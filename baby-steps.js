var [useless, useless_1, ...args] = [...process.argv];
var sum = 0;
console.log(
  args.reduce((sum, num) => {
    return sum + parseInt(num);
  }, 0)
);
