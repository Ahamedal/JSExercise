/**
 * 
 */
 function checkCookies(){
	var cookie=document.cookie;
	var str="";
	if(cookie!=null&&cookie!=undefined&&cookie.includes("visited")){
		if(cookie.length>0){
		var seenCount=parseInt(cookie.split("=")[1]);
		seenCount++;
		document.cookie="visited="+seenCount+"";
		str="you have visit "+seenCount+" time in the browser";
	}
	}
	else{
		document.cookie="visited=1";
		str="You have visit first time in the browser";
	}
	document.getElementById("cook").innerHTML=str;
}
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}