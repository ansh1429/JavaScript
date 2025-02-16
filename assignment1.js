var users = [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      age : 20,
      avatar: "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      age : 60,
      avatar: "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      age : 30,
      avatar: "https://reqres.in/img/faces/3-image.jpg"
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      age : 23,
      avatar: "https://reqres.in/img/faces/4-image.jpg"
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      age : 73,
      avatar: "https://reqres.in/img/faces/5-image.jpg"
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      age : 80,
      avatar: "https://reqres.in/img/faces/6-image.jpg"
    }
   
]

let res = users.map((element)=>{
    return element;
})
// console.log(res)
for(let i of res){
    // console.log(i)
    for(let j in i){
        // console.log(j)
        document.write(`${j}  -  ${i[j]}<br>`)
    }
}
document.write('<br><br><br><br>');


let res2 = users.map    ((element)=>{
    return element;
})
// console.log(res2)
for(let i of res2){
    // console.log(i.email)
    document.write(` Email  :  ${i.email} <br>`)
}

document.write('<br><br><br><br>');

let res3 = users.filter((element)=>{
    return element.age < 50;
})
// console.log(res3)
for(let i of res3){
    // console.log(i)
    for(let j in i){
        document.write(`${j}  -  ${i[j]}<br>`)
    }
}


document.write('<br><br><br><br>');

var numbers = [
    {
      "arr1" : [1,2,3,4,5,6,7,8,9,10]
    },
    {
      "arr2" : [1,2,3,4,5,6,7,8,9,10]
    },
    {
      "arr3" : [1,2,3,4,5,6,7,8,9,10]
    },
    {
      "strings" : ["a","b","c","i","o","u"]
    }
]

let res4 = numbers.filter((element)=>{
    return element.arr1;
})
//  console.log(res4);
 for(let i of res4){
    for(let j in i){
        // document.write(i[j])
        for(let k of i[j]){
            // console.log(k)
            if(k%2==0){
                document.write(k**2 + '<br>')
            }
        }
    }
 }
 document.write('<br><br><br><br>');


 let res5 = numbers.filter((element)=>{
    return element.arr2;
})
//  console.log(res4);
 for(let i of res5){
    for(let j in i){
        // document.write(i[j])
        for(let k of i[j]){
            // console.log(k)
            if(k%2!=0){
                document.write(k**3 + '<br>')
            }
        }
    }
}

document.write('<br><br><br><br>');

let res6 = numbers.filter((element)=>{
    return element.arr3;
})
//  console.log(res4);
 for(let i of res6){
    for(let j in i){
        // console.log(i[j])
        let ret = i[j].reduce((mul,ele)=>{
            return mul = mul*ele;
        },1)
        document.write('The Product of arr3 is  '+ret);
    }
}

document.write('<br><br><br><br>');

let res7 = numbers.filter((element)=>{
    return element.strings;
});
for(let i of res7){
    // console.log(i)
    for(let j in i){
        for(let k of i[j]){
          if(k!='a' && k!='e' && k!='i' && k!='o' && k!='u'){
            // console.log(k);
            document.write(`${k} is not a vowel <br>`)
            }
        }
    }
}


