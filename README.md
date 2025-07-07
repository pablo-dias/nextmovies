# 🎬 Next Movies 🍿

> Relembre filmes ou séries que marcaram sua vida!

![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38bdf8?logo=tailwindcss)
![TMDB API](https://img.shields.io/badge/TMDB-API-01B4E4?logo=themoviedatabase)

---

<pre> ``` 📦 next-movies ├── 📁 app │ ├── 📄 page.tsx → Main route (homepage) │ └── 📁 components │ ├── 📄 MovieCard.tsx → Movie card UI │ └── 📄 MovieSearch.tsx → Search form and results ├── 📁 public │ └── 📁 img │ ├── 🖼️ cinema.jpg → Background image │ └── 🖼️ noContent.png → Fallback image ├── 📁 utils │ └── 📄 axiosConfig.ts → Axios setup for TMDB API ├── 📄 .env → Your TMDB API Bearer token (not committed) ├── 📄 .gitignore ├── 📄 README.md ├── 📄 next.config.js ├── 📄 tailwind.config.ts ├── 📄 tsconfig.json ├── 📄 package.json ``` </pre>

---

## 🚀 Features

- 🔎 Real-time movie & TV show search using the [TMDB API](https://www.themoviedb.org/documentation/api)
- 🌆 Responsive, mobile-first UI with Tailwind CSS
- 💡 Hover-flip cards for detailed info
- 🌐 Search localized in Portuguese (`pt-BR`)
- 🧠 Built with Next.js App Router and TypeScript

---

## 🛠️ Tech Stack

- [Next.js 13+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TMDB API](https://developers.themoviedb.org/3)

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/next-movies-app.git
cd next-movies-app

# 2. Install dependencies
npm install

# 3. Create a .env file and add your TMDB API token
echo "NEXT_PUBLIC_API_KEY=your_tmdb_bearer_token" > .env

# 4. Run the app locally
npm run dev
