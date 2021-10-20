const express = require('express');
const productsRoute = require('./Routes/productsRoutes');
const salesRoute = require('./Routes/salesRoutes');

const app = express();

app.use(express.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRoute);

app.use('/sales', salesRoute);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
