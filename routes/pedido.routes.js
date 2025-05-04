const express = require("express");
const router = express.Router();
const {
  obtenerPedidos,
  crearPedido,
  obtenerPedidoPorId,
  actualizarPedido,
} = require("../controllers/pedido.controller");
router.get("/pedidos", obtenerPedidos);
router.post("/pedidos", crearPedido);
router.get("/pedidos/:id", obtenerPedidoPorId);
router.put("/pedidos/:id", actualizarPedido);

module.exports = router;
