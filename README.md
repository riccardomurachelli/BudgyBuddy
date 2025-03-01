# BudgyBuddy

## 🇮🇹 Versione Italiana  
**[🇬🇧 English version available!](#-english-version)**

## 🔍 Overview

**BudgyBuddy** è una web app locale per la gestione delle finanze personali. Ti aiuta a tenere traccia delle tue entrate e spese in modo semplice e veloce, senza bisogno di database complessi o connessione a internet.

### Funzionalità principali

- **Gestione transazioni**: Aggiungi, modifica ed elimina entrate e spese.
- **Filtri per categoria e data**: Organizza le tue finanze in modo chiaro.
- **Grafici interattivi** *(in arrivo!)*: Visualizza statistiche dettagliate sulle tue spese.
- **Funzionamento offline**: Tutti i dati vengono salvati in un file JSON locale.

## 🛠️ Setup e dipendenze

Per eseguire l'app in locale, devi installare **Node.js** e le seguenti dipendenze (installale con `npm install`):

```bash
express
```

### Avvio del server

1. Installa le dipendenze:  
   ```bash
   npm install
   ```

2. Avvia il server:  
   ```bash
   node server/server.js
   ```

3. Apri il browser su **`http://localhost:3000/`**.

## ⚠️ Cosa manca?

Essendo un progetto locale, **BudgyBuddy** non implementa autenticazione o sicurezza avanzata. Se vuoi utilizzarlo su più dispositivi o in rete, considera di integrare un database SQL o NoSQL.

Possibili miglioramenti futuri:

- **Sincronizzazione cloud**: Supporto per Google Drive o Firebase.
- **Supporto multi-utente**: Account con accessi separati.
- **Esportazione dati**: Scarica report in formato CSV o PDF.

## 🚫 Disclaimer

L'app è un progetto open-source in sviluppo. Può contenere bug e non garantisco il perfetto funzionamento in tutti gli scenari. Sentiti libero di contribuire o segnalare problemi! ❤️

## 👨‍💼 Licenza

Il progetto è distribuito sotto la [Licenza MIT](https://opensource.org/licenses/MIT).

---

# 🇬🇧 English Version

## 🔍 Overview

**BudgyBuddy** is a local web app for personal finance management. It helps you track your income and expenses quickly and easily, without complex databases or an internet connection.

### Key Features

- **Transaction management**: Add, edit, and delete income and expenses.
- **Filters by category and date**: Organize your finances clearly.
- **Interactive charts** *(coming soon!)*: View detailed expense statistics.
- **Offline functionality**: All data is stored in a local JSON file.

## 🛠️ Setup and Dependencies

To run the app locally, you need **Node.js** and the following dependencies (install them with `npm install`):

```bash
express
```

### Start the Server

1. Install dependencies:  
   ```bash
   npm install
   ```

2. Start the server:  
   ```bash
   node server/server.js
   ```

3. Open your browser at **`http://localhost:3000/`**.

## ⚠️ What's Missing?

Since this is a local project, **BudgyBuddy** does not implement authentication or advanced security. If you want to use it across multiple devices or online, consider integrating an SQL or NoSQL database.

Future improvements:

- **Cloud synchronization**: Support for Google Drive or Firebase.
- **Multi-user support**: Separate accounts with individual access.
- **Data export**: Download reports in CSV or PDF format.

## 🚫 Disclaimer

This app is an open-source project in development. It may contain bugs and is not guaranteed to work perfectly in all scenarios. Feel free to contribute or report issues! ❤️

## 👨‍💼 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).