const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware per servire file statici
app.use(express.static(path.join(__dirname, '../'))); 

// Middleware per il parsing del JSON
app.use(express.json());

// Percorso del file JSON con i dati
const dataFile = path.join(__dirname, '../data/transactions.json');

// Endpoint per ottenere le transazioni
app.get('/api/transazioni', (req, res) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Errore nel caricamento dei dati' });
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint per aggiungere una transazione
app.post('/api/transazioni', (req, res) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Errore nel caricamento dei dati' });
        }
        
        let transactions = JSON.parse(data);
        const newTransaction = {
            id: transactions.length ? transactions[transactions.length - 1].id + 1 : 1,
            data: req.body.data,
            categoria: req.body.categoria,
            descrizione: req.body.descrizione,
            importo: req.body.importo
        };

        transactions.push(newTransaction);
        fs.writeFile(dataFile, JSON.stringify(transactions, null, 2), 'utf8', err => {
            if (err) {
                return res.status(500).json({ error: 'Errore nel salvataggio della transazione' });
            }
            res.json(newTransaction);
        });
    });
});

// Endpoint per eliminare una transazione
app.delete('/api/transazioni/:id', (req, res) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Errore nel caricamento dei dati' });
        }

        let transactions = JSON.parse(data);
        const transactionId = parseInt(req.params.id, 10);
        transactions = transactions.filter(t => t.id !== transactionId);

        fs.writeFile(dataFile, JSON.stringify(transactions, null, 2), 'utf8', err => {
            if (err) {
                return res.status(500).json({ error: 'Errore nel salvataggio dei dati' });
            }
            res.json({ message: 'Transazione eliminata' });
        });
    });
});

// **Serve il file index.html per ogni altra richiesta**
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Avvia il server
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
