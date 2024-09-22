// Create Enums + Function Here
enum Game {
  Easy = 100,
  Medium = Easy - 20,
  Hard = Medium - Easy / 2,
  Insane = Data(10),
}

function Data(num: number): number {
  return Game.Hard - num;
}

// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
