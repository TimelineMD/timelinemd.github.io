(function() {
    const TOC_DATA = [
        {
            epochId: 1,
            title: { ru: "1. Первобытное общество", ro: "1. Societatea primitivă" },
            groups: [
                {
                    key: "world",
                    title: { ru: "Мир", ro: "Lumea" },
                    items: [
                        { slug: "prehistoric", ru: "2,5 млн – 3 500 лет до н.э.", ro: "2,5 milioane – 3 500 î.Hr." }
                    ]
                },
                {
                    key: "moldova",
                    title: { ru: "Молдова", ro: "Moldova" },
                    items: []
                }
            ]
        },
        {
            epochId: 2,
            title: { ru: "2. Древний мир (Античность)", ro: "2. Lumea antică (Antichitatea)" },
            groups: [
                {
                    key: "world",
                    title: { ru: "Мир", ro: "Lumea" },
                    items: [
                        {
                            slug: "first_civilizations",
                            ru: "Первые цивилизации",
                            ro: "Primele civilizații",
                            children: [
                                { slug: "mesopotamia", ru: "Месопотамия", ro: "Mesopotamia" },
                                { slug: "ancient_egypt", ru: "Древний Египет", ro: "Egiptul Antic" },
                                { slug: "ancient_china", ru: "Древний Китай", ro: "China Antică" }
                            ]
                        },
                        { slug: "ancient_greece", ru: "Древняя Греция", ro: "Grecia Antică" },
                        { slug: "roman_republic", ru: "Римская республика", ro: "Republica Romană" },
                        { slug: "roman_empire", ru: "Римская империя", ro: "Imperiul Roman" },
                        { slug: "gladiator_revolt", ru: "Восстание гладиаторов", ro: "Răscoala gladiatorilor" },
                        { slug: "birth_of_jesus", ru: "Рождение Иисуса (начало эры)", ro: "Nașterea lui Iisus (începutul erei noastre)" },
                        { slug: "vesuvius_pompeii", ru: "Извержение Везувия и гибель Помпей", ro: "Erupția Vezuviului și distrugerea Pompeiului" },
                        { slug: "christianity_official", ru: "Христианство — официальная религия Римской империи", ro: "Creștinismul – religie oficială a Imperiului Roman" },
                        { slug: "division_roman_empire", ru: "Разделение Римской империи", ro: "Împărțirea Imperiului Roman" }
                    ]
                },
                {
                    key: "moldova",
                    title: { ru: "Молдова", ro: "Moldova" },
                    items: [
                        { slug: "geto_dacians", ru: "Гето-даки", ro: "Geto-dacii" },
                        { slug: "dacia_burebista_decebal", ru: "Дакия при Буребисте и Дечебале", ro: "Dacia lui Burebista și Decebal" },
                        { slug: "daco_roman_wars", ru: "Дако-римские войны", ro: "Războaiele daco-romane" },
                        { slug: "roman_dacia", ru: "Римская Дакия", ro: "Dacia romană" },
                        { slug: "roman_withdrawal", ru: "Уход римлян из Дакии", ro: "Retragerea romană din Dacia" },
                        { slug: "great_migration", ru: "Великое переселение народов (IV–VIII вв.)", ro: "Marea migrație a popoarelor (sec. IV–VIII)" }
                    ]
                }
            ]
        },
        {
            epochId: 3,
            title: { ru: "3. Средневековье", ro: "3. Evul Mediu" },
            groups: [
                {
                    key: "world",
                    title: { ru: "Мир", ro: "Lumea" },
                    items: [
                        { slug: "great_migration_again", ru: "Великое переселение народов", ro: "Marea migrație a popoarelor" },
                        { slug: "islam_appearance", ru: "Появление ислама", ro: "Apariția islamului" },
                        { slug: "rus_christianization", ru: "Крещение Руси", ro: "Creștinarea Rusiei" },
                        { slug: "church_split", ru: "Разделение христианства", ro: "Marea Schismă a Bisericii" },
                        { slug: "crusades", ru: "Крестовые походы", ro: "Cruciadele" },
                        { slug: "inquisition", ru: "Инквизиция", ro: "Inchiziția" },
                        { slug: "jeanne_darc", ru: "Жанна д’Арк", ro: "Ioana d’Arc" },
                        { slug: "fall_constantinople", ru: "Падение Константинополя", ro: "Căderea Constantinopolului" },
                        { slug: "renaissance", ru: "Эпоха Ренессанса", ro: "Epoca Renașterii" },
                        { slug: "america_discovery", ru: "Открытие Америки", ro: "Descoperirea Americii" }
                    ]
                },
                {
                    key: "moldova",
                    title: { ru: "Молдова", ro: "Moldova" },
                    items: [
                        { slug: "slavic_settlement", ru: "Заселение славянами (VI–VIII вв.)", ro: "Așezarea slavilor (sec. VI–VIII)" },
                        { slug: "mongol_invasion_europe", ru: "Монгольское нашествие на Европу", ro: "Invazia mongolă în Europa" },
                        { slug: "golden_horde_influence", ru: "Влияние Золотой Орды", ro: "Influența Hoardei de Aur" },
                        { slug: "moldavian_principality_foundation", ru: "Основание Молдавского княжества", ro: "Întemeierea Principatului Moldovei" },
                        { slug: "stefan_cel_mare_blossom", ru: "Расцвет при Штефане чел Маре", ro: "Apogeul sub Ștefan cel Mare" }
                    ]
                }
            ]
        },
        {
            epochId: 4,
            title: { ru: "4. Новое время", ro: "4. Epoca modernă" },
            groups: [
                {
                    key: "world",
                    title: { ru: "Мир", ro: "Lumea" },
                    items: [
                        { slug: "reformation", ru: "Реформация", ro: "Reforma" },
                        { slug: "scientific_revolution", ru: "Научная революция", ro: "Revoluția științifică" },
                        { slug: "enlightenment", ru: "Эпоха Просвещения", ro: "Epoca Luminilor" },
                        { slug: "usa_independence", ru: "Независимость США", ro: "Independența SUA" },
                        { slug: "industrial_revolution", ru: "Промышленная революция", ro: "Revoluția industrială" },
                        { slug: "french_revolution", ru: "Французская революция", ro: "Revoluția Franceză" },
                        { slug: "napoleonic_wars", ru: "Наполеоновские войны", ro: "Războaiele napoleoniene" },
                        { slug: "europe_revolutions", ru: "Революции в Европе", ro: "Revoluțiile din Europa" },
                        { slug: "colonial_empires", ru: "Колониальные империи", ro: "Imperiile coloniale" }
                    ]
                },
                {
                    key: "moldova",
                    title: { ru: "Молдова", ro: "Moldova" },
                    items: [
                        { slug: "moldova_vassal", ru: "Молдова – вассал Османской империи", ro: "Moldova – vasal al Imperiului Otoman" },
                        { slug: "bessarabia_russian_empire", ru: "Бессарабия в составе Российской империи", ro: "Basarabia în componența Imperiului Rus" },
                        { slug: "union_with_walachia", ru: "Объединение с Валахией", ro: "Unirea cu Țara Românească" }
                    ]
                }
            ]
        },
        {
            epochId: 5,
            title: { ru: "5. Новейшее время", ro: "5. Epoca contemporană" },
            groups: [
                {
                    key: "world",
                    title: { ru: "Мир", ro: "Lumea" },
                    items: [
                        { slug: "ww1", ru: "Первая мировая война", ro: "Primul Război Mondial" },
                        { slug: "russian_revolution", ru: "Революция в России", ro: "Revoluția din Rusia" },
                        { slug: "russian_civil_war", ru: "Гражданская война в России", ro: "Războiul civil din Rusia" },
                        { slug: "ussr_creation", ru: "Образование СССР", ro: "Formarea URSS" },
                        { slug: "ww2", ru: "Вторая мировая война", ro: "Al Doilea Război Mondial" },
                        { slug: "cold_war", ru: "Холодная война", ro: "Războiul Rece" },
                        { slug: "spaceflight", ru: "Полёт человека в космос", ro: "Zborul omului în spațiu" },
                        { slug: "moon_landing", ru: "Высадка человека на Луну", ro: "Aselenizarea" },
                        { slug: "ussr_collapse", ru: "Распад СССР", ro: "Prăbușirea URSS" }
                    ]
                },
                {
                    key: "moldova",
                    title: { ru: "Молдова", ro: "Moldova" },
                    items: [
                        { slug: "bessarabia_romania", ru: "Бессарабия в составе Румынии", ro: "Basarabia în componența României" },
                        { slug: "bessarabia_ussr", ru: "Бессарабия в составе СССР", ro: "Basarabia în componența URSS" },
                        { slug: "moldova_independence", ru: "Независимость Молдовы", ro: "Independența Republicii Moldova" },
                        { slug: "transnistrian_conflict", ru: "Приднестровский конфликт", ro: "Conflictul transnistrean" }
                    ]
                }
            ]
        }
    ];

    const TOC_SCROLL_KEY = "timeline_toc_scroll";

    let didDragTimeline = false;

    function updateTimelineImages(lang) {
        var file = (lang === "ro") ? "timeline_ro.jpg" : "timeline.jpg";
        var src = "/assets/images/" + file;
        var barImg = document.querySelector(".timeline-image");
        var zoomImg = document.querySelector(".timeline-zoom-image");

        // если шапка ещё не подгрузилась, пробуем чуть позже
        if (!barImg && !zoomImg) {
            setTimeout(function () { updateTimelineImages(lang); }, 80);
            return;
        }

        if (barImg && !barImg.src.endsWith(src)) {
            barImg.src = src;
        }
        if (zoomImg && !zoomImg.src.endsWith(src)) {
            zoomImg.src = src;
        }
    }


    function getContext() {
        const path = window.location.pathname || "";
        if (path.indexOf("/ru/") !== -1) return "ruPage";
        if (path.indexOf("/ro/") !== -1) return "roPage";
        return "root";
    }

    function makeHref(slug, lang, context) {
        if (context === "root") {
            return (lang === "ru" ? "ru/" : "ro/") + slug + ".html";
        }
        if (context === "ruPage") {
            return (lang === "ru" ? "" : "../ro/") + slug + ".html";
        }
        if (context === "roPage") {
            return (lang === "ro" ? "" : "../ru/") + slug + ".html";
        }
        return "#";
    }

    function renderTOC() {
        const container = document.getElementById("toc");
        if (!container) return;

        const context = getContext();
        let html = "";
        html += '<div class="toc-search">';
        html += '<input type="text" id="toc-search-input" placeholder=""/>';
        html += "</div>";

        TOC_DATA.forEach(section => {
            html += '<div class="toc-section">';
            html += '<h2 data-lang="ru">' + section.title.ru + "</h2>";
            html += '<h2 data-lang="ro">' + section.title.ro + "</h2>";

            section.groups.forEach(group => {
                if (!group.items || !group.items.length) return;
                html += '<h3 data-lang="ru">' + group.title.ru + "</h3>";
                html += '<h3 data-lang="ro">' + group.title.ro + "</h3>";
                html += "<ul>";
                group.items.forEach(item => {
                    const hrefRu = makeHref(item.slug, "ru", context);
                    const hrefRo = makeHref(item.slug, "ro", context);
                    html += "<li>";
                    html += '<a href="' + hrefRu + '" data-lang="ru" data-article-slug="' + item.slug + '">' + item.ru + "</a>";
                    html += '<a href="' + hrefRo + '" data-lang="ro" data-article-slug="' + item.slug + '">' + item.ro + "</a>";
                    if (item.children && item.children.length) {
                        html += '<ul class="toc-sublist">';
                        item.children.forEach(child => {
                            const childHrefRu = makeHref(child.slug, "ru", context);
                            const childHrefRo = makeHref(child.slug, "ro", context);
                            html += "<li>";
                            html += '<a href="' + childHrefRu + '" data-lang="ru" data-article-slug="' + child.slug + '">' + child.ru + "</a>";
                            html += '<a href="' + childHrefRo + '" data-lang="ro" data-article-slug="' + child.slug + '">' + child.ro + "</a>";
                            html += "</li>";
                        });
                        html += "</ul>";
                    }
                    html += "</li>";
                });
                html += "</ul>";
            });

            html += "</div>";
        });

        container.innerHTML = html;
    }

    function applyLanguage(lang) {
        const html = document.documentElement;
        html.classList.remove("lang-ru", "lang-ro");
        html.classList.add("lang-" + lang);
        try {
            localStorage.setItem("timeline_lang", lang);
        } catch (e) {}

        const switcherButtons = document.querySelectorAll(".lang-switcher button");
        switcherButtons.forEach(btn => {
            btn.classList.toggle("active", btn.dataset.setLang === lang);
        });

        updateTimelineImages(lang);

        const searchInput = document.getElementById("toc-search-input");
        if (searchInput) {
            searchInput.placeholder = (lang === "ru")
                ? "Начните вводить название..."
                : "Scrie titlul articolului...";
        }
    }

    function initLanguage() {
        const context = getContext();
        let initial = "ru";
        if (context === "ruPage") {
            initial = "ru";
        } else if (context === "roPage") {
            initial = "ro";
        } else {
            try {
                const saved = localStorage.getItem("timeline_lang");
                if (saved === "ro" || saved === "ru") initial = saved;
            } catch (e) {}
        }

        applyLanguage(initial);
    }

    function initTocSearch() {
        const input = document.getElementById("toc-search-input");
        if (!input) return;

        input.addEventListener("input", () => {
            const query = input.value.trim().toLowerCase();
            const sections = document.querySelectorAll(".toc-section");

            sections.forEach(section => {
                let sectionHasMatch = false;
                const lis = section.querySelectorAll("li");

                lis.forEach(li => {
                    const text = li.textContent.toLowerCase();
                    const match = text.indexOf(query) !== -1;
                    li.style.display = match ? "" : "none";
                    if (match) sectionHasMatch = true;
                });

                section.style.display = (query === "" || sectionHasMatch) ? "" : "none";
            });
        });
    }

    // Global click delegation for language switcher
    document.addEventListener("click", function(e) {
        const btn = e.target && e.target.closest ? e.target.closest("[data-set-lang]") : null;
        if (!btn) return;
        const lang = btn.dataset ? btn.dataset.setLang : null;
        if (lang !== "ru" && lang !== "ro") return;

        applyLanguage(lang);

        // For article pages, also switch between /ru/... and /ro/... versions
        try {
            const path = window.location.pathname || "";
            const context = getContext();

            if (context === "ruPage" || context === "roPage") {
                const fromPrefix = (context === "ruPage") ? "/ru/" : "/ro/";
                const toPrefix   = (context === "ruPage") ? "/ro/" : "/ru/";

                if ((context === "ruPage" && lang === "ro") ||
                    (context === "roPage" && lang === "ru")) {

                    const idx = path.indexOf(fromPrefix);
                    if (idx !== -1) {
                        const rest = path.substring(idx + fromPrefix.length);
                        const newPath = toPrefix + rest;
                        window.location.pathname = newPath;
                    }
                }
            }
        } catch (e) {
            // ignore
        }
    });

    function ensureFavicons() {
        const head = document.head;
        if (!head) return;

        if (!head.querySelector('link[rel="icon"]')) {
            const l = document.createElement('link');
            l.rel = 'icon';
            l.type = 'image/x-icon';
            l.href = '/favicon.ico';
            head.appendChild(l);
        }
        if (!head.querySelector('link[rel="icon"][type="image/png"]')) {
            const l = document.createElement('link');
            l.rel = 'icon';
            l.type = 'image/png';
            l.sizes = '192x192';
            l.href = '/assets/images/flag-192.png';
            head.appendChild(l);
        }
        if (!head.querySelector('link[rel="apple-touch-icon"]')) {
            const l = document.createElement('link');
            l.rel = 'apple-touch-icon';
            l.sizes = '180x180';
            l.href = '/assets/images/flag-180.png';
            head.appendChild(l);
        }
    }

    const SLOGANS = {
        ru: [
            "Молдова на линии времени мира",
            "История мира через призму Молдовы",
            "От Штефана чел Маре до наших дней",
            "Хронология для школьников и подростков",
            "Мир и Молдова на одном таймлайне"
        ],
        ro: [
            "Moldova pe linia timpului lumii",
            "Istoria lumii prin prisma Moldovei",
            "De la Ștefan cel Mare până azi",
            "Cronologie pentru elevi și adolescenți",
            "Lumea și Moldova pe același timeline"
        ]
    };

    function initSlogan() {
        const ruNode = document.getElementById("subtitle-ru");
        const roNode = document.getElementById("subtitle-ro");
        if (!ruNode || !roNode) {
            setTimeout(initSlogan, 80);
            return;
        }
        let index = Math.floor(Math.random() * SLOGANS.ru.length);

        function setTexts() {
            ruNode.textContent = SLOGANS.ru[index];
            roNode.textContent = SLOGANS.ro[index];
        }

        function update() {
            ruNode.style.opacity = 0;
            roNode.style.opacity = 0;
            setTimeout(() => {
                index = (index + 1) % SLOGANS.ru.length;
                setTexts();
                ruNode.style.opacity = 1;
                roNode.style.opacity = 1;
            }, 400);
        }

        ruNode.style.transition = "opacity 0.4s ease";
        roNode.style.transition = "opacity 0.4s ease";
        setTexts();
        ruNode.style.opacity = 1;
        roNode.style.opacity = 1;

        setInterval(update, 5000); // 5 секунд
    }

    function restoreTocScroll() {
        const toc = document.getElementById("toc");
        if (!toc) return;
        const context = getContext();

        try {
            if (context === "root") {
                sessionStorage.removeItem(TOC_SCROLL_KEY);
                toc.scrollTop = 0;
                return;
            }
            const saved = sessionStorage.getItem(TOC_SCROLL_KEY);
            if (saved !== null) {
                const val = parseInt(saved, 10);
                if (!isNaN(val)) toc.scrollTop = val;
            }
        } catch (e) {}
    }


    function scrollToTocSearch() {
        const searchInput = document.getElementById("toc-search-input");
        if (!searchInput) return;

        const rect = searchInput.getBoundingClientRect();

        // Учитываем высоту фиксированной шапки сайта, чтобы поле поиска не пряталось под ней
        let headerOffset = 0;
        const header = document.querySelector(".site-header");
        if (header) {
            const headerRect = header.getBoundingClientRect();
            headerOffset = headerRect.height || 0;
        }

        const extraOffset = 40; // чуть выше, чтобы поле поиска было явно в зоне видимости
        const y =
            rect.top +
            (window.scrollY || window.pageYOffset) -
            headerOffset -
            extraOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth"
        });
    }

    function initTocJumpButtons() {
        const isMobile = window.matchMedia && window.matchMedia("(max-width: 899px)").matches;
        if (!isMobile) return;

        const context = getContext();

        // Главная страница
        if (context === "root") {
            const indexSection = document.querySelector(".index-content");
            if (indexSection) {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "toc-jump-btn toc-jump-btn--index";
                btn.setAttribute("aria-label", "Открыть оглавление");
                btn.innerHTML = '<div class="toc-jump-btn-inner"><span></span><span></span><span></span></div>';
                indexSection.style.position = indexSection.style.position || "relative";
                indexSection.insertBefore(btn, indexSection.firstChild);

                btn.addEventListener("click", function () {
                    scrollToTocSearch();
                });
            }
        } else {
            // Страницы статей
            const header = document.querySelector(".article-header");
            if (header) {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "toc-jump-btn toc-jump-btn--article";
                btn.setAttribute("aria-label", "Deschide cuprinsul / Открыть оглавление");
                btn.innerHTML = '<div class="toc-jump-btn-inner"><span></span><span></span><span></span></div>';
                header.appendChild(btn);

                btn.addEventListener("click", function () {
                    scrollToTocSearch();
                });
            }
        }
    }

    function initTocScrollPersistence() {
        const toc = document.getElementById("toc");
        if (!toc) return;

        // Восстанавливаем позицию при загрузке (для всех страниц, кроме главной)
        restoreTocScroll();

        // Сохраняем позицию при клике по ссылке внутри TOC (только на десктопе)
        toc.addEventListener("click", (e) => {
            const link = e.target.closest("a");
            if (!link) return;

            if (window.matchMedia("(min-width: 900px)").matches) {
                try {
                    sessionStorage.setItem(TOC_SCROLL_KEY, String(toc.scrollTop));
                } catch (err) {}
            } else {
                try {
                    sessionStorage.removeItem(TOC_SCROLL_KEY);
                } catch (err) {}
            }
        });
    }

    function highlightCurrentTocItem() {
        const toc = document.getElementById("toc");
        if (!toc) return;

        const path = window.location.pathname || "";
        const m = path.match(/\/(ru|ro)\/([^\/]+)\.html$/);
        if (!m) return;

        const slug = m[2];
        const links = toc.querySelectorAll('[data-article-slug="' + slug + '"]');
        if (!links.length) return;

        links.forEach(link => {
            link.classList.add("toc-current");
            const li = link.closest("li");
            if (li) li.classList.add("toc-current");
        });
    }


    function initTimelineSticky() {
        const bar = document.querySelector(".timeline-bar");
        if (!bar) {
            // ждём, пока шапка с таймлайном подгрузится
            setTimeout(initTimelineSticky, 80);
            return;
        }

        // создаём плейсхолдер, чтобы не прыгал контент при фиксации
        const placeholder = document.createElement("div");
        placeholder.style.height = bar.offsetHeight + "px";
        placeholder.style.display = "none";
        bar.parentNode.insertBefore(placeholder, bar);

        // исходное положение таймлайна относительно документа
        const initialOffsetTop = bar.getBoundingClientRect().top + window.scrollY;

        let isFixed = false;

        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY || window.pageYOffset;
            const shouldFix = scrollY >= initialOffsetTop;

            if (shouldFix && !isFixed) {
                bar.classList.add("timeline-bar-fixed");
                placeholder.style.display = "block";
                isFixed = true;
            } else if (!shouldFix && isFixed && scrollY < initialOffsetTop) {
                bar.classList.remove("timeline-bar-fixed");
                placeholder.style.display = "none";
                isFixed = false;
            }
        });
    }



    function initTimelineDragScroll() {
        const container = document.querySelector(".timeline-scroll");
        if (!container) {
            // шапка может подгружаться чуть позже через fetch — пробуем ещё раз
            setTimeout(initTimelineDragScroll, 80);
            return;
        }

        const img = container.querySelector(".timeline-image");
        if (img) {
            img.draggable = false;
        }

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        container.addEventListener("mousedown", (e) => {
            if (e.button !== 0) return; // только левая кнопка
            e.preventDefault();
            isDown = true;
            didDragTimeline = false;
            container.classList.add("is-dragging");
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        window.addEventListener("mouseup", () => {
            if (!isDown) return;
            isDown = false;
            container.classList.remove("is-dragging");
        });

        container.addEventListener("mouseleave", () => {
            if (!isDown) return;
            isDown = false;
            container.classList.remove("is-dragging");
        });

        window.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = x - startX;
            if (Math.abs(walk) > 3) {
                didDragTimeline = true;
            }
            container.scrollLeft = scrollLeft - walk;
        });
    }

