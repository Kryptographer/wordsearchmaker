/**
 * Word Search Generator Engine
 * Handles puzzle generation, word placement, and shape masking
 */

class WordSearchGenerator {
    constructor(options = {}) {
        this.size = options.size || 15;
        this.words = options.words || [];
        this.difficulty = options.difficulty || 'normal';
        this.shape = options.shape || 'square';
        this.hiddenMessage = options.hiddenMessage || '';
        this.fillType = options.fillType || 'random';
        this.uppercase = options.uppercase !== false;

        this.grid = [];
        this.placedWords = [];
        this.shapeMask = [];
        this.directions = this.getDirectionsForDifficulty();

        // Letter frequencies for realistic fills
        this.letterFrequencies = {
            'A': 8.2, 'B': 1.5, 'C': 2.8, 'D': 4.3, 'E': 12.7, 'F': 2.2,
            'G': 2.0, 'H': 6.1, 'I': 7.0, 'J': 0.15, 'K': 0.77, 'L': 4.0,
            'M': 2.4, 'N': 6.7, 'O': 7.5, 'P': 1.9, 'Q': 0.095, 'R': 6.0,
            'S': 6.3, 'T': 9.1, 'U': 2.8, 'V': 0.98, 'W': 2.4, 'X': 0.15,
            'Y': 2.0, 'Z': 0.074
        };
    }

    /**
     * Get allowed directions based on difficulty
     */
    getDirectionsForDifficulty() {
        const allDirections = [
            { dx: 1, dy: 0, name: 'right' },      // Horizontal right
            { dx: 0, dy: 1, name: 'down' },       // Vertical down
            { dx: 1, dy: 1, name: 'diag-down-right' },   // Diagonal down-right
            { dx: -1, dy: 1, name: 'diag-down-left' },   // Diagonal down-left
            { dx: -1, dy: 0, name: 'left' },      // Horizontal left (backwards)
            { dx: 0, dy: -1, name: 'up' },        // Vertical up (backwards)
            { dx: -1, dy: -1, name: 'diag-up-left' },    // Diagonal up-left
            { dx: 1, dy: -1, name: 'diag-up-right' }     // Diagonal up-right
        ];

        switch (this.difficulty) {
            case 'easy':
                // Only horizontal and vertical (forward)
                return allDirections.slice(0, 2);
            case 'normal':
                // Horizontal, vertical, and diagonal (forward)
                return allDirections.slice(0, 4);
            case 'medium':
                // All directions including backwards
                return allDirections;
            case 'hard':
            case 'extreme':
                // All directions
                return allDirections;
            default:
                return allDirections.slice(0, 4);
        }
    }

