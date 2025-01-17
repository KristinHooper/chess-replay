import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Log the static file directory for debugging
console.log('Serving static files from:', path.join(__dirname, '../build'));

// Serve all static files from the build directory at the root URL
app.use('/', express.static(path.join(__dirname, '../build')));

// Serve index.html on the root route
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
});

// Use environment variable PORT or fallback to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
