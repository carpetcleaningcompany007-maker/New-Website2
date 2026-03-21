# Jekyll config driven rebuild

Upload the CONTENTS of this folder to the ROOT of your GitHub repo.
Do not upload the outer folder itself.

GitHub Pages settings:
- Source: Deploy from a branch
- Branch: main
- Folder: /(root)

This version is meant to be Jekyll rendered by GitHub Pages.
If you change `_config.yml`, GitHub Pages should rebuild the site and the text should update.

Change these values in `_config.yml`:
- business_name
- phone_display
- phone_link
- whatsapp_link
- email
- website
- facebook_url
- instagram_url
- service_area
- location_list
- logo_url

Important:
- wait a minute or two after pushing changes because Pages needs time to rebuild
- make sure there is NO `.nojekyll` file in the repo root
- if the live site still shows old text, hard refresh the browser and check the Actions/Pages build status on GitHub
