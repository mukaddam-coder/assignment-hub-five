document.getElementById('btn-add-money-two').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-add-money-two');
     
    if(addMoney > 0){
        const balance = getTextFieldValueById('feni-balance');
        const newBalance = balance + addMoney;
        document.getElementById('feni-balance').innerText = newBalance;
        document.getElementById('input-add-money-two').value = '';
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