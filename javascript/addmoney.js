document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-add-money');
     
    if(addMoney > 0){
        const balance = getTextFieldValueById('noakhali-balance');
        const newBalance = balance + addMoney;
        document.getElementById('noakhali-balance').innerText = newBalance;
        document.getElementById('input-add-money').value = '';
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