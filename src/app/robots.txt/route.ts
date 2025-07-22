export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://code-translates.vercel.app/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}