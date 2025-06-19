console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarqa investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

const e = require("express");

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") {
//     callback("insert a number", null);
//   } else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]); // Calls callback AFTER 5 seconds
//     }, 5000);
//   }
// }

async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
}

console.log("passed here 0"); //  First log

maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else console.log("javob:", data); //Appears after 5 seconds
});

console.log("passed here 1"); //  Logged IMMEDIATELY after "passed here 0"

console.log("passed here 0");
maslahatBering(65)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
console.log("passed here 1");

// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }

// run();

function a_task(letter, word) {
  let count = 0; // Start counting from zero

  for (let char of word) {
    // Go through each letter in the word
    if (char === letter) {
      // If it matches the letter we want
      count++; // Increase the count by 1
    }
  }

  return count; // Return the total count
}

console.log(a_task("ㅖ", "우즈베키스탄"));
console.log(a_task("$", "so'm"));
console.log(a_task("a", "waytogofullstackdeveloper"));

console.log("================taskB==================");
function countDigits(str) {
  let count = 0;
  for (let char of str) {
    if (!isNaN(char) && char !== " ") {
      count++;
    }
  }
  return count;
}

console.log(countDigits("jokjjoij97897fds43mnlkjkoj43"));

console.log("================taskC==================");

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  getTime() {
    const now = new Date();
    return `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
  }

  qoldiq() {
    console.log(
      `Hozir ${this.getTime()}da ${this.non}ta non, ${
        this.lagmon
      }ta lag'mon va ${this.cola}ta cola mavjud`
    );
  }

  sotish(mahsulot, miqdor) {
    if (this[mahsulot] >= miqdor) {
      this[mahsulot] -= miqdor;
      console.log(`Hozir ${this.getTime()}da ${miqdor}ta ${mahsulot} sotildi`);
    } else {
      console.log(`Kechirasiz, ${mahsulot} yetarli emas`);
    }
  }

  qabul(mahsulot, miqdor) {
    this[mahsulot] += miqdor;
    console.log(
      `Hozir ${this.getTime()}da ${miqdor}ta ${mahsulot} qabul qilindi`
    );
  }
}

const shop = new Shop(100, 3, 9999999);

shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();

console.log("================TaskD===========");

function taskD(a, b) {
  let arrA = a.split("");
  let arrB = b.split("");
  let Eshmat = arrA.sort();
  let Toshmat = arrB.sort();
  if (Eshmat.join("") === Toshmat.join("")) {
    return true;
  } else {
    return false;
  }
}
console.log(taskD("MIT", "Massachusetts Institute of Technology"));
console.log(taskD("MIT29", "MIT28"));
console.log(taskD("MIT28", "82ITM"));
console.log(taskD("MIT28", "822ITM"));

// Asked AI if my function clean, correct and compact? It showed the following:

// console.log("================TaskD (AI corrected version)===========");

// function taskD(a, b) {
//   return a.split("").sort().join("") === b.split("").sort().join("");
// }
// console.log(taskD("MIT", "Massachusetts Institute of Technology"));
// console.log(taskD("MIT29", "MIT28"));
// console.log(taskD("MIT28", "82ITM"));
// console.log(taskD("MIT28", "822ITM"));

console.log("==========TaskE============");

function taskE(a) {
  a = a.split("").reverse().join("");
  console.log(a);
}
taskE("MIT");
taskE("taskE");

console.log("==========TaskF============");

function findDoublers(a) {
  a = a.toLowerCase().split("").sort();
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] === a[i + 1]) {
      return true;
    }
  }
  return false;
}
console.log(findDoublers("MIT"));
console.log(findDoublers("findDoublers"));
