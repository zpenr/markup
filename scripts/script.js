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

function changeColor(colorId){
    console.log("red")
    var table = document.getElementsByTagName("table")[0];
    switch(colorId) {
        case(0):{
            table.setAttribute("style","background-color: red;");
            break;
        }
        case(1):{
            table.setAttribute("style","background-color: tomato;");
            break;
        }
        case(2):{
            table.setAttribute("style","background-color: darksalmon;");
            break;
        }
        case(3):{
            table.setAttribute("style","background-color: blue;");
            break;
        }
        case(4):{
            table.setAttribute("style","background-color: royalblue;");
            break;
        }
        case(5):{
            table.setAttribute("style","background-color: cornflowerblue;");
            break;
        }
        case(6):{
            table.setAttribute("style","background-color: green;");
            break;
        }
        case(7):{
            table.setAttribute("style","background-color: teal;");
            break;
        }
        case(8):{
            table.setAttribute("style","background-color: cadetblue;");
            break;
        }
        case(9):{
            table.setAttribute("style","background-color: transparent;");
            break;
        }
    }
}

function changeTheme(){
    var button = document.getElementById("changeTheme");
    var old_css_link = document.getElementById("css-style");
    if (button.textContent == "Сменить на тёмную тему"){
        var new_css_link = document.createElement("link");

        new_css_link.setAttribute("href","styles/dark-theme-for-index.css");
        new_css_link.setAttribute("type","text/css");
        new_css_link.setAttribute("rel","stylesheet");
        new_css_link.setAttribute("id","css-style");
        
        document.getElementsByTagName("head")[0].replaceChild(new_css_link,old_css_link);
        button.textContent = "Сменить на светлую тему";
    }
    else{
        var new_css_link = document.createElement("link");

        new_css_link.setAttribute("href","styles/style.css");
        new_css_link.setAttribute("type","text/css");
        new_css_link.setAttribute("rel","stylesheet");
        new_css_link.setAttribute("id","css-style");
        
        document.getElementsByTagName("head")[0].replaceChild(new_css_link,old_css_link);
        button.textContent = "Сменить на тёмную тему";
    }
}

var inputWidth = document.getElementsByClassName("width")[0];
var inputHeight = document.getElementsByClassName("height")[0];
document.getElementById("red").addEventListener("mouseover",() => changeColor(0));
document.getElementById("tomato").addEventListener("mouseover",() => changeColor(1));
document.getElementById("darksalmon").addEventListener("mouseover",() => changeColor(2));

document.getElementById("blue").addEventListener("mouseover",() => changeColor(3));
document.getElementById("royalblue").addEventListener("mouseover",() => changeColor(4));
document.getElementById("cornflowerblue").addEventListener("mouseover",() => changeColor(5));

document.getElementById("green").addEventListener("mouseover",() => changeColor(6));
document.getElementById("teal").addEventListener("mouseover",() =>  changeColor(7));
document.getElementById("cadetblue").addEventListener("mouseover",() => changeColor(8));

inputWidth.addEventListener("input", changeWidth);
inputHeight.addEventListener("input", changeHeight);