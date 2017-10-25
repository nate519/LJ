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















