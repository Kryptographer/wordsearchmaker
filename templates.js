/**
 * Pre-made Word Search Templates
 * Includes Bible themes for kids in English and Spanish
 */

const TEMPLATES = {
    // ==========================================
    // BIBLE TEMPLATES - ENGLISH
    // ==========================================

    // Creation Story
    'bible-creation-en': {
        id: 'bible-creation-en',
        title: 'Creation Story',
        category: 'bible',
        language: 'en',
        difficulty: 'easy',
        shape: 'square',
        size: 12,
        icon: '🌍',
        description: 'Words from the story of creation',
        words: [
            'GOD', 'LIGHT', 'DARK', 'WATER', 'SKY', 'LAND', 'PLANTS',
            'SUN', 'MOON', 'STARS', 'FISH', 'BIRDS', 'ANIMALS', 'ADAM',
            'EVE', 'GARDEN', 'GOOD', 'REST'
        ],
        hiddenMessage: 'GOD MADE ALL'
    },

    // Noah's Ark
    'bible-noah-en': {
        id: 'bible-noah-en',
        title: "Noah's Ark",
        category: 'bible',
        language: 'en',
        difficulty: 'easy',
        shape: 'square',
        size: 12,
        icon: '🚢',
        description: 'Animals and words from Noah\'s story',
        words: [
            'NOAH', 'ARK', 'RAIN', 'FLOOD', 'ANIMALS', 'DOVE', 'OLIVE',
            'RAINBOW', 'PROMISE', 'BOAT', 'WATER', 'FAMILY', 'FAITH',
            'TWO', 'LION', 'ELEPHANT', 'GIRAFFE'
        ],
        hiddenMessage: 'TRUST GOD'
    },

    // Bible Heroes
    'bible-heroes-en': {
        id: 'bible-heroes-en',
        title: 'Bible Heroes',
        category: 'bible',
        language: 'en',
        difficulty: 'normal',
        shape: 'cross',
        size: 15,
        icon: '⚔️',
        description: 'Famous people from the Bible',
        words: [
            'MOSES', 'DAVID', 'SAMUEL', 'JOSEPH', 'DANIEL', 'JOSHUA',
            'ABRAHAM', 'JACOB', 'ELIJAH', 'RUTH', 'ESTHER', 'MARY',
            'PAUL', 'PETER', 'JOHN', 'JESUS', 'NOAH'
        ],
        hiddenMessage: 'BE BRAVE'
    },

    // Jesus' Miracles
    'bible-miracles-en': {
        id: 'bible-miracles-en',
        title: "Jesus' Miracles",
        category: 'bible',
        language: 'en',
        difficulty: 'normal',
        shape: 'heart',
        size: 15,
        icon: '✨',
        description: 'Miracles performed by Jesus',
        words: [
            'HEALING', 'BLIND', 'LAME', 'WATER', 'WINE', 'FISH',
            'BREAD', 'STORM', 'LAZARUS', 'WALKING', 'FAITH', 'LOVE',
            'POWER', 'BELIEVE', 'TOUCH', 'PRAY'
        ],
        hiddenMessage: 'JESUS LOVES'
    },

    // Christmas Story
    'bible-christmas-en': {
        id: 'bible-christmas-en',
        title: 'Christmas Story',
        category: 'bible',
        language: 'en',
        difficulty: 'easy',
        shape: 'star',
        size: 15,
        icon: '⭐',
        description: 'The birth of Jesus',
        words: [
            'JESUS', 'MARY', 'JOSEPH', 'MANGER', 'STAR', 'ANGELS',
            'SHEPHERDS', 'WISE', 'GIFTS', 'GOLD', 'BETHLEHEM', 'BABY',
            'KING', 'JOY', 'PEACE', 'LOVE', 'GLORY'
        ],
        hiddenMessage: 'SAVIOR BORN'
    },

    // Easter Story
    'bible-easter-en': {
        id: 'bible-easter-en',
        title: 'Easter Story',
        category: 'bible',
        language: 'en',
        difficulty: 'normal',
        shape: 'cross',
        size: 14,
        icon: '✝️',
        description: 'The resurrection of Jesus',
        words: [
            'JESUS', 'CROSS', 'RISEN', 'TOMB', 'STONE', 'ANGEL',
            'MARY', 'HOPE', 'LIFE', 'LOVE', 'SAVE', 'LAMB',
            'GLORY', 'ALIVE', 'SUNDAY', 'EMPTY'
        ],
        hiddenMessage: 'HE IS RISEN'
    },

    // Fruits of the Spirit
    'bible-fruits-en': {
        id: 'bible-fruits-en',
        title: 'Fruits of the Spirit',
        category: 'bible',
        language: 'en',
        difficulty: 'medium',
        shape: 'heart',
        size: 15,
        icon: '🍎',
        description: 'Galatians 5:22-23',
        words: [
            'LOVE', 'JOY', 'PEACE', 'PATIENCE', 'KINDNESS', 'GOODNESS',
            'FAITHFULNESS', 'GENTLENESS', 'SELF', 'CONTROL', 'SPIRIT',
            'FRUIT', 'HEART', 'GOD', 'GRACE'
        ],
        hiddenMessage: 'LIVE BY SPIRIT'
    },

    // Ten Commandments
    'bible-commandments-en': {
        id: 'bible-commandments-en',
        title: 'Ten Commandments',
        category: 'bible',
        language: 'en',
        difficulty: 'medium',
        shape: 'square',
        size: 15,
        icon: '📜',
        description: 'Words about God\'s laws',
        words: [
            'GOD', 'WORSHIP', 'NAME', 'SABBATH', 'HONOR', 'PARENTS',
            'KILL', 'STEAL', 'LIE', 'COVET', 'MOSES', 'STONE',
            'TABLETS', 'MOUNTAIN', 'LAW', 'OBEY', 'LOVE'
        ],
        hiddenMessage: 'OBEY GOD'
    },

    // David and Goliath
    'bible-david-en': {
        id: 'bible-david-en',
        title: 'David and Goliath',
        category: 'bible',
        language: 'en',
        difficulty: 'easy',
        shape: 'diamond',
        size: 12,
        icon: '🗡️',
        description: 'The story of young David',
        words: [
            'DAVID', 'GOLIATH', 'GIANT', 'STONE', 'SLING', 'BRAVE',
            'SHEEP', 'ARMOR', 'SWORD', 'FAITH', 'GOD', 'VICTORY',
            'KING', 'ISRAEL', 'TRUST'
        ],
        hiddenMessage: 'GOD WINS'
    },

    // Jonah and the Whale
    'bible-jonah-en': {
        id: 'bible-jonah-en',
        title: 'Jonah and the Whale',
        category: 'bible',
        language: 'en',
        difficulty: 'easy',
        shape: 'oval',
        size: 12,
        icon: '🐋',
        description: 'Jonah\'s big adventure',
        words: [
            'JONAH', 'WHALE', 'FISH', 'BOAT', 'STORM', 'SEA',
            'PRAY', 'NINEVEH', 'OBEY', 'GOD', 'SAILORS', 'SWALLOW',
            'THREE', 'DAYS', 'SORRY'
        ],
        hiddenMessage: 'OBEY GOD'
    },

    // ==========================================
    // BIBLE TEMPLATES - SPANISH
    // ==========================================

    // Creación
    'bible-creation-es': {
        id: 'bible-creation-es',
        title: 'La Creación',
        category: 'bible',
        language: 'es',
        difficulty: 'easy',
        shape: 'square',
        size: 12,
        icon: '🌍',
        description: 'Palabras de la historia de la creación',
        words: [
            'DIOS', 'LUZ', 'AGUA', 'CIELO', 'TIERRA', 'PLANTAS',
            'SOL', 'LUNA', 'ESTRELLAS', 'PECES', 'AVES', 'ANIMALES',
            'ADAN', 'EVA', 'JARDIN', 'BUENO', 'DESCANSO'
        ],
        hiddenMessage: 'DIOS CREO'
    },

    // Arca de Noé
    'bible-noah-es': {
        id: 'bible-noah-es',
        title: 'El Arca de Noé',
        category: 'bible',
        language: 'es',
        difficulty: 'easy',
        shape: 'square',
        size: 12,
        icon: '🚢',
        description: 'Animales y palabras de la historia de Noé',
        words: [
            'NOE', 'ARCA', 'LLUVIA', 'DILUVIO', 'ANIMALES', 'PALOMA',
            'ARCOIRIS', 'PROMESA', 'BARCO', 'AGUA', 'FAMILIA', 'FE',
            'DOS', 'LEON', 'JIRAFA', 'AMOR'
        ],
        hiddenMessage: 'CONFIA'
    },

    // Héroes de la Biblia
    'bible-heroes-es': {
        id: 'bible-heroes-es',
        title: 'Héroes de la Biblia',
        category: 'bible',
        language: 'es',
        difficulty: 'normal',
        shape: 'cross',
        size: 15,
        icon: '⚔️',
        description: 'Personas famosas de la Biblia',
        words: [
            'MOISES', 'DAVID', 'SAMUEL', 'JOSE', 'DANIEL', 'JOSUE',
            'ABRAHAM', 'JACOB', 'ELIAS', 'RUT', 'ESTER', 'MARIA',
            'PABLO', 'PEDRO', 'JUAN', 'JESUS', 'NOE'
        ],
        hiddenMessage: 'SE VALIENTE'
    },

    // Milagros de Jesús
    'bible-miracles-es': {
        id: 'bible-miracles-es',
        title: 'Milagros de Jesús',
        category: 'bible',
        language: 'es',
        difficulty: 'normal',
        shape: 'heart',
        size: 15,
        icon: '✨',
        description: 'Milagros realizados por Jesús',
        words: [
            'SANIDAD', 'CIEGO', 'COJO', 'AGUA', 'VINO', 'PECES',
            'PAN', 'TORMENTA', 'LAZARO', 'CAMINAR', 'FE', 'AMOR',
            'PODER', 'CREER', 'TOCAR', 'ORAR'
        ],
        hiddenMessage: 'JESUS AMA'
    },

    // Navidad
    'bible-christmas-es': {
        id: 'bible-christmas-es',
        title: 'Historia de Navidad',
        category: 'bible',
        language: 'es',
        difficulty: 'easy',
        shape: 'star',
        size: 15,
        icon: '⭐',
        description: 'El nacimiento de Jesús',
        words: [
            'JESUS', 'MARIA', 'JOSE', 'PESEBRE', 'ESTRELLA', 'ANGELES',
            'PASTORES', 'MAGOS', 'REGALOS', 'ORO', 'BELEN', 'BEBE',
            'REY', 'GOZO', 'PAZ', 'AMOR', 'GLORIA'
        ],
        hiddenMessage: 'NACIO JESUS'
    },

    // Pascua
    'bible-easter-es': {
        id: 'bible-easter-es',
        title: 'Historia de Pascua',
        category: 'bible',
        language: 'es',
        difficulty: 'normal',
        shape: 'cross',
        size: 14,
        icon: '✝️',
        description: 'La resurrección de Jesús',
        words: [
            'JESUS', 'CRUZ', 'VIVE', 'TUMBA', 'PIEDRA', 'ANGEL',
            'MARIA', 'ESPERANZA', 'VIDA', 'AMOR', 'SALVAR', 'CORDERO',
            'GLORIA', 'DOMINGO', 'VACIO', 'CIELO'
        ],
        hiddenMessage: 'RESUCITO'
    },

    // Frutos del Espíritu
    'bible-fruits-es': {
        id: 'bible-fruits-es',
        title: 'Frutos del Espíritu',
        category: 'bible',
        language: 'es',
        difficulty: 'medium',
        shape: 'heart',
        size: 15,
        icon: '🍎',
        description: 'Gálatas 5:22-23',
        words: [
            'AMOR', 'GOZO', 'PAZ', 'PACIENCIA', 'BONDAD', 'BENIGNIDAD',
            'FIDELIDAD', 'MANSEDUMBRE', 'DOMINIO', 'ESPIRITU', 'FRUTO',
            'CORAZON', 'DIOS', 'GRACIA', 'FE'
        ],
        hiddenMessage: 'DIOS ES AMOR'
    },

    // David y Goliat
    'bible-david-es': {
        id: 'bible-david-es',
        title: 'David y Goliat',
        category: 'bible',
        language: 'es',
        difficulty: 'easy',
        shape: 'diamond',
        size: 12,
        icon: '🗡️',
        description: 'La historia del joven David',
        words: [
            'DAVID', 'GOLIAT', 'GIGANTE', 'PIEDRA', 'HONDA', 'VALIENTE',
            'OVEJAS', 'ARMADURA', 'ESPADA', 'FE', 'DIOS', 'VICTORIA',
            'REY', 'ISRAEL', 'CONFIAR'
        ],
        hiddenMessage: 'DIOS GANA'
    },

    // Jonás y la Ballena
    'bible-jonah-es': {
        id: 'bible-jonah-es',
        title: 'Jonás y la Ballena',
        category: 'bible',
        language: 'es',
        difficulty: 'easy',
        shape: 'oval',
        size: 12,
        icon: '🐋',
        description: 'La gran aventura de Jonás',
        words: [
            'JONAS', 'BALLENA', 'PEZ', 'BARCO', 'TORMENTA', 'MAR',
            'ORAR', 'NINIVE', 'OBEDECER', 'DIOS', 'MARINEROS', 'TRAGAR',
            'TRES', 'DIAS', 'PERDON'
        ],
        hiddenMessage: 'OBEDECE'
    },

    // ==========================================
    // HOLIDAY TEMPLATES
    // ==========================================

    'holidays-thanksgiving-en': {
        id: 'holidays-thanksgiving-en',
        title: 'Thanksgiving',
        category: 'holidays',
        language: 'en',
        difficulty: 'easy',
        shape: 'square',
        size: 12,
        icon: '🦃',
        description: 'Give thanks!',
        words: [
            'TURKEY', 'FAMILY', 'THANKFUL', 'DINNER', 'PIE', 'HARVEST',
            'GRATEFUL', 'AUTUMN', 'FEAST', 'LOVE', 'BLESSING', 'CORN',
            'PILGRIMS', 'FRIENDS', 'JOY'
        ],
        hiddenMessage: 'GIVE THANKS'
    },

    'holidays-halloween-en': {
        id: 'holidays-halloween-en',
        title: 'Halloween Fun',
        category: 'holidays',
        language: 'en',
        difficulty: 'normal',
        shape: 'circle',
        size: 14,
        icon: '🎃',
        description: 'Spooky word search',
        words: [
            'PUMPKIN', 'GHOST', 'CANDY', 'WITCH', 'COSTUME', 'SPIDER',
            'BAT', 'MONSTER', 'TRICK', 'TREAT', 'SCARY', 'MOON',
            'NIGHT', 'BROOM', 'CAT', 'MASK'
        ],
        hiddenMessage: 'BOO'
    },

    // ==========================================
    // ANIMAL TEMPLATES
    // ==========================================

    'animals-ocean-en': {
        id: 'animals-ocean-en',
        title: 'Ocean Animals',
        category: 'animals',
        language: 'en',
        difficulty: 'easy',
        shape: 'oval',
        size: 12,
        icon: '🐠',
        description: 'Creatures of the sea',
        words: [
            'WHALE', 'DOLPHIN', 'SHARK', 'OCTOPUS', 'JELLYFISH', 'CRAB',
            'TURTLE', 'SEAHORSE', 'FISH', 'STARFISH', 'CORAL', 'SEAL',
            'LOBSTER', 'SQUID', 'CLAM'
        ],
        hiddenMessage: 'DEEP BLUE'
    },

    'animals-safari-en': {
        id: 'animals-safari-en',
        title: 'Safari Animals',
        category: 'animals',
        language: 'en',
        difficulty: 'normal',
        shape: 'diamond',
        size: 14,
        icon: '🦁',
        description: 'African wildlife',
        words: [
            'LION', 'ELEPHANT', 'GIRAFFE', 'ZEBRA', 'HIPPO', 'RHINO',
            'CHEETAH', 'GORILLA', 'MONKEY', 'ANTELOPE', 'HYENA', 'BUFFALO',
            'CROCODILE', 'LEOPARD', 'MEERKAT'
        ],
        hiddenMessage: 'WILD'
    },

    'animals-pets-en': {
        id: 'animals-pets-en',
        title: 'Pets & Farm',
        category: 'animals',
        language: 'en',
        difficulty: 'easy',
        shape: 'heart',
        size: 12,
        icon: '🐕',
        description: 'Animals we love',
        words: [
            'DOG', 'CAT', 'RABBIT', 'HAMSTER', 'BIRD', 'FISH',
            'HORSE', 'COW', 'PIG', 'SHEEP', 'CHICKEN', 'DUCK',
            'GOAT', 'DONKEY', 'PUPPY', 'KITTEN'
        ],
        hiddenMessage: 'LOVE PETS'
    },

    // ==========================================
    // NATURE TEMPLATES
    // ==========================================

    'nature-space-en': {
        id: 'nature-space-en',
        title: 'Space Adventure',
        category: 'nature',
        language: 'en',
        difficulty: 'medium',
        shape: 'star',
        size: 15,
        icon: '🚀',
        description: 'Explore the universe',
        words: [
            'PLANET', 'STAR', 'MOON', 'SUN', 'GALAXY', 'ROCKET',
            'ASTRONAUT', 'COMET', 'METEOR', 'SATURN', 'MARS', 'JUPITER',
            'ORBIT', 'EARTH', 'SPACE', 'ALIEN'
        ],
        hiddenMessage: 'BLAST OFF'
    },

    'nature-weather-en': {
        id: 'nature-weather-en',
        title: 'Weather Words',
        category: 'nature',
        language: 'en',
        difficulty: 'easy',
        shape: 'circle',
        size: 12,
        icon: '🌦️',
        description: 'All kinds of weather',
        words: [
            'RAIN', 'SNOW', 'SUNNY', 'CLOUDY', 'WIND', 'STORM',
            'THUNDER', 'LIGHTNING', 'FOG', 'RAINBOW', 'HAIL', 'FROST',
            'TORNADO', 'HUMID', 'COLD', 'HOT'
        ],
        hiddenMessage: 'WEATHER FUN'
    },

    // ==========================================
    // EDUCATIONAL TEMPLATES
    // ==========================================

    'edu-colors-en': {
        id: 'edu-colors-en',
        title: 'Colors',
        category: 'educational',
        language: 'en',
        difficulty: 'easy',
        shape: 'circle',
        size: 10,
        icon: '🌈',
        description: 'All the colors of the rainbow',
        words: [
            'RED', 'BLUE', 'GREEN', 'YELLOW', 'ORANGE', 'PURPLE',
            'PINK', 'BROWN', 'BLACK', 'WHITE', 'GRAY', 'GOLD',
            'SILVER', 'RAINBOW'
        ],
        hiddenMessage: 'COLOR'
    },

    'edu-numbers-en': {
        id: 'edu-numbers-en',
        title: 'Number Words',
        category: 'educational',
        language: 'en',
        difficulty: 'easy',
        shape: 'square',
        size: 12,
        icon: '🔢',
        description: 'Learn number words',
        words: [
            'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX',
            'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE',
            'TWENTY', 'HUNDRED', 'ZERO'
        ],
        hiddenMessage: 'COUNT'
    },

    'edu-shapes-en': {
        id: 'edu-shapes-en',
        title: 'Shape Names',
        category: 'educational',
        language: 'en',
        difficulty: 'normal',
        shape: 'diamond',
        size: 13,
        icon: '🔷',
        description: 'Geometric shapes',
        words: [
            'CIRCLE', 'SQUARE', 'TRIANGLE', 'RECTANGLE', 'OVAL', 'DIAMOND',
            'STAR', 'HEART', 'PENTAGON', 'HEXAGON', 'OCTAGON', 'CUBE',
            'SPHERE', 'CONE', 'PYRAMID'
        ],
        hiddenMessage: 'SHAPES'
    },

    // Spanish Educational
    'edu-colors-es': {
        id: 'edu-colors-es',
        title: 'Los Colores',
        category: 'educational',
        language: 'es',
        difficulty: 'easy',
        shape: 'circle',
        size: 10,
        icon: '🌈',
        description: 'Todos los colores del arcoiris',
        words: [
            'ROJO', 'AZUL', 'VERDE', 'AMARILLO', 'NARANJA', 'MORADO',
            'ROSA', 'CAFE', 'NEGRO', 'BLANCO', 'GRIS', 'DORADO',
            'PLATEADO', 'ARCOIRIS'
        ],
        hiddenMessage: 'COLOR'
    },

    'edu-numbers-es': {
        id: 'edu-numbers-es',
        title: 'Los Números',
        category: 'educational',
        language: 'es',
        difficulty: 'easy',
        shape: 'square',
        size: 12,
        icon: '🔢',
        description: 'Aprende los números',
        words: [
            'UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS',
            'SIETE', 'OCHO', 'NUEVE', 'DIEZ', 'ONCE', 'DOCE',
            'VEINTE', 'CIEN', 'CERO'
        ],
        hiddenMessage: 'CUENTA'
    },

    // ==========================================
    // CHALLENGE TEMPLATES (Hard/Extreme)
    // ==========================================

    'challenge-bible-hard-en': {
        id: 'challenge-bible-hard-en',
        title: 'Bible Challenge',
        category: 'bible',
        language: 'en',
        difficulty: 'hard',
        shape: 'cross',
        size: 18,
        icon: '🏆',
        description: 'Advanced Bible word search',
        words: [
            'JERUSALEM', 'BETHLEHEM', 'NAZARETH', 'GALILEE', 'JORDAN',
            'PHARISEE', 'APOSTLE', 'DISCIPLE', 'SCRIPTURE', 'PROPHET',
            'COVENANT', 'BLESSING', 'SALVATION', 'REDEMPTION', 'PARABLE',
            'MIRACLE', 'BAPTISM', 'RESURRECTION', 'CRUCIFIXION', 'TABERNACLE'
        ],
        hiddenMessage: ''
    },

    'challenge-bible-extreme-en': {
        id: 'challenge-bible-extreme-en',
        title: 'Extreme Bible',
        category: 'bible',
        language: 'en',
        difficulty: 'extreme',
        shape: 'square',
        size: 20,
        icon: '🔥',
        description: 'The ultimate challenge - no word list!',
        words: [
            'MELCHIZEDEK', 'NEBUCHADNEZZAR', 'MEDITERRANEAN', 'THESSALONIANS',
            'DEUTERONOMY', 'ECCLESIASTES', 'CORINTHIANS', 'PHILIPPIANS',
            'REVELATION', 'LEVITICUS', 'CHRONICLES', 'LAMENTATIONS',
            'HABAKKUK', 'ZEPHANIAH', 'ZECHARIAH', 'COLOSSIANS',
            'GALATIANS', 'EPHESIANS', 'HEBREWS', 'TIMOTHY'
        ],
        hiddenMessage: ''
    },

    'challenge-animals-extreme-en': {
        id: 'challenge-animals-extreme-en',
        title: 'Animal Expert',
        category: 'animals',
        language: 'en',
        difficulty: 'extreme',
        shape: 'diamond',
        size: 20,
        icon: '🦎',
        description: 'Can you find all the animals?',
        words: [
            'CHAMELEON', 'HIPPOPOTAMUS', 'SALAMANDER', 'WOODPECKER',
            'PORCUPINE', 'ORANGUTAN', 'WOLVERINE', 'CHINCHILLA',
            'ARMADILLO', 'FLAMINGO', 'PENGUIN', 'PLATYPUS',
            'KANGAROO', 'TARANTULA', 'ALLIGATOR', 'CROCODILE',
            'BARRACUDA', 'BUTTERFLY', 'CENTIPEDE', 'DRAGONFLY'
        ],
        hiddenMessage: ''
    }
};

