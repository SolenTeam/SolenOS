// Core OS Functions

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

        // Apply current theme to the new window header and body
        const currentThemeClass = document.body.className.match(/theme-\w+/);
        if (currentThemeClass) {
            const header = windowElement.querySelector('.window-header');
            const body = windowElement.querySelector('.window-body');
            header.classList.add(currentThemeClass[0]);
            body.classList.add(currentThemeClass[0]);
        }

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

    applyTheme(theme) {
        const body = document.body;

        // Remove any existing theme classes
        body.classList.remove('theme-light', 'theme-dark', 'theme-blue', 'theme-modern');

        // Apply theme class to body for CSS rules
        body.classList.add(`theme-${theme}`);

        // Update all open window headers and bodies to match the theme by adding/removing theme classes
        document.querySelectorAll('.window-header').forEach(header => {
            // Remove existing theme-related classes
            header.classList.remove('theme-light', 'theme-dark', 'theme-blue', 'theme-modern');
            // Add the new theme class
            header.classList.add(`theme-${theme}`);
        });
        
        // Update all open window bodies to match the theme
        document.querySelectorAll('.window-body').forEach(body => {
            // Remove existing theme-related classes
            body.classList.remove('theme-light', 'theme-dark', 'theme-blue', 'theme-modern');
            // Add the new theme class
            body.classList.add(`theme-${theme}`);
        });
    }

    applyWallpaper(wallpaper) {
        const body = document.body;

        // Remove any existing wallpaper classes
        body.classList.remove('wallpaper-mountain', 'wallpaper-ocean', 'wallpaper-default');

        switch(wallpaper) {
            case 'mountain':
                body.classList.add('wallpaper-mountain');
                body.style.background = 'url("./wallpapers/mountain_wallpaper.png")';
                body.style.backgroundSize = 'cover';
                body.style.backgroundPosition = 'center';
                body.style.backgroundRepeat = 'no-repeat';
                break;
            case 'ocean':
                body.classList.add('wallpaper-ocean');
                body.style.background = 'url("./wallpapers/ocean_wallpaper.png")';
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
}

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
