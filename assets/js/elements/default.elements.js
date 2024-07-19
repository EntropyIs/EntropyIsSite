/**
 * Default Elements Templates
 * entropyis.me | Entropy Is Software Development
 * Deigns for Header, Navigation and Footer Elements
 */

// Header Logo
$("<a>", {
    href : "index.html",
    class : "logo",
    html : `<img src="images/eiv1_flat.png" alt="Entropy Is Logo" />`
}).appendTo("#header");

// Navigation Links
var links = []
links.push(`<a href="index.html">Home</a>`)

$("<nav>", {
    html : links.join( " | " )
}).appendTo("#header");