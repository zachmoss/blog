import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {

  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    templates: {
      feed: {
        permalink: '/posts/feed.xml',
        title: 'Allotment notes'
      },
      tags: false,
      searchIndex: false,
      sitemap: false
    },
    header: {
      logotype: {
        text: 'Allotment notes'
      },
      productName: "",
      organisationName: "Allotment notes"
    },
    footer: {
      copyright: {
        text: '© 2026–2027'
      },
      contentLicence: {
        text: "This is a personal blog."
      },
      logo: false,
      meta: {
        items: [
          {
            href: "/posts/feed.xml",
            text: "Subscribe to feed"
          }
        ]
      }
    },
    icons: {
      shortcut: '/images/favicon.svg',
      touch: false,
      mask: false
    },
    themeColor: '#4a7c59',
    stylesheets: ['/assets/styles.css'],
    titleSuffix: 'Allotment notes',
    url: process.env.GITHUB_ACTIONS && 'https://zachmoss.github.io/allotmentnotes/'
  })

  // Collections
  eleventyConfig.addCollection('post', (collection) => {
    return collection.getFilteredByGlob('app/posts/*.md')
  })

  // Pass through
  eleventyConfig.addPassthroughCopy('./app/images')

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app'
    },
    pathPrefix: process.env.GITHUB_ACTIONS ? '/allotmentnotes/' : '/'
  }
};
