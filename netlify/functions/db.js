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

let clientes = [
];


exports.handler = async function(event, context) {
  // Solo permitir POST requests
  if (event.httpMethod === 'POST') {
    try {
      const body = JSON.parse(event.body); // Parsear el cuerpo de la solicitud JSON
      const { nombre, email, telefono, empresa } = body; // Extraer el nombre enviado

      // Validación: Si no se pasa el nombre, devolver error
      /*
      if (!nombre) {
        return {
          statusCode: 400,
          body: JSON.stringify({ mensaje: 'El nombre es obligatorio' }),
        };
      }
        */

      // Crear un nuevo usuario con un ID único
      const nuevoCliente = {
        id: clientes.length + 1, // Asignar un nuevo ID
        nombre: nombre,
        email: email,
        telefono: telefono,
        empresa: empresa
      };

      // Insertar el nuevo cliente en el arreglo
      clientes.push(nuevoCliente);

      return {
        statusCode: 201, // Código de éxito para creación (201)
        body: JSON.stringify({
          mensaje: 'Cliente insertado exitosamente',
          clientes: nuevoCliente,
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ mensaje: 'Error al insertar el usuario', error: error.message }),
      };
    }
  }

  return {
    statusCode: 405, // Método no permitido si no es POST
    body: JSON.stringify({ mensaje: 'Método no permitido' }),
  };
};