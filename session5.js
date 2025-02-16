class students{
    wc(){
        console.log('Hello');
    }
    std_info(name,age){
        document.write(`<br> my name is ${name} and my age is ${age}`);
    }
}
let std1 = new students();
let std2 = new students();
let std3 = new students();
std1.wc();
std1.std_info('ansh',18);
std2.std_info('nirav',22);
std3.std_info('vijay',20);

let arr1 = [1,2,3,4];
let arr2 =['ansh','vijay'];

class demo{
    constructor(data){
        // console.log(data);
        this.val = data;
    }
    read_num(){
        console.log("data is from read_num",this.val);
    }
    user_input(){
        let ent = prompt('enter subject');
        document.write(`<br> the subject is ${ent}`);
    }
}

// let obj1 = new demo(arr1);
// let obj2 = new demo(arr2);
// obj2.read_num();

// let sub = new demo();
// sub.user_input();


let std_info = [
{
    name : 'ansh',
    email : 'ansh@gmail.com',
    subject : 'python',
    marks : 70
},
{
    name : 'vijay',
    email : 'vijay@gmail.com',
    subject : 'js',
    marks : 90
},
{
    name : 'nirav',
    email : 'nirav@gmail.com',
    subject : 'html',
    marks : 50
},
{
    name : 'flynn',
    email : 'flynn@gmail.com',
    subject : 'css',
    marks : 24
},
{
    name : 'preshit',
    email : 'preshit@gmail.com',
    subject : 'bootstrap',
    marks : 32
}
]

class trycatch{
    constructor(data1){
        console.log(data1);
        this.value = data1;
    }
    read_name(){
        let res1 = this.value.map((element)=>{
            return element.name;
        })
        console.log(res1);
    }
    read_marks(){
        let res2 = this.value.filter((element)=>{
            return element.marks > 35;
        })
        // console.log(res2)
        for(var i of res2){
            // console.log(i);
            for(var j in i){
                // console.log(i[j])
                document.write(`<br> ${j} - ${i[j]}`);
            }
        }
    }
}

let std_data = new trycatch(std_info);
let std_name= new trycatch(std_info);
std_name.read_name();
let std_marks = new trycatch(std_info);
std_marks.read_marks();