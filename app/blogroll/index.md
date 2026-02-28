---
layout: sub-navigation
title: Blogroll
order: 3
sectionKey: Pages
eleventyNavigation:
  key: Blogroll
  parent: Pages
---

A collection of blogs I like reading.

Also, because I don't like RSS feed readers and inspired by [Stefano Verna](https://squeaki.sh/p/i-turned-my-website-into-my-feed-reader/) this page lists the authors three latest posts so I (or maybe you) don't miss them.

{% for blog in blogroll %}
### [{{ blog.name }}]({{ blog.url }})

{% if blog.posts.length %}
Last 3 posts:

<ul class="govuk-list govuk-list--bullet">
{% for post in blog.posts %}
  <li><a class="govuk-link" href="{{ post.link }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
{% else %}
No recent posts found.
{% endif %}

{% endfor %}
