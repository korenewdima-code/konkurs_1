import './style.css';

const participateUrl = 'https://www.edimdoma.ru/create/retsept';
const shareFallbackUrl = 'https://edimdoma.ru';
const shareTitle =
  'Конкурс рецептов Едим Дома — выиграй аэрогриль за лучший рецепт до 45 минут!';

function getShareUrl() {
  const { hostname, href } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '') {
    return shareFallbackUrl;
  }
  return href.split('#')[0];
}

function buildShareLink(network) {
  const url = getShareUrl();
  const text = `${shareTitle} ${url}`;

  switch (network) {
    case 'vk':
      return `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(shareTitle)}`;
    case 'ok':
      return `https://connect.ok.ru/offer?url=${encodeURIComponent(url)}&title=${encodeURIComponent(shareTitle)}`;
    case 'telegram':
      return `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareTitle)}`;
    case 'whatsapp':
      return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    default:
      return url;
  }
}

document.querySelectorAll('[data-participate]').forEach((el) => {
  el.addEventListener('click', (e) => {
    if (el.tagName === 'A' && el.getAttribute('href')?.startsWith('http')) return;
    e.preventDefault();
    window.location.href = participateUrl;
  });
});

document.querySelectorAll('[data-share]').forEach((el) => {
  el.href = buildShareLink(el.dataset.share);
});
