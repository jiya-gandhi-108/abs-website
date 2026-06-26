/* ABS Business Services — shared header & footer components.
   Single source of truth for the navbar and footer across every page.
   Injects markup into <div id="abs-header"></div> and <div id="abs-footer"></div>,
   and highlights the active page automatically. */
(function () {
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (page === "") page = "index.html";

  var navItems = [
    { href: "about.html", label: "About" },
    { href: "services.html", label: "Services" },
    { href: "industries.html", label: "Industries" },
    { href: "careers.html", label: "Careers" },
    { href: "blog.html", label: "Resources" },
    { href: "contact.html", label: "Contact" }
  ];

  var links = navItems
    .map(function (i) {
      var active = i.href === page;
      return (
        '<a href="' + i.href + '"' +
        (active ? ' class="active" aria-current="page"' : "") +
        ">" + i.label + "</a>"
      );
    })
    .join("");

  var header =
    '<header class="site-header">' +
      '<div class="container nav">' +
        '<a class="brand" href="index.html">' +
          '<img class="brand-logo" src="assets/abs-logo.png" alt="ABS Business Services Pvt. Ltd. logo">' +
        "</a>" +
        '<nav class="nav-links" aria-label="Primary navigation">' + links + "</nav>" +
        '<div class="nav-actions">' +
          '<a class="btn btn-outline" href="careers.html">Apply</a>' +
          '<a class="btn btn-primary" href="employers.html">Request Staff</a>' +
          '<button class="menu-toggle" aria-label="Open menu" aria-expanded="false"></button>' +
        "</div>" +
      "</div>" +
    "</header>";

  var year = new Date().getFullYear();
  var footer =
    '<footer class="footer">' +
      '<div class="container footer-grid">' +
        "<div>" +
          "<h3>ABS Business Services Pvt. Ltd.</h3>" +
          "<p>Your HR Growth Partner for recruitment, contract staffing, payroll, compliance and managed workforce programs across India and overseas markets.</p>" +
          '<p style="margin-top:14px"><a href="mailto:ssinghal@abs-bs.com">ssinghal@abs-bs.com</a><br><a href="tel:+919999917353">+91-99999-17353</a></p>' +
        "</div>" +
        "<div><h3>Company</h3><ul>" +
          '<li><a href="about.html">About</a></li>' +
          '<li><a href="industries.html">Industries</a></li>' +
          '<li><a href="careers.html">Careers</a></li>' +
          '<li><a href="blog.html">Resources</a></li>' +
        "</ul></div>" +
        "<div><h3>Services</h3><ul>" +
          '<li><a href="services.html">Contract Staffing</a></li>' +
          '<li><a href="services.html#payroll">Payroll Management</a></li>' +
          '<li><a href="services.html#compliance">Compliance</a></li>' +
          '<li><a href="services.html#naps">NAPS &amp; NATS</a></li>' +
          '<li><a href="services.html#assessment">Behavioral Assessment</a></li>' +
        "</ul></div>" +
        "<div><h3>Contact</h3>" +
          "<p>401, 4th Floor, SSR Corporate Park, Opposite NHPC Metro Station, Main Mathura Road, Faridabad - 121003, Haryana, India</p>" +
          '<p style="margin-top:10px"><a href="contact.html">Get in touch &rarr;</a></p>' +
        "</div>" +
      "</div>" +
      '<div class="container copyright">&copy; ' + year +
        ' ABS Business Services Pvt. Ltd. &middot; <a href="privacy.html">Privacy</a> &middot; <a href="terms.html">Terms</a></div>' +
    "</footer>";

  var h = document.getElementById("abs-header");
  if (h) h.outerHTML = header;
  var f = document.getElementById("abs-footer");
  if (f) f.outerHTML = footer;
})();