    /**
     * Generate the shape mask for non-square puzzles
     */
    generateShapeMask() {
        this.shapeMask = Array(this.size).fill(null).map(() =>
            Array(this.size).fill(true)
        );

        const center = this.size / 2;
        const radius = this.size / 2 - 0.5;

        switch (this.shape) {
            case 'circle':
                for (let y = 0; y < this.size; y++) {
                    for (let x = 0; x < this.size; x++) {
                        const dist = Math.sqrt(Math.pow(x - center + 0.5, 2) + Math.pow(y - center + 0.5, 2));
                        this.shapeMask[y][x] = dist <= radius;
                    }
                }
                break;

            case 'heart':
                for (let y = 0; y < this.size; y++) {
                    for (let x = 0; x < this.size; x++) {
                        // Normalize coordinates to [-1, 1]
                        const nx = (x - center + 0.5) / radius * 1.2;
                        const ny = (y - center + 0.5) / radius * 1.2 - 0.3;
                        // Heart equation: (x^2 + y^2 - 1)^3 - x^2 * y^3 < 0
                        const heart = Math.pow(nx * nx + ny * ny - 1, 3) - nx * nx * ny * ny * ny;
                        this.shapeMask[y][x] = heart < 0;
                    }
                }
                break;

            case 'cross':
                const armWidth = Math.floor(this.size / 3);
                const start = Math.floor((this.size - armWidth) / 2);
                const end = start + armWidth;
                for (let y = 0; y < this.size; y++) {
                    for (let x = 0; x < this.size; x++) {
                        const inVertical = x >= start && x < end;
                        const inHorizontal = y >= start && y < end;
                        this.shapeMask[y][x] = inVertical || inHorizontal;
                    }
                }
                break;

            case 'star':
                for (let y = 0; y < this.size; y++) {
                    for (let x = 0; x < this.size; x++) {
                        const nx = (x - center + 0.5) / radius;
                        const ny = (y - center + 0.5) / radius;
                        const angle = Math.atan2(ny, nx);
                        const dist = Math.sqrt(nx * nx + ny * ny);
                        // 5-pointed star
                        const starRadius = 0.5 + 0.5 * Math.cos(5 * angle);
                        this.shapeMask[y][x] = dist <= starRadius;
                    }
                }
                break;

            case 'diamond':
                for (let y = 0; y < this.size; y++) {
                    for (let x = 0; x < this.size; x++) {
                        const dist = Math.abs(x - center + 0.5) + Math.abs(y - center + 0.5);
                        this.shapeMask[y][x] = dist <= radius;
                    }
                }
                break;

            case 'triangle':
                for (let y = 0; y < this.size; y++) {
                    const rowWidth = Math.floor((y + 1) / this.size * this.size);
                    const startX = Math.floor((this.size - rowWidth) / 2);
                    for (let x = 0; x < this.size; x++) {
                        this.shapeMask[y][x] = x >= startX && x < startX + rowWidth;
                    }
                }
                break;

            case 'oval':
                for (let y = 0; y < this.size; y++) {
                    for (let x = 0; x < this.size; x++) {
                        // Ellipse with 1.5:1 aspect ratio
                        const nx = (x - center + 0.5) / (radius * 0.7);
                        const ny = (y - center + 0.5) / radius;
                        this.shapeMask[y][x] = nx * nx + ny * ny <= 1;
                    }
                }
                break;

            default:
                // Square - all cells active
                break;
        }

        return this.shapeMask;
    }

    /**
     * Initialize empty grid
     */
    initializeGrid() {
        this.grid = Array(this.size).fill(null).map(() =>
            Array(this.size).fill('')
        );
        this.placedWords = [];
    }

