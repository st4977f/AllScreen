import * as assert from 'assert';
import * as vscode from 'vscode';

suite('AllScreen Extension Test Suite', () => {
	test('Extension should be present', () => {
		assert.ok(vscode.extensions.getExtension('vscode.allscreen'));
	});

	test('Should register allscreen.start command', async () => {
		const commands = await vscode.commands.getCommands();
		assert.ok(commands.includes('allscreen.start'));
	});

	test('Should create webview panel when command is executed', async () => {
		await vscode.commands.executeCommand('allscreen.start');
		// Wait for the webview to be created
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		// Check if the webview panel is visible
		const activeEditor = vscode.window.activeTextEditor;
		assert.ok(activeEditor !== undefined);
	});
});