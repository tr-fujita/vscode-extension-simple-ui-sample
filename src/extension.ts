import * as vscode from 'vscode';


function WebViewPanelSample() {
	const webView = vscode.window.createWebviewPanel(
		"WebViewSample",
		"WebView Panel",
		vscode.ViewColumn.One 
	);
	
	webView.webview.html = `
		<html lang="ja">
			<head>
				<meta charset="UTF-8" />
				<title>Test</title>
			</head>
			<body>
				<h1>こんにちは!</h1>
			</body>
		</html>
	`;
}


function InputBoxSample() {
	const inputBox = vscode.window.createInputBox();

	inputBox.placeholder = 'これは InputBox のサンプルです。';
	inputBox.title = 'InputBoxSample';

	inputBox.onDidChangeValue(text => {
		if (text.length < 3) {
			inputBox.validationMessage = '3文字以内で入力してください。';
		} else {
			inputBox.validationMessage = undefined;
		}
	});

	inputBox.onDidAccept(() => {
		const value = inputBox.value;
		vscode.window.showInformationMessage(`入力値: ${value}`);
		inputBox.hide();
	});

	inputBox.show();
}



export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vscode-extension-simple-ui-sample" is now active!');


	const disposable = vscode.commands.registerCommand('vscode-extension-simple-ui-sample.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode-extension-simple-ui-sample!');

		WebViewPanelSample();
		InputBoxSample();
	});

	context.subscriptions.push(disposable);
}


export function deactivate() {}
