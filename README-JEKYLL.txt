This is a Jekyll config driven version.

IMPORTANT
- Change _config.yml to update business name, phone, email, service area and logo.
- Those changes only appear after GitHub Pages or Jekyll rebuilds the site.
- If you open the HTML files directly on your computer, {{ site.* }} variables will not render.
- Upload the CONTENTS of this folder to the ROOT of your GitHub repo.

Extra config fields:
- contact_name controls labels like WhatsApp James
- map_query controls the homepage Google map location


FULL TOWN SYSTEM
- Town data now lives in _data/towns.yml
- Town pages in /areas/ are now tiny front matter files using _layouts/town.html
- pages/areas.html and the homepage now pull town links from towns.yml
- Add a new town by adding it to _data/towns.yml and creating a matching file in /areas/ with the same slug
