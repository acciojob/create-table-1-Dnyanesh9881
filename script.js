let row=document.querySelector("tr");
let table=document.getElementById("sampleTable");
function insert_Row() {
    //Write your code here
	let tr=document.createElement("tr");
	let cell=document.createElement("td");
	let cell2=document.createElement("td");
	cell.innerText="New Cell1";
	cell2.innerText="New Cell2";
	tr.appendChild(cell);
	tr.appendChild(cell2);
	table.insertBefore(tr, table.children[0]);
}