    /**
     * Check if a position is valid for the current shape
     */
    isValidPosition(x, y) {
        if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
            return false;
        }
        return this.shapeMask[y][x];
    }

    /**
     * Try to place a word at a specific position and direction
     */
    canPlaceWord(word, startX, startY, direction) {
        const positions = [];
        for (let i = 0; i < word.length; i++) {
            const x = startX + i * direction.dx;
            const y = startY + i * direction.dy;

            if (!this.isValidPosition(x, y)) {
                return null;
            }

            const currentChar = this.grid[y][x];
            if (currentChar !== '' && currentChar !== word[i]) {
                return null;
            }

            positions.push({ x, y, char: word[i] });
        }
        return positions;
    }

    /**
     * Place a word on the grid
     */
    placeWord(word, positions) {
        for (const pos of positions) {
            this.grid[pos.y][pos.x] = pos.char;
        }
    }

    /**
     * Find all valid placements for a word
     */
    findPlacements(word) {
        const placements = [];

        for (const direction of this.directions) {
            for (let y = 0; y < this.size; y++) {
                for (let x = 0; x < this.size; x++) {
                    const positions = this.canPlaceWord(word, x, y, direction);
                    if (positions) {
                        // Calculate a score based on intersections
                        let score = 0;
                        for (const pos of positions) {
                            if (this.grid[pos.y][pos.x] === pos.char) {
                                score += 10; // Bonus for intersections
                            }
                        }
                        placements.push({ positions, direction, score });
                    }
                }
            }
        }

        return placements;
    }

    /**
     * Get a random letter based on fill type
     */
    getRandomLetter() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        switch (this.fillType) {
            case 'vowels':
                const vowelHeavy = 'AEIOUAEIOUAEIOU' + alphabet;
                return vowelHeavy[Math.floor(Math.random() * vowelHeavy.length)];

            case 'consonants':
                const consonants = 'BCDFGHJKLMNPQRSTVWXYZ';
                const consonantHeavy = consonants + consonants + alphabet;
                return consonantHeavy[Math.floor(Math.random() * consonantHeavy.length)];

            case 'similar':
                // Use letters from the placed words
                if (this.placedWords.length > 0) {
                    const allLetters = this.placedWords.join('');
                    if (Math.random() < 0.7) {
                        return allLetters[Math.floor(Math.random() * allLetters.length)];
                    }
                }
                return alphabet[Math.floor(Math.random() * alphabet.length)];

            default:
                // Weighted random based on English letter frequency
                const totalFreq = Object.values(this.letterFrequencies).reduce((a, b) => a + b, 0);
                let random = Math.random() * totalFreq;
                for (const [letter, freq] of Object.entries(this.letterFrequencies)) {
                    random -= freq;
                    if (random <= 0) return letter;
                }
                return 'E';
        }
    }

    /**
     * Fill remaining empty cells
     */
    fillEmptyCells() {
        let messageIndex = 0;
        const message = this.hiddenMessage.toUpperCase().replace(/[^A-Z]/g, '');
        const emptyCells = [];

        // Collect all empty cells that are in the shape mask
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                if (this.shapeMask[y][x] && this.grid[y][x] === '') {
                    emptyCells.push({ x, y });
                }
            }
        }

        // If there's a hidden message, place it in the empty cells
        if (message && emptyCells.length >= message.length) {
            // Distribute message evenly across empty cells
            const step = Math.floor(emptyCells.length / message.length);
            for (let i = 0; i < message.length; i++) {
                const cellIndex = Math.min(i * step, emptyCells.length - 1);
                const cell = emptyCells[cellIndex];
                this.grid[cell.y][cell.x] = message[i];
                emptyCells.splice(cellIndex, 1);
            }
        }

        // Fill remaining cells with random letters
        for (const cell of emptyCells) {
            if (this.grid[cell.y][cell.x] === '') {
                this.grid[cell.y][cell.x] = this.getRandomLetter();
            }
        }
    }

    /**
     * Main generation function
     */
    generate() {
        // Clean and validate words
        let cleanWords = this.words
            .map(w => w.toUpperCase().replace(/[^A-Z]/g, ''))
            .filter(w => w.length >= 2 && w.length <= this.size)
            .sort((a, b) => b.length - a.length); // Place longer words first

        // Remove duplicates
        cleanWords = [...new Set(cleanWords)];

        this.initializeGrid();
        this.generateShapeMask();

        const wordPlacements = [];
        const failedWords = [];

        // Try to place each word
        for (const word of cleanWords) {
            const placements = this.findPlacements(word);

            if (placements.length > 0) {
                // Sort by score (prefer intersections) and pick randomly from top options
                placements.sort((a, b) => b.score - a.score);
                const topPlacements = placements.slice(0, Math.min(5, placements.length));
                const chosen = topPlacements[Math.floor(Math.random() * topPlacements.length)];

                this.placeWord(word, chosen.positions);
                this.placedWords.push(word);
                wordPlacements.push({
                    word,
                    positions: chosen.positions,
                    direction: chosen.direction.name
                });
            } else {
                failedWords.push(word);
            }
        }

        // Fill empty cells
        this.fillEmptyCells();

        // Convert to lowercase if needed
        if (!this.uppercase) {
            for (let y = 0; y < this.size; y++) {
                for (let x = 0; x < this.size; x++) {
                    this.grid[y][x] = this.grid[y][x].toLowerCase();
                }
            }
        }

        return {
            grid: this.grid,
            shapeMask: this.shapeMask,
            placedWords: this.placedWords,
            wordPlacements,
            failedWords,
            size: this.size,
            shape: this.shape,
            difficulty: this.difficulty
        };
    }
}

/**
 * Puzzle Renderer
 * Handles rendering puzzles to HTML
 */
class PuzzleRenderer {
    constructor(puzzle, options = {}) {
        this.puzzle = puzzle;
        this.title = options.title || 'Word Search';
        this.theme = options.theme || 'classic';
        this.showWordList = options.showWordList !== false;
        this.showAnswers = options.showAnswers || false;
        this.difficulty = options.difficulty || 'normal';
        this.wordCategories = options.wordCategories || null;
    }

