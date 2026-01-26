# Word Search Maker

A fun, interactive web application for creating and printing custom word search puzzles. Perfect for teachers, parents, and puzzle enthusiasts!

## Features

### Pre-Made Templates
- **40+ ready-to-use templates** across multiple categories:
  - Bible & Faith (English and Spanish)
  - Holidays (Thanksgiving, Halloween)
  - Animals (Ocean, Safari, Pets)
  - Nature (Space, Weather)
  - Educational (Colors, Numbers, Shapes)
- Filter by category, language, and difficulty

### Custom Puzzle Builder
- **Enter your own words** (comma or newline separated)
- **Configurable grid sizes**: 8x8 to 25x25
- **7 unique shapes**: Square, Circle, Heart, Cross, Star, Diamond, Triangle, Oval
- **5 difficulty levels**:
  - Easy: Horizontal & vertical only
  - Normal: Adds diagonal directions
  - Medium: Words can go backwards
  - Hard: All 8 directions with tricky letter fills
  - Extreme: Maximum challenge with hidden word list
- **7 visual themes**: Classic, Colorful, Nature, Ocean, Space, Candy, Chalkboard

### Advanced Options
- Hidden message feature (message appears in unused cells)
- Show/hide word list
- Uppercase/lowercase toggle
- Answer key generation
- Fill letter strategies (Random, Vowels, Consonants, Similar)

### Interactive Features
- Click-and-drag to find words in puzzles
- Visual feedback for found words
- Real-time word count
- Auto-regenerate on settings change

### Output Options
- Print puzzle (with or without answers)
- Download as PNG image
- Print-ready formatting

### Multi-Language Support
- UI available in: English, Spanish, French, German, Portuguese, Italian
- Templates available in English and Spanish

## Getting Started

### Quick Start
Simply open `index.html` in any modern web browser. No installation or build process required!

### Local Development Server (Optional)
For the best experience, you can run a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
wordsearchmaker/
├── index.html      # Main HTML structure
├── app.js          # Application logic and UI handling
├── generator.js    # Puzzle generation engine
├── templates.js    # Pre-made puzzle templates and i18n
├── styles.css      # Styling and themes
└── README.md       # This file
```

## Usage

### Using Templates
1. Go to the **Templates** tab
2. Filter by category, language, or difficulty
3. Click on a template card to open it
4. Print or interact with the puzzle

### Creating Custom Puzzles
1. Go to the **Create Custom** tab
2. Enter a title for your puzzle
3. Type your words (one per line or comma-separated)
4. Choose grid size, shape, difficulty, and theme
5. Click **Generate Puzzle**
6. Print or download your creation

### Keyboard Shortcuts
- `Escape` - Close modal
- `Ctrl+P` - Print current puzzle

## Browser Support

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Deployment

This is a static website with no backend dependencies. To deploy:

1. Copy all files to your web server:
   - `index.html`
   - `app.js`
   - `generator.js`
   - `templates.js`
   - `styles.css`

2. Works with any static hosting:
   - GitHub Pages
   - Netlify
   - Vercel
   - AWS S3
   - Any web server

## External Dependencies

- **Google Fonts**: Fredoka One and Nunito (loaded via CDN)

No npm packages or build tools required!

## License

Made with love for puzzle lovers everywhere.
