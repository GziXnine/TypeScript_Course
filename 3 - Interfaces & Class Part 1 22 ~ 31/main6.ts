class Show {
  constructor(private _title: string) { }
  public get title() {
    return this._title;
  }
  public set title(title: string) {
    this._title = title;
  }
}

let tester = new Show("Elzero");

console.log(tester.title); // Property 'title' does not exist on type 'Show'
tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester.title); // Property 'title' does not exist on type 'Show'
