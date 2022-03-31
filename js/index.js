function f1() {
    document.getElementById('window2').style.display="block";
    document.getElementById('window1').style.display="none";
    document.getElementById('window3').style.display="none";
}

var x = document.getElementById('bbb');
x.addEventListener("click",function(e){
e.preventDefault();
})
function f2() {
    document.getElementById('window3').style.display="block";
    document.getElementById('window1').style.display="none";
    document.getElementById('window2').style.display="none";
}

var y = document.getElementById('cc');
y.addEventListener("click",function(e){
e.preventDefault();
})
function f3() {
    document.getElementById('window1').style.display="block";
    document.getElementById('window3').style.display="none";
    document.getElementById('window2').style.display="none";
}

var z = document.getElementById('bb');
z.addEventListener("click",function(e){
e.preventDefault();
})


// var aa = document.getElementById("aa");
// var bb = document.getElementById("bb");
// var cc = document.getElementById("cc");

// aa.addEventListener('click',function(){
//     aa.classList.add("window2");
//     aa.classList.remove("window1");
//     aa.classList.remove("window3");
    
// })


// document.getElementById("aa").onclick = function() {myFunction()};
// function myFunction() {
//     document.getElementById("div2").classList.toggle("show");
//   }