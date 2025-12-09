const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  // Log para ver en la consola de AWS/Docker
  console.log(`Petición recibida: ${req.url}`);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const respuesta = {
    mensaje: "Hola Mundo desde el BACKEND (Node.js)",
    estado: "Exitoso",
    timestamp: new Date(),
  };

  res.end(JSON.stringify(respuesta, null, 2));
});

server.listen(port, () => {
  console.log(`Servidor Backend corriendo en puerto ${port}`);
});
