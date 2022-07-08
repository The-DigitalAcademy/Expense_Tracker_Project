var balance = document.getElementById('balance');
var money_plus = document.getElementById('money-plus');
var money_minus = document.getElementById('money-minus');
var list = document.getElementById('list');
var form = document.getElementById('form');
var text = document.getElementById('text');
var amount = document.getElementById('amount');



const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];


function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and amount');
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);

    updateValues();

    updateLocalStorage();

    text.value = '';
    amount.value = '';
  }
}

function generateID() {
  return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
  
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');


  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">x</button>
  `;

  list.appendChild(item);
}


function updateValues() {
  var amounts = transactions.map(transaction => transaction.amount);

  var total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  var income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  var expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `R${total}`;
  money_plus.innerText = `R${income}`;
  money_minus.innerText = `R${expense}`;
}

// Remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  updateLocalStorage();

  init();
}

// Update local storage transactions
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Init app
function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener('submit', addTransaction);
