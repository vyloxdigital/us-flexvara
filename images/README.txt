FlexVara Guide US — images folder
=================================

Drop your nine image files into this folder, using these exact filenames.
The page references these and nothing else.

File                                  Used where                      Rendered box    Suggested source size
------------------------------------  ------------------------------  --------------  ---------------------
flexvara-6-bottles-guarantee.webp     Hero (LCP) + 6-bottle pack card  560 x 560 (1:1)  1120 x 1120
flexvara-3-bottles-guarantee.webp     3-bottle pack card               380 x 380 (1:1)   760 x 760
flexvara-2-bottles-guarantee.webp     2-bottle pack card               380 x 380 (1:1)   760 x 760
flexvara-review-1.webp                Gallery, first                   560 x 420 (4:3)  1120 x 840
flexvara-review-2.webp                Gallery, second                  560 x 420 (4:3)  1120 x 840
flexvara-review-3.webp                Gallery, third                   560 x 420 (4:3)  1120 x 840
flexvara-guarantee.webp               Refunds section seal             380 x 380 (1:1)   760 x 760
flexvara-bonus-1.webp                 Newsletter bonus                 420 x 560 (3:4)   840 x 1120
favicon.png                           Browser tab + app icon           any              512 x 512

Notes
-----

1. Every image slot uses a fixed CSS aspect-ratio with object-fit: contain.
   Your real files do NOT have to match the ratios above exactly: nothing
   stretches or crops, and the layout will not shift while images load
   (cumulative layout shift stays at zero). Matching the ratio just fits
   the box more tightly around the artwork.

2. flexvara-6-bottles-guarantee.webp is the Largest Contentful Paint image
   on this site. It is preloaded with fetchpriority="high", so keep it lean
   — ideally under 60 KB. Every other image is lazy-loaded.

   NOTE: this differs from the flexvara-us.vercel.app build, where the
   3-bottle image is the hero. If you optimise one file especially hard for
   that site, optimise the 6-bottle file for this one.

3. Keep the .webp extension. The filenames appear in index.html, sitemap.xml
   and the Open Graph / Twitter meta tags; renaming one means editing three.

4. favicon.png should be a square PNG. 512 x 512 covers both the browser tab
   and the Android home-screen icon declared in manifest.json.

5. Export WebP at quality 78-82. Above that the file grows without a visible
   gain at these rendered sizes.