    /**
     * Get difficulty display info
     */
    getDifficultyInfo() {
        const info = {
            easy: { label: 'Easy', emoji: '😊', class: 'difficulty-easy' },
            normal: { label: 'Normal', emoji: '🙂', class: 'difficulty-normal' },
            medium: { label: 'Medium', emoji: '😐', class: 'difficulty-medium' },
            hard: { label: 'Hard', emoji: '😰', class: 'difficulty-hard' },
            extreme: { label: 'Extreme', emoji: '🔥', class: 'difficulty-extreme' }
        };
        return info[this.difficulty] || info.normal;
    }

    /**
     * Render the puzzle to HTML
     */
    render() {
        const diffInfo = this.getDifficultyInfo();

        let html = `
            <div class="puzzle-container theme-${this.theme}">
                <h2 class="puzzle-title">${this.escapeHtml(this.title)}</h2>
                <div class="difficulty-indicator">
                    <span class="difficulty-badge ${diffInfo.class}">
                        ${diffInfo.emoji} ${diffInfo.label}
                    </span>
                </div>
                <div class="puzzle-grid shape-${this.puzzle.shape}">
        `;

        // Create answer position lookup
        const answerPositions = new Set();
        if (this.showAnswers) {
            for (const placement of this.puzzle.wordPlacements) {
                for (const pos of placement.positions) {
                    answerPositions.add(`${pos.x},${pos.y}`);
                }
            }
        }

        // Render grid
        for (let y = 0; y < this.puzzle.size; y++) {
            html += '<div class="puzzle-row">';
            for (let x = 0; x < this.puzzle.size; x++) {
                const isActive = this.puzzle.shapeMask[y][x];
                const isHighlighted = answerPositions.has(`${x},${y}`);
                const cellClass = [
                    'puzzle-cell',
                    isActive ? 'active-cell' : 'hidden',
                    isHighlighted ? 'highlighted' : ''
                ].filter(Boolean).join(' ');

                html += `<div class="${cellClass}" data-x="${x}" data-y="${y}">
                    ${isActive ? this.puzzle.grid[y][x] : ''}
                </div>`;
            }
            html += '</div>';
        }

        html += '</div>';

        // Word list
        if (this.showWordList && this.difficulty !== 'extreme') {
            // Check if we have categorized words
            if (this.wordCategories && Object.keys(this.wordCategories).length > 0) {
                html += `
                    <div class="word-list-container word-list-categorized">
                        <h3 class="word-list-title">Find These Words:</h3>
                        <div class="word-categories">
                            ${Object.entries(this.wordCategories).map(([category, words]) => {
                                // Only show words that were actually placed in the puzzle
                                const placedInCategory = words.filter(w =>
                                    this.puzzle.placedWords.includes(w.toUpperCase())
                                );
                                if (placedInCategory.length === 0) return '';
                                return `
                                    <div class="word-category">
                                        <h4 class="category-title">${category}</h4>
                                        <ul class="category-words">
                                            ${placedInCategory.map(word =>
                                                `<li class="word-item-bullet" data-word="${word.toUpperCase()}">${word}</li>`
                                            ).join('')}
                                        </ul>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            } else {
                html += `
                    <div class="word-list-container">
                        <h3 class="word-list-title">Find These Words:</h3>
                        <div class="word-list">
                            ${this.puzzle.placedWords.map(word =>
                                `<span class="word-item">${word}</span>`
                            ).join('')}
                        </div>
                    </div>
                `;
            }
        } else if (this.difficulty === 'extreme') {
            html += `
                <div class="word-list-container">
                    <h3 class="word-list-title">🔥 Extreme Challenge!</h3>
                    <p style="color: var(--text-light);">Find ${this.puzzle.placedWords.length} hidden words without a word list!</p>
                </div>
            `;
        }

        html += '</div>';

        return html;
    }

