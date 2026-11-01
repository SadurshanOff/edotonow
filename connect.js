// "Connect TikTok" button for the account owner. The client key is public (TikTok shows it in the sign-in URL);
// the secret never comes near this site. Set it to the Sandbox key for the demo, the production key after approval.
const TIKTOK_CLIENT_KEY = 'sbawv2hkhwyp7gbaw4';  // Sandbox key (2026-11-01)
const REDIRECT = 'https://sadurshanoff.github.io/edotonow/callback.html';
const btn = document.getElementById('connect'), note = document.getElementById('connect-note');
if (!TIKTOK_CLIENT_KEY) { btn.disabled = true; note.textContent = 'Not configured yet.'; }
btn.onclick = () => {
  const state = crypto.randomUUID();
  sessionStorage.setItem('tiktok_state', state);
  const q = new URLSearchParams({client_key: TIKTOK_CLIENT_KEY, scope: 'user.info.basic,video.upload',
                                 response_type: 'code', redirect_uri: REDIRECT, state});
  location.href = 'https://www.tiktok.com/v2/auth/authorize/?' + q.toString();
};
