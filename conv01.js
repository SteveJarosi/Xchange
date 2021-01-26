let rList ={};
const getRates= async ()=>{
    const url= 
    `https://api.exchangeratesapi.io/latest?base=USD`;
try{
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    let {rates}=data;
    //console.log(rates);

    //var rate01=rates['RON'];
    for(let currencyCode in rates){
        rList[currencyCode] = rates[currencyCode];
            //console.log(currencyCode, rates[currencyCode]);
            addRow("dataTable", currencyCode);
            
      //  console.log(currencyCode, rates[currencyCode]);
        /*let optionForOriginal = new Option(currencyCode,currencyCode);
         let optionForNew = new Option(currencyCode,currencyCode);
        originalCurrencyUnit.add(optionForOriginal);
        newCurrencyUnit.add(optionForNew);*/
        //console.log(rates);
        
    }
    
    
}catch(e){
    console.log("Oops! error: ",e);
}
}

r01.addEventListener('input', rCalc);
r02.addEventListener('input', rCalc);
r01.addEventListener('focus', rClear);
r02.addEventListener('focus', rClear);
//console.log(rates);
/*let val = 'RON';
console.log(Number(rates[val]));*/


function rCalc() {
   // if (!(rates)) {getRates()};
   rate01 = rList['RON'];
   //console.log(document.getElementById("dataTable").rows[4].cells.item(3).innerHTML);
    let r01Val = Number(r01.value);
    let r02Val = Number(r02.value);
    if (Number(r01Val) !== 0 && r01.focus) {
        //console.log(rList);
        r02.placeholder = r01Val * rate01;
        //console.log(r02Val);
    }
    if (Number(r02Val) !== 0 && r02.focus) {
        //console.log(rates);
        r01.placeholder = r02Val / rate01;
        //console.log(r01Val);
    }
    for(let i = 1; i < document.getElementById("dataTable").rows.length; i++){
        //console.log(document.getElementById("dataTable").rows.length-1);
        //console.log(`rw${i}`);
        if (Number(document.getElementById(`rw${i}`).value) !== 0) {
           // console.log("act")
            let vin = (document.getElementById("dataTable").rows[i].cells[2].innerHTML) / 
            Number(document.getElementById(`rw${i}`).value);
            //console.log(vin);
            //document.getElementById(`rw${i+1}`).placeholder = "viner";
               for (let k = 1; k < document.getElementById("dataTable").rows.length; k++)
               {
               // console.log("act2")
                document.getElementById(`rw${k}`).placeholder = 
                ((document.getElementById("dataTable").rows[k].cells[2].innerHTML) / vin).toFixed(2);
                }
                return "ok"
            //document.getElementById("dataTable").rows[i].cells[2].innerHTML ;
        //rw15.value = 25;
            }
        }


        
    }


function rClear() {
    for (i=1; i<3; i++) {
        document.getElementById(`r0${i}`).value = "";
    }
    //r01.value = ""; r02.value = "";
    r01.placeholder = ""; r02.placeholder = "";
    for(i = 1; i < document.getElementById("dataTable").rows.length; i++){
        //console.log(document.getElementById("dataTable").rows.length-1);
        //console.log(`rw${i}`);
        document.getElementById(`rw${i}`).value = ""; //////////////////
        document.getElementById(`rw${i}`).placeholder = "";
        //rw15.value = 25;
        }
}

function addRow(tableID, currencyCode) {

    let table = document.getElementById(tableID);
    let rowCount = table.rows.length;
    //console.log(rowCount);
    //var rowCount = table.rows.length;
    let row = table.insertRow(rowCount);

    /*let cell1 = row.insertCell(0);
    let element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name="chkbox[]";
    cell1.appendChild(element1);*/

    let cell1 = row.insertCell(0);
    cell1.innerHTML = rowCount;

    let cell2 = row.insertCell(1);
    /*let element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "txtbox[]";*/
    cell2.innerHTML = currencyCode;
    //cell3.appendChild(element2);

    let cell3 = row.insertCell(2);
    /*let element3 = document.createElement("input");
    element3.type = "text";
    element3.name = "txtbox[]";*/
    cell3.innerHTML = rList[currencyCode];
    //cell4.appendChild(element3);

    let cell4 = row.insertCell(3);
    let element4 = document.createElement("input");
    cell4.appendChild(element4);
    element4.type = "number";
    //element4.name = "txtbox[]";
    element4.min = 0;
    //element4.id = "rw" + rowCount;
    element4.setAttribute("id",`rw${rowCount}`);
    //console.log(element4.id);
    //console.log(typeof `rw${rowCount}`);
    //(`rw${rowCount}`).value = "hello";
    element4.addEventListener('input', rCalc);
    element4.addEventListener('focus', rClear);
    


}
/*
const createOptions = async ()=>{
    const url= 
    `https://api.exchangeratesapi.io`;
    const url= 
    `https://api.exchangeratesapi.io/latest?base=USD`;
try{
    const response = await fetch(url, );
    const data = await response.json();
    console.log(data);
    let {rates}=data;
    for(let currencyCode in rates){
        console.log(currencyCode);
        let optionForOriginal = new Option(currencyCode,currencyCode);
         let optionForNew = new Option(currencyCode,currencyCode);
        originalCurrencyUnit.add(optionForOriginal);
        newCurrencyUnit.add(optionForNew);
    }
}catch(e){
    console.log("Oops! error: ",e);
}
}
*/
/*rates = (async () => {
    console.log(await getRates())
  })()*/
//rates = getRates();
getRates();


let rate01 = rList['RON'];
