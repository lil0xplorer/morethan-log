const CONFIG = {
  profile: {
    name: "John Doe",
    image: "/avatar.svg",
    role: "Frontend Developer",
    bio: "I develop everything using Node.",
    email: "john@example.com",
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
    instagram: "https://instagram.com/yourusername",
  },
  projects: [
    {
      name: "portfolio",
      href: "https://github.com/yourusername/portfolio", // or live demo URL
    },
  ],
  blog: {
    title: "My Blog",
    description: "Welcome to my blog!",
    scheme: "dark",
  },
  link: "https://insidepwn.com", // ✅ your live domain
  since: 2023,
  lang: "en-US",
  ogImageGenerateURL: "https://insidepwn.com/api/og", // if you're using dynamic OG images
  isProd: process.env.VERCEL_ENV === "production" // ✅ works correctly with Vercel
}

module.exports = { CONFIG }

export { CONFIG }
