const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const conectarDB = require('./config/db')

// vincular al archivo .env
dotenv.config({ path: "./config/.env" });

//conecta a mongo
conectarDB()

//construi el objeto app
app = express();

//rutas de prueva
app.get("/prueba/:id", (request, response) => {
  response.send(`hola , ${request.params.id}`);
});

//rutas bootcamps
//endpiont

app.get("/bootcamps", (req, res) => {
  res.json({
    success: true,
    msg: "aqui se mostraran todos los bootcamps",
  });
});
//traer un bootcamsp por id
app.get("/bootcamps/:id", (req, res) => {
  res.json({
    success: true,
    msg: `aqui se mostraran todos los bootcamps por id: ${req.params.id}`,
  });
});

//crear un bootcamp porpost
app.post("/bootcamp", (req, res) => {
  res.json({
    success: true,
    msg: `aqui se crea un bootcamps`,
  });
});
//aqui se actualizar el bootcamp
app.put("/bootcamp/:id", (req, res) => {
  res.json({
    success: true,
    msg: `aqui se editara  ${req.params.id}`,
  });
});

//aqui se elimina
app.delete("/bootcamp/:id", (req, res) => {
  res.json({
    success: true,
    msg: `se elimino:  ${req.params.id}`,
  });
});
//----------------------------------------
// Rutas para Cursos
app.get("/cursos", (req, res) => {
  res.json({
    success: true,
    msg: "Listar todos los cursos en general",
  });
});

app.get("/cursos/:id", (req, res) => {
  res.json({
    success: true,
    msg: `Obtener un solo curso con id: ${req.params.id}`,
  });
});

app.post("/cursos", (req, res) => {
  res.json({
    success: true,
    msg: "Crear un nuevo curso",
  });
});

app.put("/cursos/:id", (req, res) => {
  res.json({
    success: true,
    msg: `Actualizar curso con id: ${req.params.id}`,
  });
});

app.delete("/cursos/:id", (req, res) => {
  res.json({
    success: true,
    msg: `Eliminar curso con id: ${req.params.id}`,
  });
});

//-------------------------------------
// Rutas para Reseñas
app.get("/reviews", (req, res) => {
  res.json({
    success: true,
    msg: "Listar todas las reseñas en general",
  });
});

app.get("/reviews/:id", (req, res) => {
  res.json({
    success: true,
    msg: `Obtener una sola reseña con id: ${req.params.id}`,
  });
});

app.post("/reviews", (req, res) => {
  res.json({
    success: true,
    msg: "Crear una reseña",
  });
});

app.put("/reviews/:id", (req, res) => {
  res.json({
    success: true,
    msg: `Actualizar reseña con id: ${req.params.id}`,
  });
});

app.delete("/reviews/:id", (req, res) => {
  res.json({
    success: true,
    msg: `Eliminar reseña con id: ${req.params.id}`,
  });
});

app.listen(process.env.PUERTO, () => {
  console.log(`server en ejecucuion: ${process.env.PUERTO}`.bgCyan.black);
});

//remote:  https://github.com/gz-sans/devcamp.git
