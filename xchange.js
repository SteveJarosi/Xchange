let rList ={};

const getRates= async ()=>{
    const url= 
    `https://api.exchangeratesapi.io/latest?base=USD`;
try{
    const response = await fetch(url);
    const data = await response.json();
    let {rates}=data;
    for(let currencyCode in rates){
        rList[currencyCode] = rates[currencyCode];
            addRow("dataTable", currencyCode);
    }
}catch(e){
    console.log("Oops! error: ",e);
    }
}

function rCalc() {
    for(let i = 1; i < document.getElementById("dataTable").rows.length; i++){
        if (Number(document.getElementById(`rw${i}`).value) !== 0) {
            let vin = (document.getElementById("dataTable").rows[i].cells[0].innerHTML) / 
            Number(document.getElementById(`rw${i}`).value);
               for (let k = 1; k < document.getElementById("dataTable").rows.length; k++)
               {
                document.getElementById(`rw${k}`).placeholder = 
                ((document.getElementById("dataTable").rows[k].cells[0].innerHTML) / vin).toFixed(2);
                }
            }
        }    
    }


function rClear() {
    for(i = 1; i < document.getElementById("dataTable").rows.length; i++){
        document.getElementById(`rw${i}`).value = "";
        document.getElementById(`rw${i}`).placeholder = "";
        }
    }

function addRow(tableID, currencyCode) {

    let table = document.getElementById(tableID);
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    let cell2 = row.insertCell(0);
    cell2.innerHTML = rList[currencyCode];
    let cell3 = row.insertCell(1);
    cell3.innerHTML = currencyCode;
    let cell4 = row.insertCell(2);
    let element4 = document.createElement("input");
    cell4.appendChild(element4);
    element4.type = "number";
    element4.min = 0;
    element4.setAttribute("id",`rw${rowCount}`);
    element4.addEventListener('input', rCalc);
    element4.addEventListener('focus', rClear);
    }

getRates();