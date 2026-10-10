
    'use strict';

    /* ========================================================
       1. GÜVENLİK VE ÇEVİRİ YARDIMCILARI
       ======================================================== */
    function sanitizeUrl(rawUrl) {
      if (!rawUrl || typeof rawUrl !== 'string') return '#';
      try {
        const parsed = new URL(rawUrl, window.location.href);
        if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
          return parsed.href;
        }
      } catch (e) {
        return '#';
      }
      return '#';
    }

    const i18n = {
      tr: {
        badge: "Yeni Nesil Eğitim Keşif Motoru",
        title: "Dünyanın Bilgisine Erişin",
        subtitle: "Akademik makaleler, kitaplar, açık dersler, e-kitaplar ve kamusal veritabanlarını tek aramada tarayın.",
        placeholder: "Örn: Yapay Zeka, Kuantum Fiziği, Nörobilim...",
        search_btn: "Keşfet",
        tab_all: "Tümü",
        tab_wiki: "Vikipedi",
        tab_papers: "Makaleler (CrossRef)",
        tab_books: "Kitaplar (OpenLibrary)",
        tab_ebooks: "Klasik E-Kitaplar (Gutenberg)",
        tab_courses: "Açık Kurslar & Kaynaklar",
        history: "Keşfet:",
        clear: "Temizle",
        load_more: "Daha Fazla Sonuç",
        searching: "Açık küresel veri tabanları taranıyor...",
        no_results: "Sonuç bulunamadı. Lütfen farklı anahtar kelimelerle arayın.",
        examine: "İncele",
        dir: "ltr"
      },
      en: {
        badge: "Next-Gen Knowledge Discovery Engine",
        title: "Discover Global Knowledge",
        subtitle: "Search across research papers, books, open courses, e-books, and open repositories.",
        placeholder: "e.g., Artificial Intelligence, Quantum Physics...",
        search_btn: "Discover",
        tab_all: "All",
        tab_wiki: "Wikipedia",
        tab_papers: "Papers (CrossRef)",
        tab_books: "Books (OpenLibrary)",
        tab_ebooks: "Classic E-Books (Gutenberg)",
        tab_courses: "Open Courses & Platforms",
        history: "Explore:",
        clear: "Clear",
        load_more: "Load More Results",
        searching: "Scanning public open repositories...",
        no_results: "No results found. Try a broader search term.",
        examine: "Explore",
        dir: "ltr"
      },
      es: {
        badge: "Motor de Búsqueda Educativa de Próxima Generación",
        title: "Descubre el Conocimiento Global",
        subtitle: "Busca en artículos científicos, libros, cursos abiertos, e-books y recursos públicos.",
        placeholder: "Ej: Inteligencia Artificial, Física Cuántica...",
        search_btn: "Explorar",
        tab_all: "Todos",
        tab_wiki: "Wikipedia",
        tab_papers: "Artículos (CrossRef)",
        tab_books: "Libros (OpenLibrary)",
        tab_ebooks: "E-Books Clásicos (Gutenberg)",
        tab_courses: "Cursos Abiertos",
        history: "Historial:",
        clear: "Borrar",
        load_more: "Cargar Más",
        searching: "Buscando en APIs públicas...",
        no_results: "No se encontraron resultados.",
        examine: "Ver",
        dir: "ltr"
      },
      de: {
        badge: "Bildungs-Suchmaschine der nächsten Generation",
        title: "Globales Wissen Entdecken",
        subtitle: "Durchsuchen Sie wissenschaftliche Arbeiten, Bücher, Kurse, E-Books und offene Datenbanken.",
        placeholder: "z.B. Künstliche Intelligenz, Quantenphysik...",
        search_btn: "Suchen",
        tab_all: "Alle",
        tab_wiki: "Wikipedia",
        tab_papers: "Publikationen (CrossRef)",
        tab_books: "Bücher (OpenLibrary)",
        tab_ebooks: "E-Books (Gutenberg)",
        tab_courses: "Online-Kurse",
        history: "Verlauf:",
        clear: "Löschen",
        load_more: "Mehr Laden",
        searching: "Öffentliche APIs werden durchsucht...",
        no_results: "Keine Ergebnisse gefunden.",
        examine: "Öffnen",
        dir: "ltr"
      },
      fr: {
        badge: "Moteur de Découverte Éducative Nouvelle Génération",
        title: "Découvrez le Savoir Mondial",
        subtitle: "Explorez articles de recherche, livres, cours ouverts, e-books et savoir académique.",
        placeholder: "Ex: Intelligence Artificielle, Physique...",
        search_btn: "Explorer",
        tab_all: "Tous",
        tab_wiki: "Wikipédia",
        tab_papers: "Articles (CrossRef)",
        tab_books: "Livres (OpenLibrary)",
        tab_ebooks: "Livres Gratuits (Gutenberg)",
        tab_courses: "Cours Gratuits",
        history: "Historique :",
        clear: "Effacer",
        load_more: "Charger Plus",
        searching: "Recherche dans les APIs ouvertes...",
        no_results: "Aucun résultat trouvé.",
        examine: "Consulter",
        dir: "ltr"
      },
      ru: {
        badge: "Поисковая система знаний нового поколения",
        title: "Откройте Мировые Знания",
        subtitle: "Ищите научные статьи, книги, открытые курсы, электронные книги и базы знаний.",
        placeholder: "Например: Искусственный интеллект...",
        search_btn: "Поиск",
        tab_all: "Все",
        tab_wiki: "Википедия",
        tab_papers: "Статьи (CrossRef)",
        tab_books: "Книги (OpenLibrary)",
        tab_ebooks: "Книги (Gutenberg)",
        tab_courses: "Курсы",
        history: "История:",
        clear: "Очистить",
        load_more: "Загрузить еще",
        searching: "Идет опрос открытых API...",
        no_results: "Ничего не найдено.",
        examine: "Открыть",
        dir: "ltr"
      },
      ar: {
        badge: "محرك اكتشاف المعرفة والتعليم المتقدم",
        title: "اكتشف المعرفة العالمية",
        subtitle: "ابحث في الأوراق البحثية والكتب والدورات المفتوحة والكتب الكلاسيكية في مكان واحد.",
        placeholder: "مثال: الذكاء الاصطناعي، فيزياء الكم...",
        search_btn: "استكشف",
        tab_all: "الكل",
        tab_wiki: "ويكيبيديا",
        tab_papers: "أوراق علمية (CrossRef)",
        tab_books: "كتب (OpenLibrary)",
        tab_ebooks: "كتب كلاسيكية (Gutenberg)",
        tab_courses: "دورات مفتوحة",
        history: "السجل:",
        clear: "مسح",
        load_more: "المزيد من النتائج",
        searching: "جاري الاستعلام من قواعد البيانات المفتوحة...",
        no_results: "لم يتم العثور على نتائج.",
        examine: "استعراض",
        dir: "rtl"
      }
    };

    let currentUILang = "tr";
    let activeCategory = "all";
    let currentQuery = "";
    let historyList = ["Yapay Zeka", "Kuantum Fiziği", "Nörobilim", "Sapiens"];
    let currentItems = [];
    let searchRun=0;
    let sortMode = "relevance";
    let savedOnly = false;
    let savedIds = new Set();
    let paginationOffsets = { wiki: 0, papers: 0, books: 1, ebooks: 1 };

    function itemKey(item) { return `${item.category}:${item.url || item.title}`; }
    function setSort(value) { sortMode = value; renderResults(); }
    function toggleSavedOnly() {
      savedOnly = !savedOnly;
      const button = document.getElementById("savedOnlyBtn");
      button.setAttribute("aria-pressed", String(savedOnly));
      button.firstChild.textContent = savedOnly ? "♥ Kaydedilenler " : "♡ Kaydedilenler ";
      renderResults();
    }
    function toggleSaved(key, button) {
      if (savedIds.has(key)) savedIds.delete(key); else savedIds.add(key);
      try { localStorage.setItem("findex_saved", JSON.stringify([...savedIds])); } catch(e) {}
      button.setAttribute("aria-pressed", String(savedIds.has(key)));
      button.textContent = savedIds.has(key) ? "♥" : "♡";
      button.setAttribute("aria-label", savedIds.has(key) ? "Kaydedilenlerden çıkar" : "Kaydet");
      document.getElementById("savedCount").textContent = savedIds.size;
      if (savedOnly) renderResults();
    }

    function changeUILang(lang) {
      currentUILang = lang;
      const dict = i18n[lang] || i18n.tr;

      document.body.setAttribute("dir", dict.dir || "ltr");
      document.documentElement.lang = lang;

      document.getElementById("t_hero_badge").textContent = dict.badge;
      document.getElementById("t_hero_title").textContent = dict.title;
      document.getElementById("t_hero_subtitle").textContent = dict.subtitle;
      document.getElementById("searchInput").placeholder = dict.placeholder;
      document.getElementById("t_search_btn").textContent = dict.search_btn;
      document.getElementById("t_history_label").textContent = dict.history;
      document.getElementById("t_clear_btn").textContent = dict.clear;
      document.getElementById("t_tab_all").textContent = dict.tab_all;
      document.getElementById("t_tab_wiki").textContent = dict.tab_wiki;
      document.getElementById("t_tab_papers").textContent = dict.tab_papers;
      document.getElementById("t_tab_books").textContent = dict.tab_books;
      document.getElementById("t_tab_ebooks").textContent = dict.tab_ebooks;
      document.getElementById("t_tab_courses").textContent = dict.tab_courses;
      document.getElementById("t_load_more").textContent = dict.load_more;

      renderResults();
      updateTabScrollButtons();
    }

    function toggleTheme() {
      const isDark = document.body.getAttribute("data-theme") === "dark";
      const nextTheme = isDark ? "light" : "dark";
      document.body.setAttribute("data-theme", nextTheme);
      document.getElementById("themeBtn").textContent = nextTheme === "dark" ? "☀️" : "🌙";
      try {
        localStorage.setItem("findex_theme", nextTheme);
      } catch(e) {}
    }

    /* ========================================================
       2. KATEGORİ KAYDIRMA / HAREKET MOTORU
       ======================================================== */
    function scrollTabs(amount) {
      const tabs = document.getElementById("categoryTabs");
      const isRTL = document.body.getAttribute("dir") === "rtl";
      const scrollDirection = isRTL ? -amount : amount;
      tabs.scrollBy({ left: scrollDirection, behavior: "smooth" });
    }

    function updateTabScrollButtons() {
      const tabs = document.getElementById("categoryTabs");
      const leftBtn = document.getElementById("tabsScrollLeft");
      const rightBtn = document.getElementById("tabsScrollRight");
      if (!tabs || !leftBtn || !rightBtn) return;

      const maxScroll = tabs.scrollWidth - tabs.clientWidth;
      if (maxScroll <= 5) {
        leftBtn.style.opacity = "0.3";
        leftBtn.disabled = true;
        rightBtn.style.opacity = "0.3";
        rightBtn.disabled = true;
        return;
      }

      const isRTL = document.body.getAttribute("dir") === "rtl";
      const currentScroll = Math.abs(tabs.scrollLeft);

      if (!isRTL) {
        leftBtn.disabled = currentScroll <= 5;
        rightBtn.disabled = currentScroll >= maxScroll - 5;
      } else {
        rightBtn.disabled = currentScroll <= 5;
        leftBtn.disabled = currentScroll >= maxScroll - 5;
      }
    }

    /* ========================================================
       3. GÜÇLENDİRİLMİŞ 60+ SONUÇ ÜRETEN AÇIK APİ İSTEKLERİ
       ======================================================== */
    async function fetchWikipedia(q, lang, offset = 0) {
      try {
        const url = `https://${encodeURIComponent(lang)}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&sroffset=${offset}&srlimit=20&format=json&origin=*`;
        const res = await fetch(url);
        if (!res.ok) return [];
        const data = await res.json();
        return (data.query?.search || []).map((s, idx) => {
          const tmp = document.createElement("div");
          tmp.innerHTML = s.snippet || "";
          const textSnippet = tmp.textContent || tmp.innerText || "";
          return {
            id: `wiki_${offset}_${idx}`,
            category: "wiki",
            badgeText: "WİKİ",
            badgeClass: "badge-wiki",
            source: `Wikipedia (${lang.toUpperCase()})`,
            title: s.title,
            desc: textSnippet ? textSnippet + "..." : "Ansiklopedik konu açıklaması ve detaylı kaynakça.",
            year: "2026",
            url: `https://${encodeURIComponent(lang)}.wikipedia.org/wiki/${encodeURIComponent(s.title)}`
          };
        });
      } catch (e) { return []; }
    }

    async function fetchCrossRef(q, offset = 0) {
      try {
        const url = `https://api.crossref.org/works?query=${encodeURIComponent(q)}&rows=20&offset=${offset}&select=DOI,title,abstract,author,issued,URL`;
        const res = await fetch(url);
        if (!res.ok) return [];
        const data = await res.json();
        return (data.message?.items || []).map((item, idx) => {
          const title = item.title && item.title.length > 0 ? item.title[0] : "Akademik Yayın";
          const year = item.issued?.["date-parts"]?.[0]?.[0] || null;
          const author = item.author && item.author[0] ? `${item.author[0].family || ''} ${item.author[0].given || ''}`.trim() : "Hakemli Makale";
          
          let desc = item.abstract ? item.abstract.replace(/<\/?[^>]+(>|$)/g, "") : `Akademik araştırma bildirisi. Yazar(lar): ${author}. DOI kaydı mevcuttur.`;
          if (desc.length > 175) desc = desc.substring(0, 172) + "...";

          return {
            id: `paper_${offset}_${idx}`,
            category: "papers",
            badgeText: "PAPERS",
            badgeClass: "badge-papers",
            source: "CrossRef Academic / DOI",
            title: title,
            desc: desc,
            year: String(year),
            url: item.URL || (item.DOI ? `https://doi.org/${item.DOI}` : "https://crossref.org")
          };
        });
      } catch (e) { return []; }
    }

    async function fetchOpenAlex(q,page=1) {
      try {
        const filters=[],from=document.getElementById("yearFrom")?.value,to=document.getElementById("yearTo")?.value;
        if(from)filters.push(`from_publication_date:${from}-01-01`);
        if(to)filters.push(`to_publication_date:${to}-12-31`);
        if(document.getElementById("openAccessOnly")?.checked)filters.push("open_access.is_oa:true");
        const params=new URLSearchParams({search:q,per_page:"20",page:String(page),select:"id,doi,display_name,publication_year,authorships,open_access,cited_by_count,primary_location"});
        if(filters.length)params.set("filter",filters.join(","));
        const res=await fetch(`https://api.openalex.org/works?${params}`);if(!res.ok)return[];
        const data=await res.json();
        return(data.results||[]).map((w,i)=>{const authors=(w.authorships||[]).slice(0,3).map(a=>a.author?.display_name).filter(Boolean).join(", "),oa=Boolean(w.open_access?.is_oa);return{id:w.doi||w.id||`openalex-${page}-${i}`,category:"papers",badgeText:oa?"OPEN ACCESS":"OPENALEX",badgeClass:"badge-papers",source:"OpenAlex",title:w.display_name||"Untitled scholarly work",desc:[authors,w.cited_by_count!=null?`${w.cited_by_count} citations`:"",oa?"Open access":"Access varies by publisher"].filter(Boolean).join(" · "),year:w.publication_year?String(w.publication_year):null,meta:oa?"Open access":"Access varies",doi:w.doi||"",url:w.primary_location?.landing_page_url||w.doi||w.id};});
      }catch(e){return[]}
    }

    async function fetchOpenLibrary(q, page = 1) {
      try {
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(q)}&page=${page}&limit=15`;
        const res = await fetch(url);
        if (!res.ok) return [];
        const data = await res.json();
        return (data.docs || []).map((b, idx) => {
          const authors = Array.isArray(b.author_name) ? b.author_name.slice(0, 2).join(", ") : "Bilinmiyor";
          return {
            id: `book_${page}_${idx}`,
            category: "books",
            badgeText: "BOOKS",
            badgeClass: "badge-books",
            source: "Open Library Catalog",
            title: b.title || "Kitap",
            desc: `Yazar: ${authors} • İlk Basım: ${b.first_publish_year || "N/A"} • Yayıncı: ${b.publisher ? b.publisher[0] : "Genel Yayın"}`,
            rating: "4.8",
            year: b.first_publish_year ? String(b.first_publish_year) : null,
            url: b.key ? `https://openlibrary.org${b.key}` : "https://openlibrary.org"
          };
        });
      } catch (e) { return []; }
    }

    async function fetchGutendex(q, page = 1) {
      try {
        const url = `https://gutendex.com/books/?search=${encodeURIComponent(q)}&page=${page}`;
        const res = await fetch(url);
        if (!res.ok) return [];
        const data = await res.json();
        return (data.results || []).slice(0, 15).map((book, idx) => {
          const author = book.authors && book.authors[0] ? book.authors[0].name : "Klasik Yazar";
          const readUrl = book.formats["text/html"] || book.formats["application/epub+zip"] || `https://www.gutenberg.org/ebooks/${book.id}`;
          return {
            id: `ebook_${page}_${idx}`,
            category: "ebooks",
            badgeText: "E-BOOKS",
            badgeClass: "badge-ebooks",
            source: "Project Gutenberg (Ücretsiz)",
            title: book.title,
            desc: `Yazar: ${author} • İndirilme: ${book.download_count} • Telifsiz tam metin açık e-kitap.`,
            rating: "4.9",
            year: "Klasik",
            url: readUrl
          };
        });
      } catch (e) { return []; }
    }

    function buildOpenCourses(q) {
      const enc=encodeURIComponent(q);
      const platforms=[["MIT OpenCourseWare",`https://ocw.mit.edu/search/?q=${enc}`],["Coursera",`https://www.coursera.org/search?query=${enc}`],["edX",`https://www.edx.org/search?q=${enc}`],["Khan Academy",`https://www.khanacademy.org/search?page_search_query=${enc}`]];
      return platforms.map(([source,url],idx)=>({id:`course-search-${idx}-${enc}`,category:"courses",badgeText:"PLATFORM SEARCH",badgeClass:"badge-courses",source,title:`${q} — ${source} üzerinde ara`,desc:"Bu bağlantı arama terimini eğitim platformunda arar; Findex platform kayıtlarını doğrulanmış sonuç olarak göstermez.",url}));
    }

    /* ========================================================
       4. ARAMA VE SAYFALAMA YÖNETİMİ
       ======================================================== */
    async function triggerSearch(keepQuery = false) {
      const input = document.getElementById("searchInput");
      const q = keepQuery ? currentQuery : input.value.trim();
      if (!q) return;

      currentQuery = q;
      input.value = q;
      addToHistory(q);

      paginationOffsets = { wiki: 0, papers: 0, books: 1, ebooks: 1 };

      document.getElementById("categoryNavContainer").style.display = "flex";
      const statusBox = document.getElementById("statusBox");
      statusBox.style.display = "block";
      statusBox.replaceChildren();

      const spinner = document.createElement("div");
      spinner.className = "spinner";
      const statusP = document.createElement("p");
      statusP.textContent = i18n[currentUILang].searching;
      statusBox.appendChild(spinner);
      statusBox.appendChild(statusP);

      document.getElementById("resultsGrid").replaceChildren();
      document.getElementById("loadMoreBtn").style.display = "none";

      const searchLang = document.getElementById("searchLang").value || "tr";

      const run=++searchRun;
      const [wikiRes,crossRefRes,openAlexRes,openLibRes,gutendexRes]=await Promise.allSettled([fetchWikipedia(q,searchLang,0),fetchCrossRef(q,0),fetchOpenAlex(q,1),fetchOpenLibrary(q,1),fetchGutendex(q,1)]);
      if(run!==searchRun)return;

      const courses = buildOpenCourses(q);
      const wiki = wikiRes.status === "fulfilled" ? wikiRes.value : [];
      const crossrefPapers=crossRefRes.status==="fulfilled"?crossRefRes.value:[];
      const openAlexPapers=openAlexRes.status==="fulfilled"?openAlexRes.value:[];
      const papers=[...crossrefPapers,...openAlexPapers];
      const books = openLibRes.status === "fulfilled" ? openLibRes.value : [];
      const ebooks = gutendexRes.status === "fulfilled" ? gutendexRes.value : [];

      currentItems = [...wiki, ...papers, ...books, ...ebooks, ...courses];

      statusBox.style.display = "none";
      updateBadges();
      renderResults();

      setTimeout(updateTabScrollButtons, 50);

      document.getElementById("categoryNavContainer").scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    async function loadMore() {
      const btn = document.getElementById("loadMoreBtn");
      btn.textContent = "...";
      btn.disabled = true;

      const searchLang = document.getElementById("searchLang").value || "tr";
      paginationOffsets.wiki += 20;
      paginationOffsets.papers += 20;
      paginationOffsets.books += 1;
      paginationOffsets.ebooks += 1;

      const [wikiMore, papersMore, booksMore, ebooksMore] = await Promise.allSettled([
        fetchWikipedia(currentQuery, searchLang, paginationOffsets.wiki),
        fetchCrossRef(currentQuery, paginationOffsets.papers),
        fetchOpenLibrary(currentQuery, paginationOffsets.books),
        fetchGutendex(currentQuery, paginationOffsets.ebooks)
      ]);

      if (wikiMore.status === "fulfilled") currentItems.push(...wikiMore.value);
      if (papersMore.status === "fulfilled") currentItems.push(...papersMore.value);
      if (booksMore.status === "fulfilled") currentItems.push(...booksMore.value);
      if (ebooksMore.status === "fulfilled") currentItems.push(...ebooksMore.value);

      btn.textContent = i18n[currentUILang].load_more;
      btn.disabled = false;
      updateBadges();
      renderResults();
    }

    function updateBadges() {
      const counts = { all: currentItems.length, wiki: 0, papers: 0, books: 0, ebooks: 0, courses: 0 };
      currentItems.forEach(item => {
        if (counts[item.category] !== undefined) counts[item.category]++;
      });

      document.getElementById("count-all").textContent = counts.all;
      document.getElementById("count-wiki").textContent = counts.wiki;
      document.getElementById("count-papers").textContent = counts.papers;
      document.getElementById("count-books").textContent = counts.books;
      document.getElementById("count-ebooks").textContent = counts.ebooks;
      document.getElementById("count-courses").textContent = counts.courses;
    }

    function setCategory(cat) {
      activeCategory = cat;
      document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-cat") === cat);
      });
      renderResults();
    }

    /* ========================================================
       5. KART GÖRSELLEŞTİRME (DOM API)
       ======================================================== */
    function renderResults() {
      const grid = document.getElementById("resultsGrid");
      grid.replaceChildren();
      const dict = i18n[currentUILang] || i18n.tr;

      let list = currentItems;
      if (activeCategory !== "all") {
        list = currentItems.filter(item => item.category === activeCategory);
      }

      if (list.length === 0) {
        if (currentQuery) {
          const emptyDiv = document.createElement("div");
          emptyDiv.style.gridColumn = "1/-1";
          emptyDiv.style.textAlign = "center";
          emptyDiv.style.padding = "3rem 1rem";
          emptyDiv.style.color = "var(--text-muted)";
          emptyDiv.textContent = dict.no_results;
          grid.appendChild(emptyDiv);
        }
        document.getElementById("loadMoreBtn").style.display = "none";
        return;
      }

      list.forEach(item => {
        const card = document.createElement("div");
        card.className = "result-card";

        const topContainer = document.createElement("div");

        // Rozet ve Kaynak
        const cardTop = document.createElement("div");
        cardTop.className = "card-top";

        const badge = document.createElement("span");
        badge.className = `card-badge ${item.badgeClass || ''}`;
        badge.textContent = item.badgeText || item.category.toUpperCase();

        const source = document.createElement("span");
        source.className = "card-source";
        source.textContent = item.source || "";

        cardTop.appendChild(badge);
        cardTop.appendChild(source);

        // Başlık
        const title = document.createElement("h3");
        title.className = "card-title";
        title.textContent = item.title || "";

        // Açıklama
        const desc = document.createElement("p");
        desc.className = "card-desc";
        desc.textContent = item.desc || "";

        topContainer.appendChild(cardTop);
        topContainer.appendChild(title);
        topContainer.appendChild(desc);

        // Alt Bar
        const cardBottom = document.createElement("div");
        cardBottom.className = "card-bottom";

        const metrics = document.createElement("div");
        metrics.className = "card-metrics";

        const yearSpan=document.createElement("span");
      yearSpan.className="meta-year";
      yearSpan.textContent=item.year?`📅 ${item.year}`:"";
      if(item.year)metrics.appendChild(yearSpan);
      if(item.meta){const meta=document.createElement("span");meta.className="meta-year";meta.textContent=item.meta;metrics.appendChild(meta);}

        const linkBtn = document.createElement("a");
        linkBtn.className = "btn-examine";
        linkBtn.href = sanitizeUrl(item.url);
        linkBtn.target = "_blank";
        linkBtn.rel = "noopener noreferrer";
        linkBtn.textContent = dict.examine;

        cardBottom.appendChild(metrics);
        cardBottom.appendChild(linkBtn);

        card.appendChild(topContainer);
        card.appendChild(cardBottom);
        grid.appendChild(card);
      });

      document.getElementById("loadMoreBtn").style.display = "block";
    }

    /* ========================================================
       6. GEÇMİŞ VE YAŞAM DÖNGÜSÜ
       ======================================================== */
    function renderHistory() {
      const container = document.getElementById("historyChips");
      container.replaceChildren();
      historyList.forEach(query => {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = query;
        chip.onclick = () => {
          document.getElementById("searchInput").value = query;
          triggerSearch();
        };
        container.appendChild(chip);
      });
    }

    function addToHistory(q) {
      historyList = historyList.filter(item => item.toLowerCase() !== q.toLowerCase());
      historyList.unshift(q);
      if (historyList.length > 5) historyList.pop();
      renderHistory();
    }

    function clearHistory() {
      historyList = [];
      renderHistory();
    }

    function resetApp() {
      document.getElementById("searchInput").value = "";
      document.getElementById("categoryNavContainer").style.display = "none";
      document.getElementById("resultsGrid").replaceChildren();
      document.getElementById("loadMoreBtn").style.display = "none";
      document.getElementById("statusBox").style.display = "none";
      currentItems = [];
      currentQuery = "";
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.addEventListener("DOMContentLoaded", () => {
      renderHistory();

      try {
        const savedTheme = localStorage.getItem("findex_theme");
        const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
          document.body.setAttribute("data-theme", "dark");
          document.getElementById("themeBtn").textContent = "☀️";
        }
      } catch(e) {}

      document.getElementById("searchInput").addEventListener("keypress", (e) => {
        if (e.key === "Enter") triggerSearch();
      });

      // Sekme listesi kaydırıldığında veya pencere boyutu değiştiğinde yön oklarını güncelle
      const categoryTabs = document.getElementById("categoryTabs");
      if (categoryTabs) {
        categoryTabs.addEventListener("scroll", updateTabScrollButtons, { passive: true });
      }
      window.addEventListener("resize", updateTabScrollButtons);
    });
  