function initTimelineZoom() {
        const barImage = document.querySelector(".timeline-image");
        const overlay = document.getElementById("timeline-zoom-overlay");
        if (!barImage || !overlay) {
            // ждём, пока шапка с таймлайном подгрузится
            setTimeout(initTimelineZoom, 80);
            return;
        }

        const overlayImage = overlay.querySelector(".timeline-zoom-image");
        const zoomInner = overlay.querySelector(".timeline-zoom-inner");

        barImage.addEventListener("click", () => {
            // если до этого было перетаскивание, не считаем это кликом для зума
            if (didDragTimeline) {
                didDragTimeline = false;
                return;
            }
            if (overlayImage) {
                overlayImage.src = barImage.src;
            }
            overlay.classList.add("is-visible");
        });

        // ПК: перетаскивание увеличенного таймлайна «ладонью»
        if (zoomInner) {
            let isDown = false;
            let startX = 0;
            let scrollLeft = 0;

            zoomInner.addEventListener("mousedown", (e) => {
                if (e.button !== 0) return; // только левая кнопка
                isDown = true;
                zoomInner.classList.add("is-dragging");
                startX = e.pageX - zoomInner.offsetLeft;
                scrollLeft = zoomInner.scrollLeft;
                e.preventDefault();
                e.stopPropagation(); // не даём оверлею воспринять это как клик для закрытия
            });

            window.addEventListener("mouseup", () => {
                if (!isDown) return;
                isDown = false;
                zoomInner.classList.remove("is-dragging");
            });

            zoomInner.addEventListener("mouseleave", () => {
                if (!isDown) return;
                isDown = false;
                zoomInner.classList.remove("is-dragging");
            });

            window.addEventListener("mousemove", (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - zoomInner.offsetLeft;
                const walk = x - startX;
                zoomInner.scrollLeft = scrollLeft - walk;
            });

            // клик внутри не должен закрывать оверлей
            zoomInner.addEventListener("click", (e) => {
                e.stopPropagation();
            });
        }

        overlay.addEventListener("click", () => {
            overlay.classList.remove("is-visible");
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                overlay.classList.remove("is-visible");
            }
        });
    }



