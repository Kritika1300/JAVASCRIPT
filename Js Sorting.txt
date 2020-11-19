<!DOCTYPE html>
<html lang="en">
<head>
<title>Sorting using Javascript</title>
<style>
body {
background-color:black;
color:#E6E6FA;
font-size:130%;
font-family:'Lucida Sans';
word-spacing: 2px;
padding: 35px;
margin : 25px; }
#b1{
height: 35px;
width: 100px;
color :black;
border:none;
border-radius: 5px;

1802088 Page 3
font-size: medium;
font-weight:550; }
h1{
color:#DA70D6; }
#array{
color:#ffff66; }
</style>
</head>
<body>
<h1>Sorting in descending order</h1>
<p>
Given array : [ 40,23,50,89,10 ]<br><br>
Click on the button to sort the array<br><br>
<button id="b1" onclick="sortArray(arr)">SORT</button> </p>
<p id ="array"></p>
<script type = "text/Javascript">
var arr = [40,23,50,89,10];
document.getElementById("array").innerHTML = arr;
function sortArray(){
for(var i = 0; i < arr.length ; i++){
for(var j = 0; j < arr.length-1 ; j++){
if(arr[j] < arr[j+1]){
var temp = arr[j];

1802088 Page 4
arr[j] = arr[j+1];
arr[j+1] = temp; }}}
document.getElementById("array").innerHTML = arr;}
</script>
</body>
</html>