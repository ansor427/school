// Parallax effect on scroll
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
  
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });
// typing teks
const texts = ['Welcome to my website, silakan untuk menjelajahi situs resmi kami']; // Teks yang akan ditampilkan
let count = 0; // Variabel untuk menghitung index teks
let index = 0; // Variabel untuk menghitung huruf

function type() {
  if (index === texts[count].length) {
    index = 0;
    count++;
    if (count === texts.length) {
      count = 0;
    }
  }
  const currentText = texts[count];
  const letter = currentText[index];

  document.querySelector('.typing-text').textContent += letter;
  index++;
  setTimeout(type, 200); // Waktu jeda antara penambahan huruf
}

type(); // Memulai fungsi typing
