// Write The Function Here
function printInConsole(...args: any[]): string {
  args.forEach((arg) => {
    console.log(`The Value Is ${arg} And Type Is ${typeof arg}`);
  });
  return "Done";
}

// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));