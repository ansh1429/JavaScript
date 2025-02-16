// // prompt();
// class p1{
//     pr1(){
//        let box =  document.createElement('div');
//        box.id = 'prompt';
//        box.innerHTML = 'This Page Says <br> <br>';
//        let inp = document.createElement('input');
//        inp.id = 'inp1';
//        box.append(inp);
//        let btn  = document.createElement('button');
//        btn.innerHTML = 'ok';
//        btn.id = 'btn1';
//        btn.setAttribute('onclick','fun2(this)');
//        let btn1  = document.createElement('button');
//        btn1.innerHTML = 'cancel';
//        btn1.id = 'btn2';
//        btn1.setAttribute('onclick','fun1(this)');
//        box.append(btn);
//        box.append(btn1);
//        document.getElementById('main').append(box);
//     }
// }

// let alert = new p1();
// alert.pr1();
// function fun1(x){
//     x.parentNode.remove();
//     document.getElementById('main').style.background = 'white';
// }
// function fun2(a){
//     document.getElementById('para1').innerHTML = document.getElementById('inp1').value;
//     a.parentNode.remove();
//     document.getElementById('main').style.background = 'white';
// }

function fun1(){
    let div = document.getElementById('demo1');
    // console.log(div)
    if(div.className == 'prompt'){
        div.className = 'pr1'
    }
    else{
        div.className = 'prompt'
    }
}

// default agruement

function emp_info(name,email,contact=123456,profile='Developer'){
    document.write(`emp_name : ${name} <br> emp_email : ${email} <br> emp_cont : ${contact} <br> emp_profile : ${profile} <br>`)
}
emp_info('ansh','ansh@gmail.com',7890,'web developer');
emp_info('ansh','ansh@gmail.com');

// destructuring with array 

//indexing 0   1   2 3 4 5
var arr = [1,'abc',2,3,4,5,6,7,8];
document.write(`<br> ${arr[3]}`);
var[a,b,c,d,e,...f] = arr;
document.write(`<br> ${f}`)


// destructuring with object 

var emp ={
    name : 'ansh',
    email : 'ansh@gmail.com',
    contact : 234567,
    org : 'trycatch'
}

var{name,email,org,contact} = emp;

// keys are becoming the variables in the var... no spelling mistakes allowed 

document.write(`<br> name :  ${name} <br> email :  ${email} <br> organisation : ${org} <br> contact : ${contact}`);


// try catch method 
// fun4();

try{
    fun4();
    // document.write('<br>'+234567);
}

catch(error){
    // document.write(`<br> ${error.message} <br>`);
    document.write(`<br><br> create the function and then call  it <br>`);
}

document.write('<br> ansh');

try{
    var x= 11;
    if(x==12){
        throw (`<br> new error <br>`)
    }
    document.write('<br> demo code <br>');
    document.write(x+'<br>');
    fun4();
}
catch(error){
    document.write(error);
}
finally{
    document.write('<br> imp_output <br>')
}

