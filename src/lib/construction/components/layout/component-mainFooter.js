// lib > construction > components > component-mainFooter.js

import { dataPages } from "../../../../data/data-pages";

const mainFooter = () => {

  const arr = dataPages.map((obj, index) => {
    if(obj.active && obj.footer){
      return (`
        <li><a href="${obj.slug}">${obj.name}</a></li>
        ${index !== dataPages.length - 1 ? `<li aria-hidden="true">/</li>` : ``}
      `);
    }
  }).join('');

  return(`
    <footer class="mainFooter">
      <ul class="mainFooterLinks">
        ${arr}
      </ul>
      <h2>Thanks for visiting Tiny Fords</h2>
      <p>Here at Tiny Fords, we're passionate about Ford die-cast cars, and we're thrilled to share our collection with you. This non-commercial site is a labor of love, created by Kevin Ellen to keep track of his collection and avoid buying duplicates. We're proud to say it was made in 2023, using a Cloudflare Worker on a free account. We hope you've enjoyed exploring our collection and we look forward to your next visit! Don't forget to check out the contact page if you have any question or feedback. Thank you for choosing Tiny Fords.</p>
    </footer>
  `);
}
export default mainFooter;