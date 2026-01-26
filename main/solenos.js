// SolenOS - Enhanced Operating System Simulation

class WindowManager {
    constructor() {
        this.windows = [];
        this.windowCounter = 0;
        this.zIndex = 100;
    }

    createWindow(title, content, width = 400, height = 300) {
        this.windowCounter++;
        const windowId = `window-${this.windowCounter}`;
        
        const windowElement = document.createElement('div');
        windowElement.className = 'window';
        windowElement.id = windowId;
        windowElement.style.width = `${width}px`;
        windowElement.style.height = `${height}px`;
        windowElement.style.zIndex = this.zIndex++;
        
        // Random position near the center
        const left = Math.max(50, Math.min(window.screen.width - width - 50, 
            Math.random() * (window.screen.width - width)));
        const top = Math.max(50, Math.min(window.screen.height - height - 100, 
            Math.random() * (window.screen.height - height)));
            
        windowElement.style.left = `${left}px`;
        windowElement.style.top = `${top}px`;
        
        windowElement.innerHTML = `
            <div class="window-header">
                <span class="window-title">${title}</span>
                <div class="window-controls">
                    <button class="window-btn minimize-btn">−</button>
                    <button class="window-btn maximize-btn">□</button>
                    <button class="window-btn close-btn">×</button>
                </div>
            </div>
            <div class="window-body">
                ${content}
            </div>
        `;
        
        document.body.appendChild(windowElement);
        
        // Store window reference
        const windowObj = {
            id: windowId,
            element: windowElement,
            title: title,
            minimized: false
        };
        
        this.windows.push(windowObj);
        this.makeDraggable(windowElement);
        this.addEventListeners(windowObj);
        
        return windowObj;
    }
    
    makeDraggable(element) {
        const header = element.querySelector('.window-header');
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        header.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
    
    addEventListeners(windowObj) {
        const element = windowObj.element;
        const minimizeBtn = element.querySelector('.minimize-btn');
        const maximizeBtn = element.querySelector('.maximize-btn');
        const closeBtn = element.querySelector('.close-btn');
        
        // Bring window to front on click
        element.addEventListener('mousedown', () => {
            element.style.zIndex = ++this.zIndex;
        });
        
        minimizeBtn.addEventListener('click', () => {
            this.minimizeWindow(windowObj);
        });
        
        maximizeBtn.addEventListener('click', () => {
            this.toggleMaximize(windowObj);
        });
        
        closeBtn.addEventListener('click', () => {
            this.closeWindow(windowObj);
        });
    }
    
    minimizeWindow(windowObj) {
        const element = windowObj.element;
        if (windowObj.minimized) {
            element.style.display = 'block';
            windowObj.minimized = false;
        } else {
            element.style.display = 'none';
            windowObj.minimized = true;
        }
    }
    
    toggleMaximize(windowObj) {
        const element = windowObj.element;
        if (element.classList.contains('maximized')) {
            element.classList.remove('maximized');
            element.style.width = element.dataset.originalWidth || '400px';
            element.style.height = element.dataset.originalHeight || '300px';
            element.style.top = element.dataset.originalTop || '50px';
            element.style.left = element.dataset.originalLeft || '50px';
        } else {
            element.dataset.originalWidth = element.style.width;
            element.dataset.originalHeight = element.style.height;
            element.dataset.originalTop = element.style.top;
            element.dataset.originalLeft = element.style.left;
            
            element.classList.add('maximized');
            element.style.width = 'calc(100% - 20px)';
            element.style.height = 'calc(100% - 60px)';
            element.style.top = '10px';
            element.style.left = '10px';
        }
    }
    
    closeWindow(windowObj) {
        const index = this.windows.indexOf(windowObj);
        if (index > -1) {
            this.windows.splice(index, 1);
        }
        windowObj.element.remove();
    }
    
    focusWindow(windowObj) {
        windowObj.element.style.zIndex = ++this.zIndex;
    }
}

class SolenOS {
    constructor() {
        this.windowManager = new WindowManager();
        this.init();
    }
    
    init() {
        // Set original text for all icons before setting up event listeners
        document.querySelectorAll('.icon span').forEach(span => {
            if (!span.getAttribute('data-original-text')) {
                span.setAttribute('data-original-text', span.textContent.trim());
            }
        });

        this.setupEventListeners();
        this.updateClock();
        this.setupDesktopIcons();
    }
    
    setupEventListeners() {
        // Update clock every minute
        setInterval(() => this.updateClock(), 60000);
        
        // Handle start button click
        document.querySelector('.start-button').addEventListener('click', () => {
            this.showStartMenu();
        });
    }
    
