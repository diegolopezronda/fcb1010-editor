angular.module('fcb1010EditorApp').component("instructionsComponent", {
    template:
    `
<div class="screen gif">
	<div class="gif-overlay">
	</div>
	<table class="table table-dark table-lcd">
		<thead>
			<tr>
				<th>System Status</th>
				<td class="lcd-screen">waiting for user <span class="dash-animation">_</span></td>
				<th>System Message</th>
				<td style="text-align:left">FOLLOW the instructions on the video or press <span class="badge text-bg-secondary">Editor</span></td>
			</tr>
		</thead>
	</table>
	<div class="manual manual-1 p-2 bg-black text-white">
		<b class="pedal">Step</b>
		<span class="lcd fs-4">01</span>
		<br />
		<span class="pedal">
			hold the down button while powering up. direct select led is on.
		</span>
	</div>
	<div class="manual manual-2 p-2 bg-black text-white">
		<b class="pedal">Step</b>
		<span class="lcd fs-4">02</span><br />
		press the down button again, don't hold. config led is on.
	</div>
	<div class="manual manual-3 p-2 bg-black text-white">
		<b class="pedal">Step</b>
		<span class="lcd fs-4">03</span><br />
		Connect the FCB1010 to the computer via MIDI.
	</div>
	<div class="manual manual-4 p-2 bg-black text-white">
		<b class="pedal">Step</b>
		<span class="lcd fs-4">04</span><br />
		Press the button 6
	</div>
</div>
    `,
    controller: function(){}
});