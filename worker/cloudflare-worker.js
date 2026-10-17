// Cloudflare Worker: keeps the Gemini API key secret and forwards chat requests from your site.
// Secret name: GEMINI_API_KEY (set it in the Cloudflare dashboard, never in this file).
const ALLOWED_ORIGINS = ['https://slgunasekara.github.io'];
const ALLOWED_MODELS = ['gemini-3.6-flash', 'gemini-3.5-flash', 'gemini-2.5-flash'];

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const ok = ALLOWED_ORIGINS.includes(origin);
    const cors = {
      'Access-Control-Allow-Origin': ok ? origin : ALLOWED_ORIGINS[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin'
    };
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST' || !ok) return new Response('Forbidden', { status: 403, headers: cors });

    let payload;
    try { payload = await request.json(); } catch { return new Response('Bad request', { status: 400, headers: cors }); }
    const { model, body } = payload || {};
    if (!ALLOWED_MODELS.includes(model) || !body || JSON.stringify(body).length > 40000)
      return new Response('Bad request', { status: 400, headers: cors });

    body.generationConfig = { ...(body.generationConfig || {}), maxOutputTokens: Math.min((body.generationConfig || {}).maxOutputTokens || 700, 800) };

    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': env.GEMINI_API_KEY },
      body: JSON.stringify(body)
    });
    return new Response(await r.text(), { status: r.status, headers: { ...cors, 'Content-Type': 'application/json' } });
  }
};
