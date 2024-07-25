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
var navLinks = [];
navLinks.push(`<a href="index.html">Home</a>`);
navLinks.push(
    `<div href="javascript:void(0)" class="menu_dropdown">` +
        `<a class="menu_dropdown-button"><i class="fa-solid fa-bars"></i> Presskit</a>` +
        `<div class="menu_dropdown-content">` +
            `<a href="press_kit/project_kreegan.html">Project Kreegan</a>` +
        `</div>` +
    `</div>`
    );

$("<nav>", {
    html : navLinks.join( " | " ),
    class : "menu"
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
$.getJSON(`assets/data/links.json`, function(link_data){
    var extLinks = [];

    $.each(link_data.social_links, function(index, link){
        extLinks.push(`<a href="` + link.href + `"><i class="` + link.icon + `"></i> ` + link.description + `</a>`);
    })

    $.each(link_data.other_links, function(index, link){
        extLinks.push(`<a href="` + link.href + `"><i class="` + link.icon + `"></i> ` + link.description + `</a>`);
    })

    console.log(extLinks)

    $.each(extLinks, function(index, link){
        $("<li>", {
            html : link
        }).appendTo("#ext-links");
    });
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
