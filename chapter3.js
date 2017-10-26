const multiline = `line1
line2`;
const multiline2 = `line1
    line2
    line3`;
//console.log(multiline);
//console.log("\n");
//console.log(multiline2);
//console.log("\n");

const multiline3 = "line1\n" + "line2\n" + "line3";
//console.log(multiline3);
let currentTemp = 19.5;
//console.log("\n");
const multiline4 = 'Current temperature:\n' +
    `\t${currentTemp}\u00b0C\n` +
    "Don't worry...the heat is on!";
//console.log(multiline4);


// ***** 3.8.3 숫자와 문자열 *****
const result1 = 3 + '30'; // 3이 문자열로 바뀝니다. 결과는 문자열 '330'입니다.
const result2 = 3 * '30'; // '30'이 숫자롤 바뀝니다. 결과는 숫자 90입니다.
//console.log(result1, result2);

// ***** 3.9 불리언 *****
let heating = true;
let cooling = false;
//console.log(heating);
//console.log(cooling);

// ***** 3.10 심볼 *****
const RED = Symbol("The color of a sunset!");
const ORANGE= Symbol("The color of a sunset!");
//console.log(RED === ORANGE); // false: 심볼은 모두 서로 다릅니다.

// ***** 3.11 null과 undefined *****
let currentTemp2;    // 암시적으로 undefined 입니다.
const targetTemp = null;  //대상 온도는 null, 즉 "아직 모르는"값입니다.
//console.log(currentTemp2);
//console.log(targetTemp);
currentTemp2 = 19.5;  // currentTemp2에는 이제 값이 있습니다.
currentTemp2 = undefined; // currentTemp2는 초기화되지 않은 듯합니다. 권장하지 않습니다.
//console.log(currentTemp2);

// ***** 3.12 객체 *****
const obj = {};
obj.color = "yellow";
obj["not an identifier"] = 3;
obj["not an identifier"]; // 3
obj["color"]; // "yellow"

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE]; // 8

//console.log(obj);

const sam1 = {
    name: 'Sam',
    age : 4,
};

const sam2 = { name : 'Sam', age : 4 }; // 한 줄로 선언했습니다.

const sam3 = {
    name : 'Sam',
    classification: {                  // 프로퍼티 값도 객체가 될 수 있습니다.
        kingdom : 'Anamalia',
        phylum : 'Chordata',
        class : 'Mamalia',
        order : 'Carnivaoria',
        family : 'Felidae',
        subfamily : 'Felinae',
        genus : 'Felis',
        species : 'catus',
    },
};

//console.log(sam1);
//console.log(sam2);
//console.log(sam3);

sam3.classification.family;  // "Felidae"
sam3["classification"].family;  // "Felidae"
sam3.classification["family"];  // "Felidae"
sam3["classification"]["family"];  // "Felidae"

sam3.speak = function() { return "Meow!"; };

sam3.speak();    // "Meow!"

delete sam3.classification;  // classification 트리 전체가 삭제됐습니다.
delete sam3.speak;  // speak 함수가 삭제됐습니다.

// ***** 3.13 Number, String, Boolean 객체 *****
const s = "hello";
s.toUpperCase();  // "HELLO"

//console.log(s);
//console.log(s.toUpperCase());

const k = "hello";
k.rating = 3; // 에러가 없습니다. 성공일까요 ?
k.rating;     // undefined
//console.log(k);
//console.log(k.rating);

// ***** 3.14 배열 *****
const a1 = [1,2,3,4]; // 숫자로 구성된 배열
const a2 = [1, 'two', 3, null];   //여러 가지 타입으로 구성된 배열
const a3 = [                       // 여러 줄로 정의한 배열
    "What the hammer? What the chain?",
    "In what furnace was thy brain?",
    "What the anvil ? what dread grasp",
    "Dare its deadly terrors clasp?",
];

const a4 = [                        // 객체가 들어있는 배열
    { name : "Ruby", hardness: 9 },
    { name : "Diamond", hardness: 10 },
    { name : "Topaz", hardness: 8 },
];

const a5 = [                        //배열이 들어있는 배열
    [1, 3, 5],
    [2, 4, 6],
];

//console.log(a1);
//console.log(a2);
//console.log(a3);
//console.log(a4);
//console.log(a5);

