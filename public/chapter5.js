
// ***** 5.2 산술연산자 *****
let x = 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;

let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;

//console.log(r1); console.log(r2);
//console.log(r3); console.log(r4);
//console.log(r5); console.log(r6);
//console.log(r7); console.log(r8);

// ***** 5.5 숫자비교 *****
let n = 0;
while(true) {
    n += 0.1;
    //if(n === 0.3) break;
    if(Math.abs(n - 0.3)  < Number.EPSILON) break;
}
//console.log(`Stopped at ${n}`);

