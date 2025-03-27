const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const OPENAI_API_KEY = "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"; // Ganti dengan API Key Anda

app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }]
            },
            {
                headers: { Authorization: `Bearer ${OPENAI_API_KEY}` }
            }
        );

        res.json({ reply: response.data.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ reply: "Maaf, terjadi kesalahan." });
    }
});

app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));
