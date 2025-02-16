let user_info =[
    {'city':'mumbai','pincode':123},
    {'city':'pune','pincode':456}
]

let m1 = user_info.map((element)=>{
    return `CityName : ${element.city} <br> PinCode :  ${element.pincode}`;
})
// console.log(m1);
for(var i of m1){
    console.log(i)
    document.write(i +'<br> **************************************<br>')
}

let m2 = (element)=>{
    return `CityName :- ${element.city} <br> PinCode :- ${element.pincode}`;
}
var res2 = user_info.map(m2);
// console.log(res2)
for(let j of res2){
    document.write(j+'<br>----------------------------------------<br>')
}


var arr2 = [11,22,33,44,55];
for(let k of arr2){
    // console.log(k)
}

// var obj = {
//     name1 : 'ansh',
//     email : 'ansh@gmail.com'
// }
//  for(let k of obj){
    //  console.log(k)
    //  it will throw error as for(k of obj) only works for array and not for object;
//  }


let std_info = [
    {name1 : 'nirav', marks : '40'},
    {name1 : 'prabir', marks : '70'},
    {name1 : 'ansh', marks : '10'},
    {name1 : 'vijay', marks : '20'}

]

let data1=  std_info.filter((element)=>{
    return element.marks>35
})
// console.log(data1);
 for(let i of data1){
    //  console.log(i)
    for(let j in i){
        document.write(`${j}  -  ${i[j]} <br>`)
    }
 }

 var arr4 = [11,12,13,14,15,16];
 let res5 = arr4.find((element)=>{
     return element%2==0;
 })
//  console.log(res5);
//          0   1  2  3  4
var arr5 = [11,12,13,14,15];
let res6 = arr5.findIndex((index_val)=>{
    return index_val%2==0;
})
// console.log(res6);
//           0   1   2   3   4   5   6   7   8
var arr6 = ['n','i','i','i','r','r','r','a','v'];
let res7 = arr6.findIndex((index_val)=>{
    return index_val == 'r';
})
// console.log(res7);

//          0   1   2   3   4   5   6
let con = ['a','i','o','b','c','d','e'];
var res8 = con.find((consonent)=>{
    if(consonent!='a' && consonent!='e' && consonent!='i' && consonent!='o' && consonent!='u'){
    return consonent;
}
});
console.log(res8);
// normal method 
var a1 = [1,2,3];
var sum =0;
for(i=0; i <a1.length;i++){
    sum = sum+ a1[i];
}
document.write('<br>'+sum);

// reduce method 
let a2 = [10,20,3,4,5,6];
let res9 = a2.reduce((sum,element)=>{
    return sum = sum +element;
},0)
 document.write('<br>'+res9);

 let a3 = [1,2,3,4,5,6];
let res0 = a3.reduce((mul,element)=>{
    return mul = mul * element;
},1)
 document.write('<br>'+res0)