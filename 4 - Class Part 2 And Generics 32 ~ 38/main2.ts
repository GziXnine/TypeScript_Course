// Write Function Code Here
function showTypes<T1 = string, T2 = string, T3 = string>(title: T1 = "Nothing" as any, id: T2 = "Nothing" as any, status: T3 = "Nothing" as any): string {
  return `${title} - ${id} - ${status}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true