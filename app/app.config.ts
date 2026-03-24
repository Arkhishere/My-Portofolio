export default defineAppConfig({
  appName: 'Arkhaa',
  global: {
    meetingLink: 'https://cal.com/arkhaa',
    available: true,
  },
  profile: {
    name: 'Arkhaa',
    job: 'Full-stack Developer & Networking Enthusiast',
    email: 'heyitsradinka@gmail.com',
    phone: '087841779920',
    picture: 'https://i.imgur.com/4VhnOsz.jpg',
  },
  socials: {
    github: 'https://github.com/Arkhishere',
    twitter: 'https://x.com/Arkaa96',
    linkedin: 'https://www.linkedin.com/in/sanz-ekas-9015873b9',
    instagram: 'https://www.instagram.com/hoshifuru._/',
    spotify: 'https://open.spotify.com/user/312v6ozlkirjq523r35gld2rf57a?si=574be0e798744543',
  },
  seo: {
    title: 'Arkhaa - Full-stack Developer & Networking Enthusiast',
    description: 'Full-stack developer and networking enthusiast. I build scalable web applications while ensuring the infrastructure behind them is rock solid.',
    url: 'https://arkhaa.dev',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})