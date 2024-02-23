//1
const activity = "extra";

const myObject = {
  id: "1",
  name: "mckay",
  age: "22",
  birthate: "aug 4th",
  grade: "12",
  deleteMe: "rip",
  sports: {
    main: "basketball",
    secondary: "tennis",
    [activity]: "golf",
  },
  message: function (id, grade) {
    return `Person ${id}, has been through grade ${grade}`;
  },
};
console.log(myObject);
console.log(myObject.message(myObject.id, myObject.grade));
console.log(myObject.sports[activity]);

delete myObject["deleteMe"];

console.log(myObject);

//2

const user = {
  firstName: "mckay",
  lastName: "knell",
  city: "provo",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};

user.semesters["semesterOne"] = "complete";
delete user.semesters["semesterFour"];
user["favoriteLanguage"] = "sqlalchemy";

console.log(user);

//3
ogArray = [1, 2, 3, 4, 5];

for (let i = ogArray.length; i--; ) {
  if (i % 2 === 0) {
    const shiftArray = ogArray.shift();
    console.log(shiftArray);
  } else if (i % 2 != 0) {
    const popArray = ogArray.pop();
    console.log(popArray);
  }
}
