// Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(properties) {
//   this.length = properties.length;
//   this.width = properties.width;
//   this.height = properties.height;
// }

class CuboidMaker {
  constructor(properties) {
    this.length = properties.length;
    this.width = properties.width;
    this.height = properties.height;
  }
  volume () {
    return this.length * this.width * this.height;
  }
  surfaceArea () {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMaker {
  constructor(values) {
    super(values);
  }
  volumeCube (length) {
    return Math.pow(this.length, 3);
  }
  surfaceAreaCube (length) {
    return 6 * Math.pow(this.length, 2);
  }
}

const cuboid = new CuboidMaker ({
  "length": 4,
  "width": 5,
  "height": 5,
});

const cube = new CubeMaker ({
  "length": 4,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cube.volumeCube()); //64
console.log(cube.surfaceAreaCube()); //96

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/