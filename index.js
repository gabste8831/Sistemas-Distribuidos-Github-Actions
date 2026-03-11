const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Nó do sistema distribuído\n');
});

if (require.main === module) {
  const port = 3000;
  server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);

    process.exit(0); 
  });
}

module.exports = server;