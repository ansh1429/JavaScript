let store = [
    {
        id : 001,
        title : "Rich dad Poor dad",
        description : "Best known as the author of Rich Dad Poor Dad-the #1 personal finance book of all time-Robert Kiyosaki has challenged and changed the way tens of millions of people around the world think about money.",
        publish_date: "25th Anniversary edition (6 August 2022)",
        price : 350,
        author : "Robert Kiyosake",
        status : "available"
    },
    {
        id : 002,
        title : "seven personas of eve",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nostrum delectus repudiandae corrupti a aut eos maxime, ab reprehenderit velit blanditiis id magnam et nemo cupiditate, iure nihil voluptatum perspiciatis?",
        publish_date:  "The Write Place (13 September 2019)",
        price : 400,
        author : "Anju Kapoor",
        status : "available"
    },
    {
        id : 003,
        title : "do it today",
        description : "lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptatum!",
        publish_date:  "15 September 2019",
        price : 500,
        author : "john",
        status : "unavailable"
    },
    {
        id : 004,
        title : "life's amazing secret",
        description : "  sit amet consectetur adipisicing elit. Quod velit ex natus odio nemo.",
        publish_date:  "19 october 2019",
        price : 210,
        author : "tom",
        status : "unavailable"
    },
    {
        id : 005,
        title : "the midnight library",
        description : "maxime, ab reprehenderit velit blanditiis id magnam et nemo cupiditate, iure nihil voluptatum perspiciatis?",
        publish_date:  "15 november 2011",
        price : 290,
        author : "alex",
        status : "available"
    }
]

 class bookstrore{
    constructor(data){
        // console.log(data);
        this.val = data;
    }
    book_name(){
        let res1 =this.val.map((element)=>{
            return element.title;
        }) 
        // console.log(res1);
    }
    book_author (x){
        
        let res2 =  this.val.filter((element)=>{
            return element.author == x;
        })
        // console.log(res2)
    }
    book_ava_price(){
        let res3 = this.val.filter((element)=>{
        return element.status == "available" && element.price < 300
         })
        // console.log(res3);
    }
    sum_all(){
        let res4 = this.val.reduce((sum,element)=>{
            return sum = sum+ element.price;
            // console.log(element.price)
        },0)
        console.log(res4);
    }
    
 }
 let bk1 = new bookstrore(store);
 let bn1 = new bookstrore(store);
 bn1.book_name();
 let ba1 = new bookstrore(store);

 let aut = "Anju Kapoor";
 ba1.book_author(aut);

 let bap =new bookstrore(store);
 bap.book_ava_price();
 let sum = new bookstrore(store);
 sum.sum_all();

 