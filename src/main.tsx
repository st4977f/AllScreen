import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App />);
}

const vscode = acquireVsCodeApi();
(window as any).vscode = vscode; // Optional, for global access
