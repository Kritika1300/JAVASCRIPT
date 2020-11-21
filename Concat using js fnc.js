function task() {
    var d = document.getElementById("t1").value;
    var a = concatString(d);
    var ele = document.getElementById("s1");
    ele.innerHTML = "Result after passing the string \"" + d + "\" as an argument to the function
    concatString() :<br> "
    document.getElementById("s2").innerHTML = a ;
    }
    function concatString(x){
    return "Something"+ " "+ x;
    }