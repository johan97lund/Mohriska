// TODO: Replace posterImage and heroImage paths with real event posters/photos.
const events = [
  {
    slug: "bennika",
    title: "BENNIKA",
    date: "2026-04-05",
    startTime: "22:00",
    endTime: "02:00",
    ageLimit: "20+",
    venueName: "Quality Hotel Grand",
    address: "Åsgatan 25, Falun",
    posterImage: "/images/posters/poster-1.svg",
    heroImage: "/images/photos/photo-1.svg",
    ticketUrl:
      "https://www.ticketmaster.se/?utm_source=mohriska&utm_medium=website&utm_campaign=april_drop",
    accentColor: "#F49E0F",
    status: "upcoming",
    lineup: "Support: LUNA RAE · Residents: KASSO",
    recap:
      "A spring drop with deep, percussive techno and amber-lit architecture at the Grand."
  },
  {
    slug: "signe",
    title: "SIGNE",
    date: "2025-11-16",
    startTime: "22:00",
    endTime: "02:00",
    ageLimit: "20+",
    venueName: "Quality Hotel Grand",
    address: "Åsgatan 25, Falun",
    posterImage: "/images/posters/poster-2.svg",
    heroImage: "/images/photos/photo-2.svg",
    ticketUrl:
      "https://www.ticketmaster.se/?utm_source=mohriska&utm_medium=website&utm_campaign=november_drop",
    accentColor: "#B24A7A",
    status: "past",
    lineup: "Support: ALVINA · Residents: NORE",
    recap:
      "Magenta haze and low-slung grooves to a packed, late-night crowd.",
    igPostUrl: "https://www.instagram.com/mohriska"
  },
  {
    slug: "helios",
    title: "HELIOS",
    date: "2025-08-03",
    startTime: "21:00",
    endTime: "01:30",
    ageLimit: "20+",
    venueName: "Quality Hotel Grand",
    address: "Åsgatan 25, Falun",
    posterImage: "/images/posters/poster-3.svg",
    heroImage: "/images/photos/photo-3.svg",
    ticketUrl:
      "https://www.ticketmaster.se/?utm_source=mohriska&utm_medium=website&utm_campaign=august_drop",
    accentColor: "#F49E0F",
    status: "past",
    lineup: "Support: AER · Residents: GRAIL",
    recap:
      "Warm dusk tones, syncopated breaks, and a golden-hour afterglow.",
    igPostUrl: "https://www.instagram.com/mohriska"
  }
];

// TODO: Swap these past night placeholder images with real posters/photos.
const pastNights = [
  {
    id: "night-1",
    title: "Granite Pulse",
    image: "/images/posters/poster-4.svg",
    recap: "Heavy low end with clean, architectural lighting.",
    igPostUrl: "https://www.instagram.com/mohriska"
  },
  {
    id: "night-2",
    title: "Amber Vault",
    image: "/images/photos/photo-4.svg",
    recap: "Amber glow, packed floor, and crisp top-end textures."
  },
  {
    id: "night-3",
    title: "Monolith",
    image: "/images/posters/poster-5.svg",
    recap: "A minimal, high-contrast lineup that kept Falun moving.",
    igPostUrl: "https://www.instagram.com/mohriska"
  },
  {
    id: "night-4",
    title: "Vanta",
    image: "/images/photos/photo-5.svg",
    recap: "Hypnotic lighting and slow-burn builds into peak time."
  },
  {
    id: "night-5",
    title: "Eclipse",
    image: "/images/posters/poster-6.svg",
    recap: "A sold-out room with a controlled, cinematic tempo."
  },
  {
    id: "night-6",
    title: "Signal",
    image: "/images/photos/photo-6.svg",
    recap: "Residents held the energy with deep, rolling bass."
  }
];

export { events, pastNights };
