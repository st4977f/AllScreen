import * as vscode from 'vscode';
import * as path from 'path';

let currentPanel: vscode.WebviewPanel | undefined = undefined;

export function activate(context: vscode.ExtensionContext) {
    console.log('AllScreen extension is now active');

    // Register the command with the correct ID
    const disposable = vscode.commands.registerCommand('allscreen.openResponsivePreview', () => {
        if (currentPanel) {
            currentPanel.reveal(vscode.ViewColumn.One);
            return;
        }

        currentPanel = vscode.window.createWebviewPanel(
            'allscreen',
            'AllScreen',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                retainContextWhenHidden: true,
                localResourceRoots: [
                    vscode.Uri.file(path.join(context.extensionPath, 'dist'))
                ]
            }
        );

        // Set webview content
        currentPanel.webview.html = getWebviewContent(context, currentPanel.webview);

        // Handle messages from webview
        currentPanel.webview.onDidReceiveMessage(
            message => {
                switch (message.command) {
                    case 'updateUrl':
                        // Handle URL updates
                        break;
                    case 'syncScroll':
                        // Handle scroll sync
                        break;
                }
            },
            undefined,
            context.subscriptions
        );

        currentPanel.onDidDispose(
            () => {
                currentPanel = undefined;
            },
            null,
            context.subscriptions
        );
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent(context: vscode.ExtensionContext, webview: vscode.Webview): string {
    const scriptUri = webview.asWebviewUri(
        vscode.Uri.file(path.join(context.extensionPath, 'dist', 'webview', 'main.js'))
    );
    const styleUri = webview.asWebviewUri(
        vscode.Uri.file(path.join(context.extensionPath, 'dist', 'webview', 'main.css'))
    );

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AllScreen</title>
        <link href="${styleUri}" rel="stylesheet">
    </head>
    <body>
        <div id="root"></div>
        <script src="${scriptUri}"></script>
    </body>
    </html>`;
}

export function deactivate() {
    // Clean up resources
}