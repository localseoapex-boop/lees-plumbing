# Photography Style Guide — Local SEO Apex

The canonical look for every image on a Local SEO Apex site. **Every image prompt inherits the
Base Style Block below, without exception.** Individual shots vary only in subject, framing, and
setting. They never vary in style.

This is a framework document, not a Lee's Plumbing document. Business-specific values appear as
tokens (`{CITY}`, `{REGION}`, `{TRADE}`, `{VEHICLE}`) and are substituted per build.

**The goal:** every image on the site must look like it came from the same professional shoot, by
the same photographer, on the same day. Consistency is what separates a real company's website from
a template. A single off-style image undoes the effect of ten good ones.

---

## 1. Base Style Block

Prepend or append this to every prompt. Do not edit it per shot.

```
Ultra-realistic commercial photography. Premium home service photography, photographed by a
professional architectural and commercial photographer. Natural lighting, realistic skin tones,
clean color grading. Bright but not overexposed. Slightly warm. Natural shadows. Shot on a 35mm
full-frame lens. Shallow depth of field only where appropriate. High dynamic range. Authentic
residential neighborhood, modern homes, everything clean and well maintained. Photo quality
suitable for a Fortune 500 company website.
```

## 2. Negative Prompt Block

Also applied to every shot. These are the failure modes that make an image read as fake, cheap, or
AI-generated — the exact things that would undo the premium positioning.

```
No exaggerated HDR. No cinematic teal and orange grading. No fake AI lighting. No stock photo
appearance. No cartoon or illustrated look. No smiling at the camera. No posed thumbs up. No
floating or levitating tools. No distorted or malformed hands. No extra fingers. No text. No
watermarks. No signage. No logos generated into the image. No brand names. No lens flare. No
vignetting. No motion blur. No tilt-shift. No fisheye distortion.
```

**Why "no logos" matters technically, not just aesthetically:** a generated logo is always a
mangled, unusable imitation of the real brand mark, and putting a fake wordmark on a real company's
truck is both visibly wrong and a legal problem. Real branding is applied to real assets, never
generated. Where a vehicle must show branding, use a real photograph of the real vehicle.

**Why "no text":** generated text is reliably garbled, and any text baked into an image is invisible
to search engines and unreadable by screen readers. All text on this site is real HTML.

## 3. Direction Notes

- **People:** working, not posing. A technician looking at the pipe he is fixing, not at the lens.
  No eye contact with the camera. No crossed arms. No forced grins. Competence reads as
  concentration.
- **Subjects:** clean uniforms, clean vehicles, clean work areas. Tidy is the entire trust message.
- **Setting:** authentic `{REGION}` residential architecture. Real neighborhoods, mature trees,
  mountains in the far background where natural. Avoid palm trees, coastal light, and anything that
  reads as a generic sunbelt suburb.
- **Time of day:** mid-morning to early afternoon. Bright, even, believable daylight. No golden
  hour, no dusk, no dramatic sky.
- **Mood:** calm, competent, unremarkable in the best sense. This is a company that shows up and
  does the job properly. It is not an action movie.

## 4. Technical Delivery Spec

This section is what makes an image *usable* once generated. Getting it wrong means a beautiful
photo that renders letterboxed, cropped, or upscaled and soft.

### Aspect ratios by slot

The components reserve these ratios in CSS. **Generate to the ratio the slot expects**, so the
image fills its box without being cropped or letterboxed.

| Slot | Ratio | Notes |
|---|---|---|
| Homepage hero | **4:3** desktop, re-crops to 16:9 under 900px | Compose with safe margins so a 16:9 centre crop still works |
| Content section media (About, etc.) | **4:3** | The `ContentImage` default |
| Merger hero / wide media | **16:9** | |
| Full-bleed band (if introduced) | **16:9** or wider | |

### Minimum resolution

- Generate at **2x the largest rendered width**, minimum **1600px wide** for hero and section slots.
- The renderer **caps every image at its own intrinsic width and never enlarges it** (see
  `ContentImage.astro`). An undersized file will not be blown up to fill its box — it will simply
  sit smaller than intended. Under-delivering resolution degrades layout, not just sharpness.
- Deliver as **JPEG**, quality ~82. Photographs are not PNGs.

### Naming and wiring

1. Name descriptively and in kebab-case: `hero-truck-residential-street.jpg`, not `img_01.jpg`.
2. Place in `public/images/`.
3. Register the file in **`src/config/images.ts`** with its **true intrinsic `width` and `height`**
   and real, descriptive `alt` text.
4. Change nothing else. No component takes a hardcoded path, so a photo drops in with **zero
   component edits and zero layout shift** — the slot has been reserving its aspect ratio all along.

### Alt text

Alt text is written by a human, never generated with the image. Describe what is *in* the frame for
someone who cannot see it. It is not a keyword slot.

## 5. Consistency Checklist

Before accepting any generated image, check it against the set:

- [ ] Same colour grading and warmth as the images already approved
- [ ] Same lighting direction and time of day
- [ ] Same lens character — no wide-angle distortion in one shot and compression in the next
- [ ] Hands, faces, and tools anatomically correct
- [ ] No text, no signage, no invented logos anywhere in the frame
- [ ] Nobody is looking at, or smiling at, the camera
- [ ] The neighbourhood could plausibly be `{CITY}, {REGION}`
- [ ] It looks like a photograph a person took, not an image a model produced

If a shot fails the last item, regenerate. Everything else on this site is honest, and the
photography has to be too.
