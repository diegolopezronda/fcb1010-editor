angular.module('fcb1010EditorApp').component("remoteComponent", {
    template: `
<screen-component ng-show="!sysex && !midi_access"></screen-component>
<div class="screen gif" ng-show="!sysex && midi_access">
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
<div class="container-fluid mt-2" ng-show="sysex">
<table class="table table-dark table-lcd">
<thead>
	<tr>
		<th class="fs-1 fw-light text-start border-bottom-0 px-4 pt-4 pb-0 m-0" style="color:#0CF">
			Remote D-35
		</th>
		<th width="50%" rowspan="2" class="text-end px-4 pt-4 pb-4 m-0">
			<img style="width:40px;" class="negative" src="css/midi.svg" />
		</th>
	</tr>
	<tr>
		<td colspan="2" class="text-start pt-0 px-4 pb-4 m-0" style="line-height:1em">
			BEHRINGER FCB1010 FOOT CONTROLLER SYSEX VIEWER
		</td>
	</tr>
	<tr>
		<th>SYSEX FILE</th>
		<th>JSON FILE</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>
			<button class="btn btn-outline-danger" ng-click="saveSysex()">
				WRITE
			</button>
		</td>
		<td>
			<button class="btn btn-outline-danger" ng-click="saveJSON()">
				WRITE
			</button>
		</td>
	</tr>
</tbody>
</table>
		<table class="table table-dark table-lcd">
			<thead>
				<tr>
					<th>
						Direct Select
					</th>
					<th>
						<span class="outline">SWITCH 1</span>
					</th>
					<th>
						<span class="outline">SWITCH 2</span>
					</th>
					<th>
						<span class="outline outline-fill">MERGE</span>
					</th>
					<th>
						<span class="outline outline-fill">RUNNING STATUS</span>
					</th>
					<th colspan="2">
						EXP A CALIBRATION
					</th>
					<th colspan="2">
						EXP B CALIBRATION
					</th>
				</tr>
				<tr>
					<th colspan="5">
					</th>
					<td>
						MIN
					</td>
					<td>
						MAX
					</td>
					<td>
						MIN
					</td>
					<td>
						MAX
					</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="lcd" ng-class="{off : !sysex.direct_select}">
						{{sysex.direct_select ? "ON" : "OFF"}}
					</td>
					<td class="lcd" ng-class="{off : !sysex.switch_1_up}">
						{{sysex.switch_1_up ? "UP" : "OFF"}}
					</td>
					<td class="lcd" ng-class="{off : !sysex.switch_2_down}">
						{{sysex.switch_1_up ? "DOWN" : "OFF"}}
					</td>
					<td class="lcd" ng-class="{off : !sysex.merge}">
						{{sysex.merge ? "ON" : "OFF"}}
					</td>
					<td class="lcd" ng-class="{off : !sysex.running_status}">
						{{sysex.running_status ? "ON" : "OFF"}}
					</td>
					<td class="lcd">
						{{sysex.expression_1_min | padding:3}}
					</td>
					<td class="lcd">
						{{sysex.expression_1_max | padding:3}}
					</td>
					<td class="lcd">
						{{sysex.expression_2_min | padding:3}}
					</td>
					<td class="lcd">
						{{sysex.expression_2_max | padding:3}}
					</td>
				</tr>
			</tbody>
		</table>
		<table class="table table-dark table-lcd">
			<thead>
				<tr>
					<th colspan="4">GLOBAL MIDI CHANNEL</th>
					<th>PRG 1</th>
					<th>PRG 2</th>
					<th>PRG 3</th>
					<th>PRG 4</th>
					<th>PRG 5</th>
					<th colspan="2">CNT 1</th>
					<th colspan="2">CNT 2</th>
					<th colspan="3">EXP A</th>
					<th colspan="3">EXP B</th>
					<th>NOTE</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="lcd yellow" colspan="4"></td>
					<td class="lcd yellow">{{sysex.program_1_channel+1 | padding:2}}</td>
					<td class="lcd yellow">{{sysex.program_2_channel+1 | padding:2}}</td>
					<td class="lcd yellow">{{sysex.program_3_channel+1 | padding:2}}</td>
					<td class="lcd yellow">{{sysex.program_4_channel+1 | padding:2}}</td>
					<td class="lcd yellow">{{sysex.program_5_channel+1 | padding:2}}</td>
					<td class="lcd yellow" colspan="2">
						{{sysex.control_1_channel+1 | padding:2}}
					</td>
					<td class="lcd yellow" colspan="2">
						{{sysex.control_2_channel+1 | padding:2}}
					</td>
					<td class="lcd yellow" colspan="3">
						{{sysex.expression_1_channel | padding:2}}
					</td>
					<td class="lcd yellow" colspan="3">
						{{sysex.expression_2_channel | padding:2}}
					</td>
					<td class="lcd yellow">
						{{sysex.note_channel | padding:2}}
					</td>
				</tr>
			</tbody>
			<tbody ng-repeat="b in sysex.banks">
				<tr>
					<th colspan="2">PRESET</th>
					<th><span class="outline">SW 1</span></th>
					<th><span class="outline">SW 2</span></th>
					<th>PRG 1</th>
					<th>PRG 2</th>
					<th>PRG 3</th>
					<th>PRG 4</th>
					<th>PRG 5</th>
					<th colspan="2">CNT 1</th>
					<th colspan="2">CNT 2</th>
					<th colspan="3">EXP A</th>
					<th colspan="3">EXP B</th>
					<th>NOTE</th>
				</tr>
				<tr>
					<td colspan="9" style="font-size:8pt;text-align:left!important">
						<small>CLICK ON PRESET NUMBER TO ACCESS MORE FEATURES</SMALL>
					</td>
					<td>CC</td>
					<td>VALUE</td>
					<td>CC</td>
					<td>VALUE</td>
					<td>CC</td>
					<td>MIN</td>
					<td>MAX</td>
					<td>CC</td>
					<td>MIN</td>
					<td>MAX</td>
					<td colspan="2"></td>
				</tr>
				<tr ng-repeat="p in b">
					<td class="lcd">
						{{$parent.$index | padding:2}}
					</td>
					<td>
						<b class="pedal">{{$index+1}}</b>
					</td>
					<td class="lcd" ng-class="{off : !p.switch_1.on}">
						{{p.switch_1.on ? "ON" : "OFF"}}
					</td>
					<td class="lcd" ng-class="{off : !p.switch_2.on}">
						{{p.switch_2.on ? "ON" : "OFF"}}
					</td>
					<td class="lcd" ng-class="{off : !p.program_1.on}">
						{{p.program_1.value_0 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.program_2.on}">
						{{p.program_2.value_0 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.program_3.on}">
						{{p.program_3.value_0 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.program_4.on}">
						{{p.program_4.value_0 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.program_5.on}">
						{{p.program_5.value_0 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.control_1.on}">
						{{p.control_1.value_0 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.control_1.on}">
						{{p.control_1.value_1 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.control_2.on}">
						{{p.control_2.value_0 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.control_2.on}">
						{{p.control_2.value_1 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.expression_1.on}">
						{{p.expression_1.value_0 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.expression_1.on}">
						{{p.expression_1.value_1 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.expression_1.on}">
						{{p.expression_1.value_2 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.expression_2.on}">
						{{p.expression_2.value_0 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.expression_2.on}">
						{{p.expression_2.value_1 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.expression_2.on}">
						{{p.expression_2.value_2 | padding:3}}
					</td>
					<td class="lcd" ng-class="{off : !p.note.on}">
						{{p.note.value_0 | padding:3}}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
    `,
    controller: function ($rootScope,$scope, midiService, fcb1010Service,fileService) {
        $scope.is_receiving = false;
        $scope.is_sending = false;
        $scope.sysex = null;
        $scope.current_bank_index = null;
        $scope.current_preset_index = null;
        $scope.current_preset = null;
		$scope.midi_access = null;
		RECEIVE_FAILURE ={
			success: false,
			source:"Viewer",
			message:"Couldn't receive configuration from FCB1010, please try again."
		};
		RECEIVE_SUCCESS ={
			success: true,
			source:"Viewer",
			message:"Data received successfully from FCB1010"
		};

		MIDI_FAILURE = {
			success: false,
			source:"Viewer",
			message:"Error requesting MIDI access. Please use Chrome browser and click 'allow' when prompted."
		};

		$scope.addMIDIEventListener = function(access){
			access.inputs.forEach(function (input) {
				input.onmidimessage = function (event) {
					$scope.$apply(function () {
						$scope.is_receiving = true;
						var sysex = fcb1010Service.decode(event.data);
						if (sysex != null){
							$scope.sysex = sysex;
							$rootScope.remote_sysex = sysex;
							$rootScope.toast = RECEIVE_SUCCESS;
						}else{
							$rootScope.toast = RECEIVE_FAILURE;
						}
						$scope.is_receiving = false;
					});
				};
			});
		}

		$scope.saveJSON = function(){
			var now = Date.now();
			fileService.toJSONFile($scope.sysex,'fcb1010-json-'+now);
		}

		$scope.saveSysex = function(){
			var now = Date.now();
			var data = fcb1010Service.encode($scope.sysex);
			fileService.toSysexFile(data,'fcb1010-sysex-'+now);
		}

        function init() {
            $scope.current_preset = fcb1010Service.getPresetTemplate();
            midiService.requestMIDIAccess()
                .then(function (access) {
					$scope.midi_access = access;
                    $scope.addMIDIEventListener(access);
                })
                .catch(function (err) {
                    $rootScope.toast = MIDI_FAILURE;
                });
        }

        init();

    }
});