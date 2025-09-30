Got it ✅ You want me to create a **more aesthetic, visual, and detailed `README.md`** for your project (same as Exyntra, but under your name: **Deepanshu Chauhan**).

Here’s my plan:

* Rewrite your README in a **modern, visual style** (with badges, tables, emojis, collapsible sections, and diagrams).
* Add a **workflow flowchart (Mermaid)** so readers can see how tasks, scheduling, and credits connect.
* Improve the **table of contents** and **feature visualization**.
* Make the README **aesthetically better** while keeping all details.

---

# Here’s the new version of your README.md

````markdown
# ⚡ Exyntra – Visual Web Scraping & Automation Platform  

<p align="center">
  <img src="https://github.com/user-attachments/assets/f4806685-eefe-4ab6-a67c-5a99691ca724" alt="Exyntra Logo" width="600"/>
</p>

<p align="center">
  <b>Built by Deepanshu Chauhan</b>  
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-3.4-blue?logo=tailwind-css" /></a>
  <a href="https://clerk.dev/"><img src="https://img.shields.io/badge/Auth-Clerk-green?logo=clerk" /></a>
  <a href="https://stripe.com/"><img src="https://img.shields.io/badge/Payments-Stripe-626CD9?logo=stripe" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel" /></a>
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
| **🌐 Browser Automation** | Launch Browser | `5` |
|  | Navigate URL | `2` |
|  | Page to HTML | `2` |
|  | Wait for Element | `1` |
|  | Take Screenshot | `3` |
| **🖱️ Element Interaction** | Click Element | `3` |
|  | Fill Input | `1` |
|  | Scroll to Element | `1` |
|  | Wait Delay | `1` |
| **📤 Data Extraction** | Extract Text | `2` |
|  | Extract Table | `3` |
|  | Extract Data with AI | `4` |
| **⚙️ Processing** | Read JSON Property | `1` |
|  | Add JSON Property | `1` |
|  | Data Transform | `2` |
|  | Conditional Logic | `1` |
| **🔁 Control Flow** | Loop | `2` |
| **📬 Communication** | Send Email | `3` |
|  | Deliver via Webhook | `1` |
| **📂 File Ops** | Download File | `3` |

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
````

---

## 📊 Workflow System

* 🖱️ Drag-and-drop editor
* ✅ Real-time validation
* 🧪 Preview mode (no credits)
* 📤 Export / Import workflows
* 📜 Execution history

---

## ⏰ Scheduling

Exyntra uses a **hybrid cron system**:

* **Vercel Cron** → once daily (backup)
* **Browser Cron** → client-based polling (default 60s)

Supports both **simple intervals** (`30s`, `5m`, `2h`, `1d`) and **full cron expressions**.

---

## 💳 Credit System

* 🔹 High-cost: Browser Launch (`5`)
* 🔸 Medium-cost: AI Extraction, Screenshot, File Download, Email (`3–4`)
* ⚪ Standard: Navigation, Extraction (`2`)
* 🟢 Low-cost: Waits, JSON ops (`1`)

✅ Stripe-powered billing with auto top-ups & usage forecasts.

---

## 🔒 Security

* Clerk-based Auth
* AES-256-CBC credential encryption
* Protected API routes
* Rate limiting + Abuse prevention

---

## 📈 Analytics

* ✅ Success/Failure rates
* ⏱️ Execution performance metrics
* 💳 Credit usage trends
* 🔔 Real-time error alerts

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

<p align="center">
  <img src="https://github.com/user-attachments/assets/d97f75bb-d4cf-48a9-a235-ee7d706a90ba" width="80%"/>
</p>

---

## 🚀 Deployment

### ✅ Vercel (Recommended)

1. Connect repo to Vercel
2. Add env vars
3. Deploy
4. Setup PostgreSQL + Stripe + Clerk
5. Test workflows

---

## 🤝 Contributing

We ❤️ contributions!

1. Fork the repo
2. Create branch: `feature/your-feature`
3. Add changes + tests
4. Open PR 🎉

---

## 📜 License

MIT © **Deepanshu Chauhan**

```

---

✨ This version is:  
- **More visual** (badges, emojis, tables, flowchart).  
- **Better structured** (categories, costs, features with icons).  
- **Professional** (similar to SaaS docs).  

---

Do you want me to also **generate architecture diagrams as PNGs** (instead of just Mermaid code), so you can directly embed visuals in your GitHub README?
```
