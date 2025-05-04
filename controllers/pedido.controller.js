const { Pedido } = require("../models");

exports.crearPedido = async (req, res) => {
  const pedido = await Pedido.create(req.body);
  res.status(201).json(pedido);
};

exports.obtenerPedidos = async (req, res) => {
  const pedidos = await Pedido.findAll();
  res.json(pedidos);
};

exports.obtenerPedidoPorId = async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) {
      return res.status(404).json({ mensaje: "Pedido no encontrado" });
    }
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el pedido", error });
  }
}