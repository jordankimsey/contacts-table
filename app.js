let sortDirection = false;
//name phone number email
let personData = [
    {name: "Dylan", number: 7708621160, email: "JordanKimsey@hotmail.com"},
    {name: "Chris", number: 7708621160, email: "Kimsey@hotmail.com"},
    {name: "Israel", number: 7708621160, email: "123abc@hotmail.com"},
    {name: "Dolly", number: 7708621160, email: "testy@hotmail.com"},
    {name: "Mike", number: 7708621160, email: "Jyoyoyoy@hotmail.com"},
    {name: "Adam", number: 7708621160, email: "Jyoyoyoy@hotmail.com"},
]

//ensure data is inputted onto webpage after page loaded
window.onload = () => {
loadTableData(personData);
}

//sets data from data set
function loadTableData (personData) {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for (let person of personData) {
        dataHtml += `<tr><td>${person.name}</td><td>${person.number}</td><td>${person.email}</td></tr>`;
    }
    tableBody.innerHTML = dataHtml;
}


function sortColumn(columnName) {
    //checks data type we want to compare to ensure logic for comapre function
    const dataType = typeof personData[0][columnName];
    sortDirection = !sortDirection;

    switch (dataType) {
        case 'string':
            sortNameColumn(sortDirection, columnName);
            break;
    }
    loadTableData(personData)
}

function sortNameColumn(sortDirection, columnName) {
    //sorts data
    personData = personData.sort((p1, p2) => {
        //toggles sorted data
        return sortDirection
          ? p1[columnName]
              .toLocaleLowerCase()
              .localeCompare(p2[columnName].toLocaleLowerCase())
          : p2[columnName]
              .toLocaleLowerCase()
              .localeCompare(p1[columnName].toLocaleLowerCase()); 
    });
}

//handle input 
function handleInput() {
    //get values of input
    let name = document.getElementById('name').value
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    //push data values into persondata array of objects
    personData.push({ name: name, number: number, email: email });
    loadTableData(personData);

    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
    document.getElementById('email').value = ''
   
}

