class Rectangle {
  constructor(height, width, color) {
    this.height = height;
    this.width = width;
    this.color = color;
  }
  area() {
    const area = this.width * this.height;
    return `the area is:${area}`;
  }
  paint() {
    return `Painting this rectangle with ${this.color} color`;
  }
}
const rect = new Rectangle(6, 4, "red");
const Area = rect.area();
const color = rect.paint();
console.log(rect.width);
console.log(rect.height);
console.log(Area);
console.log(color);

const rect2 = new Rectangle(10, 20, "black");
const area2 = rect2.area();
const color2 = rect2.paint();
console.log(area2);
console.log(color2);

let rect3 = {
  width: 20,
  height: 10,
};
function area(rect) {
  return rect.width * rect.height;
}
console.log(area(rect3));


///DATE CLASSS
const now = new Date();
console.log(now.toLocaleDateString());

//Map class
const map = new Map();
map.set("firstname", "akhilKumar");
map.set("age", "23");
console.log(map.get("firstname"));

