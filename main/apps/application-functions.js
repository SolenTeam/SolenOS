// Application Functions

// Extend the SolenOS class with application functions
Object.assign(SolenOS.prototype, {
    openFilesApp() {
        const content = `
            <div class="app-content">
                <h3>File Explorer</h3>
                <div class="file-browser">
                    <div class="folder">📁 Documents</div>
                    <div class="folder">📁 Downloads</div>
                    <div class="folder">📁 Pictures</div>
                    <div class="folder">📁 Music</div>
                    <div class="folder">📁 Videos</div>
                </div>
            </div>
        `;

        this.windowManager.createWindow('Files', content, 500, 400);
    },

    openBrowserApp() {
        const content = `
            <div class="app-content">
                <div class="browser-toolbar">
                    <input type="text" class="address-bar" value="https://example.com" readonly>
                </div>
                <div class="browser-content">
                    <h3>Welcome to SolenBrowser</h3>
                    <p>This is a simulated web browser.</p>
                    <p>Enter a URL in the address bar to navigate.</p>
                </div>
            </div>
        `;

        this.windowManager.createWindow('Browser', content, 700, 500);
    },

    openSettingsApp() {
        // Get current language for translation
        const lang = this.currentLanguage || 'en';

        // Define translations for settings content
        const translations = {
            'System Settings': {
                es: 'Configuración del Sistema',
                fr: 'Paramètres Système',
                it: 'Impostazioni di Sistema',
                de: 'Systemeinstellungen'
            },
            'Theme:': {
                es: 'Tema:',
                fr: 'Thème:',
                it: 'Tema:',
                de: 'Thema:'
            },
            'Modern': {
                es: 'Moderno',
                fr: 'Moderne',
                it: 'Moderno',
                de: 'Modern'
            },
            'Light': {
                es: 'Claro',
                fr: 'Clair',
                it: 'Chiaro',
                de: 'Hell'
            },
            'Dark': {
                es: 'Oscuro',
                fr: 'Sombre',
                it: 'Scuro',
                de: 'Dunkel'
            },
            'Blue': {
                es: 'Azul',
                fr: 'Bleu',
                it: 'Blu',
                de: 'Blau'
            },
            'Wallpaper:': {
                es: 'Fondo de pantalla:',
                fr: 'Fond d\'écran:',
                it: 'Sfondo:',
                de: 'Hintergrund:'
            },
            'Default': {
                es: 'Predeterminado',
                fr: 'Par défaut',
                it: 'Predefinito',
                de: 'Standard'
            },
            'Mountain': {
                es: 'Montaña',
                fr: 'Montagne',
                it: 'Montagna',
                de: 'Berg'
            },
            'Ocean': {
                es: 'Océano',
                fr: 'Océan',
                it: 'Oceano',
                de: 'Ozean'
            },
            'Language:': {
                es: 'Idioma:',
                fr: 'Langue:',
                it: 'Lingua:',
                de: 'Sprache:'
            },
            'English': {
                es: 'Inglés',
                fr: 'Anglais',
                it: 'Inglese',
                de: 'Englisch'
            },
            'Spanish': {
                es: 'Español',
                fr: 'Espagnol',
                it: 'Spagnolo',
                de: 'Spanisch'
            },
            'French': {
                es: 'Francés',
                fr: 'Français',
                it: 'Francese',
                de: 'Französisch'
            },
            'Italian': {
                es: 'Italiano',
                fr: 'Italien',
                it: 'Italiano',
                de: 'Italienisch'
            },
            'German': {
                es: 'Alemán',
                fr: 'Allemand',
                it: 'Tedesco',
                de: 'Deutsch'
            }
        };

        // Helper function to translate text
        const t = (text) => translations[text] && translations[text][lang] ? translations[text][lang] : text;

        const content = `
            <div class="app-content">
                <h3>${t('System Settings')}</h3>
                <div class="settings-panel">
                    <div class="setting-item">
                        <label>${t('Theme:')}</label>
                        <select id="theme-selector" class="setting-control">
                            <option value="modern">${t('Modern')}</option>
                            <option value="light">${t('Light')}</option>
                            <option value="dark">${t('Dark')}</option>
                            <option value="blue">${t('Blue')}</option>
                        </select>
                    </div>
                    <div class="setting-item">
                        <label>${t('Wallpaper:')}</label>
                        <select id="wallpaper-selector" class="setting-control">
                            <option value="default">${t('Default')}</option>
                            <option value="mountain">${t('Mountain')}</option>
                            <option value="ocean">${t('Ocean')}</option>
                        </select>
                    </div>
                    <div class="setting-item">
                        <label>${t('Language:')}</label>
                        <select id="language-selector" class="setting-control">
                            <option value="en">${t('English')}</option>
                            <option value="es">${t('Spanish')}</option>
                            <option value="fr">${t('French')}</option>
                            <option value="it">${t('Italian')}</option>
                            <option value="de">${t('German')}</option>
                        </select>
                    </div>
                </div>
            </div>
        `;

        const windowObj = this.windowManager.createWindow('Settings', content, 450, 400);

        // Add event listeners for settings after the window is created
        setTimeout(() => {
            const themeSelector = document.getElementById('theme-selector');
            const wallpaperSelector = document.getElementById('wallpaper-selector');
            const languageSelector = document.getElementById('language-selector');

            // Apply theme immediately when selection changes
            if (themeSelector) {
                themeSelector.addEventListener('change', () => {
                    this.applyTheme(themeSelector.value);
                    
                    // Save settings to localStorage
                    const currentSettings = JSON.parse(localStorage.getItem('solenos-settings') || '{}');
                    currentSettings.theme = themeSelector.value;
                    localStorage.setItem('solenos-settings', JSON.stringify(currentSettings));
                });
            }

            // Apply wallpaper immediately when selection changes
            if (wallpaperSelector) {
                wallpaperSelector.addEventListener('change', () => {
                    this.applyWallpaper(wallpaperSelector.value);
                    
                    // Save settings to localStorage
                    const currentSettings = JSON.parse(localStorage.getItem('solenos-settings') || '{}');
                    currentSettings.wallpaper = wallpaperSelector.value;
                    localStorage.setItem('solenos-settings', JSON.stringify(currentSettings));
                });
            }

            // Apply language immediately when selection changes
            if (languageSelector) {
                languageSelector.addEventListener('change', () => {
                    this.applyLanguage(languageSelector.value);
                    
                    // Save settings to localStorage
                    const currentSettings = JSON.parse(localStorage.getItem('solenos-settings') || '{}');
                    currentSettings.language = languageSelector.value;
                    localStorage.setItem('solenos-settings', JSON.stringify(currentSettings));
                });
            }
        }, 100);
    },

    applySettings(settings) {
        console.log('Applying settings:', settings);

        // Apply theme
        if (settings.theme) {
            this.applyTheme(settings.theme);
        }

        // Apply wallpaper
        if (settings.wallpaper) {
            this.applyWallpaper(settings.wallpaper);
        }

        // Apply language
        if (settings.language) {
            this.applyLanguage(settings.language);
        }

        // Save settings to localStorage to remember them after shutdown
        localStorage.setItem('solenos-settings', JSON.stringify(settings));

        // Settings applied without confirmation
    },

    openTerminalApp() {
        // Get current language for translation
        const lang = this.currentLanguage || 'en';

        // Define translations for terminal content
        const translations = {
            'SolenOS Terminal': {
                es: 'Terminal SolenOS',
                fr: 'Terminal SolenOS',
                it: 'Terminale SolenOS',
                de: 'SolenOS Terminal'
            },
            'Welcome to SolenOS Terminal v1.0': {
                es: 'Bienvenido a la Terminal SolenOS v1.0',
                fr: 'Bienvenue dans le Terminal SolenOS v1.0',
                it: 'Benvenuto nel Terminale SolenOS v1.0',
                de: 'Willkommen im SolenOS Terminal v1.0'
            },
            '$ Type \'help\' for available commands': {
                es: '$ Escriba \'help\' para ver los comandos disponibles',
                fr: '$ Tapez \'help\' pour voir les commandes disponibles',
                it: '$ Digiti \'help\' per vedere i comandi disponibili',
                de: '$ Geben Sie \'help\' ein, um verfügbare Befehle zu sehen'
            },
            'Type a command...': {
                es: 'Escriba un comando...',
                fr: 'Entrez une commande...',
                it: 'Digiti un comando...',
                de: 'Geben Sie einen Befehl ein...'
            }
        };

        // Helper function to translate text
        const t = (text) => translations[text] && translations[text][lang] ? translations[text][lang] : text;

        const content = `
            <div class="app-content terminal-content">
                <div class="terminal-header">${t('SolenOS Terminal')}</div>
                <div class="terminal-output" id="terminal-output-${this.windowManager.windowCounter + 1}">
                    <div class="terminal-line">${t('Welcome to SolenOS Terminal v1.0')}</div>
                    <div class="terminal-line">$ ${t('$ Type \'help\' for available commands')}</div>
                </div>
                <div class="terminal-input-area">
                    <span class="terminal-prompt">$</span>
                    <input type="text" class="terminal-command" id="terminal-input-${this.windowManager.windowCounter + 1}" placeholder="${t('Type a command...')}" autofocus>
                </div>
            </div>
        `;

        const windowObj = this.windowManager.createWindow('Terminal', content, 600, 400);

        // Add terminal functionality after the window is created
        setTimeout(() => {
            const outputDiv = document.getElementById(`terminal-output-${this.windowManager.windowCounter}`);
            const inputEl = document.getElementById(`terminal-input-${this.windowManager.windowCounter}`);

            if (inputEl && outputDiv) {
                inputEl.focus();

                inputEl.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        const command = inputEl.value.trim();
                        this.executeTerminalCommand(command, outputDiv, inputEl);
                    }
                });
            }
        }, 100);
    },

    executeTerminalCommand(command, outputDiv, inputEl) {
        // Get current language for translation
        const lang = this.currentLanguage || 'en';

        // Define translations for terminal responses
        const translations = {
            'Available commands: help, echo, date, time, clear, version, ls, pwd, whoami, uptime, calc': {
                es: 'Comandos disponibles: help, echo, date, time, clear, version, ls, pwd, whoami, uptime, calc',
                fr: 'Commandes disponibles: help, echo, date, time, clear, version, ls, pwd, whoami, uptime, calc',
                it: 'Comandi disponibili: help, echo, date, time, clear, version, ls, pwd, whoami, uptime, calc',
                de: 'Verfügbare Befehle: help, echo, date, time, clear, version, ls, pwd, whoami, uptime, calc'
            },
            'Usage: echo [text] - Please provide text to echo': {
                es: 'Uso: echo [texto] - Por favor proporcione texto para repetir',
                fr: 'Utilisation: echo [texte] - Veuillez fournir du texte à répéter',
                it: 'Utilizzo: echo [testo] - Si prega di fornire il testo da ripetere',
                de: 'Verwendung: echo [Text] - Bitte geben Sie Text zum Wiederholen an'
            },
            'Command not found: ': {
                es: 'Comando no encontrado: ',
                fr: 'Commande non trouvée: ',
                it: 'Comando non trovato: ',
                de: 'Befehl nicht gefunden: '
            },
            '. Type \'help\' for available commands.': {
                es: '. Escriba \'help\' para ver los comandos disponibles.',
                fr: '. Tapez \'help\' pour voir les commandes disponibles.',
                it: '. Digiti \'help\' per vedere i comandi disponibili.',
                de: '. Geben Sie \'help\' ein, um verfügbare Befehle zu sehen.'
            },
            'Error: Division by zero': {
                es: 'Error: División por cero',
                fr: 'Erreur: Division par zéro',
                it: 'Errore: Divisione per zero',
                de: 'Fehler: Division durch Null'
            },
            'Invalid operator. Use +, -, *, x, ×, /, or ÷': {
                es: 'Operador inválido. Use +, -, *, x, ×, /, o ÷',
                fr: 'Opérateur invalide. Utilisez +, -, *, x, ×, /, ou ÷',
                it: 'Operatore non valido. Usi +, -, *, x, ×, /, o ÷',
                de: 'Ungültiger Operator. Verwenden Sie +, -, *, x, ×, /, oder ÷'
            },
            'Invalid numbers provided': {
                es: 'Números proporcionados inválidos',
                fr: 'Nombres fournis invalides',
                it: 'Numeri forniti non validi',
                de: 'Ungültige Zahlen angegeben'
            },
            'Usage: calc [number] [operator] [number]': {
                es: 'Uso: calc [número] [operador] [número]',
                fr: 'Utilisation: calc [nombre] [opérateur] [nombre]',
                it: 'Utilizzo: calc [numero] [operatore] [numero]',
                de: 'Verwendung: calc [Zahl] [Operator] [Zahl]'
            },
            'Documents  Downloads  Pictures  Music  Videos': {
                es: 'Documentos  Descargas  Imágenes  Música  Vídeos',
                fr: 'Documents  Téléchargements  Images  Musique  Vidéos',
                it: 'Documenti  Download  Immagini  Musica  Video',
                de: 'Dokumente  Downloads  Bilder  Musik  Videos'
            },
            '/home/user': {
                es: '/inicio/usuario',
                fr: '/home/utilisateur',
                it: '/home/utente',
                de: '/home/benutzer'
            },
            'guest': {
                es: 'invitado',
                fr: 'invité',
                it: 'ospite',
                de: 'gast'
            },
            'Uptime: ': {
                es: 'Tiempo activo: ',
                fr: 'Temps de fonctionnement: ',
                it: 'Tempo di attività: ',
                de: 'Betriebszeit: '
            },
            ' hours': {
                es: ' horas',
                fr: ' heures',
                it: ' ore',
                de: ' Stunden'
            }
        };

        // Helper function to translate text
        const t = (text) => translations[text] && translations[text][lang] ? translations[text][lang] : text;

        // Add the command to the output
        const commandLine = document.createElement('div');
        commandLine.className = 'terminal-line';
        commandLine.textContent = `$ ${command}`;
        outputDiv.appendChild(commandLine);

        let response = '';

        // Split command and arguments
        const cmdParts = command.split(' ');
        const cmd = cmdParts[0].toLowerCase();
        const args = cmdParts.slice(1);

        // Map translated commands to English equivalents
        const commandMap = {
            es: { 'ayuda': 'help', 'eco': 'echo', 'fecha': 'date', 'hora': 'time', 'limpiar': 'clear', 'versión': 'version', 'ls': 'ls', 'pwd': 'pwd', 'quiénsoy': 'whoami', 'tiempofuncionamiento': 'uptime', 'calcular': 'calc' },
            fr: { 'aide': 'help', 'répète': 'echo', 'date': 'date', 'heure': 'time', 'efface': 'clear', 'version': 'version', 'ls': 'ls', 'pwd': 'pwd', 'quisuisje': 'whoami', 'uptime': 'uptime', 'calcul': 'calc' },
            it: { 'aiuto': 'help', 'ripeti': 'echo', 'data': 'date', 'ora': 'time', 'pulisci': 'clear', 'versione': 'version', 'ls': 'ls', 'pwd': 'pwd', 'chiisono': 'whoami', 'uptime': 'uptime', 'calcola': 'calc' },
            de: { 'hilfe': 'help', 'echo': 'echo', 'datum': 'date', 'zeit': 'time', 'löschen': 'clear', 'version': 'version', 'ls': 'ls', 'pwd': 'pwd', 'werbinich': 'whoami', 'uptime': 'uptime', 'berechnen': 'calc' }
        };

        // Check if the command is a translated version
        if (commandMap[lang] && commandMap[lang][cmd]) {
            cmd = commandMap[lang][cmd];
        }

        switch(cmd) {
            case '':
                response = '';
                break;
            case 'help':
                response = t('Available commands: help, echo, date, time, clear, version, ls, pwd, whoami, uptime, calc');
                break;
            case 'echo':
                if (args.length > 0) {
                    response = args.join(' ');
                } else {
                    response = t('Usage: echo [text] - Please provide text to echo');
                }
                break;
            case 'date':
                response = new Date().toDateString();
                break;
            case 'time':
                response = new Date().toLocaleTimeString();
                break;
            case 'clear':
                outputDiv.innerHTML = `<div class="terminal-line">$ ${t('$ Type \'help\' for available commands')}</div>`;
                inputEl.value = '';
                return; // Don't add a response line for clear
            case 'version':
                response = 'SolenOS Terminal v1.0';
                break;
            case 'ls':
                response = t('Documents  Downloads  Pictures  Music  Videos');
                break;
            case 'pwd':
                response = t('/home/user');
                break;
            case 'whoami':
                response = t('guest');
                break;
            case 'uptime':
                const uptime = Math.floor(Math.random() * 100); // Simulated uptime
                response = t('Uptime: ') + uptime + t(' hours');
                break;
            case 'calc':
                if (args.length >= 3) {
                    const num1 = parseFloat(args[0]);
                    const op = args[1];
                    const num2 = parseFloat(args[2]);

                    if (!isNaN(num1) && !isNaN(num2)) {
                        switch(op) {
                            case '+':
                                response = (num1 + num2).toString();
                                break;
                            case '-':
                                response = (num1 - num2).toString();
                                break;
                            case '*':
                            case 'x':
                            case '×':
                                response = (num1 * num2).toString();
                                break;
                            case '/':
                            case '÷':
                                response = num2 !== 0 ? (num1 / num2).toString() : t('Error: Division by zero');
                                break;
                            default:
                                response = t('Invalid operator. Use +, -, *, x, ×, /, or ÷');
                        }
                    } else {
                        response = t('Invalid numbers provided');
                    }
                } else {
                    response = t('Usage: calc [number] [operator] [number]');
                }
                break;
            default:
                response = t('Command not found: ') + cmd + t('. Type \'help\' for available commands.');
        }

        // Add the response to the output
        if (response) {
            const responseLine = document.createElement('div');
            responseLine.className = 'terminal-line';
            responseLine.textContent = response;
            outputDiv.appendChild(responseLine);
        }

        // Clear the input and scroll to bottom
        inputEl.value = '';
        outputDiv.scrollTop = outputDiv.scrollHeight;
    },

    openCalculatorApp() {
        const content = `
            <div class="app-content calculator-content">
                <div class="calculator-display" id="calc-display-${this.windowManager.windowCounter + 1}">0</div>
                <div class="calculator-buttons">
                    <button class="calc-btn calc-clear">C</button>
                    <button class="calc-btn calc-operation">±</button>
                    <button class="calc-btn calc-operation">%</button>
                    <button class="calc-btn calc-operation op">÷</button>
                    <button class="calc-btn calc-number">7</button>
                    <button class="calc-btn calc-number">8</button>
                    <button class="calc-btn calc-number">9</button>
                    <button class="calc-btn calc-operation op">×</button>
                    <button class="calc-btn calc-number">4</button>
                    <button class="calc-btn calc-number">5</button>
                    <button class="calc-btn calc-number">6</button>
                    <button class="calc-btn calc-operation op">-</button>
                    <button class="calc-btn calc-number">1</button>
                    <button class="calc-btn calc-number">2</button>
                    <button class="calc-btn calc-number">3</button>
                    <button class="calc-btn calc-operation op">+</button>
                    <button class="calc-btn calc-number zero">0</button>
                    <button class="calc-btn calc-number">.</button>
                    <button class="calc-btn calc-equals op">=</button>
                </div>
            </div>
        `;

        const windowObj = this.windowManager.createWindow('Calculator', content, 300, 400);

        // Initialize calculator state for this window
        windowObj.calculatorState = {
            currentInput: '0',
            previousInput: '',
            operation: null,
            resetOnNextInput: false
        };

        // Add calculator functionality after the window is created
        setTimeout(() => {
            const displayEl = document.getElementById(`calc-display-${this.windowManager.windowCounter}`);
            if (displayEl) {
                this.setupCalculator(displayEl, windowObj);
            }
        }, 100);
    },

    setupCalculator(displayEl, windowObj) {
        // Update display
        const updateDisplay = () => {
            displayEl.textContent = windowObj.calculatorState.currentInput;
        };

        // Handle number buttons
        const numberButtons = displayEl.parentElement.querySelectorAll('.calc-number');
        numberButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (windowObj.calculatorState.resetOnNextInput) {
                    windowObj.calculatorState.currentInput = '0';
                    windowObj.calculatorState.resetOnNextInput = false;
                }

                if (windowObj.calculatorState.currentInput === '0' && button.textContent !== '.') {
                    windowObj.calculatorState.currentInput = button.textContent;
                } else {
                    if (button.textContent === '.' && windowObj.calculatorState.currentInput.includes('.')) {
                        return; // Prevent multiple decimal points
                    }
                    windowObj.calculatorState.currentInput += button.textContent;
                }

                updateDisplay();
            });
        });

        // Handle operation buttons
        const operationButtons = displayEl.parentElement.querySelectorAll('.calc-operation:not(.calc-equals)');
        operationButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (windowObj.calculatorState.operation !== null) {
                    // Perform calculation if there's already an operation
                    this.calculate(windowObj);
                }

                windowObj.calculatorState.operation = button.textContent;
                windowObj.calculatorState.previousInput = windowObj.calculatorState.currentInput;
                windowObj.calculatorState.resetOnNextInput = true;
            });
        });

        // Handle equals button - make sure it updates the display after calculation
        const equalsButton = displayEl.parentElement.querySelector('.calc-equals');
        equalsButton.addEventListener('click', () => {
            this.calculate(windowObj);
            windowObj.calculatorState.resetOnNextInput = true;

            // Update the display after calculation
            displayEl.textContent = windowObj.calculatorState.currentInput;
        });

        // Handle clear button
        const clearButton = displayEl.parentElement.querySelector('.calc-clear');
        clearButton.addEventListener('click', () => {
            windowObj.calculatorState.currentInput = '0';
            windowObj.calculatorState.previousInput = '';
            windowObj.calculatorState.operation = null;
            windowObj.calculatorState.resetOnNextInput = false;
            updateDisplay();
        });

        // Handle plus/minus button
        const plusMinusButton = displayEl.parentElement.querySelector('.calc-operation:nth-child(2)');
        if (plusMinusButton) {
            plusMinusButton.addEventListener('click', () => {
                windowObj.calculatorState.currentInput = (parseFloat(windowObj.calculatorState.currentInput) * -1).toString();
                updateDisplay();
            });
        }

        // Handle percentage button
        const percentButton = displayEl.parentElement.querySelector('.calc-operation:nth-child(3)');
        if (percentButton) {
            percentButton.addEventListener('click', () => {
                windowObj.calculatorState.currentInput = (parseFloat(windowObj.calculatorState.currentInput) / 100).toString();
                updateDisplay();
            });
        }
    },

    calculate(windowObj) {
        let result;
        const prev = parseFloat(windowObj.calculatorState.previousInput);
        const current = parseFloat(windowObj.calculatorState.currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch(windowObj.calculatorState.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            case '%':
                result = prev % current;
                break;
            default:
                return;
        }

        // Update values
        windowObj.calculatorState.currentInput = result.toString();
        windowObj.calculatorState.operation = null;
        windowObj.calculatorState.previousInput = '';
    },

    openTextEditorApp() {
        const content = `
            <div class="app-content text-editor-content">
                <textarea class="text-editor" placeholder="Start typing here..."></textarea>
            </div>
        `;

        this.windowManager.createWindow('Text Editor', content, 600, 500);
    }
});
