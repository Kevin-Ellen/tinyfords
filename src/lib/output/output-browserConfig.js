// lib > output > output-browserConfig.js

const browserConfig = () => {
  const content = `<?xml version="1.0" encoding="utf-8"?>
  <browserconfig>
    <msapplication>
      <tile>
        <square70x70logo src="/icons/ms-icon-70x70.png"/>
        <square150x150logo src="/icons/ms-icon-150x150.png"/>
        <square310x310logo src="/icons/ms-icon-310x310.png"/>
        <TileColor>#005490ff</TileColor>
      </tile>
    </msapplication>
  </browserconfig>`;

  return new Response(content, {status: 200, headers:{'content-type':'application/xml'}});
}
export default browserConfig;