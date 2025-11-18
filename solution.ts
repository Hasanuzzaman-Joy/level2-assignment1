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








type GetLength = string | any[];

function getLength(value: GetLength): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}








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











interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

type ArrayOfUserObjects = User[];

function filterActiveUsers(arr: ArrayOfUserObjects): ArrayOfUserObjects {
  return arr.filter((user) => user.isActive === true);
}









interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book){
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`);
}








type ArrayValues = string | number;

function getUniqueValues(
  arr1: ArrayValues[],
  arr2: ArrayValues[]
): ArrayValues[] {
  const combinedLength = arr1.length + arr2.length;
  const combinedArray: ArrayValues[] = [];

  for (let i = 0; i < arr1.length; i++) {
    combinedArray[i] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    combinedArray[arr1.length + i] = arr2[i];
  }

  const uniqueArray: ArrayValues[] = [];
  let uniqueCount = 0;

  for (let i = 0; i < combinedLength; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueCount; j++) {
      if (combinedArray[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArray[uniqueCount] = combinedArray[i];
      uniqueCount++;
    }
  }

  const result: ArrayValues[] = [];
  for (let i = 0; i < uniqueCount; i++) {
    result[i] = uniqueArray[i];
  }

  return result;
}








interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

type ArrayOfProducts = Product[];

function calculateTotalPrice(products: ArrayOfProducts): number {
  const total = products.map((product) => {
    const discount = product.discount ?? 0;
    const priceAfterDiscount = product.price * (1 - discount / 100);
    return priceAfterDiscount * product.quantity;
  });
  return total.reduce((initial, productTotal) => initial + productTotal, 0);
}


