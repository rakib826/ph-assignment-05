
function closeModal() {
  document.getElementById('donationModal').classList.add('hidden');
}

function getInputValue(id){
  return parseFloat(document.getElementById(id).value);
};
function getTextValue(id){
  return parseFloat(document.getElementById(id).textContent);
};
function showError(id){
  document.getElementById(id).classList.remove("hidden");
};


// Noakhali Donation Button
const noakhaliDonateButton = document.getElementById("noakhali-donate-now");
noakhaliDonateButton.addEventListener("click", function(){
  const availableBalance = getTextValue("available-balance");
  const noakhaliCollection = getTextValue("noakhali-collection");
  const noakhaliInput = getInputValue("noakhali-input");
  if(noakhaliInput <1 || isNaN(noakhaliInput)){
    alert("Please enter a valid amount");
    return;
  }
  if(noakhaliInput > availableBalance){
    alert("You don't have enough balance to donate this amount");
    return;
  }
  document.getElementById("available-balance").textContent = availableBalance - noakhaliInput;
  const totalNoakhaliCollection = noakhaliCollection + noakhaliInput;
  document.getElementById("noakhali-collection").textContent = totalNoakhaliCollection;

  // modal
  document.getElementById('donationModal').classList.remove('hidden');

  // History
  const historyItem = document.createElement('div');
  historyItem.className = "bg-slate-100 shadow-md p-4 mb-2 rounded-lg";
  historyItem.innerHTML = `
    <p class="text-green-500 ">${noakhaliInput} Taka is donated for flood in Noakhali</p>  
    <p class="text-gray-500">Date: ${new Date().toString()}</p>
  `;

  const historyList = document.getElementById('history-list');
  historyList.prepend(historyItem);
});
// Error Message live
document.getElementById('noakhali-input').addEventListener("input",function(){
  const noakhaliInput = getInputValue("noakhali-input");
  if(noakhaliInput <1 || isNaN(noakhaliInput)){
    showError("invalid-amount-noakhali");
  }
  else{
    document.getElementById("invalid-amount").classList.add("hidden");
  }
});

// feni Donation Button
const feniDonateButton = document.getElementById("feni-donate-now");
feniDonateButton.addEventListener("click", function(){
  const availableBalance = getTextValue("available-balance");
  const feniCollection = getTextValue("feni-collection");
  const feniInput = getInputValue("feni-input");
  if(feniInput <1 || isNaN(feniInput)){
    alert("Please enter a valid amount");
    return;
  }
  if(feniInput > availableBalance){
    alert("You don't have enough balance to donate this amount");
    return;
  }
  document.getElementById("available-balance").textContent = availableBalance - feniInput;
  const totalFeniCollection = feniCollection + feniInput;
  document.getElementById("feni-collection").textContent = totalFeniCollection;

  // modal
  document.getElementById('donationModal').classList.remove('hidden');

  // History
  const historyItem = document.createElement('div');
  historyItem.className = "bg-slate-100 shadow-md p-4 mb-2 rounded-lg";
  historyItem.innerHTML = `
    <p class="text-green-500 ">${feniInput} Taka is donated for flood in Feni</p>  
    <p class="text-gray-500">Date: ${new Date().toString()}</p>
  `;

  const historyList = document.getElementById('history-list');
  historyList.prepend(historyItem);
});
// Error Message live
document.getElementById('feni-input').addEventListener("input",function(){
  const feniInput = getInputValue("feni-input");
  if(feniInput <1 || isNaN(feniInput)){
    showError("invalid-amount-feni");
  }
  else{
    document.getElementById("invalid-amount").classList.add("hidden");
  }
});

// quota Donation Button
const quotaDonateButton = document.getElementById("quota-donate-now");
quotaDonateButton.addEventListener("click", function(){
  const availableBalance = getTextValue("available-balance");
  const quotaCollection = getTextValue("quota-collection");
  const quotaInput = getInputValue("quota-input");
  if(quotaInput <1 || isNaN(quotaInput)){
    alert("Please enter a valid amount");
    return;
  }
  if(quotaInput > availableBalance){
    alert("You don't have enough balance to donate this amount");
    return;
  }
  document.getElementById("available-balance").textContent = availableBalance - quotaInput;
  const totalQuotaCollection = quotaCollection + quotaInput;
  document.getElementById("quota-collection").textContent = totalQuotaCollection;

  // modal
  document.getElementById('donationModal').classList.remove('hidden');

  // History
  const historyItem = document.createElement('div');
  historyItem.className = "bg-slate-100 shadow-md p-4 mb-2 rounded-lg";
  historyItem.innerHTML = `
    <p class="text-green-500 ">${quotaInput} Taka is donated for flood in Quota</p>
    <p class="text-gray-500">Date: ${new Date().toString()}</p>
  `;  

  const historyList = document.getElementById('history-list');
  historyList.prepend(historyItem);
});
// Error Message live
document.getElementById('quota-input').addEventListener("input",function(){
  const quotaInput = getInputValue("quota-input");
  if(quotaInput <1 || isNaN(quotaInput)){
    showError("invalid-amount-quota");
  }
  else{
    document.getElementById("invalid-amount").classList.add("hidden");
  }
});



// History tab
const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");
historyTab.addEventListener("click",function(){
  historyTab.classList.add(
    "bg-lime-300",
    "hover:bg-lime-500",
  );
  historyTab.classList.remove(
    "border"
  );
  donationTab.classList.add(
    "border"
  );
  donationTab.classList.remove(
    "bg-lime-300",
    "hover:bg-lime-500",
  );

  document.getElementById("donate-section").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

// Donation tab
donationTab.addEventListener("click",function(){
  donationTab.classList.add(
    "bg-lime-300",
    "hover:bg-lime-500",
  );
  donationTab.classList.remove(
    "border"
  );
  historyTab.classList.add(
    "border"
  );
  historyTab.classList.remove(
    "bg-lime-300",
    "hover:bg-lime-500",
  );

  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("donate-section").classList.remove("hidden");
});