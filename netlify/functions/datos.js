exports.handler = async function(event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        mensaje: '¡Hola desde la API en Netlify!',
        usuarios: [
          { id: 1, nombre: 'Juan' },
          { id: 2, nombre: 'Ana' },
          { id: 3, nombre: 'Luis' }
        ]
      }),
    };
  };