# 🎓 Semester Attendance Calculator

A smart web app built with **Next.js 13+ (App Router)** to help students plan and track their attendance by calculating how many classes they can miss while still staying above a specified attendance threshold. 

🌐 **Live Deployment**: [https://attendance-pro-kappa.vercel.app](https://attendance-pro-kappa.vercel.app)

---

## ✨ Features

- ✅ Calculate how many classes you can skip based on current attendance.
- 🔐 GitHub authentication using **NextAuth.js**.
- 📊 View detailed subject-wise attendance stats.
- 🗃️ Data persistence using **MongoDB**.
- 💻 Fully responsive and mobile-friendly UI.
- ☁️ Hosted on **Vercel** for fast performance and zero config deployment.

---

## 🚀 Technologies Used

- **Next.js 13+** (with App Router)
- **React**
- **Tailwind CSS**
- **NextAuth.js** for authentication
- **MongoDB** with Mongoose
- **Vercel** for deployment

---

## 🔐 Authentication (GitHub Login)

This project uses `NextAuth.js` for authentication with GitHub as a provider.

### GitHub OAuth Setup:
1. Go to [GitHub Developer Settings → OAuth Apps](https://github.com/settings/developers)
2. Click “New OAuth App”
3. Use the following settings:
   - **Homepage URL**: `https://attendance-pro-kappa.vercel.app`
   - **Authorization callback URL**: `https://attendance-pro-kappa.vercel.app/api/auth/callback/github`

4. Set the `GITHUB_ID` and `GITHUB_SECRET` in `.env.local`:

```env
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000

📂 Folder Structure (Key Files)

/app
  └── page.js                # Landing page
  └── dashboard              # Authenticated user dashboard
  └── api/auth/[...nextauth]/route.js  # NextAuth API Route
/lib
  └── authOptions.js         # NextAuth provider and callbacks setup
/models
  └── User.js                # Mongoose model
/utils
  └── attendance.js          # Core attendance logic

⚙️ Local Development Setup
1. Clone the Repository
git clone https://github.com/your-username/attendance-calculator.git
cd attendance-calculator

2. Install Dependencies
npm install
# or
yarn install

3. Create .env.local file
MONGODB_URI=your_mongodb_connection_string
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

4. Run the Development Server
npm run dev

Open http://localhost:3000 in your browser.

