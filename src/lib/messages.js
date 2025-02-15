const color= "\x1b[1;35m";
const underline= "\x1b[94;4m";
const normal= "\x1b[0m";
export const introMessage = [
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"|                   ___      ___   _  __   ____  __                    |",
	"|                   \  \    /  /__| |_\ \ / /  \/  |                   |",
	"|                    \  \/\/  / -_) '_ \ V /| |\/| |                   |",
	"|                     \__/\__/\___|_'__/\_/ |_|  |_|                   |",
	"|                                                                      |",
	"|                   ================================                   |",
	"|                          Powered by CheerpX                          |",
	"|                                                                      |",
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	""
];
export const errorMessage = [
	color + "CheerpX が起動できませんでした" + normal,
	"",
	"CheerpX はデスクトップ版の Chrome, Edge, Firefox, Safari で起動します",
	"",
	"デスクトップ版 または 他のブラウザ で開いてください !",
	"",
	"CheerpX 内部で発生したエラーのメッセージ:",
	""
];
export const unexpectedErrorMessage = [
	color + "WebVM で予期しないエラーが発生しました" + normal,
	"",
	"詳細については、DevTools コンソールを確認してください",
	"",
	"バグの報告 を検討してください !",
	"",
	"CheerpX 内部で発生したエラーのメッセージ:",
	""
];
