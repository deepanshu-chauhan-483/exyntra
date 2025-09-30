# ⚡Exyntra – Visual Web Scraping & Automation Platform  

<p align="center">
**Built by Deepanshu Chauhan**
</p>

<p align="center">
  <img src="[scraper-flow/components/file/exyntra.png](https://github.com/deepanshu-chauhan-483/exyntra/blob/master/app/exyntra.png)" alt="Exyntra Logo" width="600"/>
  
</p>

<p align="center">
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue?logo=tailwind-css)](https://tailwindcss.com/)
[![Clerk Auth](https://img.shields.io/badge/Auth-Clerk-green?logo=clerk)](https://clerk.dev/)
[![Stripe](https://img.shields.io/badge/Payments-Stripe-626CD9?logo=stripe)](https://stripe.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)
</p>


---

## 📑 Table of Contents
- [✨ Overview](#-overview)
- [🚀 Features](#-features)
- [🧩 Task Types](#-task-types)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚙️ Architecture](#️-architecture)
- [📊 Workflow System](#-workflow-system)
- [⏰ Scheduling](#-scheduling)
- [💳 Credit System](#-credit-system)
- [🔒 Security](#-security)
- [📈 Analytics](#-analytics)
- [🌍 Environment Variables](#-environment-variables)
- [🖼️ Screenshots](#-screenshots)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Overview  

**Exyntra** is a powerful **visual web scraping & automation platform**.  
It lets you **build workflows visually**, run them in real-time, schedule executions, extract data with **AI**, and deliver results through **emails, webhooks, or file downloads**.  

🔑 Think of it as **Zapier for Web Scraping + AI-powered ETL**.  

---

## 🚀 Features  

### 🌟 Core
- 🎨 **Visual Workflow Builder** – Drag & drop tasks  
- 🤖 **AI-Powered Extraction** – Extract structured data with OpenAI  
- ⚡ **Real-time Execution** – Logs, monitoring & live progress  
- ⏳ **Advanced Scheduling** – Hybrid cron + client-driven triggers  
- 💰 **Credit System** – Usage-based billing with Stripe  
- 🔐 **Secure Credentials** – AES-256 encrypted storage  
- 📦 **Multi-format Output** – JSON, CSV, Email, Webhooks  

### 🧩 Advanced
- 🔀 Conditional Logic  
- 🔁 Loop Processing  
- 📩 Email Automation  
- 📸 Screenshot & Table Extraction  
- 🧹 Data Transformation  

### 🏢 Enterprise
- 📊 Analytics Dashboard  
- 👥 Multi-user support (Clerk Auth)  
- 🚦 Rate Limiting  
- 🔄 Error Recovery + Retry Mechanism  
- 📡 Webhook Integration  

---

## 🧩 Task Types  

| Category | Task | Cost (Credits) |
|----------|------|----------------|
| **🌐 Browser Automation** | Launch Browser | 5 |
|  | Navigate URL | 2 |
|  | Page to HTML | 2 |
|  | Wait for Element | 1 |
|  | Take Screenshot | 3 |
| **🖱️ Element Interaction** | Click Element | 3 |
|  | Fill Input | 1 |
|  | Scroll to Element | 1 |
|  | Wait Delay | 1 |
| **📤 Data Extraction** | Extract Text | 2 |
|  | Extract Table | 3 |
|  | Extract Data with AI | 4 |
| **⚙️ Processing** | Read JSON Property | 1 |
|  | Add JSON Property | 1 |
|  | Data Transform | 2 |
|  | Conditional Logic | 1 |
| **🔁 Control Flow** | Loop | 2 |
| **📬 Communication** | Send Email | 3 |
|  | Deliver via Webhook | 1 |
| **📂 File Ops** | Download File | 3 |

---

## 🛠️ Tech Stack  

**Frontend**: Next.js 14 + Tailwind + Shadcn/UI + Recharts  
**Backend**: Next.js API Routes + Prisma + Puppeteer + OpenAI + Resend  
**Infra**: Vercel + PostgreSQL + Stripe + Clerk + AES-256 encryption  

---

## ⚙️ Architecture  

```mermaid
flowchart TD
    A[User Creates Workflow] --> B[Validation Engine]
    B --> C[Execution Engine]
    C --> D{Task Types}
    D --> D1[Browser Automation]
    D --> D2[Element Interaction]
    D --> D3[Data Extraction]
    D --> D4[Data Processing]
    D --> D5[Control Flow]
    D --> D6[Communication]
    D --> D7[File Ops]
    D --> D8[AI Tasks]
    C --> E[Credit Tracking]
    C --> F[Error Handling & Retry]
    C --> G[Logs & Monitoring]
    G --> H[Analytics Dashboard]
    E --> I[Stripe Billing]
```

---

## 📊 Workflow System

- 🖱️ Drag-and-drop editor  
- ✅ Real-time validation  
- 🧪 Preview mode (no credits used)  
- 📤 Export / Import workflows  
- 📜 Execution history  

---

## ⏰ Scheduling

Exyntra uses a **hybrid cron system**:

- **Vercel Cron** → once daily (backup)  
- **Browser Cron** → client-based polling (default 60s)  

Supports both **simple intervals** (`30s`, `5m`, `2h`, `1d`) and **full cron expressions**.

---

## 💳 Credit System

- 🔹 High-cost: Browser Launch (5)  
- 🔸 Medium-cost: AI Extraction, Screenshot, File Download, Email (3–4)  
- ⚪ Standard: Navigation, Extraction (2)  
- 🟢 Low-cost: Waits, JSON ops (1)  

✅ Stripe-powered billing with auto top-ups & usage forecasts.

---

## 🔒 Security

- Clerk-based Auth  
- AES-256-CBC credential encryption  
- Protected API routes  
- Rate limiting & abuse prevention  

---

## 📈 Analytics

- ✅ Success/Failure rates  
- ⏱️ Execution performance metrics  
- 💳 Credit usage trends  
- 🔔 Real-time error alerts  

---

## 🌍 Environment Variables

```env
DATABASE_URL=postgresql://username:password@host:port/database
API_SECRET=your-secure-api-secret
ENCRYPTION_SECRET=32-char-hex-key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your-key
CLERK_SECRET_KEY=sk_test_your-secret
STRIPE_SECRET_KEY=sk_test_your-secret
STRIPE_WEBHOOK_SECRET=whsec_your-secret
OPENAI_API_KEY=sk-your-openai-key
RESEND_API_KEY=re_your-resend-key
```

---

## 🖼️ Screenshots

(Add images/screenshots here)

---

## 🚀 Deployment

**Vercel (Recommended)**:  
1. Connect repo to Vercel  
2. Add environment variables  
3. Deploy  
4. Setup PostgreSQL + Stripe + Clerk  
5. Test workflows  

---

## 🤝 Contributing

We ❤️ contributions!  

1. Fork the repo  
2. Create branch: `feature/your-feature`  
3. Add changes + tests  
4. Open PR  

---

## 📜 License

MIT © **Deepanshu Chauhan**
