const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>My 24/7 Cloud Server</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9; }
          h1 { color: #333; }
          p { color: #666; font-size: 18px; }
          .badge { background-color: #2ecc71; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>Hello from the Cloud! 🚀</h1>
        <p>Owner: <strong>Kartickeeyaan</strong></p>
        <p>Location: <strong>Thiruvallur, Tamil Nadu</strong></p>
        <p>Server Status: <span class="badge">ONLINE 24/7</span></p>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running smoothly on port ${port}`);
});
