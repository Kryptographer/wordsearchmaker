# Word Search Maker

A fun, interactive web application for creating and printing custom word search puzzles. Perfect for teachers, parents, and puzzle enthusiasts!

## Features

### Pre-Made Templates
- **40+ ready-to-use templates** across multiple categories:
  - Bible & Faith (English and Spanish)
  - Holidays (Thanksgiving, Halloween, Valentine's, Independence Day, Winter)
  - Animals (Ocean, Safari, Pets, Birds, Insects)
  - Nature (Space, Weather)
  - Educational (Colors, Numbers, Shapes, Body Parts, Months, Planets)
- Filter by category, language, and difficulty

### Custom Puzzle Builder
- **Enter your own words** (comma or newline separated)
- **Configurable grid sizes**: 8x8 to 25x25
- **8 unique shapes**: Square, Circle, Heart, Cross, Star, Diamond, Triangle, Oval
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

### Content Safety
- **Automatic content filtering** for inappropriate words in all 6 supported languages
- Filters user input to block profanity and offensive terms
- Prevents random letter filling from accidentally forming bad words
- Multi-pass grid sanitization catches any words that slip through
- Family-friendly puzzles guaranteed

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
- Supports accented characters for non-English puzzle words

## Getting Started

### Quick Start
Simply open `index.html` in any modern web browser. No installation or build process required!

### Local Development Server (Optional)
For the best experience, you can run a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Docker Deployment

### Docker Compose (Recommended)

Uses the stock `nginx:alpine` image with volume mounts - no build step needed:

```bash
docker-compose up -d
```

Then open `http://localhost:9847` in your browser. To stop:

```bash
docker-compose down
```

### Build Your Own Image (Optional)

If you prefer a self-contained image (e.g., for pushing to a registry):

```bash
docker build -t wordsearchmaker .
docker run -d -p 9847:9847 --name wordsearchmaker wordsearchmaker
```

### Synology NAS Deployment

#### Option 1: Using Container Manager (DSM 7.2+)

1. Upload all project files to your NAS (e.g., `/volume1/docker/wordsearchmaker/`)
2. Open **Container Manager** on your Synology NAS
3. Go to **Project** > **Create**
4. Set the project name to `wordsearchmaker`
5. Set the path to where you uploaded the project files
6. It will auto-detect the `docker-compose.yml`
7. Click **Next** then **Done**
8. Access at `http://your-nas-ip:9847`

#### Option 2: Using Docker CLI via SSH

```bash
# SSH into your Synology NAS
ssh admin@your-nas-ip

# Navigate to the project directory
cd /volume1/docker/wordsearchmaker

# Start the container
docker-compose up -d
```

#### Setting Up Reverse Proxy (Optional)

To access via a subdomain with HTTPS through Synology's built-in reverse proxy:

1. Open **Control Panel** > **Login Portal** > **Advanced** > **Reverse Proxy**
2. Click **Create**:
   - **Description**: Word Search Maker
   - **Source Protocol**: HTTPS
   - **Source Hostname**: wordsearch.yourdomain.com
   - **Source Port**: 443
   - **Destination Protocol**: HTTP
   - **Destination Hostname**: localhost
   - **Destination Port**: 9847
3. Apply and configure your DNS to point the subdomain to your NAS

#### Customizing the Port

Edit `docker-compose.yml` to change the port mapping:

```yaml
ports:
  - "3000:9847"  # Change 3000 to your preferred port
```

#### Customizing the Timezone

Edit `docker-compose.yml` to set your timezone:

```yaml
environment:
  - TZ=Europe/London  # Change to your timezone
```

## Project Structure

```
wordsearchmaker/
├── index.html          # Main HTML structure
├── app.js              # Application logic and UI handling
├── generator.js        # Puzzle generation engine
├── content-filter.js   # Content safety filters for all languages
├── templates.js        # Pre-made puzzle templates and i18n
├── styles.css          # Styling and themes
├── Dockerfile          # Docker image definition
├── docker-compose.yml  # Docker Compose configuration
├── nginx.conf          # Nginx web server configuration
├── .dockerignore       # Docker build exclusions
└── README.md           # This file
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

## External Dependencies

None! This is a fully self-contained static application using system fonts.

## License

Made with love for puzzle lovers everywhere.
