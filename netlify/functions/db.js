exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',  // Permitir todos los orígenes, puedes especificar tu dominio si lo prefieres
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',  // Métodos permitidos
      'Access-Control-Allow-Headers': 'Content-Type',  // Cabeceras permitidas
    },
    body: JSON.stringify({
      clientes: [
        { id: '6474', nombre: 'Alex', email: 'alex@gmail.com', telefono: '6562999924', empresa: 'borda2'},
        { id: '5ae0', nombre: 'Juan Pablo', email: 'algunEmail@email.com', telefono: '6561', empresa: 'STRATTEC'}
      ]
    }),
  };
};


exports.handler = async function(event, context) {
  // Obtener el 'id' desde la URL (ruta dinámica)
  const idCliente = event.path.split('/').pop();  // Extraer el último segmento de la ruta

  // Buscar el cliente con el id proporcionado
  const cliente = clientes.find(c => c.id === idCliente);

  // Si no se encuentra el cliente, devolver error 404
  if (!cliente) {
    return {
      statusCode: 404,
      body: JSON.stringify({ mensaje: 'Cliente no encontrado' })
    };
  }

  // Si se encuentra el cliente, devolverlo
  return {
    statusCode: 200,
    body: JSON.stringify({ cliente })
  };
};