    /**
     * Render for printing
     */
    renderForPrint(includeAnswers = false) {
        const diffInfo = this.getDifficultyInfo();

        let html = `
            <div class="print-page">
                <h1 class="print-puzzle-title">${this.escapeHtml(this.title)}</h1>
                <div class="print-difficulty">
                    <span class="print-difficulty-badge">${diffInfo.emoji} ${diffInfo.label}</span>
                </div>
                <div class="print-grid">
        `;

        // Create answer position lookup
        const answerPositions = new Set();
        if (includeAnswers) {
            for (const placement of this.puzzle.wordPlacements) {
                for (const pos of placement.positions) {
                    answerPositions.add(`${pos.x},${pos.y}`);
                }
            }
        }

        // Render grid
        for (let y = 0; y < this.puzzle.size; y++) {
            html += '<div class="print-row">';
            for (let x = 0; x < this.puzzle.size; x++) {
                const isActive = this.puzzle.shapeMask[y][x];
                const isHighlighted = includeAnswers && answerPositions.has(`${x},${y}`);
                const cellClass = [
                    'print-cell',
                    isActive ? '' : 'hidden',
                    isHighlighted ? 'highlighted' : ''
                ].filter(Boolean).join(' ');

                html += `<div class="${cellClass}">
                    ${isActive ? this.puzzle.grid[y][x] : ''}
                </div>`;
            }
            html += '</div>';
        }

        html += '</div>';

        // Word list
        if (this.showWordList && this.difficulty !== 'extreme') {
            // Check if we have categorized words
            if (this.wordCategories && Object.keys(this.wordCategories).length > 0) {
                html += `
                    <div class="print-word-list print-word-list-categorized">
                        <h3 class="print-word-list-title">Find These Words:</h3>
                        <div class="print-word-categories">
                            ${Object.entries(this.wordCategories).map(([category, words]) => {
                                // Only show words that were actually placed in the puzzle
                                const placedInCategory = words.filter(w =>
                                    this.puzzle.placedWords.includes(w.toUpperCase())
                                );
                                if (placedInCategory.length === 0) return '';
                                return `
                                    <div class="print-word-category">
                                        <h4 class="print-category-title">${category}</h4>
                                        <ul class="print-category-words">
                                            ${placedInCategory.map(word =>
                                                `<li class="print-word-bullet">${word}</li>`
                                            ).join('')}
                                        </ul>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            } else {
                html += `
                    <div class="print-word-list">
                        <h3 class="print-word-list-title">Find These Words:</h3>
                        <div class="print-words">
                            ${this.puzzle.placedWords.map(word =>
                                `<span class="print-word">${word}</span>`
                            ).join('')}
                        </div>
                    </div>
                `;
            }
        }

        html += '</div>';

        // Answer key page
        if (includeAnswers) {
            html += `
                <div class="print-page">
                    <h2 class="print-answer-key-title">Answer Key - ${this.escapeHtml(this.title)}</h2>
                    <div class="print-grid">
            `;

            for (let y = 0; y < this.puzzle.size; y++) {
                html += '<div class="print-row">';
                for (let x = 0; x < this.puzzle.size; x++) {
                    const isActive = this.puzzle.shapeMask[y][x];
                    const isHighlighted = answerPositions.has(`${x},${y}`);
                    const cellClass = [
                        'print-cell',
                        isActive ? '' : 'hidden',
                        isHighlighted ? 'highlighted' : ''
                    ].filter(Boolean).join(' ');

                    html += `<div class="${cellClass}">
                        ${isActive ? this.puzzle.grid[y][x] : ''}
                    </div>`;
                }
                html += '</div>';
            }

            html += `
                    </div>
            `;

            // Answer key word list - also supports categories
            if (this.wordCategories && Object.keys(this.wordCategories).length > 0) {
                html += `
                    <div class="print-word-list print-word-list-categorized">
                        <h3 class="print-word-list-title">Words Found:</h3>
                        <div class="print-word-categories">
                            ${Object.entries(this.wordCategories).map(([category, words]) => {
                                const placedInCategory = words.filter(w =>
                                    this.puzzle.placedWords.includes(w.toUpperCase())
                                );
                                if (placedInCategory.length === 0) return '';
                                return `
                                    <div class="print-word-category">
                                        <h4 class="print-category-title">${category}</h4>
                                        <ul class="print-category-words">
                                            ${placedInCategory.map(word =>
                                                `<li class="print-word-bullet">${word}</li>`
                                            ).join('')}
                                        </ul>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            } else {
                html += `
                    <div class="print-word-list">
                        <h3 class="print-word-list-title">Words Found:</h3>
                        <div class="print-words">
                            ${this.puzzle.placedWords.map(word =>
                                `<span class="print-word">${word}</span>`
                            ).join('')}
                        </div>
                    </div>
                `;
            }
            html += `</div>`;
        }

        return html;
    }

    /**
     * Escape HTML special characters
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WordSearchGenerator, PuzzleRenderer };
}
