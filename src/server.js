const express = require("express")

const routes = require("./routes")
//Automaticamente ele identifica o arquivo index como principal

app = express();
app.use(express.json());

//Usando as rotas criadas
app.use(routes)

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});