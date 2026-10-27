export function siteTarget(value = process.env.VDIAGRAM_SITE_TARGET) {
  if (value === undefined || value === '' || value === 'github') {
    return { name: 'github', site: 'https://tt-a1i.github.io', base: '/v-diagram', outDir: './dist' };
  }
  if (value === 'cloudflare') {
    return { name: 'cloudflare', site: 'https://mbnetworku.github.io/V-Diagram', base: '/', outDir: './dist-cloudflare' };
  }
  throw new Error(`Unknown VDIAGRAM_SITE_TARGET: ${value}`);
}
