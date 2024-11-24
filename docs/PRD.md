# Please Don't Press the Goddamn Button

## Overview

A nonsense app that is astoundingly strange and absurd. The tone and style is a niche humor the adheres to the Principles of Jacksnaps.

## Requirements

I'll help break this down into specific requirements for your "Don't Touch" button app.

### Functional Requirements

1. Main Button Features:

   - Large, prominent button with an ominous presence
   - Clear warning text: "Please, never touch this button"
   - Button should have hover effects to enhance the forbidden nature
   - Must be clickable despite the warning

2. Image Display System:

   - Grid layout to display images
   - Each cell should be 40px × 40px
   - Images should maintain aspect ratio within cells
   - Images appear sequentially, one per click
   - First click reveals first grid position, subsequent clicks fill next positions

3. Image Selection Logic:

   - Maintain a large database/array of highly diverse images
   - Implementation of "maximum randomness" algorithm:
     - No thematic connections between consecutive images
     - Examples of polar opposites: dominoes/sheep, "taco sandwich"/"bird games", "homeless man"/"sand castle"

4. Visual Design:
   - Clean grid layout
   - Clear visual hierarchy with button as focal point
   - Consistent spacing between grid items
   - Responsive design for different screen sizes

### Technical Requirements

1. Image Management:

   - Preloaded image array with diverse content
   - Efficient image loading and caching
   - Proper image sizing and optimization

2. State Management:

   - Track number of clicks
   - Track grid position
   - Maintain history of displayed images

3. Performance:

   - Smooth image loading
   - No layout shifts when adding new images
   - Efficient memory usage with many images

4. Browser Compatibility:
   - Cross-browser support
   - Mobile-friendly design
   - Touch interface support

## Original Prompt

> Make an app that presents the user with an obscenely large and ambiguous button. Warn users to "please, never touch this button". Upon click, display a random image - the first on a grid of many potential square image slots (perhaps 40px x40px). Each successive click of the button will add a new random image. IMPORTANT!!: try to make the next image as completely disconnected in any way to the previous image. Optimize for absolute polar-opposite disconnected randomness.
