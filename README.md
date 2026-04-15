

# 📄 Invoice Management System

A full-stack **Next.js Invoice Management Application** that allows authenticated users to **create, validate, generate, and send invoices as PDF files** via email.

---
Demo : https://drive.google.com/file/d/1Z9EfZecAvEQGItMbtcW2VO1E3B5Cc7HD/view?usp=drive_link

## 🚀 Features

* ✅ Email-based authentication using **NextAuth (Magic Link)**
* ✅ Invoice creation with **Zod schema validation**
* ✅ PDF invoice generation
* ✅ Send invoices directly via email
* ✅ PostgreSQL database using **Prisma ORM**
* ✅ Secure server-side actions
* ✅ Clean UI with reusable components

---

## 🏗 Tech Stack

| Layer          | Technology                                                 |
| -------------- | ---------------------------------------------------------- |
| Frontend       | Next.js (App Router), React                                |
| Styling        | Tailwind CSS                                               |
| Authentication | NextAuth v5 (Nodemailer)                                   |
| Email Service  | Mailtrap (development)                                     |
| ORM            | Prisma                                                     |
| Database       | PostgreSQL                                                 |
| Validation     | Zod                                                        |
| PDF Generation |  jsPDF 

---

## 🔐 Authentication Flow

* Users authenticate using **magic email links**
* No passwords required
* Secure session handling using HTTP-only cookies
* Auth state protected server-side using `auth()`

---

## 🧾 Invoice Workflow

1. User logs in
2. User fills invoice form
3. Invoice data is validated with **Zod**
4. Invoice is saved to database
5. A **PDF invoice** is generated
6. PDF is emailed to the client
7. Invoice status is tracked (PAID / PENDING)

---


## 📤 Email + PDF Sending

* Invoices are generated as **PDF files**
* PDF is attached to email
* Sent using **Nodemailer**
* Mailtrap is used for development testing

---

## 🗄 Database Schema (Simplified)

* **User** – Authenticated users
* **Invoice** – Stores invoice details
* **Session** – User sessions
* **Account** – OAuth / email provider mapping

---

## 🛡 Security Measures

* Server-only email sending
* Zod input validation
* No client-side secrets
* Secure session cookies
* Prisma ORM prevents SQL injection

---

## ⚙ Environment Variables

Create a `.env` file:

```env
DATABASE_URL=postgresql://...
EMAIL_SERVER_HOST=...
EMAIL_SERVER_PORT=...
EMAIL_SERVER_USER=...
EMAIL_SERVER_PASSWORD=...
EMAIL_FROM=...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
```

---

## 🧪 Development Setup

```bash
# Install dependencies
npm install

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

---

## 📌 Future Improvements

* ✅ Payment gateway integration
* ✅ Invoice reminders
* ✅ Multi-currency support
* ✅ Admin dashboard
* ✅ PDF branding customization

---
ring scalable Prisma models

---

## 🙌 Acknowledgements

* Next.js
* Prisma
* NextAuth
* Zod

---

## 👩‍💻 Author

**Trisha Sengupta**
📧 Email-based Authentication | 📄 PDF Invoice Generation | ✅ Zod Validation

