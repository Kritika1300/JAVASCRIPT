function task() {
var d = parseInt(document.getElementById("t1").value);
var a = Divide(d) 
var ans = a == true ? "<span style='color:green'>Yes</span>" : "<span style='color:red'>No</span>";
var helper = a == true ? "<span style='color:green'>is</span>" : "<span style='color:red'> is not</span>"
document.getElementById("s1").innerHTML = ans + ", " + d + " " + helper +" divisible by 50";
}
function Divide(x){
if (x % 50 == 0) {
return true
}
else{
return false
}
}
