const input  = document.getElementById("input");



function reverseString(str){
    return str.split("").reverse().join("")
}



function check(){
    const value = input.value;
    const reverse = reverseString(value)
    // alert(reverse);

    if (reverse === value ){
        alert("P a l i n d o r m");
    }else{
        alert("not Palindorm");
    }
    input.value =""
}