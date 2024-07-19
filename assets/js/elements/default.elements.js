/**
 * Default Elements Templates
 * entropyis.me | Entropy Is Software Development
 * Deigns for Header, Navigation and Footer Elements
 */


/**
 * Site Header & Nav
 */

// Header Logo
$("<a>", {
    href : "index.html",
    class : "logo",
    html : `<img src="images/eiv1_flat.png" alt="Entropy Is Logo" />`
}).appendTo("#header");

// Navigation Links
var navLinks = []
navLinks.push(`<a href="index.html">Home</a>`)

$("<nav>", {
    html : navLinks.join( " | " )
}).appendTo("#header");


/**
 * Site Footer
 */

$("<div>", {
    class : "inner",
    id : "footer-inner"
}).appendTo("#footer");

$("<ul>", {
    class : "icons",
    id : "ext-links"
}).appendTo("#footer-inner");

$("<ul>", {
    class : "copyright",
    id : "copyright"
}).appendTo("#footer-inner");

// External Links (Footer)
var extLinks = []
extLinks.push(`<a href="https://www.youtube.com/@entropy-is"><i class="fa-brands fa-youtube"></i></a>`)
extLinks.push(`<a href="https://x.com/entorpyis"><i class="fa-brands fa-x-twitter"></i></a>`)
extLinks.push(`<a href="https://store.steampowered.com/search/?developer=Entropy%20Is%20Software%20Development"><i class="fa-brands fa-steam"></i></a>`)
extLinks.push(`<a href="https://github.com/EntropyIs"><i class="fa-brands fa-github"></i></a>`)
extLinks.push(`<a href="https://entropyis.itch.io"><i class="fa-brands fa-itch-io"></i></a>`)

$.each(extLinks, function(index, link){
    $("<li>", {
        html : link
    }).appendTo("#ext-links");
});

// Copyright Lines (Footer)
var copyrightLines = [];
copyrightLines.push(`&copy; Copyright 2024, Entropy Is Software Development. All rights reserved.`);
copyrightLines.push(`Design: <a href="http://html5up.net">HTML5 UP</a>`);
copyrightLines.push(`<a href="#">Privacy Policy</a>`);

$.each(copyrightLines, function(index, line){
    $("<li>", {
        html : line
    }).appendTo("#copyright");
});
