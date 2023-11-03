const express = require("express");

//definir el ruteador
const Router = express.Router();
const BootcampModels = require("../models/bootcampModel.js");
const bootcampModel = require("../models/bootcampModel.js");
const { trusted } = require("mongoose");

//traer modelos

//rutas bootcamps

//endpiont

Router.get("/", async (req, res) => {
  //utilizar el modelo para selecionar todos los bootcamps que hay en la base de datos
  const bootcamps = await BootcampModels.find();

  res.json({
    success: true,
    data: bootcamps,
  });
});
//traer un bootcamsp por id
Router.get("/:id", async (req, res) => {
  //extraer el id
  bootcampId = req.params.id;

  const bootcamp = await bootcampModel.findById(bootcampId);
  res.json({
    success: true,
    data: bootcamp,
  });
});

//crear un bootcamp porpost
Router.post("/", async (req, res) => {
  const newBootcamp = await bootcampModel.create(req.body);
  res.json({
    success: true,
    data: newBootcamp,
  });
});

//aqui se actualizar el bootcamp
Router.put("/:id", async (req, res) => {
  const bootcampId = req.params.id;
  const updBootcamp = await bootcampModel.findByIdAndUpdate(
    bootcampId,
    req.body,
    {
      new: true,
    }
  );

  res.json({
    success: true,
    data: updBootcamp,
  });
});

//aqui se elimina
Router.delete("/:id", async (req, res) => {
  const bootcampId = req.params.id;
  const deLBootcamp = await bootcampModel.findByIdAndDelete(bootcampId);
  res.json({
    success: true,
    data: deLBootcamp,
  });
});

module.exports = Router;
