alert("Welcome to the quiz!!!\n You have only 1 chance so choose your options wisely and remember that you only have to write a, b , c , or d \n Wish you best of luck!!!!");
var marks = 0

var q1 = prompt('1.In which tag you can link a javascript file?\n a) <script> b) <link> c) <a> d) <p> ')
if (q1 == 'a') {
    alert("Correct Answer");
    marks++
}
else {
    alert("Wrong Answer");
}

var q2 = prompt('2.Which type of programming language is Javascript?\n a) Uppercase b) Lowercase c) Case sensitive d) Capitalize')
if (q2 == 'c') {
    alert("Correct Answer");
    marks++
}
else {
    alert("Wrong Answer");
}

var q3 = prompt('3.By which keyword you can declare A variable?\n a) Var b) var c) VAR d) variable ')
if (q3 == 'b') {
    alert("Correct Answer");
    marks++
}
else {
    alert("Wrong Answer");
}

var q4 = prompt('4.In which attribute you can give a path of a Javascript file?\n a) src b) href c) Src d) alt ')
if (q4 == 'a') {
    alert("Correct Answer");
    marks++
}
else {
    alert("Wrong Answer");
}

var q5 = prompt('5.What is the message enclosed in a double quotation mark is called?\n a) bolean b) message c) number d) string ')
if (q5 == 'd') {
    alert("Correct Answer");
    marks++
}
else {
    alert("Wrong Answer");
}

var q6 = prompt('6.Variable name must be start with ______ ?\n a) lowercase b) * c) uppercase d) $ ')
if (q6 == 'a') {
    alert("Correct Answer");
    marks++
}
else {
    alert("Wrong Answer");
}

var q7 = prompt('7.By which operator you can concatenate text strings in Javascript?\n a) / b) * c) + d) - ')
if (q7 == 'c') {
    alert("Correct Answer");
    marks++
}
else {
    alert("Wrong Answer");
}

var q8 = prompt('8.How can you write if statement in Javascript?\n a) if(num==5) b) if{num==5} c) If(num==5) d) if(num=5) ')
if (q8 == 'a') {
    alert("Correct Answer");
    marks++
}
else {
    alert("Wrong Answer");
}

var q9 = prompt('9.Where the script tag should be placed?\n a) head tag b) anchor tag c) bottom of body tag d) top of the body tag')
if (q9 == 'c') {
    alert("Correct Answer");
    marks++
}
else {
    alert("Wrong Answer");
}
var q10 = prompt('10.How can you write alert having a message accept cookies?\n a) Alert("accept cookies") b) alert{"accept cookies"} c) alert(accept cookies); d) alert("accept cookies");')
if (q10 == 'd') {
    alert("Correct Answer");
    marks++
}
else {
    alert("Wrong Answer");
}
alert("Your marks is "+ marks +"/10");
if (marks < 7) {
    alert("Sorry\n You failed")
}
else {
    alert("Congratulations\n You passed")
};
