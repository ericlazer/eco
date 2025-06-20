# Nexio Ecosystem Demo

This repository contains an example implementation of the **Nexio Ecosystem** site described in the Windsurf implementation guide. It includes:

- `index.html` – main ecosystem page with partner cards and modal interactions
- `styles/nexio.css` – shared styling for all pages
- `scripts/partners-data.js` – data for 24 ecosystem partners
- `scripts/ecosystem.js` – JavaScript for rendering cards and modals
- `generate-guides.js` – script to generate individual partner guides
- `guides/` – folder where the generated guide pages are stored

## Local Setup

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd eco
   ```
2. **Install Node.js** (version 16 or later). No other dependencies are required.
3. **Generate the partner guides**
   ```bash
   node generate-guides.js
   ```
   This creates HTML files in the `guides/` directory.
4. **Serve the files locally**. Any static file server will work. Two quick options are:
   ```bash
   # Python
   python -m http.server 8000

   # or Node.js
   npx http-server -p 8000
   ```
5. **Open** `http://localhost:8000/index.html` in your browser.

The main page lists all partners and allows filtering by category. Clicking a partner opens a modal with a link to the detailed guide page generated in step 3.

Feel free to modify the partner data in `scripts/partners-data.js` and run the generator again to update the guides.
