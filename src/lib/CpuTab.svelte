<script>
	import PanelButton from './PanelButton.svelte';
	import { cpuPercentage } from './activities.js'
</script>

<h1 class="text-lg font-bold">Engine</h1>
<PanelButton buttonImage="assets/cheerpx.svg" clickUrl="https://cheerpx.io/docs" buttonText="CheerpX を探索する">
</PanelButton>
<p><span class="font-bold">仮想 CPU 使用率: </span>{$cpuPercentage}%</p>
<p>CheerpX は WebAssembly の x86 仮想化エンジンです</p>
<p>未変更の x86 バイナリとライブラリをブラウザで安全に実行できます</p>
