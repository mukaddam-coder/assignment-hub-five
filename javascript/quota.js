document.getElementById('btn-add-money-three').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-add-money-three');
    const mainBalance = getTextFieldValueById('main-balance');
    const quotaBalance = getTextFieldValueById('quota-balance');
    if(addMoney > 0 && addMoney <= mainBalance){
        const newBalance = mainBalance - addMoney;
        document.getElementById('main-balance').innerText = newBalance;
        const totalDonations = quotaBalance + addMoney;
        document.getElementById('quota-balance').innerText = totalDonations;
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