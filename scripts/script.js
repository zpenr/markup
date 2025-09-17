function changeWidth(){
  
    var input = document.getElementsByClassName("width")[0].value;
    var table = document.getElementsByTagName("td");
    for (var i = 0; i< table.length; i+=1){
        table[i].setAttribute("width", input);
    }
    
}

function changeHeight(){
  
    var input = document.getElementsByClassName("height")[0].value;
    var table = document.getElementsByTagName("td");
    console.log(input);
    for (var i = 0; i< table.length; i+=1){
        table[i].setAttribute("height", input);
    }
    
}

var inputWidth = document.getElementsByClassName("width")[0];
var inputHeight = document.getElementsByClassName("height")[0];
inputWidth.addEventListener("input", changeWidth);
inputHeight.addEventListener("input", changeHeight);