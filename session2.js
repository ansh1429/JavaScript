function fun1(){
    document.write('<br>'+3456);
}
fun1();

let fun1a = ()=>{
    document.write('<br> data')
}
fun1a();

function add(x,y){
    var ans = x+y;
    document.write('<br>'+ans);
}
add(12,3);
let add1 = (x,y)=>{
    let ans2 = x+y;
    document.write('<br>'+ans2);
}
add1(12,34)

function fun2(){
    document.getElementById('para1').style.color='red';
}

let fun2a = ()=>{
    document.getElementById('para2').style.color='green';
}
fun3();
fun3();
function fun3(){
    document.write('<br> nirav');
}
fun3();

// fun3a();
// fun3a(); won't work
let fun3a = ()=> document.write('<br> prabir');
fun3a();
fun3a();

let fun4=()=>{
   let a= Number(document.getElementById('inp1').value) ;
    // document.getElementById('para3').innerHTML = a;
    for(i=1;i<=a;i++){
        if(i%2==0){
            document.getElementById('para3').innerHTML+= `<br>${i}`
        }
    }

}
let x1 = document.getElementById('div1');
let fun4a= ()=>{
   x1.style.background='green';
}
x1.addEventListener('mouseover',fun4a);
x1.addEventListener('mouseout',()=>{
    x1.style.background='pink';
});

// foreach (harms the original array and return cannot be used)


var arr1 = [1,2,3,4];
arr1.forEach((element)=>{
    // console.log(element*2)
});

// let read_data= (element)=>{
//     console.log(arr2)
// }
arr1.forEach(read_data);

function read_data(element){
    // console.log(element)
}

// map (used for solving operations and creates duplicate array so that the original array is not harmed.... return can be used)



let arr2 = [10,20,23,45,38,30,40];
console.log(arr2)
let map1 = (element)=>{
    return element*2;
    // return element%2==0; won't work(ans in the form of true or false)
}
let res= arr2.map(map1);
console.log(res);


// filter (used for solving expression and creates duplicate array so that the original array is not harmed.... return can be used)


let arr3 = [10,20,23,45,38,30,40];
// console.log(arr3);
let filter1 = (element)=>{
    return element%2==0;
}
let res2 = arr3.filter(filter1);
// console.log(res2);


