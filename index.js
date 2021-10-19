const express = require('express');
const productsRoute = require('./Routes/productsRoutes');

const app = express();

app.use(express.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRoute);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});

// parei nos 26min
