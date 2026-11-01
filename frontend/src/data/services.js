import { Code, PenTool, Share2 } from 'lucide-react';

export const services = [
  {
    id: 'web-development',
    number: '01',
    icon: Code,
    title: 'Web Development',
    summary:
      'Responsive, user-friendly websites built to communicate a brand clearly and support business objectives.',
    intro:
      'We design and build websites that explain what a business does, load quickly on every device and are simple to maintain. The frontend and any backend features are planned together so they work as one product.',
    offerings: [
      ['Business websites', 'Multi-page sites that present services, credentials and contact routes in a clear structure.'],
      ['Landing pages', 'Focused single pages built around one offer or campaign.'],
      ['Portfolio websites', 'Sites that let designers, studios and independent professionals present their work properly.'],
      ['Responsive frontend development', 'Layouts that work on phones, tablets and desktops, built with accessibility in mind.'],
      ['Backend integration', 'Contact forms, databases and APIs connected to the interface when a project needs them.'],
      ['Website maintenance', 'Ongoing updates and fixes, where agreed as part of the project.'],
    ],
    service: 'Web Development',
  },
  {
    id: 'graphic-design-brand-identity',
    number: '02',
    icon: PenTool,
    title: 'Graphic Design & Brand Identity',
    summary:
      'Thoughtful visual identities, marketing creatives, logos, and consistent brand communication.',
    intro:
      'A brand is more than a logo. We develop the colors, typography and visual rules that let a business look consistent on its website, in print and across social channels.',
    offerings: [
      ['Logo design', 'Marks and wordmarks developed around the business and its audience.'],
      ['Brand identity', 'Color palettes, type choices and usage guidance that keep the brand consistent.'],
      ['Social media creatives', 'Templates and artwork sized for the platforms a business uses.'],
      ['Marketing posters', 'Print and digital posters for events, offers and announcements.'],
      ['Promotional graphics', 'Banners, flyers and campaign visuals that follow the brand system.'],
      ['Digital brand assets', 'Export-ready files organized so the team can keep using them.'],
    ],
    service: 'Graphic Design & Brand Identity',
  },
  {
    id: 'social-media-management',
    number: '03',
    icon: Share2,
    title: 'Social Media Management',
    summary:
      'Content planning, creative development, and consistent social media communication.',
    intro:
      'Consistent communication matters more than occasional bursts of activity. We plan the content, design the posts and keep the brand voice steady, with the level of involvement agreed at the start.',
    offerings: [
      ['Content planning', 'A content outline aligned with the business goals and the audience on each platform.'],
      ['Creative development', 'Ideas and formats that suit the brand rather than copying trends.'],
      ['Social media post design', 'Designed posts, carousels and stories that follow the brand identity.'],
      ['Brand consistency', 'Review of tone, visuals and messaging so every post reads as one brand.'],
      ['Content scheduling', 'Scheduling of approved posts, where agreed.'],
      ['Account management', 'Day-to-day handling of the account, where included in the selected package.'],
    ],
    service: 'Social Media Management',
  },
];
