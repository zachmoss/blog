import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {

  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    templates: {
      feed: {
        permalink: '/posts/feed.xml',
        title: 'Zach Moss'
      },
      tags: false,
      searchIndex: false,
      sitemap: false
    },
    header: {
      logotype: {
        text: 'Zach Moss'
      },
      productName: "",
      organisationName: "Zach Moss"
    },
    footer: {
      copyright: {
        text: '© 2026'
      },
      contentLicence: {
        text: "A personal blog."
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
    themeColor: '#333333',
    stylesheets: ['/assets/styles.css'],
    titleSuffix: 'Zach Moss',
    url: process.env.GITHUB_ACTIONS && 'https://zachmoss.github.io/blog/'
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
    pathPrefix: process.env.GITHUB_ACTIONS ? '/blog/' : '/'
  }
};
