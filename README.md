# Cappfinity · ISE panel session screen

On-screen facilitation site for the Cappfinity panel at the ISE Early Talent Intelligence Summit, with live phone polling.

- `src/index.html` – the big screen (host-driven, keyboard/clicker, host panel on **H**)
- `src/vote.html` – the phone voting page, served at `/vote/`
- `src/poll-config.js` – poll questions, Work Ready Skills dictionary, Supabase config (shared by both pages)
- `library.js` – the Cappfinity Skills Library (80 behavioural skills, full content)
- `assets/` – wordmark, brand lockup, Skills Discovery mark, QR for the Skills Discovery link
- `build.py` – assembles `dist/` (run `python3 build.py https://<site>/vote/`)
- `dist/` – the built site; Netlify publishes this folder as-is

Live polling runs on the Supabase project **ISE Panel Polling**. Phones can only vote; changing the live question and resetting votes need the host key baked into the screen page.