/**
 * Internationalization strings
 */
const I18N = {
    en: {
        'templates-title': 'Pre-Made Templates',
        'templates-desc': 'Choose from our collection of fun, ready-to-print word searches!',
        'category': 'Category:',
        'language': 'Language:',
        'difficulty': 'Difficulty:',
        'all': 'All',
        'bible': 'Bible & Faith',
        'holidays': 'Holidays',
        'animals': 'Animals',
        'nature': 'Nature',
        'educational': 'Educational',
        'easy': 'Easy',
        'normal': 'Normal',
        'medium': 'Medium',
        'hard': 'Hard',
        'extreme': 'Extreme',
        'create-custom': 'Create Your Own Word Search',
        'puzzle-title': 'Puzzle Title:',
        'enter-words': 'Enter Words (one per line or comma separated):',
        'words-entered': 'words entered',
        'grid-size': 'Grid Size:',
        'shape': 'Shape:',
        'theme': 'Theme:',
        'advanced-options': 'Advanced Options',
        'show-word-list': 'Show word list on puzzle',
        'uppercase-only': 'Uppercase letters only',
        'generate-answer-key': 'Generate answer key',
        'hidden-message': 'Hidden Message (optional):',
        'hidden-message-hint': 'Unused grid spaces will spell out this message!',
        'fill-letters': 'Fill Letters:',
        'generate-puzzle': 'Generate Puzzle',
        'preview': 'Preview',
        'preview-empty': 'Enter words and click "Generate Puzzle" to create your word search!',
        'print-puzzle': 'Print Puzzle',
        'print-with-answers': 'Print with Answers',
        'find-words': 'Find These Words:',
        'words': 'words',
        'no-templates': 'No templates found matching your criteria.'
    },
    es: {
        'templates-title': 'Plantillas Prediseñadas',
        'templates-desc': '¡Elige de nuestra colección de sopas de letras listas para imprimir!',
        'category': 'Categoría:',
        'language': 'Idioma:',
        'difficulty': 'Dificultad:',
        'all': 'Todos',
        'bible': 'Biblia y Fe',
        'holidays': 'Fiestas',
        'animals': 'Animales',
        'nature': 'Naturaleza',
        'educational': 'Educativo',
        'easy': 'Fácil',
        'normal': 'Normal',
        'medium': 'Medio',
        'hard': 'Difícil',
        'extreme': 'Extremo',
        'create-custom': 'Crea Tu Propia Sopa de Letras',
        'puzzle-title': 'Título del Puzzle:',
        'enter-words': 'Ingresa Palabras (una por línea o separadas por comas):',
        'words-entered': 'palabras ingresadas',
        'grid-size': 'Tamaño de la Cuadrícula:',
        'shape': 'Forma:',
        'theme': 'Tema:',
        'advanced-options': 'Opciones Avanzadas',
        'show-word-list': 'Mostrar lista de palabras en el puzzle',
        'uppercase-only': 'Solo letras mayúsculas',
        'generate-answer-key': 'Generar clave de respuestas',
        'hidden-message': 'Mensaje Oculto (opcional):',
        'hidden-message-hint': '¡Los espacios no usados deletrearán este mensaje!',
        'fill-letters': 'Letras de Relleno:',
        'generate-puzzle': 'Generar Puzzle',
        'preview': 'Vista Previa',
        'preview-empty': '¡Ingresa palabras y haz clic en "Generar Puzzle" para crear tu sopa de letras!',
        'print-puzzle': 'Imprimir Puzzle',
        'print-with-answers': 'Imprimir con Respuestas',
        'find-words': 'Encuentra Estas Palabras:',
        'words': 'palabras',
        'no-templates': 'No se encontraron plantillas que coincidan con tus criterios.'
    },
    fr: {
        'templates-title': 'Modèles Prêts à l\'Emploi',
        'templates-desc': 'Choisissez parmi notre collection de mots mêlés amusants, prêts à imprimer!',
        'category': 'Catégorie:',
        'language': 'Langue:',
        'difficulty': 'Difficulté:',
        'all': 'Tout',
        'bible': 'Bible et Foi',
        'holidays': 'Fêtes',
        'animals': 'Animaux',
        'nature': 'Nature',
        'educational': 'Éducatif',
        'easy': 'Facile',
        'normal': 'Normal',
        'medium': 'Moyen',
        'hard': 'Difficile',
        'extreme': 'Extrême',
        'create-custom': 'Créez Votre Propre Grille',
        'puzzle-title': 'Titre du Puzzle:',
        'enter-words': 'Entrez les Mots (un par ligne ou séparés par des virgules):',
        'words-entered': 'mots entrés',
        'grid-size': 'Taille de la Grille:',
        'shape': 'Forme:',
        'theme': 'Thème:',
        'advanced-options': 'Options Avancées',
        'show-word-list': 'Afficher la liste des mots sur le puzzle',
        'uppercase-only': 'Lettres majuscules uniquement',
        'generate-answer-key': 'Générer la clé de réponse',
        'hidden-message': 'Message Caché (optionnel):',
        'hidden-message-hint': 'Les espaces inutilisés épelleront ce message!',
        'fill-letters': 'Lettres de Remplissage:',
        'generate-puzzle': 'Générer le Puzzle',
        'preview': 'Aperçu',
        'preview-empty': 'Entrez des mots et cliquez sur "Générer le Puzzle" pour créer votre grille!',
        'print-puzzle': 'Imprimer le Puzzle',
        'print-with-answers': 'Imprimer avec Réponses',
        'find-words': 'Trouvez Ces Mots:',
        'words': 'mots',
        'no-templates': 'Aucun modèle ne correspond à vos critères.'
    },
    de: {
        'templates-title': 'Fertige Vorlagen',
        'templates-desc': 'Wählen Sie aus unserer Sammlung lustiger, druckfertiger Wortsuchrätsel!',
        'category': 'Kategorie:',
        'language': 'Sprache:',
        'difficulty': 'Schwierigkeit:',
        'all': 'Alle',
        'bible': 'Bibel & Glaube',
        'holidays': 'Feiertage',
        'animals': 'Tiere',
        'nature': 'Natur',
        'educational': 'Lehrreich',
        'easy': 'Einfach',
        'normal': 'Normal',
        'medium': 'Mittel',
        'hard': 'Schwer',
        'extreme': 'Extrem',
        'create-custom': 'Erstellen Sie Ihr Eigenes Rätsel',
        'puzzle-title': 'Rätseltitel:',
        'enter-words': 'Wörter eingeben (eines pro Zeile oder durch Kommas getrennt):',
        'words-entered': 'Wörter eingegeben',
        'grid-size': 'Gittergröße:',
        'shape': 'Form:',
        'theme': 'Thema:',
        'advanced-options': 'Erweiterte Optionen',
        'show-word-list': 'Wortliste auf dem Rätsel anzeigen',
        'uppercase-only': 'Nur Großbuchstaben',
        'generate-answer-key': 'Lösungsschlüssel generieren',
        'hidden-message': 'Versteckte Nachricht (optional):',
        'hidden-message-hint': 'Unbenutzte Felder buchstabieren diese Nachricht!',
        'fill-letters': 'Füllbuchstaben:',
        'generate-puzzle': 'Rätsel Generieren',
        'preview': 'Vorschau',
        'preview-empty': 'Geben Sie Wörter ein und klicken Sie auf "Rätsel Generieren"!',
        'print-puzzle': 'Rätsel Drucken',
        'print-with-answers': 'Mit Lösungen Drucken',
        'find-words': 'Finde Diese Wörter:',
        'words': 'Wörter',
        'no-templates': 'Keine Vorlagen gefunden, die Ihren Kriterien entsprechen.'
    },
    pt: {
        'templates-title': 'Modelos Prontos',
        'templates-desc': 'Escolha da nossa coleção de caça-palavras divertidos, prontos para imprimir!',
        'category': 'Categoria:',
        'language': 'Idioma:',
        'difficulty': 'Dificuldade:',
        'all': 'Todos',
        'bible': 'Bíblia e Fé',
        'holidays': 'Feriados',
        'animals': 'Animais',
        'nature': 'Natureza',
        'educational': 'Educativo',
        'easy': 'Fácil',
        'normal': 'Normal',
        'medium': 'Médio',
        'hard': 'Difícil',
        'extreme': 'Extremo',
        'create-custom': 'Crie Seu Próprio Caça-Palavras',
        'puzzle-title': 'Título do Puzzle:',
        'enter-words': 'Digite as Palavras (uma por linha ou separadas por vírgulas):',
        'words-entered': 'palavras inseridas',
        'grid-size': 'Tamanho da Grade:',
        'shape': 'Forma:',
        'theme': 'Tema:',
        'advanced-options': 'Opções Avançadas',
        'show-word-list': 'Mostrar lista de palavras no puzzle',
        'uppercase-only': 'Apenas letras maiúsculas',
        'generate-answer-key': 'Gerar gabarito',
        'hidden-message': 'Mensagem Oculta (opcional):',
        'hidden-message-hint': 'Espaços não usados soletrarão esta mensagem!',
        'fill-letters': 'Letras de Preenchimento:',
        'generate-puzzle': 'Gerar Puzzle',
        'preview': 'Visualização',
        'preview-empty': 'Digite palavras e clique em "Gerar Puzzle" para criar seu caça-palavras!',
        'print-puzzle': 'Imprimir Puzzle',
        'print-with-answers': 'Imprimir com Respostas',
        'find-words': 'Encontre Estas Palavras:',
        'words': 'palavras',
        'no-templates': 'Nenhum modelo encontrado que corresponda aos seus critérios.'
    },
    it: {
        'templates-title': 'Modelli Pronti',
        'templates-desc': 'Scegli dalla nostra collezione di cruciverba divertenti, pronti da stampare!',
        'category': 'Categoria:',
        'language': 'Lingua:',
        'difficulty': 'Difficoltà:',
        'all': 'Tutti',
        'bible': 'Bibbia e Fede',
        'holidays': 'Festività',
        'animals': 'Animali',
        'nature': 'Natura',
        'educational': 'Educativo',
        'easy': 'Facile',
        'normal': 'Normale',
        'medium': 'Medio',
        'hard': 'Difficile',
        'extreme': 'Estremo',
        'create-custom': 'Crea il Tuo Cruciverba',
        'puzzle-title': 'Titolo del Puzzle:',
        'enter-words': 'Inserisci le Parole (una per riga o separate da virgole):',
        'words-entered': 'parole inserite',
        'grid-size': 'Dimensione Griglia:',
        'shape': 'Forma:',
        'theme': 'Tema:',
        'advanced-options': 'Opzioni Avanzate',
        'show-word-list': 'Mostra lista parole sul puzzle',
        'uppercase-only': 'Solo lettere maiuscole',
        'generate-answer-key': 'Genera chiave di risposta',
        'hidden-message': 'Messaggio Nascosto (opzionale):',
        'hidden-message-hint': 'Gli spazi inutilizzati comporranno questo messaggio!',
        'fill-letters': 'Lettere di Riempimento:',
        'generate-puzzle': 'Genera Puzzle',
        'preview': 'Anteprima',
        'preview-empty': 'Inserisci parole e clicca su "Genera Puzzle" per creare il tuo cruciverba!',
        'print-puzzle': 'Stampa Puzzle',
        'print-with-answers': 'Stampa con Risposte',
        'find-words': 'Trova Queste Parole:',
        'words': 'parole',
        'no-templates': 'Nessun modello trovato che corrisponda ai tuoi criteri.'
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TEMPLATES, I18N };
}
