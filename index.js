const express = require('express');
const path = require('path');

const app = express();

/* CARPETA PUBLIC */
app.use(express.static(__dirname));

/* RUTA PRINCIPAL */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
console.log("NUEVO INDEX");
/* SERVIDOR */
app.listen(3000, () => {
    console.log('Servidor funcionando en http://localhost:3000');
});