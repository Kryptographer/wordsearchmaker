/**
 * Content Filter Module
 * Provides safeguards against inappropriate content in word search puzzles
 * Supports: English, Spanish, French, German, Portuguese, Italian
 */

class ContentFilter {
    constructor() {
        // Blocked words organized by language
        // These lists contain common profanity and highly inappropriate terms
        // Words are stored in uppercase for consistent matching
        this.blockedWords = {
            // English profanity and inappropriate terms
            en: new Set([
                'FUCK', 'SHIT', 'DAMN', 'HELL', 'ASS', 'BITCH', 'BASTARD',
                'CRAP', 'PISS', 'DICK', 'COCK', 'PUSSY', 'CUNT', 'WHORE',
                'SLUT', 'NIGGER', 'NIGGA', 'FAGGOT', 'FAG', 'RETARD',
                'ASSHOLE', 'BULLSHIT', 'MOTHERFUCKER', 'FUCKER', 'FUCKING',
                'SHITTY', 'DAMMIT', 'GODDAMN', 'JACKASS', 'DUMBASS',
                'DICKHEAD', 'PRICK', 'WANKER', 'TWAT', 'TITS', 'BOOBS',
                'ANUS', 'PORN', 'SEXY', 'SEX', 'RAPE', 'MOLEST', 'KILL',
                'MURDER', '死', 'NAZI', 'HITLER', 'KKK', 'JIHAD',
                'PENIS', 'VAGINA', 'DILDO', 'ORGASM', 'ERECTION',
                'COCAINE', 'HEROIN', 'METH', 'DRUGS', 'WEED',
                'NUDE', 'NAKED', 'XXX', 'ANAL', 'ORAL', 'BLOWJOB',
                'HANDJOB', 'CUMSHOT', 'CUM', 'JIZZ', 'SPERM', 'SEMEN',
                'HORNY', 'KINKY', 'FETISH', 'BDSM', 'BONDAGE',
                'SUICID', 'SUICIDE', 'TERROR', 'BOMB', 'SHOOT', 'GUN'
            ]),

            // Spanish profanity and inappropriate terms
            es: new Set([
                'PUTA', 'PUTO', 'MIERDA', 'CAGO', 'CAGAR', 'CULO',
                'COÑO', 'JODER', 'JODIDO', 'CABRON', 'CABRÓN', 'CHINGAR',
                'CHINGADO', 'PENDEJO', 'PENDEJA', 'VERGA', 'POLLA',
                'COJONES', 'MARICON', 'MARICÓN', 'PERRA', 'ZORRA',
                'GILIPOLLAS', 'IDIOTA', 'ESTUPIDO', 'ESTÚPIDO', 'IMBECIL',
                'IMBÉCIL', 'HOSTIA', 'CARAJO', 'PINCHE', 'CULERO',
                'MAMADA', 'MAMAR', 'CHUPAR', 'FOLLAR', 'COGER',
                'PROSTITUTA', 'NALGAS', 'TETAS', 'PENE', 'VAGINA',
                'PORNOGRAFÍA', 'PORNO', 'SEXO', 'VIOLACIÓN', 'VIOLAR',
                'MATAR', 'MUERTE', 'ASESINO', 'DROGA', 'DROGAS',
                'COCAÍNA', 'HEROÍNA', 'DESNUDO', 'DESNUDA', 'NAZI'
            ]),

            // French profanity and inappropriate terms
            fr: new Set([
                'MERDE', 'PUTAIN', 'PUTE', 'SALOPE', 'CONNARD', 'CONNASSE',
                'ENCULER', 'ENCULE', 'NIQUE', 'NIQUER', 'BAISER', 'FOUTRE',
                'BORDEL', 'CON', 'CONNE', 'COUILLES', 'BITE', 'QUEUE',
                'CHATTE', 'SALAUD', 'SALOPARD', 'GARCE', 'BATARD', 'BÂTARD',
                'ENFOIRÉ', 'ENFOIRE', 'BRANLER', 'BRANLEUR', 'TROU',
                'CLOCHARD', 'ABRUTI', 'CRETIN', 'CRÉTIN', 'IMBÉCILE',
                'PÉNIS', 'PENIS', 'VAGIN', 'SEINS', 'NICHONS', 'FESSES',
                'CROUPION', 'PORNO', 'PORNOGRAPHIE', 'SEXE', 'VIOL', 'VIOLER',
                'TUER', 'MEURTRE', 'DROGUE', 'DROGUES', 'COCAÏNE', 'HEROÏNE',
                'NU', 'NUE', 'NAZI', 'TERRORISTE', 'BOMBE'
            ]),

            // German profanity and inappropriate terms
            de: new Set([
                'SCHEISSE', 'SCHEIßE', 'SCHEISSE', 'ARSCH', 'ARSCHLOCH',
                'FICK', 'FICKEN', 'GEFICKT', 'WICHSER', 'WICHSEN',
                'HURENSOHN', 'HURE', 'NUTTE', 'SCHLAMPE', 'FOTZE',
                'SCHWANZ', 'PENIS', 'VAGINA', 'TITTEN', 'BRÜSTE',
                'MISTKERL', 'DRECKSAU', 'DRECK', 'MIST', 'IDIOT',
                'BLÖDMANN', 'DUMMKOPF', 'DEPP', 'TROTTEL', 'VOLLIDI',
                'SCHWUCHTEL', 'TUNTE', 'SPAST', 'SPACKEN', 'PISSER',
                'PISSE', 'KACKE', 'KACKEN', 'KOTZE', 'KOTZEN',
                'PORNO', 'PORNOGRAFIE', 'SEX', 'VERGEWALTIGUNG',
                'TÖTEN', 'MORD', 'MÖRDER', 'DROGE', 'DROGEN', 'KOKAIN',
                'HEROIN', 'NACKT', 'NAZI', 'HITLER', 'TERRORIST', 'BOMBE'
            ]),

            // Portuguese profanity and inappropriate terms
            pt: new Set([
                'PUTA', 'PUTO', 'MERDA', 'CAGAR', 'BOSTA', 'CU', 'BUNDA',
                'CARALHO', 'FODER', 'FODIDO', 'FODA', 'PORRA', 'CACETE',
                'BUCETA', 'BOCETA', 'XANA', 'PIROCA', 'PAU', 'ROLA',
                'VIADO', 'BICHA', 'VAGABUNDA', 'VADIA', 'CORNO', 'OTARIO',
                'OTÁRIO', 'BABACA', 'IDIOTA', 'IMBECIL', 'CRETINO',
                'FILHO DA PUTA', 'ARROMBADO', 'DESGRAÇADO', 'CUZÃO',
                'PÊNIS', 'PENIS', 'VAGINA', 'PEITOS', 'SEIOS', 'TETAS',
                'PORNÔ', 'PORNO', 'SEXO', 'ESTUPRO', 'ESTUPRAR',
                'MATAR', 'MORTE', 'ASSASSINO', 'DROGA', 'DROGAS',
                'COCAÍNA', 'HEROÍNA', 'PELADO', 'PELADA', 'NU', 'NUA',
                'NAZI', 'TERRORISTA', 'BOMBA'
            ]),

            // Italian profanity and inappropriate terms
            it: new Set([
                'CAZZO', 'MERDA', 'STRONZO', 'STRONZA', 'PUTTANA', 'TROIA',
                'FIGA', 'FICA', 'MINCHIA', 'COGLIONE', 'COGLIONI', 'CULO',
                'VAFFANCULO', 'FANCULO', 'INCAZZATO', 'INCAZZATA', 'CAGARE',
                'PORCA', 'PORCO', 'BASTARDO', 'BASTARDA', 'FIGLIO DI PUTTANA',
                'CORNUTO', 'PALLE', 'CRETINO', 'IDIOTA', 'IMBECILLE',
                'DEFICIENTE', 'FROCIO', 'RICCHIONE', 'CULATTONE',
                'PENE', 'VAGINA', 'TETTE', 'SENO', 'NATICHE', 'CULO',
                'PORNO', 'PORNOGRAFIA', 'SESSO', 'STUPRO', 'STUPRARE',
                'UCCIDERE', 'MORTE', 'ASSASSINO', 'DROGA', 'DROGHE',
                'COCAINA', 'EROINA', 'NUDO', 'NUDA', 'NAZI', 'TERRORISTA',
                'BOMBA'
            ])
        };

        // Common short patterns that should be blocked (2-3 letters that are very offensive)
        // These are checked more strictly as they can easily form accidentally
        this.shortBlockedPatterns = new Set([
            'ASS', 'FAG', 'FUK', 'FUC', 'SEX', 'XXX', 'DIK', 'COK',
            'CUM', 'TIT', 'NIG', 'KKK', 'JEW', 'GAY', 'POO', 'PEE',
            'BRA', 'BUM', 'NUT', 'HOE', 'HO'
        ]);

        // Build combined set for faster lookup
        this.allBlockedWords = new Set();
        for (const lang in this.blockedWords) {
            for (const word of this.blockedWords[lang]) {
                this.allBlockedWords.add(word);
            }
        }

        // Add short patterns to the combined set
        for (const pattern of this.shortBlockedPatterns) {
            this.allBlockedWords.add(pattern);
        }
    }

