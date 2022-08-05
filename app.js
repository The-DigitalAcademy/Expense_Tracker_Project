document.getElementById('expForm').addEventListener('submit', addExpense);

// initial array of expenses, reading from localStorage
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense(e){

    let addBalance = document.getElementById('balanceS').innerText;
    let newBal = parseInt(addBalance.replace('R',''));

    let amountText = parseInt(document.getElementById('amount').value);

    total = newBal - amountText;

    document.getElementById('expenseS').innerHTML = "R"+amountText;
    document.getElementById('balanceS').innerHTML = "R"+total;


    e.preventDefault();

    // get type, name, date, and amount
    let type = document.getElementById('type').value;
    let amount = document.getElementById('amount').value;

    if(type != 'chooseOne' 
        && amount > 0){
        const expense = {
            type, 
            amount, 
            id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
        }

        expenses.push(expense);
        // localStorage 
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    document.getElementById('expForm').reset();
    showExpenses();
}

const showExpenses = () => {

    const expenseTable = document.getElementById('expenseTable');

    expenseTable.innerHTML = '';

    for(let i = 0; i < expenses.length; i++){
        expenseTable.innerHTML += `
            <tr>
                <td>${expenses[i].type}</td>
                <td>R${expenses[i].amount}</td>
                <td><a class="deleteButton" onclick="deleteExpense(${expenses[i].id})">
                    Bin</td>
            </tr>
        `;
    }
}

const deleteExpense = (id) => {
    for(let i = 0; i < expenses.length; i++){
        if(expenses[i].id == id){
            expenses.splice(i, 1);
        }
    }

    // localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));
    showExpenses();
}
function btnIncome()
{
    let incomeNum = parseInt(document.getElementById('addIncome').value);
    document.getElementById('incomeS').innerHTML = "R"+incomeNum;

    let addBalance = document.getElementById('balanceS').innerText;
    let newBal = parseInt(addBalance.replace('R',''));

    let total = newBal + incomeNum;

    document.getElementById('balanceS').innerHTML = "R"+total;
    

}

showExpenses();