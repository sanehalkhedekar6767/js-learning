

var a = 5;
var b = a++;  //it says first assign it snd then increment it
console.log(a);
console.log(b);

var n1 = 5;
var res = n1++ + ++n1 + n1++;
console.log(res);
console.log(n1);

var a = 2;
var b = ++a + ++a + a++ - --a;
console.log(b);

var a = 4;
var b = a-- + ++a + ++a + a++;
console.log(b);