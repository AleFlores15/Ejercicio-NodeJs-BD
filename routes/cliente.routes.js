const express = require("express");
const router = express.Router();
const {
  obtenerClientes,
  crearCliente,
  obtenerClientePorId,
} = require("../controllers/cliente.controller");
router.get("/clientes", obtenerClientes);
router.post("/clientes", crearCliente);
router.get("/clientes/:id", obtenerClientePorId);


module.exports = router;
