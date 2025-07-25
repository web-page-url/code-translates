# 🚀 Code Translator

A modern, AI-powered code translation tool that converts code between 9 popular programming languages with stunning visual design and lightning-fast performance.

## ✨ Features

- **9 Programming Languages**: C, C++, Python, Java, JavaScript, TypeScript, Ruby, PHP, Rust
- **AI-Powered Translation**: Uses Google Gemini API for accurate code conversion
- **Modern UI**: Glassmorphism design with smooth animations
- **Real-time Translation**: Instant code transformation
- **Copy & Share**: Easy code copying and sharing functionality
- **Responsive Design**: Works perfectly on all devices

## 🔧 Environment Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd code-translates
```

### 2. Install dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Set up environment variables
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local and add your Gemini API key
# Get your API key from: https://aistudio.google.com/app/apikey
```

**⚠️ IMPORTANT**: Never commit your `.env.local` file to version control!

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔒 Security & Environment Variables

### Environment File Protection
This project uses multiple layers of protection for sensitive data:

1. **`.gitignore` Protection**: All environment files are ignored by git
2. **Example Template**: Use `.env.example` as a template for required variables
3. **Local Development**: Use `.env.local` for your actual API keys (never commit this!)

### Required Environment Variables
```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

### Getting Your Gemini API Key
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign up or log in with your Google account
3. Create a new API key
4. Copy the key to your `.env.local` file

**🚨 NEVER commit your actual API keys to version control!**

## 🔍 SEO Optimization

This project is fully optimized for search engines and social media sharing:

### SEO Features Implemented:
- **Comprehensive Meta Tags**: Title, description, keywords, author information
- **Open Graph Protocol**: Perfect social media sharing with custom image
- **Twitter Cards**: Optimized Twitter sharing experience
- **Structured Data (JSON-LD)**: Rich snippets for search engines
- **Sitemap.xml**: Auto-generated sitemap for search engine crawling
- **Robots.txt**: Proper crawling instructions for search engines
- **Canonical URLs**: Prevents duplicate content issues
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **PWA Manifest**: Progressive Web App capabilities
- **Performance Optimized**: Fast loading for better SEO rankings

### Social Media Image:
- **Custom SEO Image**: `/public/code-translates-2.0.jpg`
- **Optimized Dimensions**: 1200x630px for perfect social sharing
- **Appears on**: Facebook, Twitter, LinkedIn, Discord, Slack, etc.

### URL Structure:
- **Production URL**: https://code-translates.vercel.app/
- **SEO-Friendly**: Clean, descriptive URLs
- **HTTPS Enabled**: Secure connection for better rankings

### Creator Attribution:
- **Created by**: Anubhav
- **LinkedIn Profile**: https://www.linkedin.com/in/anubhav-chaudhary-4bba7918b/
- **Footer Attribution**: Clickable link visible on every page (opens in new tab)
- **Structured Data**: Creator information and social links included for search engines

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
#   c o d e - t r a n s l a t e s 
 
 