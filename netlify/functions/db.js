exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      clientes: [
        { id: '6474', nombre: 'Alex', email: 'alex@gmail.com', telefono: '6562999924', empresa: 'borda2'},
        { id: '5ae0', nombre: 'Juan Pablo', email: 'algunEmail@email.com', telefono: '6561', empresa: 'STRATTEC'}
      ]
    }),
  };
};