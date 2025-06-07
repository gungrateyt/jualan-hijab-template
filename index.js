export default {
  async fetch(request) {
    return new Response(getHtml(), {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  },
};

function getHtml() {
  return `
  <!DOCTYPE html>
  <html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Hijab Elegan</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins:wght@300;500&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Poppins', sans-serif;
        background-color: #fff5f7;
        color: #4b2e2e;
      }
      .fade-in {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 1s ease forwards;
      }
      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  </head>
  <body class="overflow-x-hidden">

    <!-- HEADER -->
    <header class="bg-[#ffe4e6] sticky top-0 z-50 shadow-md">
      <div class="max-w-6xl mx-auto flex justify-between items-center p-6">
        <h1 class="text-2xl font-bold text-[#d6336c]">Hijab Elegan</h1>
        <nav class="space-x-6 text-sm md:text-base text-[#4b2e2e]">
          <a href="#produk" class="hover:text-[#d6336c] transition">Produk</a>
          <a href="#tentang" class="hover:text-[#d6336c] transition">Tentang</a>
          <a href="#kontak" class="hover:text-[#d6336c] transition">Kontak</a>
        </nav>
      </div>
    </header>

    <!-- HERO -->
    <section class="text-center py-20 px-4 fade-in">
      <img src="https://img.freepik.com/free-photo/fashion-portrait-young-muslim-woman-hijab_23-2149359828.jpg" alt="Hijab Banner" class="w-full h-96 object-cover rounded-xl shadow-md mb-8">
      <h2 class="text-4xl md:text-5xl font-bold text-[#d6336c] mb-4">Tampil Anggun & Syar'i</h2>
      <p class="text-lg md:text-xl mb-6 text-[#6f4e37]">Koleksi hijab berkualitas dengan desain elegan dan warna kekinian.</p>
      <a href="#produk" class="px-6 py-3 bg-[#d6336c] text-white rounded-full hover:bg-[#c0275d] transition font-semibold">Lihat Koleksi</a>
    </section>

    <!-- PRODUK -->
    <section id="produk" class="max-w-6xl mx-auto px-4 mt-20 fade-in">
      <h3 class="text-3xl font-bold text-center text-[#d6336c] mb-10">Koleksi Terbaru</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${produkItem(
          "Hijab Segi Empat Premium",
          "Bahan voal premium, warna pastel",
          "Rp79.000",
          "https://img.freepik.com/free-photo/muslim-woman-wearing-hijab-posing_23-2149372905.jpg"
        )}
        ${produkItem(
          "Pashmina Diamond",
          "Ringan, tidak licin, mudah dibentuk",
          "Rp59.000",
          "https://img.freepik.com/free-photo/young-muslim-woman-with-hijab-fashion_23-2149359823.jpg"
        )}
        ${produkItem(
          "Hijab Instan Kekinian",
          "Praktis & stylish untuk keseharian",
          "Rp99.000",
          "https://img.freepik.com/free-photo/young-muslim-woman-posing-studio_23-2149359822.jpg"
        )}
      </div>
    </section>

    <!-- TENTANG -->
    <section id="tentang" class="max-w-4xl mx-auto mt-24 px-4 text-center fade-in">
      <h3 class="text-3xl font-bold text-[#d6336c] mb-6">Tentang Kami</h3>
      <p class="text-[#6f4e37] leading-relaxed">Hijab Elegan hadir untuk para muslimah yang ingin tampil syar’i dengan sentuhan modern. Kami menyediakan koleksi hijab pilihan dengan bahan berkualitas tinggi dan warna-warna lembut yang cocok untuk segala suasana.</p>
    </section>

    <!-- KONTAK -->
    <section id="kontak" class="max-w-4xl mx-auto mt-24 px-4 mb-24 text-center fade-in">
      <h3 class="text-3xl font-bold text-[#d6336c] mb-6">Hubungi Kami</h3>
      <p class="text-[#6f4e37] mb-4">📍 Jl. Muslimah Sejati No. 10, Jakarta<br>📞 0812-3456-7890<br>📧 hijabelegan@example.com</p>
      <div class="rounded-xl overflow-hidden shadow-lg border-4 border-[#ffe4e6]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.73606682264!2d106.68943182919803!3d-6.229379588742687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f157c9e2b4cf%3A0x401e8f1fc28c7e0!2sJakarta!5e0!3m2!1sen!2sid!4v1717765400011!5m2!1sen!2sid" 
          width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy">
        </iframe>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-[#ffe4e6] text-[#6f4e37] text-center p-4">
      <p>&copy; 2025 Hijab Elegan. All rights reserved.</p>
    </footer>

    <!-- ANIMASI -->
    <script>
      const fadeElements = document.querySelectorAll(".fade-in");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      }, { threshold: 0.1 });
      fadeElements.forEach(el => observer.observe(el));
    </script>
  </body>
  </html>
  `;
}

function produkItem(nama, deskripsi, harga, gambar) {
  return `
    <div class="bg-[#fff0f3] rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
      <img src="${gambar}" alt="${nama}" class="w-full h-64 object-cover">
      <div class="p-4">
        <h4 class="text-xl font-semibold text-[#d6336c] mb-1">${nama}</h4>
        <p class="text-[#6f4e37] text-sm mb-2">${deskripsi}</p>
        <span class="text-white bg-[#d6336c] px-3 py-1 rounded-full font-bold text-sm">${harga}</span>
      </div>
    </div>
  `;
}
