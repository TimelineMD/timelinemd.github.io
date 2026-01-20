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
                    html += '<a href="' + hrefRu + '" data-lang="ru">' + item.ru + "</a>";
                    html += '<a href="' + hrefRo + '" data-lang="ro">' + item.ro + "</a>";
                    if (item.children && item.children.length) {
                        html += '<ul class="toc-sublist">';
                        item.children.forEach(child => {
                            const childHrefRu = makeHref(child.slug, "ru", context);
                            const childHrefRo = makeHref(child.slug, "ro", context);
                            html += "<li>";
                            html += '<a href="' + childHrefRu + '" data-lang="ru">' + child.ru + "</a>";
                            html += '<a href="' + childHrefRo + '" data-lang="ro">' + child.ro + "</a>";
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

        document.querySelectorAll(".lang-switcher button").forEach(btn => {
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

        document.querySelectorAll("[data-set-lang]").forEach(btn => {
            btn.addEventListener("click", () => {
                applyLanguage(btn.dataset.setLang);
            });
        });
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

    document.addEventListener("DOMContentLoaded", () => {
        renderTOC();
        initLanguage();
        initTocSearch();
    });
})();