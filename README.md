
## 1. What are some differences between interfaces and types in TypeScript?

Answer: TypeScript এ interface এবং type এর মধ্যে পার্থক্য -----
interface মূলত অবজেক্ট বা ক্লাসের কাঠামো নির্ধারণের জন্য। type দিয়ে যেকোনো ধরনের টাইপ তৈরি করা যায় (অবজেক্ট, ইউনিয়ন, প্রিমিটিভ ইত্যাদি)। interface একাধিকবার মার্জ করা যায়, type-কে একবার ডিফাইন করলে মার্জ করা যায় না। সাধারণভাবে, ক্লাসের সাথে কাজ করলে interface বেশি ব্যবহার হয়।


-----------------------------------------------------------------------------------


## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

Answer: keyof ব্যবহার করা হয় কোনো অবজেক্ট টাইপের সমস্ত প্রপার্টির নাম পাওয়ার জন্য। উদাহরণ:

interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;              // "name" | "age"


-----------------------------------------------------------------------------------


## 3. Explain the difference between any, unknown, and never types in TypeScript.

Answer: any, unknown এবং never টাইপের মধ্যে পার্থক্য -----
=> any = যেকোনো মান রাখতে পারো, টাইপ চেকিং হয় না।
=> unknown = যেকোনো মান, কিন্তু ব্যবহার করার আগে টাইপ চেক করা লাগবে।
=> never = এমন ফাংশন বা মান যেটা কখনো রিটার্ন করবে না (যেমন error throw করা ফাংশন)।


-----------------------------------------------------------------------------------


## 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum?

Answer: TypeScript-এ enum এর ব্যবহার -----
enum ব্যবহার করা হয় সংখ্যা বা স্ট্রিং-এর একটি নির্দিষ্ট সেটের মানের জন্য। কোডে readable নাম দিয়ে মান assign করা যায়। উদাহরণ:

// Numeric Enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// String Enum
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}


-----------------------------------------------------------------------------------


## 5. Provide an example of using union and intersection types in TypeScript.

Answer: Union (|) => ভিন্ন ধরনের মানের মধ্যে যেকোনো একটি হতে পারে। Intersection (&) => একাধিক টাইপ একসাথে মিলিয়ে একটি টাইপ তৈরি করে। উদাহরণ:

// Union
type ID = string | number;
let userId: ID = 123;
userId = "abc";

// Intersection
type Person = {
  name: string;
}
type Employee = {
  employeeId: number;
}
type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Joy",
  employeeId: 101
};