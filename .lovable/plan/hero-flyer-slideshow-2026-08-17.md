# Hero flyer slideshow

Replace the single hero flyer image with an auto-rotating slideshow of the three new flyers, occupying exactly the same space as today's image.

## Slides
1. Music lineup flyer (R&B / Reggae / Line Dancing acts)
2. Food festival flyer (Smiles On Faces book bag giveaway)
3. Vendors flyer (vendor logo poster)

## Behavior
- Auto-advances every 5 seconds, loops forever, with a soft cross-fade between slides.
- Small dot indicators under the flyer so visitors can jump to a slide; clicking pauses auto-advance briefly.
- Pauses while hovered so people can read a flyer.
- Keeps the existing rounded corners, gold ring, and glow behind the frame.

## Sizing
The three flyers have different shapes (two square, one tall portrait). The slideshow uses one fixed square frame matched to the current flyer's footprint, with each image fitted inside so nothing is cropped and the surrounding layout never shifts.

## Technical notes
- Upload the three uploaded JPGs as CDN assets (`lovable-assets create`) and import their pointer JSON in `src/routes/index.tsx`.
- Add `src/components/FlyerSlideshow.tsx`: array of `{ url, alt }`, `useState` index, `useEffect` interval, absolutely positioned images inside an `aspect-square` container with opacity transitions.
- Swap the `<img>` at the hero into `<FlyerSlideshow />`; point `og:image` / `twitter:image` at the first (music lineup) flyer.
- Retire the old `festival-flyer-2026.jpg` asset reference once unused.
