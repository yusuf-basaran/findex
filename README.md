# 🌐 Findex — Global Educational Resource Discovery

<p align="center">
  <strong>Akademik makaleler, kitaplar, açık dersler ve klasik eserleri tek bir noktada toplayan yeni nesil eğitim arama motoru.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?logo=javascript&logoColor=black" alt="Vanilla JS">
  <img src="https://img.shields.io/badge/CSS3-Modern_Glassmorphism-1572B6?logo=css3" alt="CSS3">
  <img src="https://img.shields.io/badge/HTML5-Valid_CSP-E34F26?logo=html5" alt="HTML5">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
</p>

---

## 📌 Proje Hakkında

**Findex**, araştırmacılar, öğrenciler ve ömür boyu öğrenenler için geliştirilmiş, istemci taraflı (client-side) çalışan hafif ve modern bir açık kaynak eğitim arama motorudur. 

Harici bir arka yüz (backend) sunucusuna ihtiyaç duymadan, doğrudan tarayıcı üzerinden dünyanın en büyük kamusal veri tabanlarına ve açık kütüphanelerine eşzamanlı istek atar. Tek bir arama sorgusuyla kullanıcının karşısına **60'tan fazla doğrulanmış içerik** çıkarır.

---

## ✨ Temel Özellikler

* **🚀 Tek Aramada 60+ Sonuç:** Tek bir aramayla Wikipedia, CrossRef, Open Library, Project Gutenberg ve açık üniversite kaynaklarını paralel olarak tarar.
* **🌍 7 Dil Desteği (i18n & RTL):** Türkçe, İngilizce, İspanyolca, Almanca, Fransızca, Rusça ve Arapça tam arayüz desteği. Arapça için otomatik **RTL (Sağdan Sola)** yerleşim motoru.
* **🎯 Dinamik Kategori & Kaydırma Çubuğu:** Sonuçları *Vikipedi*, *Makaleler*, *Kitaplar*, *E-Kitaplar* ve *Açık Kurslar* altında filtreleme. Sekmeler arasında sağ/sol yön butonlarıyla veya fareyle pürüzsüz kaydırma (`smooth scroll`).
* **🌓 Akıllı Tema Sistemi:** Sistem tema tercihine (`prefers-color-scheme`) duyarlı, kalıcı (`localStorage`) Karanlık (Dark) ve Aydınlık (Light) mod geçişi.
* **🛡️ Güçlü Güvenlik & CSP:** DOM tabanlı render yaklaşımı, URL sanitizasyonu ve katı İçerik Güvenliği Politikası (`Content-Security-Policy`) ile XSS açıklarına karşı tam koruma.
* **📱 %100 Mobil ve Dokunmatik Uyum:** Akıllı telefonlardan geniş ekranlı monitörlere kadar sorunsuz responsive glassmorphism tasarımı.
* **⚡ Sıfır Bağımlılık (Zero Dependencies):** Herhangi bir framework (`React`, `Vue`, `npm` paketi vb.) gerektirmeden saf Vanilla JavaScript, CSS ve HTML ile çalışır.

---

## 🔌 Entegre Edilen Açık API'ler ve Kaynaklar

| Kaynak | Kategori | Sağlanan Veri |
| :--- | :--- | :--- |
| **CrossRef REST API** | Makaleler / DOI | 140+ milyon hakemli akademik bildiri, yazar ve DOI bağlantısı |
| **Wikipedia REST API** | Ansiklopedi | Çok dilli ansiklopedik özetler ve kaynak maddeler |
| **Open Library Catalog** | Kitaplar | Milyonlarca basılı kitabın yazar, yayıncı ve basım yılı kayıtları |
| **Project Gutenberg (Gutendex)** | Klasik E-Kitaplar | Telifsiz, ücretsiz okunabilir klasik eser tam metinleri |
| **Global Açık Kurslar** | Kurslar & Ön Baskılar | MIT OpenCourseWare, HarvardX, Stanford/Coursera, arXiv, DOAB |

---

## 🛠️ Teknoloji Yığını

* **Biçimlendirme & Yapı:** Semantik HTML5
* **Stil & UI:** Modern CSS3 (CSS Değişkenleri, Flexbox, CSS Grid, Glassmorphism)
* **Mantık & Veri Çekimi:** Vanilla JavaScript (`fetch`, `async/await`, `Promise.allSettled`, DOM API)
* **Tipografi:** Google Fonts (*Plus Jakarta Sans* ve *Cairo*)

---

## 🚀 Kurulum ve Çalıştırma

Proje tamamen bağımsız ve istemci taraflı çalıştığı için herhangi bir derleme (`build`) aşamasına veya sunucu kurulumuna gerek yoktur.

1. **Repoyu klonlayın:**
   ```bash
   git clone [https://github.com/yusuf-basaran/findex.git](https://github.com/yusuf-basaran/findex.git)
   cd findex

---

## 🔒 Güvenlik Notları

Proje, istemci tarafında veri işlerken oluşabilecek güvenlik açıklarını önlemek için aşağıdaki standartları uygular:

* **Katı CSP (Content-Security-Policy):** Yalnızca izin verilen kaynaklardan (Wikipedia, CrossRef, Open Library vb.) veri ve font yüklenmesini sağlar; arka planda izinsiz zararlı betiklerin çalışmasını engeller.
* **Güvenli Yönlendirme (`sanitizeUrl` & `rel="noopener noreferrer"`):** Arama sonuçlarındaki bağlantılar filtrelenerek `javascript:` gibi zararlı protokoller engellenir ve açılan harici sitelerin ana sayfaya erişimi kesilir.
* **XSS Koruması (DOM API):** Dış kaynaklardan gelen veriler doğrudan `innerHTML` ile değil, `createElement` ve `textContent` metotları kullanılarak güvenli bir şekilde ekrana yazdırılır.

---

## Research workspace features

- Search publication records from Crossref and OpenAlex. OpenAlex metadata includes authors, publication year, citation count, and open-access status where available.
- Filter OpenAlex results by publication years and open access; late responses from older searches are ignored.
- Education sites are labeled outbound search links, not fictional catalog records.
- Save references in browser storage, organize collections, add notes, and export the library as BibTeX or JSON.
- Copy and reopen search URLs. Ctrl/⌘+K focuses search, and category tabs support arrow-key navigation.
- Markup, presentation, and behavior are split across `index.html`, `styles.css`, and `app.js`.
