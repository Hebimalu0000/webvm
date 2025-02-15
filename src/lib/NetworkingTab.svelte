<script>
	import { networkData, startLogin } from '$lib/network.js'
	import { createEventDispatcher } from 'svelte';
	import PanelButton from './PanelButton.svelte';
	var dispatch = createEventDispatcher();
	var connectionState = networkData.connectionState;
	var exitNode = networkData.exitNode;
	function handleConnect() {
		connectionState.set("DOWNLOADING");
		dispatch('connect');
	}
	async function handleCopyIP(event)
	{
		// To prevent the default contexmenu from showing up when right-clicking..
		event.preventDefault();
		// Copy the IP to the clipboard.
		try
		{
			await window.navigator.clipboard.writeText(networkData.currentIp)
			connectionState.set("IPCOPIED");
			setTimeout(() => {
				connectionState.set("CONNECTED");
			}, 2000);
		}
		catch(msg)
		{
			console.log("Copy ip to clipboard: Error: " + msg);
		}
	}
	function getButtonText(state)
	{
		switch(state)
		{
			case "DISCONNECTED":
				return "Tailscale に接続する";
			case "DOWNLOADING":
				return "IP スタックをロードしています...";
			case "LOGINSTARTING":
				return "ログインしています...";
			case "LOGINREADY":
				return "Tailscale にログイン";
			case "CONNECTED":
				return `IP: ${networkData.currentIp}`;
			case "IPCOPIED":
				return "コピーしました!";
			default:
				break;
		}
		return `Text for state: ${state}`;
	}
	function isClickableState(state)
	{
		switch(state)
		{
			case "DISCONNECTED":
			case "LOGINREADY":
			case "CONNECTED":
				return true;
		}
		return false;
	}
	function getClickHandler(state)
	{
		switch(state)
		{
			case "DISCONNECTED":
				return handleConnect;
		}
		return null;
	}
	function getClickUrl(state)
	{
		switch(state)
		{
			case "LOGINREADY":
				return networkData.loginUrl;
			case "CONNECTED":
				return networkData.dashboardUrl;
		}
		return null;
	}
	function getButtonTooltip(state)
	{
		switch(state)
		{
			case "CONNECTED":
				return "右クリックでコピー";
		}
		return null;
	}
	function getRightClickHandler(state)
	{
		switch(state)
		{
			case "CONNECTED":
				return handleCopyIP;
		}
		return null;
	}
</script>
<h1 class="text-lg font-bold">Networking</h1>
<PanelButton buttonImage="assets/tailscale.svg" clickUrl={getClickUrl($connectionState)} clickHandler={getClickHandler($connectionState)} rightClickHandler={getRightClickHandler($connectionState)} buttonTooltip={getButtonTooltip($connectionState)} buttonText={getButtonText($connectionState)}>
	{#if $connectionState == "CONNECTED"}
		<i class='fas fa-circle fa-xs ml-auto {$exitNode ? 'text-green-500' : 'text-amber-500'}' title={$exitNode ? 'Ready' : 'No exit node'}></i>
	{/if}
</PanelButton>
<p>WebVM は Tailscale 経由でインターネットに接続できます</p>
<p>ブラウザは TCP/UDP ソケットをサポートしていないため、Tailscale を使用する必要があります</p>
