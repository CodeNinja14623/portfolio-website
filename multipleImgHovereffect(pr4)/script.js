// var anim = document.querySelector("#elem1 img");
var elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
    val.addEventListener("mouseenter", function(){
       val.childNodes[2].style.opacity = 1;
    });
    val.addEventListener("mouseleave", function(){
        val.childNodes[2].style.opacity = 0;
     });

     val.addEventListener("mousemove", function(dets){
        val.childNodes[2].style.left = dets.x + "px";
        val.childNodes[2].style.top = dets.y + "px";
     });
     
});

// var elem = document.querySelectorAll(".elem");

// elem.forEach(function(val){

//    console.log(val.childNodes[2])

//    val.addEventListener("mouseenter", function(){
//              val.childNodes[2].style.backgroundColor = "red";
//            });

//            val.addEventListener("mouseleave", function(){
//             val.style.backgroundColor = "transparent";
//           });
// })


// for one element only 

// elem1.addEventListener("mousemove", function(dets){
//     anim.style.left =dets.x + "px";
//     anim.style.top =dets.y + "px";
// })

// elem1.addEventListener("mouseenter", function(dets){
//     anim.style.opacity = 1;
// })

// elem1.addEventListener("mouseleave", function(dets){
//     anim.style.opacity = 0;
// })

// for all

