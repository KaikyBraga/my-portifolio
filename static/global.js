// console.log("IT’S ALIVE!");

// console.log('3' == 3);
// console.log('3' === 3);

// function $$ (selector, context = document) {
//     return Array.from(context.querySelectorAll(selector));
// }

// let navLinks = $$("nav a ");

// console.log(navLinks);

// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

// currentLink.classList.add("current");

let pages = [
    {url: "", title: "Home"},
    {url: "contact/", title: "Contacts"},
    {url: "projects/", title: "Projects"},
    {url: "https://github.com/KaikyBraga/Visualizacao", title: "Repositório"}
];

let nav = document.createElement("nav");
document.body.prepend(nav);

const ARE_WE_HOME = document.documentElement.classList.contains("home");

// for (let p of pages) {
//     let url = p.url;
//     let title = p.title;
//     // Create link and add it to nav
//     if (!ARE_WE_HOME && !url.startsWith("http")) {
//         url = "../" + url;
//     }

//     let a = document.createElement("a");
//     a.href = url;
//     a.textContent = title;

//     if (a.host === location.host && a.pathname === location.pathname) {
//         a.classList.add("current");
//     }

//     if (a.host != location.host) {
//         a.setAttribute("target", "_blank");
//     }

//     nav.append(a);
// }