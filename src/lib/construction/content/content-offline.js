// lib > construction > content > content-offline.js

const contentOffline = (page) => {
  return `
    <div class="compContent">
      <h1>Page not available offline</h1>
      <p>This page is not available offline. Wait until you have connectivity and try again.</p>
      <p>While you are offline, unavaible images will be shown as:</p>
      <img src="/icons/images/offline.jpg" height="250" width="250" alt="Offline: Image not available" />
      <p>As soon as the page or images can be viewed, they will be cached for next time.</p>
    </div>`;

  
}
export default contentOffline;
