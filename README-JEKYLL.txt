JW Carpet Care Jekyll build notes

This version has been rebuilt around Jekyll data files so the local pages are easier to maintain and harder to break.

Main files to edit
1. _config.yml
   Update business details, social links and formspree_endpoint.
2. _data/towns.yml
   Add, remove or rename towns here.
3. _data/services.yml
   Edit service names and supporting text here.

Local page structure
- /areas/TOWN.html uses _layouts/town.html
- /locations/TOWN/SERVICE.html uses _layouts/service-town.html

Every town now has matching local pages for all services listed in _data/services.yml.
If you add a new town, create a matching file in /areas/ and the matching service files in /locations/TOWN/ using the same front matter pattern already in the site.

Formspree
Put your real endpoint into _config.yml:
formspree_endpoint: https://formspree.io/f/yourcode

Canonical domain
Canonicals and schema now use https://jwcarpetcare.co.uk
