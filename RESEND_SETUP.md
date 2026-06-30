# Resend Email Setup Guide

This guide walks you through setting up Resend for your contact form.

## 1. Get Your Resend API Key

1. Go to [Resend Dashboard](https://resend.com/dashboard)
2. Sign up if you haven't already
3. Create a new API key in the **API Keys** section
4. Copy your API key (keep it secure!)

## 2. Set Up Your Domain

1. In Resend Dashboard, go to **Domains**
2. Add your domain: **kanizadev.me**
3. Follow the DNS configuration steps provided by Resend
4. Verify your domain (add the DNS records to your domain registrar)

## 3. Local Development Setup

### Install Dependencies
```bash
npm install
```

### Create `.env` file
Copy `.env.example` to `.env` and fill in your values:
```env
RESEND_API_KEY=your_actual_api_key
RESEND_FROM_EMAIL=noreply@yourdomain.com
RESEND_TO_EMAIL=your_email@example.com
PORT=3000
```

### Run the Server
```bash
npm start
# or for development with auto-reload:
npm run dev
```

Your site will be available at `http://localhost:3000`

## 4. Deployment Options

### Option A: Vercel (Recommended - Free)
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in project settings:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `RESEND_TO_EMAIL`
5. Deploy!

### Option B: Netlify
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Connect your repository
4. Add build command: `npm install`
5. Add environment variables in Site Settings
6. Deploy!

### Option C: Self-Hosted (your own server)
1. Install Node.js on your server
2. Clone your repository
3. Run `npm install`
4. Create `.env` file with your credentials
5. Run `npm start`
6. Use a process manager like `pm2` to keep it running

## 5. Testing the Form

1. Navigate to your contact page
2. Fill out the form
3. Submit it
4. You should receive an email at `RESEND_TO_EMAIL`

## Security Notes

⚠️ **Never commit `.env` file to Git!** It's already in `.gitignore` but double-check.

## Troubleshooting

### Email not sending?
- Check that `RESEND_API_KEY` is correct
- Verify your domain is validated in Resend
- Check server logs for error messages

### CORS errors?
- Make sure you're running the server locally
- In production, CORS is usually handled differently

### Form shows error?
- Open browser DevTools Console for error messages
- Check the server logs

## Cost

Resend offers:
- **Free tier**: 100 emails/day
- **Paid**: $20/month for 50,000 emails/month

## Support

- [Resend Documentation](https://resend.com/docs)
- [Resend API Reference](https://resend.com/docs/api-reference)
