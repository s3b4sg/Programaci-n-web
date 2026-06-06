const express = require('express');
const path = require('path');
const app = express();
const port = 3525;

// Servir archivos estáticos apuntando a la carpeta "public"
app.use(express.static(path.join(__dirname, 'index.html')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});