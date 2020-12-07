<!DOCTYPE html>
<html>
<head>
<title>Javascript DOM</title>
<style>
img{
height: 100px;
width: 200px;
}
h2{
font-size: xx-large;
}
body{
background-color: black;
color:white;
font-family: 'Lucida Sans';

1802088 Page 3
font-size:130%;
word-spacing: 2px;
}
table,tr,td,th {
padding: 5px;
border : 3px solid white;
}
button{
height: 35px;
width: 200px;
color : black;
border:none;
border-radius: 5px;
font-size: medium;
font-weight:550;
}
</style>
</head>
<body>
<center><h1 id="heading"></h1></center><br>
<h2>HTML &nbsp; <img src = "img1.png" /></h2>
<p> Hypertext Markup Language is the standard markup language for documents designed to be
displayed in a web browser.</p>
<h2 class = "class1">BOOTSTRAP &nbsp; <img src = "img2.png" /></h2>

1802088 Page 4
<p class ="class1"> Bootstrap is a free and open-source CSS framework directed at responsive,
mobile-first front-end web development. </p>
<h2>JAVASCRIPT &nbsp; <img src = "img3.png"></h2>
<p> JavaScript is a lightweight, interpreted programming language. It is designed for creating
network-centric applications. </p><br>
<center><button>Create Table</button></center><br>
<center><div id ="t1"></div></center>
</body>
<script>
document.getElementById("heading").innerHTML="WEB DEVELOPMENT
TECHNOLOGIES"
var tagNames = document.getElementsByTagName("h2")
for(var i = 0; i < tagNames.length ; i++){
tagNames[i].setAttribute("style","color:red; border:2px solid yellow; padding:10px")}
var classNames = document.getElementsByClassName("class1")
for(var i = 0; i < classNames.length ; i++){
classNames[i].setAttribute("style","text-align:right")}
var x = document.querySelectorAll("button");
x[0].onclick = function(){
var table = document.createElement("table");
var tr1 = document.createElement("tr");
var tr2 = document.createElement("tr");
var tr3 = document.createElement("tr");
var th1 = document.createElement("th");
var th2 = document.createElement("th");

1802088 Page 5
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var td3 = document.createElement("td");
var td4 = document.createElement("td");
th1.innerHTML = "S.No."
th2.innerHTML = "Technology"
td1.innerHTML = "1."
td2.innerHTML = "HTML"
td3.innerHTML = "2."
td4.innerHTML = "CSS"
tr1.appendChild(th1)
tr1.appendChild(th2)
tr2.appendChild(td1)
tr2.appendChild(td2)
tr3.appendChild(td3)
tr3.appendChild(td4)
table.appendChild(tr1)
table.appendChild(tr2)
table.appendChild(tr3)
table.setAttribute("style","border-collapse : collapse;")
document.getElementById("t1").appendChild(table)}
</script>
</html>