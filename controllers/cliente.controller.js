const { Cliente } = require("../models");
exports.obtenerClientes = async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
};


exports.crearCliente = async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.status(201).json(cliente);
};

exports.obtenerClientePorId = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ mensaje: "Cliente no encontrado" });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el cliente", error });
  }
};


exports.actualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ mensaje: "Cliente no encontrado" });
    }

    await cliente.update(req.body);
    res.json({ mensaje: "Cliente actualizado correctamente", cliente });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar el cliente", error });
  }
};
