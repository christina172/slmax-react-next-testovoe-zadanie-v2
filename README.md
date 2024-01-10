# slmax-react-next-testovoe-zadanie-v2

This is my <b>Image Gallery</b> project. It is built using TypeScript, React, Next.js, NextAuth.js, CSS and Material UI. 

## Description

Visitors of the site can see the images of a collection from Unsplash. They can sort the images by date and by relevance and filter them by different topics (dogs, cats, etc.). All results are paginated (12 images per page). The Gallery component uses masonry layout. 

Users may authenticate with their GitHub account or use hardcoded credentials to log in with username and password (they are used in input placeholders) as the project uses two authentication providers. Authenticated users can add images to favourite. They can view and delete them by going to the '/favourite' page. Favourite images are stored in the LocalStorage. Links to see favourite images and to log in are in the dropdown menu, which can be opened by clicking the account icon on the left of the navbar after the user's name. To navigate to the home page click on the 'Image Gallery' on the right of the navbar.

Used <a href="https://unsplash.com/collections/1424240/animals">Animals</a> collection by <a href="https://unsplash.com/@wsanter">Wilfried Santer</a> from Unsplash.

Live preview: https://image-gallery-app-fecb.onrender.com (please, wait for several minutes for the server to start, hosted on Render).
