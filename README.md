# M4 Plumbing Concept Website

This is a custom-coded static website demo for M4 Plumbing in the Minot, North Dakota area.

## Verified facts used

- Business name: M4 Plumbing
- Area: Minot, North Dakota area
- Phone: 701-500-9051

The site intentionally avoids unverified claims such as certifications, reviews, years in business, awards, licenses, emergency availability, or specific service categories.

## Project structure

```text
m4-plumbing-demo/
  index.html
  assets/
    plumbing-workbench.png
  css/
    styles.css
  js/
    main.js
  vercel.json
  README.md
```

## Notes before using live

- This is an unofficial concept demo, not the official M4 Plumbing website.
- The request-service form is front-end only and does not send messages yet.
- Before publishing as an official site, the business should review the wording and confirm any services, hours, licensing language, and form destination.

## Vercel handoff path

1. Put this folder in a GitHub repository.
2. Import the repository into Vercel.
3. Set the project root to this folder if the repository contains multiple projects.
4. Deploy as a static site.
5. After customer approval and payment, transfer the repository and Vercel project to the customer-owned accounts.

## If Vercel shows a 404

That usually means Vercel was pointed at the wrong folder. The folder Vercel deploys must contain `index.html` directly at its top level. For this demo, that folder is `m4-plumbing-demo/`, not the parent `outputs/` folder.
