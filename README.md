💼 Business Dashboard & Invoice App
A full-stack business management dashboard built with Next.js, featuring:

🔐 Authentication via Gmail (using Mailtrap)

📬 Email notifications to clients

📊 Interactive dashboard with revenue tracking

💱 Multiple currency support

🧾 PDF invoice generation and download

✅ Form validation using Zod

🚀 Features
Authentication: Secure sign-in via Gmail using Mailtrap for development and testing.

Client Communication: Automatically send professional invoice emails to clients.

Dashboard: Interactive charts and KPIs for real-time business insight.

Revenue Calculator: Dynamic tool to calculate income across different clients/projects.

Multi-Currency Support: Generate invoices in your client’s preferred currency.

PDF Invoicing: Create and download clean, print-ready invoices.

Form Validation: All forms are type-safe and validated with Zod.

🛠️ Tech Stack
Frontend: Next.js (React)

Validation: Zod

Email: Mailtrap

Authentication: Gmail OAuth / SMTP

PDF Generation

Styling: Tailwind CSS 

Database: Prisma (PostgreSQL )

Hosting: Vercel / Railway / Render (you can specify)

🖥️ Screenshots
Dashboard	Invoice Generator

Replace the paths with your actual images.

📦 Installation
bash
Copy
Edit
git clone https://github.com/Tri27sen/PayStream.git
cd your-repo-name
yarn install
yarn dev
🔐 Environment Variables
Create a .env.local file in the root of your project:



Paste them into your .env.local

🧪 Development Notes
Use yarn lint to check code quality.

Run yarn build before production deployment.

Prisma will auto-generate types after install via postinstall.
