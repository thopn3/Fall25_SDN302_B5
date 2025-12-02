/*
// Xây dựng thử nghiệm 1 ứng dụng server cho phép tiếp nhận các request từ client

// B1: Khai báo thư module
const http = require("http");

// B2: Khai báo thông số ứng dụng server
const hostname = "localhost";
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
*/

const PTB1 = require('./ptbn');

let a = 20, b = 10;
// PTB1(a, b, (err, result) => {
//     if(err){
//         console.log(`Error: ${err}`)
//     }else{
//         console.log(`Result: ${result}`);
//     }
// });


// PTB1(a, b)
//     .then(result => console.log(`Nghiệm của PT là: ${result}`))
//     .catch(err => console.log(`Lỗi: ${err}`));

const callGPTB1 = async() =>{
    try {
        let result = await PTB1(a, b);
        console.log(`Nghiệm là: ${result}`);      
    } catch (error) {
        console.log(`Lỗi: ${error.message}`);
    }
}

callGPTB1();