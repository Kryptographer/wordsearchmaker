/**
 * Word Search Maker - Main Application
 * Handles UI interactions, template loading, and puzzle management
 */

class WordSearchApp {
    constructor() {
        this.currentLanguage = 'en';
        this.currentPuzzle = null;
        this.currentPuzzleOptions = null;

        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        this.bindEvents();
        this.loadTemplates();
        this.updateWordCount();
        this.applyLanguage();
    }

    /**
     * Bind all event listeners
     */
    bindEvents() {
        // Tab navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const navTab = e.target.closest('.nav-tab');
                if (navTab) this.switchTab(navTab.dataset.tab);
            });
        });

        // Language selector
        document.getElementById('ui-language').addEventListener('change', (e) => {
            this.currentLanguage = e.target.value;
            this.applyLanguage();
        });

        // Template filters
        document.getElementById('template-category').addEventListener('change', () => this.loadTemplates());
        document.getElementById('template-language').addEventListener('change', () => this.loadTemplates());
        document.getElementById('template-difficulty').addEventListener('change', () => this.loadTemplates());

        // Word input
        document.getElementById('word-input').addEventListener('input', () => this.updateWordCount());

        // Generate button
        document.getElementById('generate-btn').addEventListener('click', () => this.generateCustomPuzzle());

        // Preview action buttons
        document.getElementById('regenerate-btn').addEventListener('click', () => this.regeneratePuzzle());
        document.getElementById('print-btn').addEventListener('click', () => this.printPuzzle(false));
        document.getElementById('print-answer-btn').addEventListener('click', () => this.printPuzzle(true));
        document.getElementById('download-btn').addEventListener('click', () => this.downloadPuzzle());

        // Modal buttons
        document.getElementById('modal-print-btn').addEventListener('click', () => this.printPuzzle(false));
        document.getElementById('modal-print-answer-btn').addEventListener('click', () => this.printPuzzle(true));

        // Modal close
        document.querySelector('.modal-close').addEventListener('click', () => this.closeModal());
        document.getElementById('puzzle-modal').addEventListener('click', (e) => {
            if (e.target.id === 'puzzle-modal') this.closeModal();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
            if (e.ctrlKey && e.key === 'p') {
                e.preventDefault();
                if (this.currentPuzzle) this.printPuzzle(false);
            }
        });

        // Auto-generate on settings change (debounced)
        const settingsInputs = ['grid-size', 'grid-shape', 'difficulty-select', 'theme-select'];
        settingsInputs.forEach(id => {
            document.getElementById(id).addEventListener('change', () => {
                if (this.hasWords()) {
                    this.generateCustomPuzzle();
                }
            });
        });
    }

    /**
     * Switch between tabs
     */
    switchTab(tabId) {
        // Update nav tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabId);
        });

        // Update content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.id === `${tabId}-tab`);
        });
    }

    /**
     * Apply language translations
     */
    applyLanguage() {
        const strings = I18N[this.currentLanguage] || I18N.en;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (strings[key]) {
                element.textContent = strings[key];
            }
        });
    }

    /**
     * Load and display templates based on filters
     */
    loadTemplates() {
        const category = document.getElementById('template-category').value;
        const language = document.getElementById('template-language').value;
        const difficulty = document.getElementById('template-difficulty').value;

        const grid = document.getElementById('template-grid');
        grid.innerHTML = '';

        // Filter templates
        const filtered = Object.values(TEMPLATES).filter(template => {
            if (category !== 'all' && template.category !== category) return false;
            if (template.language !== language) return false;
            if (difficulty !== 'all' && template.difficulty !== difficulty) return false;
            return true;
        });

        if (filtered.length === 0) {
            const strings = I18N[this.currentLanguage] || I18N.en;
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-light);">
                    <span style="font-size: 3rem; display: block; margin-bottom: 16px;">🔍</span>
                    <p>${strings['no-templates']}</p>
                </div>
            `;
            return;
        }

        // Render templates
        filtered.forEach(template => {
            const card = this.createTemplateCard(template);
            grid.appendChild(card);
        });
    }

    /**
     * Create a template card element
     */
    createTemplateCard(template) {
        const card = document.createElement('div');
        card.className = 'template-card';
        card.onclick = () => this.openTemplate(template);

        const difficultyClass = `badge-${template.difficulty}`;
        const strings = I18N[this.currentLanguage] || I18N.en;

        card.innerHTML = `
            <div class="template-preview ${template.category}">
                <span class="template-shape">${this.getShapeEmoji(template.shape)}</span>
                <span>${template.icon}</span>
            </div>
            <div class="template-info">
                <h3 class="template-title">${template.title}</h3>
                <p style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 8px;">
                    ${template.description}
                </p>
                <div class="template-meta">
                    <span class="template-badge ${difficultyClass}">${strings[template.difficulty] || template.difficulty}</span>
                    <span class="template-badge badge-language">${template.words.length} ${strings.words}</span>
                </div>
            </div>
        `;

        return card;
    }

    /**
     * Get emoji for shape type
     */
    getShapeEmoji(shape) {
        const emojis = {
            square: '◼️',
            circle: '⚫',
            heart: '❤️',
            cross: '✝️',
            star: '⭐',
            diamond: '💎',
            triangle: '🔺',
            oval: '🥚'
        };
        return emojis[shape] || '◼️';
    }

    /**
     * Open a template and generate puzzle
     */
    openTemplate(template) {
        const generator = new WordSearchGenerator({
            size: template.size,
            words: template.words,
            difficulty: template.difficulty,
            shape: template.shape,
            hiddenMessage: template.hiddenMessage || '',
            fillType: template.difficulty === 'hard' || template.difficulty === 'extreme' ? 'similar' : 'random',
            language: template.language || 'en'
        });

        this.currentPuzzle = generator.generate();
        this.currentPuzzleOptions = {
            title: template.title,
            theme: 'classic',
            showWordList: template.difficulty !== 'extreme',
            difficulty: template.difficulty,
            wordCategories: template.wordCategories || null,
            language: template.language || 'en'
        };

        // Show warning if any template words were blocked (shouldn't happen for curated templates)
        if (this.currentPuzzle.blockedWords && this.currentPuzzle.blockedWords.length > 0) {
            console.warn('Blocked words from template:', this.currentPuzzle.blockedWords);
        }

        this.showModal();
    }

    /**
     * Update word count display
     */
    updateWordCount() {
        const input = document.getElementById('word-input').value;
        const words = this.parseWords(input);
        document.getElementById('word-count').textContent = words.length;
    }

    /**
     * Parse words from input text
     * Supports accented characters for multilingual puzzles
     */
    parseWords(text) {
        return text
            .split(/[\n,]+/)
            .map(w => w.trim().toUpperCase().replace(/[^A-ZÁÉÍÓÚÑÜÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÇÃÕ]/g, ''))
            .filter(w => w.length >= 2);
    }

    /**
     * Check if there are words entered
     */
    hasWords() {
        const input = document.getElementById('word-input').value;
        return this.parseWords(input).length > 0;
    }

    /**
     * Generate custom puzzle from user input
     */
    generateCustomPuzzle() {
        const title = document.getElementById('puzzle-title').value || 'Word Search';
        const wordsText = document.getElementById('word-input').value;
        const words = this.parseWords(wordsText);

        if (words.length === 0) {
            this.showError('Please enter at least one word (2+ letters).');
            return;
        }

        const size = parseInt(document.getElementById('grid-size').value);
        const shape = document.getElementById('grid-shape').value;
        const difficulty = document.getElementById('difficulty-select').value;
        const theme = document.getElementById('theme-select').value;
        const puzzleLanguage = document.getElementById('puzzle-language').value;
        const showWordList = document.getElementById('show-word-list').checked;
        const uppercase = document.getElementById('uppercase-only').checked;
        const hiddenMessage = document.getElementById('hidden-message').value;
        const fillType = document.getElementById('fill-letters').value;

        // Check if words fit the grid
        const longestWord = Math.max(...words.map(w => w.length));
        if (longestWord > size) {
            this.showError(`Your longest word (${longestWord} letters) is too long for a ${size}x${size} grid. Please use a larger grid size.`);
            return;
        }

        const generator = new WordSearchGenerator({
            size,
            words,
            difficulty,
            shape,
            hiddenMessage,
            fillType,
            uppercase,
            language: puzzleLanguage
        });

        this.currentPuzzle = generator.generate();
        this.currentPuzzleOptions = {
            title,
            theme,
            showWordList,
            difficulty,
            language: puzzleLanguage
        };

        // Show warning if some words couldn't be placed
        if (this.currentPuzzle.failedWords.length > 0) {
            console.warn('Could not place words:', this.currentPuzzle.failedWords);
        }

        // Show warning if some words were blocked by content filter
        if (this.currentPuzzle.blockedWords && this.currentPuzzle.blockedWords.length > 0) {
            console.warn('Blocked inappropriate words:', this.currentPuzzle.blockedWords);
            this.showContentWarning(this.currentPuzzle.blockedWords.length);
        }

        this.renderPreview();
    }

    /**
     * Regenerate the current puzzle with same settings
     */
    regeneratePuzzle() {
        if (this.hasWords()) {
            this.generateCustomPuzzle();
        }
    }

    /**
     * Render puzzle in preview panel
     */
    renderPreview() {
        if (!this.currentPuzzle) return;

        const preview = document.getElementById('puzzle-preview');
        const renderer = new PuzzleRenderer(this.currentPuzzle, this.currentPuzzleOptions);

        preview.innerHTML = renderer.render();

        // Add click handlers to words for interactive finding
        this.addInteractiveHandlers(preview);
    }

    /**
     * Add interactive word finding handlers
     */
    addInteractiveHandlers(container) {
        let selecting = false;
        let startCell = null;
        let selectedCells = [];

        const cells = container.querySelectorAll('.puzzle-cell.active-cell');

        cells.forEach(cell => {
            cell.addEventListener('mousedown', (e) => {
                selecting = true;
                startCell = cell;
                selectedCells = [cell];
                cell.classList.add('selecting');
            });

            cell.addEventListener('mouseenter', () => {
                if (selecting && startCell) {
                    const startX = parseInt(startCell.dataset.x);
                    const startY = parseInt(startCell.dataset.y);
                    const endX = parseInt(cell.dataset.x);
                    const endY = parseInt(cell.dataset.y);

                    // Clear previous selection
                    cells.forEach(c => c.classList.remove('selecting'));

                    // Calculate direction
                    const dx = Math.sign(endX - startX);
                    const dy = Math.sign(endY - startY);

                    if (dx === 0 && dy === 0) {
                        startCell.classList.add('selecting');
                        return;
                    }

                    // Check if it's a valid line (horizontal, vertical, or diagonal)
                    const diffX = Math.abs(endX - startX);
                    const diffY = Math.abs(endY - startY);

                    if (diffX === diffY || diffX === 0 || diffY === 0) {
                        const length = Math.max(diffX, diffY);
                        selectedCells = [];

                        for (let i = 0; i <= length; i++) {
                            const x = startX + i * dx;
                            const y = startY + i * dy;
                            const targetCell = container.querySelector(`.puzzle-cell[data-x="${x}"][data-y="${y}"]`);
                            if (targetCell) {
                                targetCell.classList.add('selecting');
                                selectedCells.push(targetCell);
                            }
                        }
                    }
                }
            });
        });

        // Remove previous mouseup handler to prevent memory leak
        if (this._mouseUpHandler) {
            document.removeEventListener('mouseup', this._mouseUpHandler);
        }

        this._mouseUpHandler = () => {
            if (selecting && selectedCells.length > 0) {
                // Get the selected word
                const selectedWord = selectedCells.map(c => c.textContent.trim()).join('');

                // Check if it's a valid word
                if (this.currentPuzzle.placedWords.includes(selectedWord) ||
                    this.currentPuzzle.placedWords.includes(selectedWord.split('').reverse().join(''))) {
                    selectedCells.forEach(c => {
                        c.classList.remove('selecting');
                        c.classList.add('found');
                    });

                    // Mark word in list (supports both regular and categorized word lists)
                    const wordItems = container.querySelectorAll('.word-item, .word-item-bullet');
                    wordItems.forEach(item => {
                        const itemWord = item.dataset.word || item.textContent;
                        if (itemWord === selectedWord ||
                            itemWord === selectedWord.split('').reverse().join('')) {
                            item.classList.add('found');
                        }
                    });
                } else {
                    selectedCells.forEach(c => c.classList.remove('selecting'));
                }
            }

            selecting = false;
            startCell = null;
            selectedCells = [];
        };

        document.addEventListener('mouseup', this._mouseUpHandler);
    }

    /**
     * Show puzzle in modal
     */
    showModal() {
        if (!this.currentPuzzle) return;

        const container = document.getElementById('modal-puzzle-container');
        const renderer = new PuzzleRenderer(this.currentPuzzle, this.currentPuzzleOptions);

        container.innerHTML = renderer.render();
        document.getElementById('puzzle-modal').classList.add('active');

        // Add interactive handlers
        this.addInteractiveHandlers(container);
    }

    /**
     * Close modal
     */
    closeModal() {
        document.getElementById('puzzle-modal').classList.remove('active');
    }

    /**
     * Print the current puzzle
     */
    printPuzzle(includeAnswers = false) {
        if (!this.currentPuzzle) return;

        const renderer = new PuzzleRenderer(this.currentPuzzle, {
            ...this.currentPuzzleOptions,
            showAnswers: includeAnswers
        });

        const printContainer = document.getElementById('print-container');
        printContainer.innerHTML = renderer.renderForPrint(includeAnswers);

        // Use requestAnimationFrame to ensure content is rendered before printing
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                window.print();
            });
        });
    }

    /**
     * Download puzzle as image (using canvas)
     */
    async downloadPuzzle() {
        if (!this.currentPuzzle) return;

        // Create a canvas to draw the puzzle
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const cellSize = 30;
        const padding = 60;
        const titleHeight = 60;
        const wordListHeight = 120;

        const gridWidth = this.currentPuzzle.size * cellSize;
        const gridHeight = this.currentPuzzle.size * cellSize;

        canvas.width = gridWidth + padding * 2;
        canvas.height = gridHeight + padding * 2 + titleHeight + wordListHeight;

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.fillStyle = '#1e293b';
        ctx.font = 'bold 24px Fredoka One, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(this.currentPuzzleOptions.title, canvas.width / 2, padding);

        // Difficulty
        ctx.font = '14px Nunito, sans-serif';
        ctx.fillStyle = '#64748b';
        ctx.fillText(
            this.currentPuzzleOptions.difficulty.toUpperCase(),
            canvas.width / 2,
            padding + 25
        );

        // Grid
        const gridStartX = padding;
        const gridStartY = padding + titleHeight;

        ctx.font = 'bold 16px Courier New, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        for (let y = 0; y < this.currentPuzzle.size; y++) {
            for (let x = 0; x < this.currentPuzzle.size; x++) {
                const cellX = gridStartX + x * cellSize;
                const cellY = gridStartY + y * cellSize;

                if (this.currentPuzzle.shapeMask[y][x]) {
                    // Cell border
                    ctx.strokeStyle = '#e2e8f0';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(cellX, cellY, cellSize, cellSize);

                    // Letter
                    ctx.fillStyle = '#1e293b';
                    ctx.fillText(
                        this.currentPuzzle.grid[y][x],
                        cellX + cellSize / 2,
                        cellY + cellSize / 2
                    );
                }
            }
        }

        // Word list
        if (this.currentPuzzleOptions.showWordList && this.currentPuzzleOptions.difficulty !== 'extreme') {
            const wordListY = gridStartY + gridHeight + 30;

            ctx.font = 'bold 16px Fredoka One, sans-serif';
            ctx.fillStyle = '#1e293b';
            const puzzleLang = this.currentPuzzleOptions.language || 'en';
            const findWordsText = (I18N[puzzleLang] && I18N[puzzleLang]['find-words']) || I18N.en['find-words'];
            ctx.fillText(findWordsText, canvas.width / 2, wordListY);

            ctx.font = '12px Nunito, sans-serif';
            const words = this.currentPuzzle.placedWords;
            const wordsPerRow = 5;
            const wordSpacing = (canvas.width - padding * 2) / wordsPerRow;

            words.forEach((word, i) => {
                const row = Math.floor(i / wordsPerRow);
                const col = i % wordsPerRow;
                const x = padding + col * wordSpacing + wordSpacing / 2;
                const y = wordListY + 25 + row * 20;
                ctx.fillText(word, x, y);
            });
        }

        // Download
        const link = document.createElement('a');
        link.download = `${this.currentPuzzleOptions.title.replace(/[^a-z0-9]/gi, '_')}_word_search.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }

    /**
     * Show error message
     */
    showError(message) {
        // Simple alert for now - could be enhanced with a toast notification
        alert(message);
    }

    /**
     * Show content warning when words are blocked
     */
    showContentWarning(count) {
        const strings = I18N[this.currentLanguage] || I18N.en;
        const message = strings['content-warning'] ||
            `${count} word(s) were removed because they contain inappropriate content.`;
        console.info(message);
        // Show a brief non-intrusive notification
        this.showToast(message, 'warning');
    }

    /**
     * Show a toast notification
     */
    showToast(message, type = 'info') {
        // Remove any existing toast
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'warning' ? '#f59e0b' : '#3b82f6'};
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideUp 0.3s ease-out;
        `;

        document.body.appendChild(toast);

        // Auto-remove after 4 seconds
        setTimeout(() => {
            toast.style.animation = 'slideDown 0.3s ease-out forwards';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new WordSearchApp();
});
