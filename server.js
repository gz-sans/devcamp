const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const conectarDB = require("./config/db"); // Importa la función para conectar a la base de datos
const cookieParser = require("cookie-parser")

// Importa las rutas de las diferentes entidades
const usersRoutes = require("./routes/usersRoutes");
const bootcampRoutes = require("./routes/bootcampsRoutes");
const courseRoutes = require("./routes/courseRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

// Vincula las variables de entorno desde el archivo .env
dotenv.config({ path: "./config/.env" });

// Conecta a la base de datos
conectarDB();

// Construye la aplicación Express
const app = express();

// Configura para que la aplicación pueda entender JSON

app.use(express.json());
app.use(cookieParser());

// Conecta las rutas a la aplicación Express
app.use("/api/v1/devcamp/bootcamps", bootcampRoutes); // Rutas relacionadas con bootcamps
app.use("/api/v1/devcamp/courses", courseRoutes); // Rutas relacionadas con cursos
app.use("/api/v1/devcamp/reviews", reviewRoutes); // Rutas relacionadas con revisiones
app.use("/api/v1/devcamp/auth", usersRoutes); // Rutas relacionadas con usuarios

// Configura un puerto de ejecución y se inicia el servidor
app.listen(process.env.PUERTO, () => {
    console.log(`Servidor en ejecución en el puerto ${process.env.PUERTO}`.bgYellow.green.bold);
});
