// 1. **Create** an array of 3 student names and **add** one more using `push()`.
let student = ["Rizwan ", "Salam", "KHaliq"
]
student.push("Ali")
console.log(student)



// 2. **Remove** the last item from a fruits array using `pop()`.
let fruits = ['Apple', 'Banana', 'Oringe', 'Stobwrey', ]
fruits.splice(3,1)
console.log(fruits)



// 3. **Add** "Monday" to the beginning of a days array using `unshift()`.
let days =['thusday','wednesday','Thruday','friday', 'Satruday', 'Sunday']
days.unshift("Monday")
console.log(days)



// 4. **Remove** the first item from a colors array using `shift()`.
let colors = ['red','black','yellow', 'orging','white','darkula']
colors.shift()
console.log(colors)




// 5. Use `splice()` to **insert** "Math" and "Science" at index 2 of a subjects array.
let subjects = ['English', 'Urdu', 'History'];
subjects.splice(2, 0, 'Math', 'Science');
console.log(subjects);

// 6. Use `splice()` to **remove** 2 elements starting from index 1 of a cities array.
let cities = ['Lahore', 'Karachi', 'Islamabad', 'Quetta'];
cities.splice(1, 2);
console.log(cities);

// 7. Use `slice()` to **get** the first 3 items from a countries array.
let countries = ['Pakistan', 'India', 'China', 'Japan', 'Nepal'];
let firstThree = countries.slice(0, 3);
console.log(firstThree);

// 8. **Convert** the string `"apple,banana,mango"` into an array using `split()`.
let str = "apple,banana,mango";
let arr = str.split(",");
console.log(arr);

// 9. **Join** an array of characters `['J','S']` into a single string using `join()`.
let chars = ['J', 'S'];
let joined = chars.join('');
console.log(joined);

// 10. **Combine** two arrays `['pen','pencil']` and `['eraser','sharpener']` using `concat()`.
let arr1 = ['pen', 'pencil'];
let arr2 = ['eraser', 'sharpener'];
let combined = arr1.concat(arr2);
console.log(combined);

// 11. **Sort** an array of numbers `[10, 5, 2, 8]` using `sort()` (as strings).
let nums = [10, 5, 2, 8];
nums.sort();
console.log(nums);

// 12. **Sort** an array of names alphabetically using `sort()`.
let names = ['Ali', 'Zara', 'Bilal', 'Sara'];
names.sort();
console.log(names);

// 13. **Reverse** the order of an array of numbers using `reverse()`.
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);

// 14. Use `indexOf()` to **find** the index of `"Blue"` in a colors array.
let colorArr = ['Red', 'Green', 'Blue', 'Yellow'];
let blueIndex = colorArr.indexOf('Blue');
console.log(blueIndex);

// 15. **Add** three new items to an empty array using `push()`.
let emptyArr = [];
emptyArr.push('One', 'Two', 'Three');
console.log(emptyArr);

// 16. **Remove** the middle item from an array of 5 numbers using `splice()`.
let fiveNums = [10, 20, 30, 40, 50];
fiveNums.splice(2, 1);
console.log(fiveNums);

// 17. **Create** a string `"HTML CSS JavaScript"` and **convert** it to an array using `split()`.
let techStr = "HTML CSS JavaScript";
let techArr = techStr.split(' ');
console.log(techArr);

// 18. **Reverse** an array `['a', 'b', 'c']`, then **join** it with `-` in between.
let abcArr = ['a', 'b', 'c'];
let reversedJoined = abcArr.reverse().join('-');
console.log(reversedJoined);

// 19. **Check** if `"Karachi"` exists in an array using `indexOf()` and show its index.
let cityArr = ['Lahore', 'Karachi', 'Islamabad'];
let kIndex = cityArr.indexOf('Karachi');
console.log(kIndex);

// 20. **Concatenate** two arrays of even numbers.
let even1 = [2, 4, 6];
let even2 = [8, 10, 12];
let allEven = even1.concat(even2);
console.log(allEven);