let istatus = document.querySelector("h3");

let btn = document.querySelector("#add");
var check = 0;

// let removeFriend = document.querySelector("#remove");

btn.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML ="Friends"
        istatus.style.color ="green"
        btn.innerHTML ="Remove Friend"
        check = 1;
    }else{
        istatus.innerHTML="Stranger"
        istatus.style.color ="red"
        btn.innerHTML ="Add Friend"
        check = 0;
    }
    

});

// removeFriend.addEventListener("click",function(){
//     istatus.innerHTML="Stranger"
//     istatus.style.color ="red"
// })