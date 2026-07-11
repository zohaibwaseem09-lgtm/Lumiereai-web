# Lumiere AI — Website

Dark, sleek multi-page site: Home, Services, About, Contact.
Plain HTML/CSS/JS — no build step, no dependencies, free to host forever.

## File structure
```
lumiere-site/
├── index.html      Home
├── services.html    Services
├── about.html        About
├── contact.html     Contact
├── styles.css        Shared styles
├── script.js          Shared JS (nav, animations, form)
```

## How to update content later
Every page is plain HTML — open the file, edit the text between the tags, save.
Shared look (colors, fonts, spacing) lives in `styles.css` at the top under `:root`.
To add a new page: copy `about.html`, rename it, update the `<nav>` links across
all pages to include it.




