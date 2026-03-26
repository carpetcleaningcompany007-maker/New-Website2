JEKYLL SITE QUICK GUIDE

FAST REBRAND
1. Open _config.yml
2. Change these values:
   business_name
   title
   phone
   phone_link
   email
   website
   url
   logo_url
   contact_name
   service_area
   facebook_url
   instagram_url
   formspree_endpoint
3. Build the site through Jekyll or GitHub Pages.

Because the layouts and includes pull the main brand details from _config.yml, most branding updates in one place.

ADD A NEW AREA
1. Add the town to _data/towns.yml
2. Duplicate one file in areas/ and change:
   town
   slug
   town_heading
3. Duplicate one existing town folder in locations/ and rename it to the new slug
4. Keep these four service pages in the folder:
   carpet-cleaning.html
   upholstery-cleaning.html
   stain-removal.html
   moth-treatment.html
5. Update the town name and slug in the front matter of those files

REMOVE AN AREA
1. Remove the town from _data/towns.yml
2. Delete the matching file from areas/
3. Delete the matching folder from locations/

FORMS
The main endpoint is in _config.yml
formspree_endpoint: https://formspree.io/f/REPLACE_WITH_YOUR_CODE

FORM STRATEGY
Home page keeps the main hero form.
Internal pages use the quick contact card only.
No bottom quote form should appear on town pages, service town pages, Services page or Areas page.

SEO
Town and town service titles build automatically from the layouts if seo_title is not set.
This makes rebranding easier and keeps titles more consistent.
