import Parser from 'rss-parser'

const parser = new Parser({
  timeout: 10000
})

const blogs = [
  { name: 'Neil Williams', url: 'https://neilojwilliams.net/', feed: 'https://neilojwilliams.net/feed/' },
  { name: 'Steve Messer', url: 'https://visitmy.website/tag/weeknotes/', feed: 'https://visitmy.website/feed.xml' },
  { name: 'Giles Turnbull', url: 'https://gilest.org/index.html', feed: 'https://gilest.org/feed/index.xml' },
  { name: 'Alice Bartlett', url: 'https://alicebartlett.co.uk/blog/', feed: 'https://alicebartlett.co.uk/feed.xml' },
  { name: 'James Higgott', url: 'https://jiggott.medium.com/', feed: 'https://medium.com/feed/@jiggott' },
  { name: 'Matt Jukes', url: 'https://digitalbydefault.com/', feed: 'https://digitalbydefault.com/feed/' },
  { name: 'Himal Mandalia', url: 'https://himalmandalia.medium.com/', feed: 'https://medium.com/feed/@himalmandalia' },
  { name: 'Frankie Roberto', url: 'https://frankieroberto.github.io/nhsnotes/', feed: 'https://frankieroberto.github.io/nhsnotes/posts/feed.xml' },
  { name: 'Tom Loosemore', url: 'https://loosemore.com/', feed: 'https://loosemore.com/feed/' }
]

export default async function () {
  const results = await Promise.all(
    blogs.map(async (blog) => {
      try {
        const feed = await parser.parseURL(blog.feed)
        const posts = feed.items
          .slice(0, 3)
          .map((item) => ({
            title: item.title || 'Untitled',
            link: item.link,
            date: item.pubDate || item.isoDate || null
          }))

        return { ...blog, posts }
      } catch (error) {
        console.warn(`Failed to fetch feed for ${blog.name}: ${error.message}`)
        return { ...blog, posts: [] }
      }
    })
  )

  return results
}
