document.addEventListener('DOMContentLoaded', () => {
    const transactionForm = document.getElementById('transaction-form');
    const transactionsList = document.getElementById('transactions');
    let transactions = [];

    // Funzione per caricare le transazioni dal server
    const loadTransactions = () => {
        fetch('/api/transazioni')
            .then(response => response.json())
            .then(data => {
                transactions = data;
                renderTransactions();
            })
            .catch(error => console.error('Errore nel caricamento delle transazioni:', error));
    };

    // Funzione per visualizzare le transazioni
    const renderTransactions = () => {
        transactionsList.innerHTML = '';
        transactions.forEach(transaction => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Data:</strong> ${transaction.data} |
                <strong>Categoria:</strong> ${transaction.categoria} |
                <strong>Descrizione:</strong> ${transaction.descrizione} |
                <strong>Importo:</strong> €${transaction.importo.toFixed(2)}
                <button class="delete-btn" data-id="${transaction.id}">Elimina</button>
            `;
            transactionsList.appendChild(listItem);
        });
    };

    // Gestore per l'invio del modulo per aggiungere una nuova transazione
    transactionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newTransaction = {
            data: transactionForm.data.value,
            categoria: transactionForm.categoria.value,
            descrizione: transactionForm.descrizione.value,
            importo: parseFloat(transactionForm.importo.value)
        };

        fetch('/api/transazioni', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTransaction)
        })
        .then(response => response.json())
        .then(addedTransaction => {
            transactions.push(addedTransaction);
            renderTransactions();
        })
        .catch(error => console.error('Errore nell\'aggiunta della transazione:', error));

        transactionForm.reset();
    });

    // Gestore per l'eliminazione di una transazione
    transactionsList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const transactionId = e.target.dataset.id;

            fetch(`/api/transazioni/${transactionId}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    transactions = transactions.filter(t => t.id !== parseInt(transactionId, 10));
                    renderTransactions();
                } else {
                    console.error('Errore nell\'eliminazione della transazione');
                }
            })
            .catch(error => console.error('Errore nell\'eliminazione della transazione:', error));
        }
    });

    // Carica le transazioni al caricamento della pagina
    loadTransactions();
});
