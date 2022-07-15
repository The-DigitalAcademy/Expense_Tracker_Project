document.getElementById('expForm').addEventListener('submit', addExpense);

// initial array of expenses, reading from localStorage
const expenses = JSON.parse(localStorage.getItem)('expenses')) || [];

// function addExpense(e){
//     e.preventDefault();


/

//         expenses.push(expense);
//         // localStorage 
//         localStorage.setItem('expenses', JSON.stringify(expenses));
//     }

//     document.getElementById('expForm').reset();
//     showExpenses();
// }

// const showExpenses = () => {

//     const expenseTable = document.getElementById('expenseTable');

//     expenseTable.innerHTML = '';

//     for(let i = 0; i < expenses.length; i++){
//         expenseTable.innerHTML += `
//             <tr>
//                
//             </tr>
//         `;
//     }
// }

// const deleteExpense = (id) => {
//     for(let i = 0; i < expenses.length; i++){
//         if(expenses[i].id == id){
//             expenses.splice(i, 1);
//         }
//     }

//     // localStorage
//     localStorage.setItem('expenses', JSON.stringify(expenses));
//     showExpenses();
// }

// showExpenses();