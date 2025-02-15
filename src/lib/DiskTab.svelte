<script>
	import PanelButton from './PanelButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import { diskLatency } from './activities.js'
	var dispatch = createEventDispatcher();
	let state = "START";
	function handleReset()
	{
		if(state == "START")
			state = "CONFIRM";
		else if (state == "CONFIRM") {
			state = "RESETTING";
			dispatch('reset');
		}
	}
	function getButtonText(state)
	{
		if(state == "START")
			return "Reset disk";
		else if (state == "RESETTING")
			return "Resetting...";
		else
			return "Reset disk. Confirm?";
	}
	function getBgColor(state)
	{
		if(state == "START")
		{
			// Use default
			return undefined;
		}
		else
		{
			return "bg-red-900";
		}
	}
	function getHoverColor(state)
	{
		if(state == "START")
		{
			// Use default
			return undefined;
		}
		else
		{
			return "hover:bg-red-700";
		}
	}
</script>
<h1 class="text-lg font-bold">Disk</h1>
<PanelButton buttonIcon="fa-solid fa-trash-can" clickHandler={handleReset} buttonText={getButtonText(state)} bgColor={getBgColor(state)} hoverColor={getHoverColor(state)}>
</PanelButton>
{#if state == "CONFIRM"}
	<p><span class="font-bold">バックエンドから警告: </span>WebVM が再起動されます</p>
{:else if state == "RESETTING"}
	<p><span class="font-bold">バックエンドの初期化: </span>実行中です...</p>
{:else}
	<p><span class="font-bold">バックエンドの遅延率: </span>{$diskLatency}ms</p>
{/if}
<p>WebVM は完全な Linux ディストリビューション上で実行されます</p>
<p>最大 2GB のファイルシステムがサポートされ、データは完全にオンデマンドでダウンロードされます</p>
<p>WebVM クラウド バックエンドは WebSocket を使用し、ダウンロードの遅延を最小限に抑えるためにグローバル CDN 経由で配布されます</p>