function initTimelineHandHint() {
    const container = document.querySelector(".timeline-scroll");
    if (!container) return;

    const STORAGE_KEY = "timelineHandHintShown_v1";

    // Если уже показывали подсказку – выходим
    try {
        if (window.localStorage && localStorage.getItem(STORAGE_KEY) === "1") {
            return;
        }
    } catch (e) {
        // localStorage может быть недоступен — тогда просто показываем 1 раз за сессию
    }

    // Определяем тач/ПК + подстрахуемся по ширине экрана
    const isTouchDevice =
        ("ontouchstart" in window) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);

    const isCoarsePointer =
        window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

    const isNarrowLayout =
        window.matchMedia && window.matchMedia("(max-width: 768px)").matches;

    const isTouch = !!(isTouchDevice || isCoarsePointer || isNarrowLayout);

    // Создаём DOM подсказки
    const hint = document.createElement("div");
    hint.className =
        "timeline-hand-hint " +
        (isTouch ? "timeline-hand-hint--mobile" : "timeline-hand-hint--desktop");

    hint.innerHTML =
        '<div class="timeline-hand-hint-bubble">' +
          '<div class="timeline-hand-icon"></div>' +
          '<div class="timeline-hand-arrows">' +
            '<span class="arrow arrow-left">←</span>' +
            '<span class="arrow arrow-right">→</span>' +
          "</div>" +
        "</div>";

    container.appendChild(hint);

    let savedToStorage = false;

    function saveOnceAndDisable() {
        if (savedToStorage) return;
        savedToStorage = true;

        try {
            if (window.localStorage) {
                localStorage.setItem(STORAGE_KEY, "1");
            }
        } catch (e) {}
    }

    function detachListeners() {
        ["mousedown", "touchstart", "wheel"].forEach((evt) => {
            container.removeEventListener(evt, onUserInteraction);
        });
        window.removeEventListener("keydown", onKeyDown);
    }

    function hideVisual() {
        // Добавляем класс для fade-out анимации и потом удаляем из DOM
        hint.classList.add("timeline-hand-hint--hide");
        setTimeout(() => {
            if (hint.parentNode) {
                hint.parentNode.removeChild(hint);
            }
        }, 260);
    }

    function onUserInteraction() {
        // Реальное взаимодействие: запоминаем навсегда и убираем подсказку
        saveOnceAndDisable();
        detachListeners();
        hideVisual();
    }

    function onKeyDown(e) {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            saveOnceAndDisable();
            detachListeners();
            hideVisual();
        }
    }

    // Любое первое взаимодействие с таймлайном – гасим подсказку и больше не показываем
    ["mousedown", "touchstart", "wheel"].forEach((evt) => {
        container.addEventListener(evt, onUserInteraction, { passive: true });
    });
    window.addEventListener("keydown", onKeyDown);

    // Авто-скрытие через ~2.2 секунды БЕЗ записи в localStorage
    // (если пользователь так и не взаимодействовал, при следующем визите подсказка снова появится)
    setTimeout(hideVisual, 2200);
}


document.addEventListener("DOMContentLoaded", () => {
        initTimelineSticky();
        ensureFavicons();
        initSlogan();

        renderTOC();
        initLanguage();
        initTocSearch();
        initTocScrollPersistence();
        highlightCurrentTocItem();
        initTocJumpButtons();
        initTimelineDragScroll();
        initTimelineZoom();
        setTimeout(()=>initTimelineHandHint(),3500);
    });
})();