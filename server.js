const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static('.'));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`贝拉 (Bella) 服务器运行在 http://localhost:${port}`);
    console.log('请在浏览器中打开上述地址来使用应用');
}); 