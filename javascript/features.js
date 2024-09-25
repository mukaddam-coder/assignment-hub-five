document.getElementById('show-donation-btn').addEventListener('click', function(){
    console.log('donation button clicked');
    showSectionById('add-money-quota');
    
})



document.getElementById('show-history-btn').addEventListener('click', function(){
 
    showSectionById('transaction-container');
    
})

 // Transaction History
 const transactionMessage = `${addMoney} Taka is Donated for Flood Relief in Feni,Bangladesh`;
 transactionHistory(transactionMessage);