const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CI/CD Demo App</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .container {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 60px 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 600px;
          text-align: center;
          animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo {
          font-size: 80px;
          margin-bottom: 20px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        h1 {
          color: #333;
          font-size: 2.5em;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        p {
          color: #666;
          font-size: 1.2em;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 10px 20px;
          border-radius: 50px;
          margin: 5px;
          font-size: 0.9em;
          font-weight: bold;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .info {
          margin-top: 40px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
          border-left: 4px solid #667eea;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #e0e0e0;
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .info-label {
          font-weight: bold;
          color: #667eea;
        }

        .info-value {
          color: #666;
        }

        .status {
          display: inline-block;
          width: 12px;
          height: 12px;
          background: #4caf50;
          border-radius: 50%;
          animation: blink 1.5s infinite;
          margin-right: 8px;
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">🚀</div>
        <h1>CI/CD Pipeline Success!</h1>
        <p>Your application has been successfully deployed using GitHub Actions and Kubernetes.</p>
        
        <div>
          <span class="badge">✓ Docker</span>
          <span class="badge">✓ Kubernetes</span>
          <span class="badge">✓ GitHub Actions</span>
        </div>

        <div class="info">
          <div class="info-item">
            <span class="info-label">Status:</span>
            <span class="info-value"><span class="status"></span>Running</span>
          </div>
          <div class="info-item">
            <span class="info-label">Port:</span>
            <span class="info-value">${PORT}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Environment:</span>
            <span class="info-value">Production</span>
          </div>
          <div class="info-item">
            <span class="info-label">Deployment:</span>
            <span class="info-value">Automated</span>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
