import express from "express";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(__dirname));

// API endpoint for sending emails
app.post("/api/send-email", async (req, res) => {
    const { from_name, from_email, message } = req.body;

    // Validation
    if (!from_name || !from_email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const data = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL, // e.g., "noreply@kaniza.dev"
            to: process.env.RESEND_TO_EMAIL, // Your email address to receive messages
            replyTo: from_email,
            subject: `New contact form submission from ${from_name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(from_name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(from_email)}">${escapeHtml(from_email)}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
            ${escapeHtml(message)}
          </div>
        </div>
      `,
        });

        res.status(200).json({ success: true, id: data.id });
    } catch (error) {
        console.error("Resend error:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

// Helper function to escape HTML
function escapeHtml(text) {
    const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
