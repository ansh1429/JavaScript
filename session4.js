function fun1(x,y,z){
    var ans = x+y+z;
    document.write(ans);
}
fun1(12,4,3);
// rest operator
let add = (...x)=>{
    // console.log(x);
   let res =  x.reduce((sum,element)=>{
    return sum = sum +element
   },0)
   document.write('<br>'+res);
}
let a1 = add(1,2,3,4,5,6,10,20);

let std_info = (name,age,...contact)=>{
    document.write(`<br> ${name} <br> ${age} <br> ${contact} <br>`);
}
std_info('ansh',18,2345678,3456789,45678);


let vowel = (...a)=>{
    // console.log(a)
    for(i of a){
        let c1 =0 //counter is placed between two for loop bcz if it is placed outside then it will add all the vowels of three words 
        // console.log(i)
        for(j of i){
            // console.log(j)
            if(j=='a'||j=='e'||j=='i'||j=='o'||j=='u'){
                c1++;
            }
        }
        document.write(`<br> vowels in the word ${i} is ${c1}`);
    }
}
vowel('ansh', 'vijay', 'flynn');


// push method will always push the data at the end of the array
let demo = ['a','b'];
demo.push(123456);
console.log(demo);


 let vow =(...b)=>{
    
    for(i of b){
        let arr1 =[]
        // console.log(i)
        arr1.push(i);
        // console.log(arr1)
    }
 }

vow('ansh', 'vijay', 'flynn');


// spread operator-
 let ar1 = [1,2,3,4];
 let ar2 = [5,6,7,8,9];
 let ar3 = [...ar1,'ansh','vijay',...ar2];
//  console.log(ar3);
 let ar4 = ['demo',...ar3,'demo'];
//  console.log(ar4);

 let num1 = 12;
 let num2 = 12.9;
 let num3 = 0;
 let num4 = -50;
 let num5 = 0;
 console.log(Math.sign(num4));
 console.log(Math.trunc(10.9));
 console.log(Math.trunc(-10.9));
 console.log(Math.floor(-10.2));
 console.log(Math.cbrt(343));
 console.log(Math.sqrt(64));



//  number method 
 console.log(Number.isInteger(10));
 console.log(Number.isInteger(10.4567));
 console.log(Number.isInteger(-10));
 console.log(Number.isInteger('str'));
 console.log(Number.isSafeInteger(134));
 console.log(Number.isSafeInteger(1234567812345678));
 console.log(Number.isFinite(2/0));
 console.log(Number.isFinite(2/1));
 console.log(Number.isFinite(Infinity));
 console.log(Number.isFinite(NaN));
 console.log(Number.isFinite('hello'));
 console.log(Number.isFinite(12.3456));

 var a0 = {
    name : 'ansh',
    email : 'ansh@gmail.com',
    contact : '234567890'
 }
 document.getElementById('para1').innerHTML = Object.entries(a0);
 document.getElementById('para2').innerHTML = Object.values(a0);
 document.getElementById('para3').innerHTML = Object.keys(a0)


