let input1 = document.querySelector('.passbtn1');
let eye1 = document.querySelector('.eyeBtn1');
eye1.addEventListener('click', showpass1);

function showpass1() {
    if (input1.type == "password") {
        input1.type = "text";
    } else {
        input1.type = "password";
    }
}

let input2 = document.querySelector('.passbtn2');
let eye2 = document.querySelector('.eyeBtn2');
eye2.addEventListener('click', showpass2);

function showpass2() {
    if (input2.type == "password") {
        input2.type = "text";
    } else {
        input2.type = "password";
    }
}