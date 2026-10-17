/* Buddy chatbot settings. This file is public: NEVER put an API key in it.
   The Gemini key lives in a Cloudflare Worker (see worker/README.md). Paste the Worker URL below. */
window.BUDDY_CONFIG = {
  GEMINI_API_KEY: '', // leave empty
  // tried in order; the first one that your key can use is remembered
  MODELS: ['gemini-3.6-flash', 'gemini-3.5-flash', 'gemini-2.5-flash'],
  PROXY_URL: '' // e.g. 'https://buddy-proxy.YOURNAME.workers.dev'
};
