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
        { id: '1', nombre: 'Alex', email: 'alex@gmail.com', telefono: '6562999924', empresa: 'borda2'},
        { id: '2', nombre: 'Juan Pablo', email: 'algunEmail@email.com', telefono: '6561', empresa: 'STRATTEC'},
        { id: '3', nombre: 'Adrian ortega', email: 'aosw82@gmail.com', telefono: '6562999924', empresa: 'PIDA'},
        { id: '4', nombre: 'Antonio Sanchez', email: 'algo@email.com', telefono: '4564654646', empresa: 'HP'},
        { id: '5', nombre: 'Alfonso Bermudez', email: 'alfonso@hotmail.com', telefono: '111122334', empresa: 'DELPHI'}
      ]
    }),
  };
};
