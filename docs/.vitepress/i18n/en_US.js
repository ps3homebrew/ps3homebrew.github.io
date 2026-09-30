const sidebar_guide_henkaku = {
  
}

const sidebar_guide_henlo = {
  
}

const themeConfig = {
  search: 'Search',
  selectLanguageName: "English",
  backToHome: "Take me home",
  contributorsText: "Contributors",
  editLinkText: "Edit this page",
  lastUpdatedText: "Last Updated",
  openInNewWindow: "Open in new window",
  selectLanguageAriaLabel: "Select language",
  toggleDarkMode: "Toggle dark mode",
  toggleSidebar: "Toggle sidebar",
  discordNoticeText: "For support in English, ask for help at [PlayStation Homebrew](https://discord.gg/BVp9Rka).",

  nav: [
    {
      text: 'Guides',
      items: [
        { 
		  text: 'Installing CFW', 
		  link: '/installing-cfw' 
		},
        {
		  text: 'Installing PS3HEN',
          link: '/installing-hen'
        },
          {
          text: 'Installing qCFW',
          link: '/installing-qcfw'
        },
      ]
    },
    {
      text: 'Help',
      items: [
        { text: 'Troubleshooting', link: '/troubleshooting' },
        { text: 'FAQ', link: '/faq' }
      ]
    },
    {
      text: 'Site Info',
      items: [
        { text: 'Credits', link: '/credits' },
        { text: 'Site Navigation', link: '/site-navigation' }
      ]
    },
  ],
  sidebar: {
  },
  footer: {
		items: [
			{ text: "Credits", link: `/credits` },
			{ text: "Site Navigation", link: `/site-navigation` }
		]
	}
};

export default {
  lang: 'en-US',
  label: "English",
  title: 'PS3 Homebrew',
  description: 'A complete guide to PS3 jailbreak and homebrew setup.',
  themeConfig: themeConfig
}
