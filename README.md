# 🐐 Goat Notes

**AI-powered note-taking app** that lets you write, manage, and explore your notes intelligently — with a clean UI, demo access, and GPT-powered question support.

[![Live Demo](https://img.shields.io/badge/demo-online-green?style=flat&logo=vercel)](https://goat-notes-flax.vercel.app)
[![Built with Next.js](https://img.shields.io/badge/built%20with-Next.js-000?logo=next.js&style=flat)](https://nextjs.org)
[![Uses Supabase](https://img.shields.io/badge/database-Supabase-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## ✨ Features

- 🔐 **User authentication** with Supabase
- 🧠 **Ask AI** about your notes using OpenAI API
- 🌓 **Dark mode** toggle
- 📝 **Sidebar navigation** for quick note switching
- 🚀 **Demo login** for instant exploration
- 🔄 **Realtime syncing** via Supabase
- 💨 Fully responsive and clean UI

---

## 🚀 Live Demo

👉 [goat-notes-flax.vercel.app](https://goat-notes-flax.vercel.app)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: TypeScript
- **UI**: Tailwind CSS
- **Backend**: Supabase (Auth + Realtime)
- **Database**: PostgreSQL via Supabase + Prisma
- **AI Integration**: OpenAI API

---

## 🧪 Local Setup

```bash
git clone https://github.com/yourusername/goat-notes.git
cd goat-notes

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run local dev server
npm run dev