    /**
     * Check if a word is blocked in any language
     * @param {string} word - The word to check
     * @returns {boolean} - True if the word is blocked
     */
    isBlocked(word) {
        if (!word || word.length < 2) return false;
        const upperWord = word.toUpperCase().replace(/[^A-Z]/g, '');

        // Direct match
        if (this.allBlockedWords.has(upperWord)) {
            return true;
        }

        // Check if the word contains any blocked word as a substring (for longer words)
        for (const blocked of this.allBlockedWords) {
            if (blocked.length >= 3 && upperWord.includes(blocked)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Check if a word is blocked for a specific language
     * @param {string} word - The word to check
     * @param {string} lang - Language code (en, es, fr, de, pt, it)
     * @returns {boolean} - True if the word is blocked
     */
    isBlockedForLanguage(word, lang) {
        if (!word || word.length < 2) return false;
        const upperWord = word.toUpperCase().replace(/[^A-Z]/g, '');

        // Always check English as it's universal
        if (this.blockedWords.en && this.blockedWords.en.has(upperWord)) {
            return true;
        }

        // Check specific language
        if (lang && this.blockedWords[lang]) {
            if (this.blockedWords[lang].has(upperWord)) {
                return true;
            }
        }

        // Check short patterns
        if (this.shortBlockedPatterns.has(upperWord)) {
            return true;
        }

        // Check contains for longer blocked words
        for (const blocked of this.allBlockedWords) {
            if (blocked.length >= 4 && upperWord.includes(blocked)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Filter a list of words, removing inappropriate ones
     * @param {string[]} words - Array of words to filter
     * @param {string} lang - Language code
     * @returns {object} - { clean: [], blocked: [] }
     */
    filterWords(words, lang = 'en') {
        const clean = [];
        const blocked = [];

        for (const word of words) {
            if (this.isBlockedForLanguage(word, lang)) {
                blocked.push(word);
            } else {
                clean.push(word);
            }
        }

        return { clean, blocked };
    }

    /**
     * Extract all words from a grid (horizontal, vertical, diagonal)
     * @param {string[][]} grid - The 2D grid of letters
     * @param {boolean[][]} shapeMask - Shape mask for valid cells
     * @returns {string[]} - Array of all found words (3+ letters)
     */
    extractWordsFromGrid(grid, shapeMask) {
        const words = [];
        const size = grid.length;

        // All 8 directions to check
        const directions = [
            { dx: 1, dy: 0 },   // right
            { dx: 0, dy: 1 },   // down
            { dx: 1, dy: 1 },   // diagonal down-right
            { dx: 1, dy: -1 },  // diagonal up-right
            { dx: -1, dy: 0 },  // left
            { dx: 0, dy: -1 },  // up
            { dx: -1, dy: -1 }, // diagonal up-left
            { dx: -1, dy: 1 }   // diagonal down-left
        ];

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                if (!shapeMask[y][x]) continue;

                for (const dir of directions) {
                    // Extract sequences of 3-8 letters in this direction
                    for (let len = 3; len <= 8; len++) {
                        let word = '';
                        let valid = true;

                        for (let i = 0; i < len; i++) {
                            const nx = x + i * dir.dx;
                            const ny = y + i * dir.dy;

                            if (nx < 0 || nx >= size || ny < 0 || ny >= size || !shapeMask[ny][nx]) {
                                valid = false;
                                break;
                            }

                            word += grid[ny][nx];
                        }

                        if (valid && word.length === len) {
                            words.push(word.toUpperCase());
                        }
                    }
                }
            }
        }

        return words;
    }

    /**
     * Scan grid for any accidentally formed inappropriate words
     * @param {string[][]} grid - The 2D grid of letters
     * @param {boolean[][]} shapeMask - Shape mask for valid cells
     * @returns {object[]} - Array of found inappropriate words with positions
     */
    scanGridForInappropriate(grid, shapeMask) {
        const found = [];
        const words = this.extractWordsFromGrid(grid, shapeMask);

        for (const word of words) {
            if (this.isBlocked(word)) {
                found.push({ word, type: 'blocked' });
            }
        }

        // Remove duplicates
        const unique = [];
        const seen = new Set();
        for (const item of found) {
            if (!seen.has(item.word)) {
                seen.add(item.word);
                unique.push(item);
            }
        }

        return unique;
    }

    /**
     * Get a safe random letter that won't easily form bad words
     * Avoids letters that commonly start offensive words
     * @returns {string} - A safe random letter
     */
    getSafeRandomLetter() {
        // Slightly reduce weight of letters that commonly start bad words
        // (F, S, C, D, P, N) while keeping the distribution natural
        const safeWeighted = 'AABCEEEGHIIJKLMMOOOQRRTTUUVWXYZ';
        return safeWeighted[Math.floor(Math.random() * safeWeighted.length)];
    }

    /**
     * Check if placing a letter at a position would form a bad word
     * @param {string[][]} grid - The current grid
     * @param {boolean[][]} shapeMask - Shape mask
     * @param {number} x - X position
     * @param {number} y - Y position
     * @param {string} letter - Letter to place
     * @returns {boolean} - True if placing this letter would form a bad word
     */
    wouldFormBadWord(grid, shapeMask, x, y, letter) {
        const size = grid.length;

        // Temporarily place the letter
        const origValue = grid[y][x];
        grid[y][x] = letter;

        // Check all directions from positions that could include this cell
        const directions = [
            { dx: 1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: 1, dy: 1 },
            { dx: 1, dy: -1 }
        ];

        let foundBad = false;

        for (const dir of directions) {
            // Check sequences of length 3-6 that include this position
            for (let len = 3; len <= 6 && !foundBad; len++) {
                for (let offset = 0; offset < len && !foundBad; offset++) {
                    const startX = x - offset * dir.dx;
                    const startY = y - offset * dir.dy;

                    let word = '';
                    let valid = true;

                    for (let i = 0; i < len; i++) {
                        const nx = startX + i * dir.dx;
                        const ny = startY + i * dir.dy;

                        if (nx < 0 || nx >= size || ny < 0 || ny >= size || !shapeMask[ny][nx]) {
                            valid = false;
                            break;
                        }

                        const char = grid[ny][nx];
                        if (!char) {
                            valid = false;
                            break;
                        }

                        word += char;
                    }

                    if (valid && word.length === len) {
                        // Check forward and backward
                        if (this.isBlocked(word) || this.isBlocked(word.split('').reverse().join(''))) {
                            foundBad = true;
                        }
                    }
                }
            }
        }

        // Restore original value
        grid[y][x] = origValue;

        return foundBad;
    }
}

// Create global instance for use in other files
const contentFilter = new ContentFilter();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ContentFilter, contentFilter };
}
