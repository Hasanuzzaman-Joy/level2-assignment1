type Primitive = string | number | boolean;

function formatValue(value: Primitive): Primitive {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}


// 2nd Task

type GetLength = string | any[];

function getLength(value: GetLength): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}





//  3rd Task

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}




// 4th Task

type ObjectsType = {
  title: string;
  rating: number;
};

type ArrayOfObjects = Array<ObjectsType>;

function filterByRating(arr: ArrayOfObjects): ArrayOfObjects {
  const newArr: ArrayOfObjects = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].rating >= 4 && arr[i].rating <= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}




// 5th Task