const arr= ['a', 'b', 'c'];
arr.length;   // 3

//console.log(arr.length);
// 첫번째 요소를 가져옵니다.
//console.log(arr[0]);   // 'a'
//console.log(arr[arr.length-1]);  // 'c'
const arr2 = [1, 2, 'c', 4, 5];
arr2[2] = 3;    // arr은 이제 [1, 2, 3, 4, 5,]입니다.
//console.log(arr2);

// ***** 3.15 객체와 배열 마지막의 쉼표 *****
const arr3 = [
    "One",
    "Two",
    "Three",
];

const o = {
    one : 1,
    two: 2,
    three : 3,
};

//console.log(arr3);
//console.log(o);

//  ***** 3.16 날짜  *****
const now = new Date();
//console.log(now);     // 현재 시간?

const halloween = new Date(2016, 9 , 32); // 월은 0에서 시작합니다. 즉
                                            // 9는 10월입니다.
//console.log(halloween);
const halloweenParty = new Date(2016, 10, 30, 19, 0);  // 19:00 = 7:00 pm
//console.log(halloweenParty);
//console.log(halloweenParty.getFullYear());
//console.log(halloweenParty.getMonth());
//console.log(halloweenParty.getDate());
//console.log(halloweenParty.getDay());  // 3 (수요일입니다. 0은 일요일입니다)
//console.log(halloweenParty.getHours());
//console.log(halloweenParty.getMinutes());
//console.log(halloweenParty.getSeconds());
//console.log(halloweenParty.getMilliseconds());

// ***** 3.17 정규표현식 *****
// 극히 간단한 이메일 정규표현식
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;
//console.log(email);
//미국 전화번호 정규표현식
const phone = /(:?\+1)?(:\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;
//console.log(phone);

//  ***** 3.18 맵과 셋 *****

//  ***** 3.19 데이터 타입 변환 *****
// ***** 3.19.1 숫자로 바꾸기  *****
const numStr = "33.3";
const num = Number(numStr); // 이 행은 숫자 값을 만듭니다.
                             // Number 객체의 인스턴스가 아닙니다.
//console.log(numStr + ' hi');
//console.log(num);

const a = parseInt("16 volts", 10); // "volts"는 무시됩니다. 10진수 16입니다.

const b = parseInt("3a", 16);        // 16진수 3a를 10진수로 바꿉니다. 결과는 58입니다.

const c = parseFloat("15.5 kph");  // "kph"는 무시됩니다. parseFloat는 항상
                                    // 기수가 10이라고 가정합니다.
//console.log(a);
//console.log(b);
//console.log(c);

const d = new Date(); // 현재 날짜
const ts = d.valueOf();  // UTC 1970년 1월 1일 자정으로부터
                         // 몇 밀리초가 지났는지 나타내는 숫자
//console.log(ts);
const e = true;
const n = e? 1 : 0;
//console.log(n);


// ***** 3.19.2 문자열로 변환 *****
const n1 = 33.5;
n1;   // 33.5 - 숫자
const l = n1.toString();
l;   // "33.5" - 문자열
//console.log(n1);
//console.log(l);

const arr0= [1, true, "hello"];
arr0.toString();     // "1, true, hello"
//console.log(arr0.toString());

// ***** 3.19.3 불리언으로 변환 *****
const x = 0; // 거짓 같은 값
const b1 = !!x;  //false
const b2 = Boolean(x); // false
const b3 = Boolean(!x); // true
//console.log(b1);
//console.log(b2);
//console.log(b3);


// ***** 참조형과 원시형 *****
let p = 1;
let q = p;
p = 2;
//console.log(q);

function change(p) {
    p =5;
}

p = 3;
change(p);
//console.log(change(p));
//console.log(p);

let v = { k: 1};
let v1 = v;
v.k = 2;
//console.log(v1);

let v2 = { k : 1};
let v3 = v2;
//console.log(v2 === v3);
v2 = { k: 2}
//console.log(v2 === v3);
//console.log(v3);
//console.log(v2);

let v5 = { a: 1};
//console.log(v5 === {a:1});

function change_o(o1) {
        o1.a = 999;
}

let o1 = { a : 1};
change_o(o1);
console.log(o1);  // { a: 999}