# GhostStudio Carousel

An interactive 3D carousel featuring a ghost model with dynamic material switching and animated backgrounds. Built with Three.js and designed for seamless Webflow integration.

## Features

- **Interactive 3D Ghost Model**: Smooth rotation animations with material transitions
- **Dynamic Backgrounds**: 5 unique background textures that change with navigation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Multiple Navigation Methods**: 
  - Keyboard arrows (←/→ or ↑/↓)
  - Mouse drag
  - Touch swipe (mobile)
  - Mouse wheel/trackpad scroll
- **Webflow Ready**: Optimized for embedding in Webflow projects

## Controls

| Action | Control |
|--------|---------|
| Navigate | Arrow keys, drag, swipe, or scroll |
| Toggle Camera | Press `C` |
| Cycle Materials | Press `M` |
| Cycle Backgrounds | Press `B` |

## Quick Start

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```

The build outputs to `/dist` folder with optimized assets for embedding.

## Webflow Integration

### Method 1: Direct Embed (Recommended)
1. Build the project: `npm run build`
2. Upload the `/dist` folder contents to your hosting
3. In Webflow, add an **Embed Component**
4. Use this code:

```html
<div style="width: 100%; height: 500px; position: relative;">
  <iframe 
    src="https://your-domain.com/path-to-dist/index.html"
    width="100%" 
    height="100%" 
    frameborder="0"
    style="border: none;">
  </iframe>
</div>
```

### Method 2: Custom Code Integration
1. In Webflow, go to Project Settings → Custom Code
2. Add to **Head Code**:
```html
<style>
  .ghost-carousel-container {
    width: 100%;
    height: 500px;
    position: relative;
    overflow: hidden;
  }
</style>
```

3. Add an **HTML Embed** element with:
```html
<div class="ghost-carousel-container">
  <iframe 
    src="https://your-domain.com/ghost-carousel/"
    width="100%" 
    height="100%" 
    frameborder="0">
  </iframe>
</div>
```

## Customization

### Adding New Materials
1. Add PNG texture files to `/public/materials/`
2. Update the `blobs` array in `src/main.js`:
```javascript
{
  name: 'Your Title',
  background: '#COLOR',
  materialTexture: './materials/your-texture.png',
  backgroundTexture: './backgrounds/your-bg.png'
}
```
### Styling for Your Brand
- Modify colors in `src/style.css`
- Replace font files in `/public/`
- Update the ghost model by replacing `GHOST-FINAL.glb`

## Technical Details

- **Framework**: Vanilla JavaScript + Three.js
- **Build Tool**: Vite
- **3D Engine**: Three.js
- **Animation**: GSAP
- **State Management**: Zustand
- **Shaders**: Custom GLSL shaders for text effects


## Performance

- Optimized textures and models
- Efficient material switching
- Responsive canvas sizing
- Memory management for smooth performance

## File Structure

```
GhostStudio_Carousel/
├── public/
│   ├── backgrounds/     # Background textures
│   ├── materials/       # Material textures
│   ├── GHOST-FINAL.glb  # 3D model
│   └── favicon.ico
├── shaders/
│   ├── textVertex.glsl  # Text animation shader
│   └── fragment.glsl    # Fragment shader
├── src/
│   ├── main.js          # Main application logic
│   └── style.css        # Styles
└── index.html           # Entry point
```

---

**Built with ❤️ for Ghost Studio**