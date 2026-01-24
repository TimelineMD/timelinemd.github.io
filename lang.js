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
        html += '<label for="toc-search-input" data-lang="ru">Поиск по оглавлению</label>';
        html += '<label for="toc-search-input" data-lang="ro">Căutare în cuprins</label>';
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

    document.addEventListener("DOMContentLoaded", () => {
        ensureFavicons();
        initSlogan();

        renderTOC();
        initLanguage();
        initTocSearch();
        initTocScrollPersistence();
        highlightCurrentTocItem();
    });
})()function initTimelineZoom() {
        const barImage = document.querySelector(".timeline-image");
        const overlay = document.getElementById("timeline-zoom-overlay");
        if (!barImage || !overlay) return;

        const overlayImage = overlay.querySelector(".timeline-zoom-image");
        const zoomInner = overlay.querySelector(".timeline-zoom-inner");

        barImage.addEventListener("click", () => {
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

            // клик по самой картинке/внутреннему блоку не должен закрывать оверлей
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
;