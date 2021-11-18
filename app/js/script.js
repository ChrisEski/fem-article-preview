const shareBtn = document.querySelector('.author__share');
const svg = document.querySelector('.svg-fill');
const message = document.querySelector('.msg');
const elements = [shareBtn, svg, message];

shareBtn.addEventListener('click', function () {
  elements.forEach((el) => {
    el.classList.toggle('active');
  });
});
