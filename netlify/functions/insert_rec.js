let clientes = [];


exports.handler = async function(event, context) {
  // Solo permitir POST requests
  if (event.httpMethod === 'POST') {
    try {
      const body = JSON.parse(event.body); // Parsear el cuerpo de la solicitud JSON
      const { nombre, email, telefono,empresa } = body; // Extraer el nombre enviado

      // Validación: Si no se pasa el nombre, devolver error
      if (!nombre) {
        return {
          statusCode: 400,
          body: JSON.stringify({ mensaje: 'El nombre es obligatorio' }),
        };
      }

      // Crear un nuevo cliente con un ID único
      const nuevoCliente = {
        id: clientes.length + 1, // Asignar un nuevo ID
        nombre: nombre,
        email: email,
        telefono: telefono,
        empresa: empresa
      };

      // Insertar el nuevo usuario en el arreglo
      clientes.push(nuevoCliente);

      return {
        statusCode: 201, // Código de éxito para creación (201)
        body: JSON.stringify({
          mensaje: 'Cliente insertado exitosamente'
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ mensaje: 'Error al insertar el cliente', error: error.message }),
      };
    }
  }

  return {
    statusCode: 405, // Método no permitido si no es POST
    body: JSON.stringify({ mensaje: 'Método no permitido' }),
  };
};