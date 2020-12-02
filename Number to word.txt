<html>
<head>
<style>
body {
    background-color:black;
    color:white;
    font-size:130%;
    font-family:'Lucida Sans';
    word-spacing: 2px;
    padding: 35px;
    margin : 25px;

}
td{
    font-size:150%;
    font-family:'Lucida Sans';
    word-spacing: 2px;
    font-weight: 600;
    padding-left:10px;
    color:yellow;
}
#res{
    height: 35px;
    width: 100px;
    margin-left: 10px;
    color : black;
    border:none;
    border-radius: 5px;
    font-size: medium;
    font-weight:550;
    margin-bottom: 20px;
}
#num,#word{
    height: 35px;
    width: 260px;
    font-size: medium;
    font-weight:545;
    margin-bottom: 15px;
}
h1{
    margin-left: 10px;
    color:tomato;
}
</style>
</head>
<script type="text/javascript">
var nume=document.getElementById('num').value;
function isNumeric(){
var elem=document.numtoword.num.value;
if(elem!="") {
var numericExpression = /^[0-9]+$/;
if(elem<0||elem>999)
{ 
document.numtoword.word.value="Please Enter Number from 0 to 999";    
return false;
}
else if(elem.match(numericExpression)){
return true;
}else{ 
document.numtoword.word.value="Please Enter Only Number";
return false;
} } }
function numinwrd()
{
var numbr=document.getElementById('num').value;
var str=new String(numbr)
var splt=str.split("");
var rev=splt.reverse();
var once=['Zero', ' One', 'Two', 'Three', 'Four','Five', 'Six', 'Seven', 'Eight', 'Nine'];
var twos=['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen',
' Nineteen'];
var tens=[ '', 'Ten ', ' Twenty ', ' Thirty ', ' Forty ', ' Fifty ', ' Sixty ' , ' Seventy ', ' Eighty ', ' Ninety ' ];
numlen=rev.length;
var word=new Array();
var j=0;
for(i=0;i<numlen;i++) {
switch(i) {
case 0:
if((rev[i]==0) || (rev[i+1]==1)) {word[j]='';}
else {word[j]=once[rev[i]];}
word[j]=word[j] ;
break;
case 1:
abovetens();
break;
case 2:
if(rev[i]==0) {word[j]='';}
else if((rev[i-1]==0) || (rev[i-2]==0) )
{word[j]=once[rev[i]]+" Hundred ";}
else
{word[j]=once[rev[i]]+" Hundred and";}
break;
case 3:
if(rev[i]==0 || rev[i+1]==1) {word[j]='';}
else{word[j]=once[rev[i]];}
default:break;}j++;
}
function abovetens()
{if(rev[i]==0){word[j]='';} else if(rev[i]==1){word[j]=twos[rev[i-1]];}else{word[j]=tens[rev[i]];}
}
word.reverse();
var finalw='';
for(i=0;i<numlen;i++)
{finalw= finalw+word[i];
}
document.numtoword.word.value=finalw;
}
</script>
<body>
<h1>Number to word</h1>
<form name="numtoword">
<table>
<tr> <td>Number :</td>
<td><input type="text" name="num" id="num" maxlength=9 onKeyup="isNumeric()"></td>
<td><input type="button" id="res" name="sr1" value="Click Here" onClick="numinwrd()"></td>
</tr><tr>
<td>Number in Words :</td>
<td><input type="text" name="word" id="word" size=30 ></td></tr>
</table>
</form>
</body>
</html>