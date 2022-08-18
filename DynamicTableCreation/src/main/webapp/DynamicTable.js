/**
 * 
 */

 var k=0;
 function generateTable() {
	var k1=k;
	var table = document.createElement("table");
    var dFrag=document.createDocumentFragment();
	for (var i = 0; i < 4; i++) {
		var row = document.createElement("tr");
		for (var j = 0; j < 2; j++) {
			var col = document.createElement("td");
			col.setAttribute("id", "bdetails" + k);
			k++;
			row.appendChild(col);
		}
		dFrag.appendChild(row);
	}
    table.appendChild(dFrag);
	var showTable = document.getElementById("tables");
	showTable.appendChild(table);
	const browser={BrowserName:document.getElementById("bName").value,BrowserVersion:document.getElementById("bVersion").value,ScreenWidth:document.getElementById("sWidth").value,ScreenHeight:document.getElementById("sHeight").value};
	
	for(let key in browser){
		document.getElementById("bdetails"+k1).innerHTML=key;
		k1++;
		document.getElementById("bdetails"+k1).innerHTML=browser[key];
		k1++;
	}
	
	
}