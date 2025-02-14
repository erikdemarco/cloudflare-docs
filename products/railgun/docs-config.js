const productIconKey = "railgun";

module.exports = {
  product: "Railgun",
  pathPrefix: "/railgun",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/railgun",
  logoSVGContent:
    '<svg width="48" height="48" viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg"><path d="M36.8191 19.1999H26.7241L29.8741 1.37986L27.1441 0.292358L9.93164 26.2499L11.1841 28.5749H21.5341L18.7066 46.5749L21.4516 47.6099L38.0866 21.5024L36.8191 19.1999ZM22.7866 39.9824L24.7516 27.3299L23.2516 25.5974H13.9741L25.6666 7.95736L23.4616 20.4374L24.9616 22.1999H34.1116L22.7866 39.9824Z" /><path d="M36.8191 19.1999H26.7241L29.8741 1.37986L27.1441 0.292358L9.93164 26.2499L11.1841 28.5749H21.5341L18.7066 46.5749L21.4516 47.6099L38.0866 21.5024L36.8191 19.1999ZM22.7866 39.9824L24.7516 27.3299L23.2516 25.5974H13.9741L25.6666 7.95736L23.4616 20.4374L24.9616 22.1999H34.1116L22.7866 39.9824Z" fill="url(#paint0_linear)"/><path d="M36.8191 19.1999H26.7241L29.8741 1.37986L27.1441 0.292358L9.93164 26.2499L11.1841 28.5749H21.5341L18.7066 46.5749L21.4516 47.6099L38.0866 21.5024L36.8191 19.1999ZM22.7866 39.9824L24.7516 27.3299L23.2516 25.5974H13.9741L25.6666 7.95736L23.4616 20.4374L24.9616 22.1999H34.1116L22.7866 39.9824Z" fill="url(#paint1_linear)"/><defs><linearGradient id="paint0_linear" x1="24.0091" y1="0.292358" x2="24.0091" y2="47.6099" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear" x1="24.0091" y1="0.292358" x2="24.0091" y2="47.6099" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>',
  externalLinks: [
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:railgun"]' },
  },
  siteMetadata: {
    title: "Cloudflare Railgun docs",
    description:
      "Improve loading times by caching dynamically generated or personalized web pages, dramatically reducing bandwidth usage and improving download times.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/railgun",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
