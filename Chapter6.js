
// ***** 6.1 반환 값
/*
function getGreetings() {
    return [console.log("Hello world"),
            console.log("Hola Mundo!"),
            console.log("Hallo wereld!"),
            console.log("헬로 월드!")];
}
*/
function getGreeting() {
    return console.log("Hello, World!");
}

//getGreetings();

// ***** 6.2 호출과 참조
//getGreeting();
//getGreeting;

//const f = getGreeting;
//f();

//const o = {};
//o.f = getGreeting;
//o.f();

//const arr = [1, 2, 3];
//arr[1] = getGreeting;
//arr[1]();

// ***** 6.3 함수와 매개변수
/*function f(o) {
    o.message = "f에서 수정함";
    o = {
        message: "새로운 객체!"
    };
    console.log(`f 내부 : o.message="${o.message}" (할당 후)`);
}

let o = {
    message: '초기값'
};

console.log(`f를 호출하기 전 : o.message = "${o.message}"`);
f(o);
console.log(`f를 호출한 다음 : o.message = "${o.message}"`);
*/

// ***** 6.3.2 매개변수 해체
/*
function getSentence({ subject, verb, object}) {
    return console.log(`${subject} ${verb} ${object}`);
}

const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript",
};

getSentence(o);

function getSentence([subject, verb, object]) {
    return console.log(`${subject} ${verb} ${object}`);
}
const arr = ["I", "love", "JavaScript" ];
getSentence(arr);
*/

/*
function addPrefix(prefix, ...words){
    const prefixedWords =[];
    for(let i=0; i < words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return console.log(prefixedWords);
}

addPrefix("con", "verse", "vex");
*/

// ***** 6.5 this 키워드
/*const o = {
    name: 'Wallace',
    speak() { return console.log(`My name is ${this.name}!`);},
}*/

//o.speak();

//const speak = o.speak;
//speak === o.speak;
//speak();



/*
const o = {
    name: 'Julie',
    greetBackwards : function() {
        const self = this;
        function getReverseName(){
            let nameBackwards = '';
            for(let i= self.name.length-1; i >= 0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return console.log(`${getReverseName()} si eman ym, olleH`);
    },
};

o.greetBackwards();
*/


// ***** 6.6 함수 표현식과 익명 함수
/*
const g = function f(stop) {
    if(stop) console.log('f stopped');
    f(true);
};
g(false);
*/


// ***** 6.7 화살표 표기법
/*
const f1 = function () { return "hello!";}
const f1 = () => "hello!";      //모두 동등한 표현.

const f2 = function(name) { return `Hello, ${name}!`;}
const f2 = name => `Hello, ${name}!`;  // 모두 동등한 표현.

const f3 = function(a,b) { return a+b;}
const f3 = (a,b) => a+b;  //모두 동등한 표현.
*/

// ***** 6.8 call과 apply, bind
const bruce = {name : "Bruce" };
const madeline = { name: "Madeline"};

function greet() {
    return console.log(`Hello, I'm ${this.name}!`);
}

//greet();
//greet.call(bruce);
//greet.call(madeline);
console.log(bruce);
console.log(madeline);

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
update.call(madeline, 1942, 'actress');
console.log(bruce);
console.log(madeline);

update.apply(bruce, [1955, "actor"]);
update.apply(madeline, [1918,"writer"]);
console.log(bruce);
console.log(madeline);

const arr = [2, 3, -5, 15, 7];
console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce); // apply(bruce, newBruce)와 같습니다.
console.log(bruce);
console.log(Math.min(...arr));
console.log(Math.max(...arr));

const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
console.log(bruce);
updateBruce.call(madeline,1274, "king");
console.log(bruce);

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
console.log(bruce);
