// ===============================
// 🎯 QUIZ RANDOM 10 SOAL
// ===============================

// BANK SOAL (lebih banyak & beragam)
const questionBank = [
  { q:"Tari Saman berasal dari provinsi mana?", c:["Aceh","Riau","Sumatera Barat"], a:0 },
  { q:"Tari Saman dikenal juga dengan sebutan…", c:["Tari Seribu Tangan","Tari Keris","Tari Payung"], a:0 },
  { q:"Ciri khas utama Tari Saman adalah…", c:["Gerakan cepat & kompak","Menggunakan pedang","Tarian tunggal"], a:0 },
  { q:"Tari Saman dimainkan dalam posisi…", c:["Duduk berbaris","Berdiri melingkar","Bebas"], a:0 },
  { q:"Asal etnis Tari Saman adalah…", c:["Suku Gayo","Suku Batak","Suku Jawa"], a:0 },
  { q:"Tari Saman masuk UNESCO pada tahun…", c:["2011","2005","2019"], a:0 },
  { q:"Musik pengiring utama Tari Saman adalah…", c:["Vokal dan tepukan tubuh","Gamelan","Angklung"], a:0 },
  { q:"Syair Tari Saman umumnya berisi…", c:["Nasihat & doa","Cerita lucu","Fiksi modern"], a:0 },
  { q:"Nilai utama yang diajarkan Tari Saman adalah…", c:["Kekompakan","Individualisme","Persaingan"], a:0 },
  { q:"Bahasa syair Tari Saman biasanya adalah…", c:["Bahasa Gayo","Bahasa Jawa","Bahasa Minang"], a:0 },
  { q:"Perubahan tempo Tari Saman biasanya…", c:["Menjadi sangat cepat","Tetap lambat","Tidak berubah"], a:0 },
  { q:"Kostum Tari Saman didominasi oleh warna…", c:["Hitam & emas","Putih & biru","Hijau neon"], a:0 },
  { q:"Tari Saman awalnya digunakan sebagai…", c:["Media dakwah","Tarian perang","Upacara kelahiran"], a:0 },
  { q:"Jumlah penari Tari Saman biasanya…", c:["Banyak (10+ penari)","2 orang","4 orang"], a:0 },
  { q:"Tari Saman dipimpin oleh seorang…", c:["Penggiring (pemimpin syair)","Dirigen","Penabuh drum"], a:0 },
  { q:"Pola lantai Tari Saman adalah…", c:["Lurus memanjang","Lingkaran","Zig-zag"], a:0 },
  { q:"Gerakan tangan pada Tari Saman meliputi…", c:["Tepuk, gerakan cepat & hentakan dada","Ayunan pedang","Mengangkat kaki tinggi"], a:0 },
  { q:"Tari Saman ditampilkan saat acara…", c:["Festival budaya & perayaan","Turnamen olahraga","Rapat desa"], a:0 },
  { q:"Salah satu hal yang membuat Tari Saman sulit adalah…", c:["Sinkronisasi tempo cepat","Gerakan berputar-putar","Gerakan akrobat"], a:0 },
  { q:"Saman mengajarkan masyarakat untuk…", c:["Bekerja sama","Hidup individualis","Saling bersaing"], a:0 },
];

// Shuffle
function shuffle(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Ambil 10 pertanyaan acak
let questions = shuffle([...questionBank]).slice(0,10);

const quizSection = document.getElementById('quiz');
const quizContainer = document.getElementById('quizContainer');
const startQuiz = document.getElementById('startQuiz');
const submitQuiz = document.getElementById('submitQuiz');
const quizResult = document.getElementById('quizResult');

function renderQuiz(){
  quizContainer.innerHTML = '';
  questions.forEach((item, idx) => {
    const box = document.createElement('div');
    box.className = 'quiz-card';
    box.innerHTML = `<strong>${idx+1}. ${item.q}</strong>`;

    // acak pilihan
    const choiceIndex = shuffle([0,1,2]);

    choiceIndex.forEach(ci => {
      const id = `q${idx}_c${ci}`;
      const label = document.createElement('label');
      label.style.display = 'block';
      label.style.marginTop = '8px';
      label.innerHTML = `<input type="radio" name="q${idx}" value="${ci}" id="${id}"/> ${item.c[ci]}`;
      box.appendChild(label);
    });

    quizContainer.appendChild(box);
  });
  submitQuiz.disabled = false;
}

startQuiz.addEventListener('click', () => {
  quizSection.setAttribute('aria-hidden','false');
  quizSection.scrollIntoView({behavior:'smooth'});
  renderQuiz();
});

submitQuiz.addEventListener('click', () => {
  let score = 0;
  questions.forEach((item, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    if(selected && Number(selected.value) === item.a) score++;
  });

  quizResult.textContent = `Skor kamu: ${score} / ${questions.length}`;

  if(score === questions.length)
    quizResult.textContent += " — KEREN! Kamu benar semua.";
  else if(score >= 5)
    quizResult.textContent += " — Bagus! Kamu paham Tari Saman.";
  else
    quizResult.textContent += " — Coba pelajari ulang bagian materi.";

});
