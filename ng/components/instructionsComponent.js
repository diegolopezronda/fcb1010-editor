angular.module('fcb1010EditorApp').component("instructionsComponent", {
    template:
    `
	<table class="table table-dark table-lcd mb-0 full-height">
		<thead>
			<tr>
				<td colspan="3" class="lcd-screen">
					Waiting for user to send FCB1010 configuration
					<span class="dash-animation">_</span>
				</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td colspan="3" class="text-center p-3">
					<img src="img/fcb1010.svg" style="width:66vw"/>
				</td>
			</tr>
			<tr>
				<th colspan="3" class="text-center p-3">
					Before we start<br/> 
					we need to make sure the FCB1010 and the computer are properly connected.<br/>
					Please follow the instructions below:
				</th>
			</tr>
			<tr>
				<td class="text-end p-1 border-0 w-25">
					<span class="badge badge-pill text-bg-success" style="width:2em">0</span>
				</td>
				<td class="text-start p-1 border-0">
					Allow your browser to access MIDI devices (SysEx).
				</td>
				<td class="border-0 w-25">
				</td>
			</tr>
			<tr>
				<td class="text-end p-1 border-0 w-25">
					<span class="badge badge-pill text-bg-danger" style="width:2em">1</span>
				</td>
				<td class="text-start p-1 border-0">
					Turn on the FCB1010 while holding the <b>DOWN</b> button until <b>DIRECT SELECT</b> led is on.
				</td>
				<td class="border-0 w-25">
				</td>
			</tr>
			<tr>
				<td class="text-end p-1 border-0">
					<span class="badge badge-pill text-bg-danger" style="width:2em">2</span>
				</td>
				<td class="text-start p-1 border-0">
					Press the <b>DOWN</b> button until <b>CONFIG</b> led is on.
				</td>
				<td class="border-0">
				</td>
			</tr>
			<tr>
				<td class="text-end p-1 border-0">
					<span class="badge badge-pill text-bg-danger" style="width:2em">3</span>
				</td>
				<td class="text-start p-1 border-0">
					Connect the FCB1010 to the computer.
				</td>
				<td class="border-0">
				</td>
			</tr>
			<tr>
				<td class="text-end p-1 border-0">
					<span class="badge badge-pill text-bg-danger" style="width:2em">4</span>
				</td>
				<td class="text-start p-1 border-0">
					Press button <b>6</b>.
				</td>
				<td class="border-0">
				</td>
			</tr>
		</tbody>
	</table>
    `,
    controller: function(){}
});