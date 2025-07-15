# AllScreen

<div align="center">

[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue.svg)](https://marketplace.visualstudio.com/items?itemName=vscode.allscreen)
[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<img src="public/vite.svg" alt="AllScreen Logo" width="128">

**A VS Code extension for seamless responsive web development**

[Features](#features) • [Installation](#installation) • [Usage](#usage) • [Development](#development) • [Contributing](#contributing)

</div>

## About

AllScreen is a powerful VS Code extension that revolutionizes responsive web development by enabling simultaneous preview and testing across multiple screen sizes. With synchronized viewports, real-time updates, and customizable settings, AllScreen streamlines the process of creating responsive web applications.

## Features

🔄 **Synchronized Viewports**
- Preview your application across multiple screen sizes simultaneously
- Real-time synchronization of content and interactions
- Customizable viewport dimensions for any device size

🌐 **Real-time Preview**
- Instant URL preview across all viewports
- Live updates as you modify your code
- Supports local development servers and public URLs

⚡ **Smart Synchronization**
- Synchronized scrolling between viewports
- Consistent state management across all views
- Automatic viewport refresh on code changes

⚙️ **Customization**
- Add or remove viewports dynamically
- Save custom viewport configurations
- Persistent settings across sessions

## Installation

1. Open VS Code
2. Press `Ctrl+P` to open the Quick Open dialog
3. Type `ext install vscode.allscreen`
4. Press Enter to install

## Usage

1. Open a web project in VS Code
2. Press `Ctrl+Shift+P` to open the Command Palette
3. Type "AllScreen: Open Responsive Preview"
4. Enter the URL you want to preview
5. Use the toolbar to manage viewports and settings

## Architecture

AllScreen is built on a robust architecture designed for performance and reliability:

### VS Code Extension Host
- Manages webview panel lifecycle and state
- Handles extension commands and configuration
- Implements secure message passing system

### React Webview UI
- Modern React + TypeScript implementation
- Seamless VS Code theme integration
- Efficient viewport management
- Real-time synchronization logic

### Communication Protocol
- Bidirectional messaging between extension and webview
- Optimized state updates and sync events
- Secure data transfer using VS Code's API

## Development

### Prerequisites

- Node.js (v16 or later)
- VS Code
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/st4977f/allscreen.git

# Navigate to project directory
cd allscreen

# Install dependencies
npm install
```

### Available Commands

```bash
# Start development mode
npm run watch

# Build the extension
npm run build

# Run tests
npm run test

# Lint code
npm run lint
```

### Testing

AllScreen uses Jest for comprehensive testing:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:

- [Open an issue](https://github.com/st4977f/allscreen/issues)
- [Check existing issues](https://github.com/st4977f/allscreen/issues?q=is%3Aissue)

---

<div align="center">
Made with ❤️ by Sule Tunkara
</div>