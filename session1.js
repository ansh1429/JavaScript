var a = 12345;
// document.write('<br>'+a);
var a = 'hello';
document.write('<br>'+a);
if(true){
    var a = 'ansh';
    document.write('<br>'+a)
}

let b = 23456;
b = 'hello let'
document.write('<br>'+b)
// let b +='sdfghjk';
// document.write('<br>'+b)
if(true){
    let b = 'ansh14';
    document.write('<br>'+b)
}

const y = 'nirav';
document.write('<br>'+y);
// y += 'neerav '
// const y = 'neerav';
// document.write('<br>'+y)
// if(true){
//     y = 'heyy';
//     document.write('<br>'+y);
// }

var name1  = 'ansh';
var age  = '18';
var msg = 'hello, how are you?';

document.write('<br>'+name1+' '+age+' '+msg);

let sname = 'nirav';
let sage = '18';
let smsg = 'hey how are you';
document.write(`<br> ${sname} <br> ${sage} <br> ${smsg}`);   


function fun1(){
    let inp = document.getElementById('inp1').value;
    document.getElementById('p1').innerHTML = `<i class='col'>my name is ${inp} </i>`;
}

var obj = {
    'name1' :'ansh_P',
    'age' : 18,
    'email' : 'ansh@gamil.com'
}
document.write('<br>'+obj.name1+'<br>'+obj.email+'<br>'+obj.age)

let n1 = 'tom';
let e1 = 'tom@gamil.com';
let c1 = '456789';

let emp = {
    'my_name2' : n1,
    'my_email' : e1,
    'my_contact' : c1
}
document.write(`<br> ${emp.my_name2} <br> ${emp.my_email} <br> ${emp.my_contact}`);


for(i in emp){
    document.write(`<br> ${i} ---- ${emp[i]}`)
}