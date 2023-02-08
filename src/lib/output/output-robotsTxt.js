// lib > output > output-robotsTxt.js

const robotsTxt = (url) => {
  return new Response(robotstxtcontent(url), {status: 200});
}

export default robotsTxt;

const robotstxtcontent =  (url) => `# Hello!
user-agent: *
allow: /

sitemap: ${url.protocol}//${url.host}/sitemap.xml`;