let fun1 = ()=>{
    let input1 = document.getElementById('inp1').value;
    let sel = document.getElementById('select1').value;

    let ans;
    if(sel=='a'){
        ans = `$ ${input1 * 0.013}`;
    }
    else if(sel=='b'){
        ans = `&#163; ${input1 * 0.011}`;d
    }
    else if(sel=='c'){
        ans= `&euro; ${input1 * 0.013}`;
    }
    else if(sel=='d'){
        ans = `&#165; ${input1 * 1.76}`
    }
    else if(sel=='e'){
        ans = `&#20803; ${input1 * 0.087}`;
    }
    document.getElementById('para1').innerHTML = ans;
}