const app = require('./src/app');

const PORT = process.env.PORT;

const express = require('express');
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));