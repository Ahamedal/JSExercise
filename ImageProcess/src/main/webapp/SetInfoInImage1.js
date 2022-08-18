/**
 * 
 */
 const obj1={img1:{OrganisationName:"ZOHO",CEO:"SridharVembu",YearOfStart:"1997"},img2:{OrganisationName:"Google",CEO:"SundarPichai",YearOfStart:"1998"},img3:{OrganisationName:"Facebook",CEO:"Mark Zuckerberg",YearOfStart:"2004"},img4:{OrganisationName:"Whatsapp",CEO:"Will Catcart",YearOfStart:"2009"},img5:{OrganisationName:"Jio",CEO:"Mukesh Ambani",YearOfStart:"2007"},img6:{OrganisationName:"Airtel",CEO:"Gopal Vittal",YearOfStart:"1995"},img7:{OrganisationName:"Wipro",CEO:"Thierry Delaporte",YearOfStart:"1945"},img8:{OrganisationName:"Infosys",CEO:"Salil Parekh",YearOfStart:"1981"},img9:{OrganisationName:"TCS",CEO:"Rajesh Gopinathan",YearOfStart:"1968"},img10:{OrganisationName:"Twitter",CEO:"Parag Agarwal",YearOfStart:"2006"}};

 document.getElementById("img1").onclick=userClicked;
 document.getElementById("img2").onclick=userClicked;
 document.getElementById("img3").onclick=userClicked;
 document.getElementById("img4").onclick=userClicked;
 document.getElementById("img5").onclick=userClicked;
 document.getElementById("img6").onclick=userClicked;
 document.getElementById("img7").onclick=userClicked;
 document.getElementById("img8").onclick=userClicked;
 document.getElementById("img9").onclick=userClicked;
 document.getElementById("img10").onclick=userClicked;

function userClicked(event){
	var str1="";
	var id=this.id;
	const object=obj1[id];
	
	for(let key in object){
		str1+=key+":";
	    str1+=object[key]+"\n";
 
    }
	var image01=document.getElementById("img01");
	if(image01.style.display=="none"){
		image01.style.display='';
		
	}
	else{
		image01.style.display="none";
	}

	var x = event.clientX;
    var y = event.clientY;
    
    image01.style.position = 'absolute';
    image01.style.left = x + 'px';
    image01.style.top=y+'px';
    image01.innerHTML=str1;
    
 }