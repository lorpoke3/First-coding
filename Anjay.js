document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");

  if (btn) {
    btn.addEventListener("click", () => {

      const angka = Math.floor(Math.random() * 100) + 1
      
      let teks;
      if (angka <= 20) teks = "Bro 💀";
      else if (angka <= 40) teks = "Hama 🤮";
      else if (angka <= 60) teks = "Boti II 🤬";
      else if (angka <= 80) teks = "Boti I 😡";
      else if (angka <= 99) teks = "Pemula 😧";
      else teks = " Normal 🤗"
      
      alert(` ${teks} (${angka}%)`);
    });
  }
});
