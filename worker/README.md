# Buddy proxy (Cloudflare Worker, free plan)

1. Create a free account at dash.cloudflare.com, then Workers & Pages > Create > Worker. Name it `buddy-proxy`, deploy, then Edit code.
2. Replace the code with `cloudflare-worker.js` from this folder and Deploy.
3. Worker > Settings > Variables and Secrets > Add > type **Secret**, name `GEMINI_API_KEY`, value = your NEW Gemini key. Deploy.
4. Copy the worker URL (https://buddy-proxy.<name>.workers.dev) into `PROXY_URL` in `config.js`.
5. Commit and push the site. Buddy now works and the key is never in GitHub or in the browser.
