

document.getElementById('calculate').addEventListener('click', function () {
    const incomeInput = parseFloat(document.getElementById('income').value);
    const softwareInput = parseFloat(document.getElementById('software').value);
    const coursesInput = parseFloat(document.getElementById('courses').value);
    const internetInput = parseFloat(document.getElementById('internet').value);

    if (isNaN(incomeInput) || incomeInput <= 0) {
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }
    if (isNaN(softwareInput) || softwareInput > incomeInput || softwareInput < 0) {
        document.getElementById('software-error').classList.remove('hidden');
        return;
    }
    if (isNaN(coursesInput) || coursesInput > incomeInput || coursesInput < 0) {
        document.getElementById('courses-error').classList.remove('hidden');
        return;
    }
    if (isNaN(incomeInput) || internetInput > incomeInput || internetInput < 0) {
        document.getElementById('internet-error').classList.remove('hidden');
        return;
    }

    const totalExpenses = softwareInput + coursesInput + internetInput;

    if (totalExpenses > incomeInput) {
        document.getElementById('logic-error').classList.remove('hidden');
        return;
    }

    document.getElementById('total-expenses').innerText = totalExpenses;



    const balance = incomeInput - totalExpenses;
    document.getElementById('balance').innerText = balance;

    document.getElementById('results').classList.remove('hidden');

    document.getElementById('calculate-savings').addEventListener('click', function () {
        const savingsInput = parseFloat(document.getElementById('savings').value);
        if (savingsInput > 100 || isNaN(savingsInput || savingsInput < 0)) {
            document.getElementById('savings-error').classList.remove('hidden');
            return;
        }
        const savingsAmount = balance * (savingsInput / 100);
        document.getElementById('savings-amount').innerText = savingsAmount;

        const remainingBalance = balance - savingsAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;

        // Expense history
        const historyList = document.getElementById('history-list');

        historyList.innerHTML = `
        
        <p class="flex justify-between border-b-2 border-dotted pb-2">Total expanses: <span>${totalExpenses}</span></p>
        <p class="flex justify-between border-b-2 border-dotted pb-2">Balance: <span>${balance}</span></p>
        <p class="flex justify-between border-b-2 border-dotted pb-2">Saving Amount: <span>${savingsAmount}</span></p>
        <p class="flex justify-between border-b-2 border-dotted pb-2">Remaining Balance: <span>${remainingBalance}</span></p>
        
        `


    })


})

document.getElementById('history-tab').addEventListener('click', function(){
    document.getElementById('history-tab').classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    document.getElementById('assistant-tab').classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')

    document.getElementById('expense-form').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('results').classList.remove('hidden')
})
document.getElementById('assistant-tab').addEventListener('click', function(){
    document.getElementById('assistant-tab').classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    document.getElementById('history-tab').classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')

    document.getElementById('expense-form').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('results').classList.remove('hidden')
})