document.addEventListener('DOMContentLoaded', function() {
    // Hard-coded data for users and transactions
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        // Add more users as needed
    ];

    const transactions = [
        { id: 1, user: 'John Doe', amount: 100, date: '2023-10-01' },
        { id: 2, user: 'Jane Smith', amount: 150, date: '2023-10-02' },
        // Add more transactions as needed
    ];

    // Populate dashboard
    document.getElementById('totalUsers').textContent = users.length;
    document.getElementById('totalTransactions').textContent = transactions.length;
    document.getElementById('totalRevenue').textContent = transactions.reduce((sum, t) => sum + t.amount, 0);

    // Populate users table
    const usersTableBody = document.querySelector('.users__table tbody');
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><button class="btn btn__primary">View</button></td>
        `;
        usersTableBody.appendChild(row);
    });

    // Populate transactions table
    const transactionsTableBody = document.querySelector('.transactions__table tbody');
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.id}</td>
            <td>${transaction.user}</td>
            <td>${transaction.amount}</td>
            <td>${new Date(transaction.date).toLocaleDateString()}</td>
            <td><button class="btn btn__primary">View</button></td>
        `;
        transactionsTableBody.appendChild(row);
    });

    // Chart.js for user chart
    const ctx = document.getElementById('userChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: users.map(user => user.name),
            datasets: [{
                label: 'User Transactions',
                data: transactions.map(t => t.amount),
                backgroundColor: 'rgba(220, 3, 10, 0.5)',
                borderColor: 'rgba(220, 3, 10, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});