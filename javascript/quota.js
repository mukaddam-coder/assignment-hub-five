document.getElementById('btn-add-money-three').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-add-money-three');
     
    if(addMoney > 0){
        const balance = getTextFieldValueById('quota-balance');
        const newBalance = balance + addMoney;
        document.getElementById('quota-balance').innerText = newBalance;
        document.getElementById('input-add-money-three').value = '';
        // Modal
        document.getElementById('donation-modal').classList.remove('hidden');
        document.getElementById('donation-modal').classList.add('flex');
        
    }
    else{
        alert('Wrong Input! Try again')
    }

     document.getElementById('close-modal').addEventListener('click', function(){
        document.getElementById('donation-modal').classList.add('hidden');
        document.getElementById('donation-modal').classList.remove('flex');
     })

})