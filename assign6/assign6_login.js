const queryString = window.location.search;
 	console.log(queryString);

 	const urlParams = new URLSearchParams(queryString);
 	const Userconst = urlParams.get('username');
	
 	const PassConst = urlParams.get('password');
	
window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("mylogin");
 	form.onsubmit = checkLogin;
}

function checkLogin(){
	var username = document.forms["mylogin"]["username"];
    var password = document.forms["mylogin"]["password"];

	if(username.value != Userconst && password.value == PassConst)
	{
		alert("usernameไม่ถูกต้อง กรุณาลองใหม่");
		return false;
	}
	else if(username.value == Userconst && password.value != PassConst)
	{
		alert("passwordไม่ถูกต้อง กรุณาลองใหม่");
		return false;

	}
	else if(username.value != Userconst && password.value != PassConst)
	{
		alert("usernameหรือpasswoedไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
		return false;

	}
	else
	{
		alert("click OK เพื่อ Login");
	}
}