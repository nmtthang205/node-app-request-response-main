const express = require("express");
const PORT = process.env.PORT || 9000;
const app = express();

// --- CẤU HÌNH MIDDLEWARE ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- API TỪ SLIDE 15 & YÊU CẦU 1 (Parameter) ---
app.get('/api/get', (req, res) => {
    res.json({ message: 'This is a GET request!' });
});

app.post('/api/post', (req, res) => {
    // req.query dùng để lấy tham số từ URL (ví dụ: ?id=23010124)
    const paramId = req.query.id; 
    res.json({ 
        message: 'This is a POST request!',
        receivedParamId: paramId || 'Không có ID'
    });
});

// --- YÊU CẦU 2 (Header) ---
app.get('/api/getStudent', (req, res) => {
    // req.headers dùng để lấy dữ liệu từ tab Headers của Postman
    const headerId = req.headers.id;
    const headerName = req.headers.name;
    
    res.json({
        message: 'Đã nhận dữ liệu từ Header!',
        studentInfo: { 
            id: headerId, 
            name: headerName 
        }
    });
});

// --- YÊU CẦU 3 (Body JSON) ---
app.post('/api/getStudentViaBody', (req, res) => {
    // req.body dùng để lấy dữ liệu từ tab Body (định dạng JSON) của Postman
    const bodyId = req.body.id;
    const bodyStudentName = req.body.studentName;
    
    res.json({
        message: 'Đã nhận dữ liệu JSON từ Body!',
        studentInfo: { 
            id: bodyId, 
            studentName: bodyStudentName 
        }
    });
});

// --- KHỞI CHẠY SERVER ---
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});