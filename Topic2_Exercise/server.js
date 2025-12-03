// B1: Khai báo thư module
const http = require("http");

// B2: Khai báo thông số ứng dụng server
const hostname = "localhost"; // 127.0.0.1
const port = 9999;

//B3: Tạo 1 web server
const server = http.createServer((req, res) => {
    // Cấu hình thông tin cho đối tượng response
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to Web server - NodeJS</h1>");

    // Log thông tin của gói tin request từ client gửi tới
    console.log(`${req.method} - ${req.url}`);
    
});

// B4: Khởi động web server lắng nghe các requests từ client
server.listen(port, hostname, () => {
    console.log(`Server running at: http://${hostname}:${port}`);
});