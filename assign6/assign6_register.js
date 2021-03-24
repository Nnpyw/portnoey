window.onload = pageLoad;
var Input_regis = [];

function pageLoad(){
	var form = document.getElementById("myform");
 	form.onsubmit = validateForm;
}

function validateForm() {
    var password = document.forms["myform"]["password"];
    var Retypepass = document.forms["myform"]["retrypepass"];
    if(password.value == Retypepass.value)
    {
        alert("คลิ๊ก OK เพื่อเข้าสู่หน้า Login");
    }
    else if(password.value != Retypepass.value)
    {
        alert("passwordไม่ถูกต้อง");
        return false;
    }
}
