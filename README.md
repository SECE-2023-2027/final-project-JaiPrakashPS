# 📊 Semester Attendance Calculator

A modern web application that helps students track and plan their attendance across subjects. Built using [Next.js](https://nextjs.org) and deployed on [Vercel](https://vercel.com/).

🔗 **Live App**: [https://attendance-pro-kappa.vercel.app](https://attendance-pro-kappa.vercel.app)

---

## ✨ Features

- 🔐 **GitHub Authentication** with [NextAuth.js](https://next-auth.js.org/)
- 🧮 **Live Attendance Calculation** — track present, absent, and remaining classes
- 📈 **Safe Bunk Prediction** — know how many classes you can safely skip
- ☁️ **Deployed on Vercel** — instant deployment and CI/CD
- 💨 Lightning-fast frontend with [App Router](https://nextjs.org/docs/app)

---

## 🖥️ Tech Stack

| Frontend | Backend | Auth     | Deployment |
|----------|---------|----------|------------|
| Next.js  | Node.js | GitHub via NextAuth.js | Vercel     |

---

## 🚀 Getting Started Locally

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/semester-attendance-calculator.git
   cd semester-attendance-calculator
Install dependencies:

bash
Copy
Edit
npm install
# or
yarn install
Set environment variables:

Create a .env.local file in the root directory with:

env
Copy
Edit
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=some-random-secret
Run the development server:

bash
Copy
Edit
npm run dev
# or
yarn dev
Open http://localhost:3000 to see the app.

🔑 Authentication
This project uses GitHub OAuth with NextAuth.js for user authentication.

The login is handled at:

ts
Copy
Edit
/app/api/auth/[...nextauth]/route.js
Configuration is done in:

ts
Copy
Edit
/lib/authOptions.js
Make sure to create a GitHub OAuth app in GitHub Developer Settings and use the generated credentials.

📄 Project Structure
bash
Copy
Edit
📦 semester-attendance-calculator
├── app/
│   ├── page.js                # Main homepage
│   └── api/auth/              # NextAuth route handler
├── components/                # UI components
├── lib/authOptions.js         # Auth config
├── public/                    # Static assets
├── styles/                    # Tailwind CSS / global styles
├── .env.local                 # Environment variables
└── package.json               # Project metadata & scripts
📷 Screenshots
(Add screenshots of login, dashboard, and attendance calculator views here)

🛠️ Available Scripts
bash
Copy
Edit
npm run dev      # Starts the dev server
npm run build    # Builds the production version
npm start        # Starts the production server
🧪 To-Do / Future Features
Add dark mode toggle

Export attendance report as PDF

Add multi-user dashboard for tracking multiple students

Push notifications for low attendance

📤 Deploying
This app is deployed on Vercel. To deploy your own copy:

Push to GitHub

Visit https://vercel.com/new

Import your GitHub repo

Set environment variables

Deploy!

📚 Resources
Next.js Docs

NextAuth Docs

Tailwind CSS

Vercel Platform