    setupDesktopIcons() {
        // Add click functionality to desktop icons
        document.querySelectorAll('.icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                const appName = icon.querySelector('span').getAttribute('data-original-text');
                this.openApp(appName);
            });
        });
        
        // Add double-click functionality
        document.querySelectorAll('.icon').forEach(icon => {
            let clickCount = 0;
            let clickTimer = null;
            
            icon.addEventListener('click', () => {
                clickCount++;
                
                if (clickCount === 1) {
                    clickTimer = setTimeout(() => {
                        clickCount = 0;
                    }, 300);
                } else if (clickCount === 2) {
                    clearTimeout(clickTimer);
                    const appName = icon.querySelector('span').getAttribute('data-original-text');
                    this.openApp(appName);
                    clickCount = 0;
                }
            });
        });
    }
    
    updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        document.querySelector('.time').textContent = timeString;
        
        // Also update date
        const dateString = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        document.querySelector('.date-display').textContent = dateString;
    }
    
    showStartMenu() {
        // Create start menu if it doesn't exist
        let startMenu = document.getElementById('start-menu');
        if (!startMenu) {
            startMenu = document.createElement('div');
            startMenu.id = 'start-menu';
            startMenu.className = 'start-menu';
            
            startMenu.innerHTML = `
                <div class="start-menu-content">
                    <div class="start-menu-header">
                        <h3>Welcome to SolenOS</h3>
                    </div>
                    <div class="start-menu-apps">
                        <div class="start-menu-app" data-app="Files">📁 Files</div>
                        <div class="start-menu-app" data-app="Browser">🌐 Browser</div>
                        <div class="start-menu-app" data-app="Settings">⚙️ Settings</div>
                        <div class="start-menu-app" data-app="Terminal">💻 Terminal</div>
                        <div class="start-menu-app" data-app="Calculator">🔢 Calculator</div>
                        <div class="start-menu-app" data-app="Text Editor">📝 Text Editor</div>
                    </div>
                    <div class="start-menu-footer">
                        <button class="restart-btn">🔄 Restart</button>
                        <button class="shutdown-btn">⏻ Shutdown</button>
                    </div>
                </div>
            `;

            // Translate the start menu apps if we have a current language
            if (this.currentLanguage) {
                this.translateStartMenuApps(startMenu, this.currentLanguage);
            }
            
            document.body.appendChild(startMenu);
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!startMenu.contains(e.target) && !e.target.classList.contains('start-button')) {
                    startMenu.style.display = 'none';
                }
            });
            
            // Add event listeners to apps
            startMenu.querySelectorAll('.start-menu-app').forEach(app => {
                app.addEventListener('click', () => {
                    const appName = app.getAttribute('data-app');
                    this.openApp(appName);
                    startMenu.style.display = 'none';
                });
            });
            
            // Add restart functionality
            startMenu.querySelector('.restart-btn').addEventListener('click', () => {
                if (confirm('SolenOS Restart Confirmation\n\nDear User,\n\nAre you sure you want to restart SolenOS?\n\nThis will close all applications and restart the system.\n\nClick "OK" to restart or "Cancel" to return to SolenOS.')) {
                    // Redirect to restart page
                    window.location.href = 'restart/restart.html';
                }
            });

            // Add shutdown functionality
            startMenu.querySelector('.shutdown-btn').addEventListener('click', () => {
                if (confirm('SolenOS Personal Shutdown Message\n\nDear User,\n\nAre you sure you want to shutdown SolenOS?\n\nThis will close all applications and end your session.\n\nClick "OK" to shutdown or "Cancel" to return to SolenOS.')) {
                    // Redirect to shutdown page
                    window.location.href = 'shutdown/shutdown.html';
                }
            });

            // Add restart functionality
            // This can be called from elsewhere if needed
            this.restartSystem = () => {
                // Save current settings
                if (this.currentLanguage) {
                    const settings = {
                        theme: this.currentTheme || 'modern',
                        wallpaper: this.currentWallpaper || 'default',
                        language: this.currentLanguage || 'en'
                    };
                    localStorage.setItem('solenos-settings', JSON.stringify(settings));
                }

                // Redirect to restart page
                window.location.href = 'restart/restart.html';
            };
        }

        // Toggle start menu visibility
        if (startMenu.style.display === 'block') {
            startMenu.style.display = 'none';
        } else {
            startMenu.style.display = 'block';
        }
    }
    
    openApp(appName) {
        // Determine the original English name if it's a translated app
        let originalAppName = appName;

        // Reverse lookup to find the original English name
        if (this.translations) {
            for (const [engName, translations] of Object.entries(this.translations)) {
                for (const [langCode, translatedName] of Object.entries(translations)) {
                    if (translatedName === appName) {
                        originalAppName = engName;
                        break;
                    }
                }
                if (originalAppName !== appName) break;
            }
        }

        switch(originalAppName) {
            case 'Files':
                this.openFilesApp();
                break;
            case 'Browser':
                this.openBrowserApp();
                break;
            case 'Settings':
                this.openSettingsApp();
                break;
            case 'Terminal':
                this.openTerminalApp();
                break;
            case 'Calculator':
                this.openCalculatorApp();
                break;
            case 'Text Editor':
                this.openTextEditorApp();
                break;
            default:
                alert(`Opening ${appName}...`);
        }
    }
    
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
    }
    
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
    }
    
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
            },
            'Apply Settings': {
                es: 'Aplicar Configuración',
                fr: 'Appliquer les Paramètres',
                it: 'Applica Impostazioni',
                de: 'Einstellungen übernehmen'
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
                    <div class="setting-item">
                        <button id="apply-settings-btn" class="apply-btn">${t('Apply Settings')}</button>
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
            const applyBtn = document.getElementById('apply-settings-btn');

            if (applyBtn) {
                applyBtn.addEventListener('click', () => {
                    this.applySettings({
                        theme: themeSelector ? themeSelector.value : 'light',
                        wallpaper: wallpaperSelector ? wallpaperSelector.value : 'default',
                        language: languageSelector ? languageSelector.value : 'en'
                    });
                });
            }
        }, 100);
    }

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
    }

    applyTheme(theme) {
        const body = document.body;

        // Remove any existing theme classes
        body.classList.remove('theme-light', 'theme-dark', 'theme-blue', 'theme-modern');

        switch(theme) {
            case 'light':
                body.classList.add('theme-light');
                body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
                break;
            case 'dark':
                body.classList.add('theme-dark');
                body.style.background = 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)';
                break;
            case 'blue':
                body.classList.add('theme-blue');
                body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                break;
            case 'modern':
            default:
                body.classList.add('theme-modern');
                body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }
    }

    applyWallpaper(wallpaper) {
        const body = document.body;

        // Remove any existing wallpaper classes
        body.classList.remove('wallpaper-mountain', 'wallpaper-ocean', 'wallpaper-default');

        switch(wallpaper) {
            case 'mountain':
                body.classList.add('wallpaper-mountain');
                body.style.backgroundImage = 'url("wallpapers/mountain_wallpaper.png")';
                body.style.backgroundSize = 'cover';
                body.style.backgroundPosition = 'center';
                body.style.backgroundRepeat = 'no-repeat';
                break;
            case 'ocean':
                body.classList.add('wallpaper-ocean');
                body.style.backgroundImage = 'url("wallpapers/ocean_wallpaper.png")';
                body.style.backgroundSize = 'cover';
                body.style.backgroundPosition = 'center';
                body.style.backgroundRepeat = 'no-repeat';
                break;
            case 'default':
            default:
                body.classList.add('wallpaper-default');
                body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                body.style.backgroundImage = '';
        }
    }

    applyLanguage(language) {
        // In a real application, this would change all UI text to the selected language
        console.log(`Language changed to: ${language}`);

        // Update the date display to reflect the language change
        const dateDisplay = document.querySelector('.date-display');
        if (dateDisplay) {
            const now = new Date();
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

            // Language-specific formatting
            switch(language) {
                case 'es':
                    // Spanish date format
                    dateDisplay.textContent = now.toLocaleDateString('es-ES', options);
                    break;
                case 'fr':
                    // French date format
                    dateDisplay.textContent = now.toLocaleDateString('fr-FR', options);
                    break;
                case 'it':
                    // Italian date format
                    dateDisplay.textContent = now.toLocaleDateString('it-IT', options);
                    break;
                case 'de':
                    // German date format
                    dateDisplay.textContent = now.toLocaleDateString('de-DE', options);
                    break;
                default:
                    // English date format
                    dateDisplay.textContent = now.toLocaleDateString('en-US', options);
            }
        }

        // Update the time display to reflect the language change
        const timeDisplay = document.querySelector('.time');
        if (timeDisplay) {
            const now = new Date();
            let timeOptions = { hour: '2-digit', minute: '2-digit' };

            // Language-specific time formatting
            switch(language) {
                case 'es':
                    timeDisplay.textContent = now.toLocaleTimeString('es-ES', timeOptions);
                    break;
                case 'fr':
                    timeDisplay.textContent = now.toLocaleTimeString('fr-FR', timeOptions);
                    break;
                case 'it':
                    timeDisplay.textContent = now.toLocaleTimeString('it-IT', timeOptions);
                    break;
                case 'de':
                    timeDisplay.textContent = now.toLocaleTimeString('de-DE', timeOptions);
                    break;
                default:
                    timeDisplay.textContent = now.toLocaleTimeString('en-US', timeOptions);
            }
        }

        // Update the start button text to reflect the language
        const startButton = document.querySelector('.start-button');
        if (startButton) {
            switch(language) {
                case 'es':
                    startButton.textContent = 'SolenOS Español';
                    break;
                case 'fr':
                    startButton.textContent = 'SolenOS Français';
                    break;
                case 'it':
                    startButton.textContent = 'SolenOS Italiano';
                    break;
                case 'de':
                    startButton.textContent = 'SolenOS Deutsch';
                    break;
                default:
                    startButton.textContent = 'SolenOS';
            }
        }

        // Update all app names to reflect the language
        this.updateAppNames(language);
    }

    updateAppNames(language) {
        // Store the current language for future reference
        this.currentLanguage = language;

        // Define translations
        this.translations = {
            'Files': { es: 'Archivos', fr: 'Fichiers', it: 'File', de: 'Dateien' },
            'Browser': { es: 'Navegador', fr: 'Navigateur', it: 'Browser', de: 'Browser' },
            'Settings': { es: 'Configuración', fr: 'Paramètres', it: 'Impostazioni', de: 'Einstellungen' },
            'Terminal': { es: 'Terminal', fr: 'Terminal', it: 'Terminale', de: 'Terminal' },
            'Calculator': { es: 'Calculadora', fr: 'Calculatrice', it: 'Calcolatrice', de: 'Rechner' },
            'Text Editor': { es: 'Editor de Texto', fr: 'Éditeur de Texte', it: 'Editor di Testo', de: 'Texteditor' }
        };

        // Update desktop icons
        document.querySelectorAll('.icon span').forEach(span => {
            const originalText = span.getAttribute('data-original-text') || span.textContent.trim();
            if (!span.getAttribute('data-original-text')) {
                span.setAttribute('data-original-text', originalText);
            }

            if (this.translations[originalText] && this.translations[originalText][language]) {
                span.textContent = this.translations[originalText][language];
            } else {
                span.textContent = originalText; // Fallback to original text
            }
        });

        // Update taskbar icons
        document.querySelectorAll('.task-icon').forEach(taskIcon => {
            const originalText = taskIcon.getAttribute('data-original-text') || taskIcon.textContent.trim();
            if (!taskIcon.getAttribute('data-original-text')) {
                taskIcon.setAttribute('data-original-text', originalText);
            }

            if (this.translations[originalText] && this.translations[originalText][language]) {
                taskIcon.textContent = this.translations[originalText][language];
            } else {
                taskIcon.textContent = originalText; // Fallback to original text
            }
        });

        // Update start menu apps if it exists
        const startMenu = document.getElementById('start-menu');
        if (startMenu && startMenu.style.display !== 'none') {
            this.translateStartMenuApps(startMenu, language);
        }
    }

    translateStartMenuApps(startMenu, language) {
        // Define emoji mappings for apps
        const appEmojis = {
            'Files': '📁',
            'Browser': '🌐',
            'Settings': '⚙️',
            'Terminal': '💻',
            'Calculator': '🔢',
            'Text Editor': '📝'
        };

        // Update start menu apps
        startMenu.querySelectorAll('.start-menu-app').forEach(app => {
            const appName = app.getAttribute('data-app');
            if (this.translations[appName] && this.translations[appName][language]) {
                const translatedName = this.translations[appName][language];
                const emoji = appEmojis[appName] || '';
                app.innerHTML = `${emoji} ${translatedName}`;
            }
        });
    }

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
    }
    
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
    }

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
            de: { 'hilfe': 'help', 'echo': 'echo', 'datum': 'date', 'zeit': 'time', 'löschen': 'clear', 'version': 'version', 'ls': 'ls', 'pwd': 'pwd', 'werbinich': 'whoami', 'laufzeit': 'uptime', 'berechnen': 'calc' }
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
    }

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
    }

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
    }
    
    openTextEditorApp() {
        const content = `
            <div class="app-content text-editor-content">
                <textarea class="text-editor" placeholder="Start typing here..."></textarea>
            </div>
        `;
        
        this.windowManager.createWindow('Text Editor', content, 600, 500);
    }
}

// Initialize the OS when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.solenOS = new SolenOS();
});

// Update overlay functionality
class UpdateOverlay {
    constructor() {
        this.overlay = document.getElementById('updateOverlay');
    }

    show() {
        this.overlay.classList.add('active');
    }

    hide() {
        this.overlay.classList.remove('active');
    }

    // Method to programmatically set opacity
    setOpacity(value) {
        // Value should be between 0 and 1
        if (value >= 0 && value <= 1) {
            this.overlay.style.opacity = value;
            if (value > 0) {
                this.overlay.classList.add('active');
            } else {
                this.overlay.classList.remove('active');
            }
        }
    }
}

// Create global instance
window.updateOverlay = new UpdateOverlay();
