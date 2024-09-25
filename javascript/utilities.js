// Common Shared Function
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById (id){
     const textValue = document.getElementById(id).innerText;
     const textNumber = parseFloat(textValue);
     return textNumber;
}

function showSectionById (id){
    document.getElementById('add-money-quota').classList.add('hidden');
    document.getElementById('add-money-feni').classList.add('hidden');
    document.getElementById('add-money-noakhali').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    // Show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}

function transactionHistory (message){
    const transactionContainer = document.getElementById('transaction-container');
    const p = document.createElement('p');
    p.innerText = message;
    transactionContainer.appendChild(p);

}