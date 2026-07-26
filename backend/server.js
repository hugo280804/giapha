const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// =========================
// TEST DATA
// =========================
const members = [
    {
        id: 1,
        name: "Nguyễn Văn Minh",
        gender: "Nam",
        birthYear: 1950,
        relation: "Ông",
    },
    {
        id: 2,
        name: "Trần Thị Lan",
        gender: "Nữ",
        birthYear: 1955,
        relation: "Bà",
    },
    {
        id: 3,
        name: "Nguyễn Văn An",
        gender: "Nam",
        birthYear: 1980,
        relation: "Con",
    },
    {
        id: 4,
        name: "Nguyễn Thị Hoa",
        gender: "Nữ",
        birthYear: 1985,
        relation: "Con",
    },
];

// =========================
// API TEST
// =========================

// Trang chủ
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Gia phả Backend đang hoạt động!",
    });
});

// Lấy danh sách thành viên
app.get("/api/members", (req, res) => {
    res.json({
        success: true,
        data: members,
    });
});

// Lấy thành viên theo ID
app.get("/api/members/:id", (req, res) => {
    const id = Number(req.params.id);

    const member = members.find((item) => item.id === id);

    if (!member) {
        return res.status(404).json({
            success: false,
            message: "Không tìm thấy thành viên",
        });
    }

    res.json({
        success: true,
        data: member,
    });
});

// Thêm thành viên
app.post("/api/members", (req, res) => {
    const { name, gender, birthYear, relation } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Tên thành viên là bắt buộc",
        });
    }

    const newMember = {
        id: members.length + 1,
        name,
        gender,
        birthYear,
        relation,
    };

    members.push(newMember);

    res.status(201).json({
        success: true,
        message: "Thêm thành viên thành công",
        data: newMember,
    });
});

// =========================
// PORT
// =========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server đang chạy tại port ${PORT}`);
});