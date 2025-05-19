const CONFIG = {
  profile: {
    name: "John Doe",
    image: "/avatar.svg",
    role: "frontend developer",
    bio: "I develop everything using node.",
    email: "john@example.com",
    linkedin: "",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `portfolio`,
      href: "https://github.com",
    },
  ],
  blog: {
    title: "My Blog",
    description: "Welcome to my blog!",
    scheme: "dark",
  },
  link: "http://localhost:3000",
  since: 2023,
  lang: "en-US",
  ogImageGenerateURL: "",
  isProd: process.env.VERCEL_ENV === "production"
}

module.exports = { CONFIG }

export { CONFIG }