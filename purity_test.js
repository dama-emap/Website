const TOTAL = 100;

function toggle(el) {
  el.classList.toggle('checked');
  el.classList.remove('pop');
  void el.offsetWidth;
  el.classList.add('pop');
  updateScore();
}

function updateScore() {
const checked = document.querySelectorAll('.item.checked').length;
const purity = TOTAL - checked;
document.getElementById('scoreNum').textContent = purity;
document.getElementById('progressFill').style.width = (purity / TOTAL * 100) + '%';
}

function showScore() {
  document.getElementById('score-bar').style.display = 'flex'
}