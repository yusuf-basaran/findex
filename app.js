
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
    let savedRecords = {};
    let collections = ["General"];
    let activeCollection = "all";
    let paginationOffsets = { wiki: 0, papers: 0, books: 1, ebooks: 1 };

    function itemKey(item) { return `${item.category}:${item.url || item.title}`; }
    function setSort(value) { sortMode = value; renderResults(); }
    function syncSavedState(){
      try{const r=JSON.parse(localStorage.getItem("findex_saved_records")||"{}");savedRecords=r&&typeof r==="object"&&!Array.isArray(r)?r:{};savedIds=new Set(Object.keys(savedRecords));const c=JSON.parse(localStorage.getItem("findex_collections")||'["General"]');collections=[...new Set(["General",...(Array.isArray(c)?c:[])])];}catch(e){savedRecords={};savedIds=new Set();collections=["General"]}renderCollectionOptions()
    }
    function persistLibrary(){try{localStorage.setItem("findex_saved_records",JSON.stringify(savedRecords));localStorage.setItem("findex_collections",JSON.stringify(collections));localStorage.setItem("findex_saved",JSON.stringify([...savedIds]))}catch(e){}const c=document.getElementById("savedCount");if(c)c.textContent=savedIds.size}
    function renderCollectionOptions(){const s=document.getElementById("collectionFilter");if(!s)return;const keep=activeCollection;s.replaceChildren();[["all",currentUILang==="tr"?"Tüm koleksiyonlar":"All collections"],...collections.map(x=>[x,x])].forEach(([v,l])=>{const o=document.createElement("option");o.value=v;o.textContent=l;s.appendChild(o)});s.value=keep==="all"||collections.includes(keep)?keep:"all"}
    function setCollection(v){activeCollection=v;renderResults()}
    function createCollection(){const n=prompt(currentUILang==="tr"?"Yeni koleksiyon adı":"New collection name");if(!n)return;const clean=n.trim().slice(0,48);if(!clean)return;if(!collections.includes(clean))collections.push(clean);activeCollection=clean;persistLibrary();renderCollectionOptions();renderResults()}
    function toggleSavedOnly(){savedOnly=!savedOnly;const b=document.getElementById("savedOnlyBtn");b.setAttribute("aria-pressed",String(savedOnly));b.firstChild.textContent=savedOnly?"♥ Kaydedilenler ":"♡ Kaydedilenler ";renderCollectionOptions();renderResults()}
    function toggleSaved(item,button){const key=itemKey(item);if(savedIds.has(key)){savedIds.delete(key);delete savedRecords[key]}else{savedIds.add(key);savedRecords[key]={...item,key,note:"",collection:activeCollection==="all"?"General":activeCollection}}persistLibrary();button.setAttribute("aria-pressed",String(savedIds.has(key)));button.textContent=savedIds.has(key)?"♥":"♡";button.setAttribute("aria-label",savedIds.has(key)?"Kaydedilenlerden çıkar":"Kaydet");if(savedOnly)renderResults()}
    function editNote(key){const item=savedRecords[key];if(!item)return;const n=prompt(currentUILang==="tr"?"Bu kaynak için not":"Note for this source",item.note||"");if(n===null)return;item.note=n.trim();persistLibrary();renderResults()}
    function moveToCollection(key,value){if(savedRecords[key]){savedRecords[key].collection=value;persistLibrary();if(savedOnly)renderResults()}}
    function exportSaved(format){const items=Object.values(savedRecords);if(!items.length){alert(currentUILang==="tr"?"Önce kaynak kaydedin.":"Save a source first.");return}const content=format==="json"?JSON.stringify(items,null,2):items.map((x,i)=>"@misc{findex"+(i+1)+",\n  title={"+String(x.title||"").replace(/[{}]/g,"")+"},\n  author={"+String(x.author||"").replace(/[{}]/g,"")+"},\n  year={"+(x.year||"")+"},\n  doi={"+(x.doi||"")+"},\n  url={"+(x.url||"")+"}\n}").join("\n\n");const blob=new Blob([content],{type:format==="json"?"application/json":"application/x-bibtex"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=format==="json"?"findex-library.json":"findex-library.bib";a.click();URL.revokeObjectURL(a.href)}
    async function shareSearch(){const u=new URL(location.href);u.searchParams.set("q",currentQuery);u.searchParams.set("lang",document.getElementById("searchLang").value);try{await navigator.clipboard.writeText(u.href);document.getElementById("resultSummary").textContent="Arama bağlantısı kopyalandı"}catch(e){prompt("Bağlantıyı kopyalayın",u.href)}}

    const researchLabels={tr:["Başlangıç yılı","Bitiş yılı","Açık erişim","Önerilen sıra","Başlığa göre","En yeni yayın","Kaydedilenler"],en:["From year","To year","Open access","Recommended","Title","Newest publication","Saved"],es:["Año inicial","Año final","Acceso abierto","Recomendado","Título","Más recientes","Guardados"],de:["Ab Jahr","Bis Jahr","Open Access","Empfohlen","Titel","Neueste","Gespeichert"],fr:["Depuis","Jusqu’à","Accès libre","Recommandé","Titre","Plus récent","Enregistrés"],ru:["Год от","Год до","Открытый доступ","Рекомендуемые","По названию","Сначала новые","Сохранённое"],ar:["من سنة","إلى سنة","وصول مفتوح","موصى به","حسب العنوان","الأحدث","المحفوظات"]};
    function updateResearchControls(){const t=researchLabels[currentUILang]||researchLabels.en;const labels=document.querySelectorAll(".advanced-filters label");if(labels[0])labels[0].firstChild.textContent=t[0]+" ";if(labels[1])labels[1].firstChild.textContent=t[1]+" ";const check=document.querySelector(".check-filter");if(check)check.lastChild.textContent=" "+t[2];document.querySelectorAll("#sortResults option").forEach((o,i)=>o.textContent=t[i+3]||o.textContent);const saved=document.getElementById("savedOnlyBtn");if(saved)saved.firstChild.textContent=(savedOnly?"♥ ":"♡ ")+t[6]+" ";document.getElementById("yearFrom")?.setAttribute("aria-label",t[0]);document.getElementById("yearTo")?.setAttribute("aria-label",t[1]);document.getElementById("openAccessOnly")?.setAttribute("aria-label",t[2]);}

    function changeUILang(lang) {
      currentUILang = lang;
      updateResearchControls();
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

      const loadRun=searchRun;
      const searchLang = document.getElementById("searchLang").value || "tr";
      paginationOffsets.wiki += 20;
      paginationOffsets.papers += 20;
      paginationOffsets.books += 1;
      paginationOffsets.ebooks += 1;

      const [wikiMore, papersMore, booksMore, ebooksMore, openAlexMore] = await Promise.allSettled([
        fetchWikipedia(currentQuery, searchLang, paginationOffsets.wiki),
        fetchCrossRef(currentQuery, paginationOffsets.papers),
        fetchOpenLibrary(currentQuery, paginationOffsets.books),
        fetchGutendex(currentQuery, paginationOffsets.ebooks),
        fetchOpenAlex(currentQuery, paginationOffsets.papers / 20 + 1)
      ]);
      if(loadRun!==searchRun){btn.disabled=false;return;}

      if (wikiMore.status === "fulfilled") currentItems.push(...wikiMore.value);
      if (papersMore.status === "fulfilled") currentItems.push(...papersMore.value);
      if (booksMore.status === "fulfilled") currentItems.push(...booksMore.value);
      if (ebooksMore.status === "fulfilled") currentItems.push(...ebooksMore.value);
      if (openAlexMore.status === "fulfilled") currentItems.push(...openAlexMore.value);

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

      let list=savedOnly?Object.values(savedRecords):currentItems;
      if(activeCategory!=="all")list=list.filter(item=>item.category===activeCategory);
      if(savedOnly&&activeCollection!=="all")list=list.filter(item=>(item.collection||"General")===activeCollection);
      list=[...list];if(sortMode==="title")list.sort((a,b)=>(a.title||"").localeCompare(b.title||"",currentUILang));if(sortMode==="newest")list.sort((a,b)=>Number(b.year||0)-Number(a.year||0));
      document.getElementById("resultsToolbar").style.display="flex";
      document.getElementById("resultSummary").textContent=list.length+" sonuç · "+(currentQuery||"Kütüphane");document.getElementById("savedCount").textContent=savedIds.size;

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

        const key=itemKey(item),isSaved=savedIds.has(key),saveBtn=document.createElement("button");
        saveBtn.className="save-btn";saveBtn.type="button";saveBtn.textContent=isSaved?"♥":"♡";saveBtn.setAttribute("aria-pressed",String(isSaved));saveBtn.setAttribute("aria-label",isSaved?"Kaydedilenlerden çıkar":"Kaydet");saveBtn.title=saveBtn.getAttribute("aria-label");saveBtn.onclick=()=>toggleSaved(item,saveBtn);
        const actions=document.createElement("div");actions.className="card-actions";actions.appendChild(saveBtn);
        if(isSaved){const note=document.createElement("button");note.className="save-btn";note.type="button";note.textContent="✎";note.setAttribute("aria-label","Not ekle veya düzenle");note.onclick=()=>editNote(key);actions.appendChild(note);const folder=document.createElement("select");folder.className="collection-select";folder.setAttribute("aria-label","Kaynağın koleksiyonu");collections.forEach(n=>{const o=document.createElement("option");o.value=n;o.textContent=n;folder.appendChild(o)});folder.value=savedRecords[key]?.collection||"General";folder.onchange=()=>moveToCollection(key,folder.value);actions.appendChild(folder)}
        actions.appendChild(linkBtn);cardBottom.appendChild(metrics);cardBottom.appendChild(actions);

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
      syncSavedState();
      updateResearchControls();
      const params = new URLSearchParams(location.search);
      const initialQuery = params.get("q");
      const initialLang = params.get("lang");
      if (initialLang && /^[a-z]{2}$/.test(initialLang) && document.querySelector("#searchLang option[value=" + initialLang + "]")) {
        document.getElementById("searchLang").value = initialLang;
      }
      try {
        const savedTheme = localStorage.getItem("findex_theme");
        const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (savedTheme === "dark" || (!savedTheme && systemDark)) {
          document.body.setAttribute("data-theme", "dark");
          document.getElementById("themeBtn").textContent = "☀️";
        }
      } catch(e) {}
      document.getElementById("searchInput").addEventListener("keydown", e => {
        if (e.key === "Enter") triggerSearch();
        if (e.key === "Escape") e.currentTarget.value = "";
      });
      const tabs = document.getElementById("categoryTabs");
      if (tabs) {
        tabs.addEventListener("scroll", updateTabScrollButtons, {passive:true});
        tabs.querySelectorAll(".tab-btn").forEach((tab,index,list) => tab.addEventListener("keydown",e => {
          if (!["ArrowLeft","ArrowRight","Home","End"].includes(e.key)) return;
          e.preventDefault();
          const next=e.key==="Home"?0:e.key==="End"?list.length-1:(index+(e.key==="ArrowRight"?1:-1)+list.length)%list.length;
          list[next].focus();list[next].click();
        }));
      }
      window.addEventListener("resize", updateTabScrollButtons);
      document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();document.getElementById("searchInput").focus();}});
      if(initialQuery){document.getElementById("searchInput").value=initialQuery;triggerSearch();}
    });
