angular.module('fcb1010EditorApp').component("localComponent", {
    template: `
    <div class="container-fluid mt-2">
    
    <table class="table table-dark table-lcd">
        <thead>
            <tr>
                <th colspan="4" class="fs-1 fw-light text-start border-bottom-0 px-4 pt-4 pb-0 m-0" style="color:#0CF">
                    local d-35
                </th>
                <th colspan="3" rowspan="2" class="text-end px-4 pt-4 pb-4 m-0">
                    <img style="width:40px;" class="negative" src="css/midi.svg" />
                </th>
            </tr>
            <tr>
                <td colspan="4" class="text-start pt-0 px-4 pb-4 m-0" style="line-height:1em">
                    BEHRINGER FCB1010 FOOT CONTROLLER SYSEX EDITOR
                </td>
            </tr>
            <tr>
                <th colspan="2">FCB1010 <span class="badge bg-secondary">VIEWER</span></th>
                <th>SETTING</th>
                <th>SYSEX FILE</th>
                <th>JSON FILE</th>
				<th>HELP</th>
                <th>TEST</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <span 
                        data-bs-toggle="popover" 
                        data-bs-title="{{popovers.viewer.read.title}}"
                        data-bs-content="{{popovers.viewer.read.content}}" 
                        data-bs-placement="bottom"
                        data-bs-trigger="hover">
                        <button class="btn btn-outline-light" ng-click="pasteRemoteSysex()"
                            ng-disabled="!$root.remote_sysex">
                            READ
                        </button>
                    </span>
                </td>
                <td>
                    <div class="input-group">
                        <button class="btn btn-outline-light" ng-click="getMidiOutDevices()"
                            data-bs-toggle="popover" 
                            data-bs-title="{{popovers.viewer.refresh.title}}"
                            data-bs-content="{{popovers.viewer.refresh.content}}" 
                            data-bs-placement="bottom"
                            data-bs-trigger="hover">
                            <i class="fa-solid fa-refresh"></i>
                        </button>
                        <select data-bs-toggle="popover" 
                        data-bs-title="{{popovers.viewer.midi_out.title}}"
                            data-bs-content="{{popovers.viewer.midi_out.content}}" 
                            data-bs-placement="bottom"
                            data-bs-trigger="hover" 
                            class="form-select" ng-model="midi_out"
                            ng-options="item as item.name for item in midi_out_devices"></select>
                        <button class="btn btn-outline-danger" ng-disabled="!midi_out || fcb1010_configuration_form.$invalid" ng-click="showModal()"
                            data-bs-toggle="popover" 
                            data-bs-title="{{popovers.viewer.write.title}}"
                            data-bs-content="{{popovers.viewer.write.content}}" 
                            data-bs-placement="bottom"
                            data-bs-trigger="hover">
                            WRITE
                        </button>
                    </div>
                </td>
                <td>
                    <div class="input-group">
                        <select data-bs-toggle="popover" 
                            data-bs-title="{{popovers.default_settings.list.content}}"
                            data-bs-content="{{popovers.default_settings.list.content}}"
                            data-bs-placement="bottom" 
                            data-bs-trigger="hover" class="form-select"
                            ng-model="default_setting"
                            ng-options="item as item.name for item in default_settings"></select>
                        <button class="btn btn-outline-light" ng-click="pasteDefaultSettingSysex()"
                            ng-disabled="!default_setting" 
                            data-bs-toggle="popover"
                            data-bs-title="{{popovers.default_settings.read.title}}"
                            data-bs-content="{{popovers.default_settings.read.content}}" 
                            data-bs-placement="bottom"
                            data-bs-trigger="hover">
                            READ
                        </button>
                    </div>
                </td>
                <td>
                    <input id="sysex-file" class="d-none" type="file" accept=".syx"
                        onchange="angular.element(this).scope().openSysex(event)" />
                    <div class="d-grid">
                        <div class="btn-group">
                            <button 
                                data-bs-toggle="popover" 
                                data-bs-title="{{popovers.sysex_file.read.title}}"
                                data-bs-content="{{popovers.sysex_file.read.content}}" 
                                data-bs-placement="bottom"
                                data-bs-trigger="hover" class="btn btn-outline-light"
                                onclick="document.getElementById('sysex-file').click()">
                                READ
                            </button>
                            <button 
                                data-bs-toggle="popover" 
                                data-bs-title="{{popovers.sysex_file.write.title}}"
                                data-bs-content="{{popovers.sysex_file.write.content}}" 
                                data-bs-placement="bottom"
                                data-bs-trigger="hover" class="btn btn-outline-danger" ng-click="saveSysex()"
                                ng-disabled="fcb1010_configuration_form.$invalid"
                            >
                                WRITE
                            </button>
                        </div>
                    </div>
                </td>
                <td>
                    <input id="json-file" class="d-none" type="file" accept=".json"
                        onchange="angular.element(this).scope().openJSON(event)" />
                    <div class="d-grid">
                        <div class="btn-group">
                            <button data-bs-toggle="popover" 
                            data-bs-title="{{popovers.json_file.read.title}}"
                                data-bs-content="{{popovers.json_file.read.content}}"
                                data-bs-placement="bottom" 
                                data-bs-trigger="hover" class="btn btn-outline-light"
                                onclick="document.getElementById('json-file').click()">
                                READ
                            </button>
                            <button data-bs-toggle="popover" 
                                data-bs-title="{{popovers.json_file.write.title}}"
                                data-bs-content="{{popovers.json_file.write.content}}" 
                                data-bs-placement="bottom"
                                data-bs-trigger="hover" 
                                class="btn btn-outline-danger" 
                                ng-click="saveJSON()"
                                ng-disabled="fcb1010_configuration_form.$invalid"
                            >
                                WRITE
                            </button>
                            </span>
                        </div>
                    </div>
                </td>
				<td>
					<button 
						id="help" 
						data-bs-toggle="popover" 
						data-bs-title="{{popovers.help.message.title}}"
						data-bs-content="{{popovers.help.message.content}}"
						data-bs-placement="bottom" 
						data-bs-trigger="hover"
						class="btn btn-outline-light btn-sm text-uppercase" 
						ng-click="toggleHelp()"
					>
						{{popover ? "ON" : "OFF"}}
					</button>
				</td>
                <td>
                    <button 
						data-bs-toggle="popover" 
						data-bs-title="{{popovers.test.message.title}}"
						data-bs-content="{{popovers.test.message.content}}"
						data-bs-placement="bottom" 
						data-bs-trigger="hover"
						class="btn btn-outline-light btn-sm text-uppercase" 
						ng-click="toggleTest()"
					>
						{{test_mode ? "ON" : "OFF"}}
					</button>
                </td>
            </tr>
            <tr ng-show="test_mode">
                <td colspan="7" class="fcb1010-test">
                    <div class="container-fluid bg-dark">
                        <div class="row">
                            <div class="col-8">
                                <div class="row mb-3">
                                    <div class="col-5">
                                        <div class="input-group">
                                            <button class="btn btn-outline-light" ng-click="getMidiOutDevices()"
                                                data-bs-toggle="popover" 
                                                data-bs-title="{{popovers.viewer.refresh.title}}"
                                                data-bs-content="{{popovers.viewer.refresh.content}}" 
                                                data-bs-placement="bottom"
                                                data-bs-trigger="hover">
                                                <i class="fa-solid fa-refresh"></i>
                                            </button>
                                            <select data-bs-toggle="popover" 
                                            data-bs-title="{{popovers.viewer.midi_out.title}}"
                                                data-bs-content="{{popovers.viewer.midi_out.content}}" 
                                                data-bs-placement="bottom"
                                                data-bs-trigger="hover" 
                                                class="form-select" ng-model="midi_out_test"
                                                ng-options="item as item.name for item in midi_out_devices"></select>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <span class="mt-2 w-100 badge text-uppercase align-middle" ng-class="{'text-bg-danger' : test_device.switch_1,'border border-danger text-danger' : !test_device.switch_1}">Switch 1</span>
                                    </div>
                                    <div class="col-2">
                                        <span class="mt-2 w-100 badge text-uppercase align-middle" ng-class="{'text-bg-danger' : test_device.switch_2,'border border-danger text-danger' : !test_device.switch_2}">Switch 2</span>
                                    </div>
                                    <div class="col-2">
                                        <span class="mt-2 w-100 badge text-uppercase align-middle" ng-class="{'text-bg-success' : sysex.direct_select,'border border-success text-success' : !sysex.direct_select}">Direct Select</span>
                                    </div>
                                    <div class="col-1 lcd fs-3 p-0">
                                    0{{test_device.bank}}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-1 p-0 m-0">
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                        <button class="btn btn-outline-light fcb1010-button w-100" ng-mousedown="testPreset(5,true)" ng-mouseup="testPreset(5,false)">
                                            <div class="d-flex justify-content-between">
                                                <i class="fa-solid fa-circle" ng-class="{'text-danger':test_device.preset == 5,'text-dark':test_device.preset != 5}"></i>
                                                <div class="w-100">
                                                    <h6 class="m-0">CNT 1</h6>
                                                    <h6 class="badge text-bg-light m-0 w-100">SYSEX SEND</h6>
                                                </div>
                                            </div>
                                            <h1 class="fcb1010-number">6</h1>
                                        </button>
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                        <button class="btn btn-outline-light fcb1010-button w-100" ng-mousedown="testPreset(6,true)" ng-mouseup="testPreset(6,false)">
                                            <div class="d-flex justify-content-between">
                                                <i class="fa-solid fa-circle" ng-class="{'text-danger':test_device.preset == 6,'text-dark':test_device.preset != 6}"></i>
                                                <div class="w-100">
                                                    <h6 class="m-0">CNT 2</h6>
                                                    <h6 class="badge text-bg-light m-0 w-100">SYSEX RCV</h6>
                                                </div>
                                            </div>
                                            <h1 class="fcb1010-number">7</h1>
                                        </button>
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                        <button class="btn btn-outline-light fcb1010-button w-100" ng-mousedown="testPreset(7,true)" ng-mouseup="testPreset(7,false)">
                                            <div class="d-flex justify-content-between">
                                                <i class="fa-solid fa-circle" ng-class="{'text-danger':test_device.preset == 7,'text-dark':test_device.preset != 7}"></i>
                                                <div class="w-100">
                                                    <h6 class="m-0">EXP A</h6>
                                                    <h6 class="badge text-bg-light m-0 w-100">MERGE</h6>
                                                </div>
                                            </div>
                                            <h1 class="fcb1010-number">8</h1>
                                        </button>
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                        <button class="btn btn-outline-light fcb1010-button w-100" ng-mousedown="testPreset(8,true)" ng-mouseup="testPreset(8,false)">
                                            <div class="d-flex justify-content-between">
                                            <i class="fa-solid fa-circle" ng-class="{'text-danger':test_device.preset == 8,'text-dark':test_device.preset != 8}"></i>
                                            <div class="w-100">
                                                <h6 class="m-0">EXP B</h6>
                                                <h6 class="badge text-bg-light m-0 w-100">RUNNING ST</h6>
                                            </div>
                                            </div>
                                            <h1 class="fcb1010-number">9</h1>
                                        </button>
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                        <button class="btn btn-outline-light fcb1010-button w-100" ng-mousedown="testPreset(9,true)" ng-mouseup="testPreset(9,false)">
                                            <div class="d-flex justify-content-between">
                                            <i class="fa-solid fa-circle" ng-class="{'text-danger':test_device.preset == 9,'text-dark':test_device.preset != 9}"></i>
                                            <div class="w-100">
                                                <h6 class="m-0">NOTE</h6>
                                                <h6 class="m-0 badge text-bg-dark w-100">DIRECT SELECT</h6>
                                            </div>
                                            </div>
                                            <h1 class="fcb1010-number">
                                                <span class="fcb1010-transparent-number">1</span>0
                                            </h1>
                                        </button>
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                        <button class="btn btn-outline-light fcb1010-button w-100" ng-click="testBank(true)">
                                            <h6 class="m-0 badge text-bg-light w-100">SWITCH 1</h6>
                                            <h1 class="fcb1010-text">
                                                UP
                                            </h1>
                                            <h6 class="m-0 badge text-bg-light w-100">ENTER</h6>
                                        </button>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-1 p-0 m-0">
                                        <button class="btn btn-outline-light fcb1010-button w-100" ng-mousedown="testPreset(0,true)" ng-mouseup="testPreset(0,false)">
                                            <div class="d-flex justify-content-between">
                                                    <i class="fa-solid fa-circle" ng-class="{'text-danger':test_device.preset == 0,'text-dark':test_device.preset != 0}"></i>                                                <div class="w-100">
                                                    <h6 class="m-0">PROG CHG 1</h6>
                                                    <h6 class="badge border border-light m-0 w-100">SWITCH 1</h6>
                                                </div>
                                            </div>
                                            <h1 class="fcb1010-number">1</h1>
                                        </button>
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                        <button class="btn btn-outline-light fcb1010-button w-100" ng-mousedown="testPreset(1,true)" ng-mouseup="testPreset(1,false)">
                                            <div class="d-flex justify-content-between">
                                                    <i class="fa-solid fa-circle" ng-class="{'text-danger':test_device.preset == 1,'text-dark':test_device.preset != 1}"></i>                                                <div class="w-100">
                                                    <h6 class="m-0">PROG CHG 2</h6>
                                                    <h6 class="badge border border-light m-0 w-100">SWITCH 2</h6>
                                                </div>
                                            </div>
                                            <h1 class="fcb1010-number">2</h1>
                                        </button>
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                        <button class="btn btn-outline-light fcb1010-button w-100" ng-mousedown="testPreset(2,true)" ng-mouseup="testPreset(2,false)">
                                            <div class="d-flex justify-content-between">
                                                     <i class="fa-solid fa-circle" ng-class="{'text-danger':test_device.preset == 2,'text-dark':test_device.preset != 2}"></i>                                                <div class="w-100">
                                                    <h6 class="m-0">PROG CHG 3</h6>
                                                    <h6 class="m-0">&nbsp;</h6>
                                                </div>
                                            </div>
                                            <h1 class="fcb1010-number">3</h1>
                                        </button>
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                        <button class="btn btn-outline-light fcb1010-button w-100" ng-mousedown="testPreset(3,true)" ng-mouseup="testPreset(3,false)">
                                            <div class="d-flex justify-content-between">
                                                     <i class="fa-solid fa-circle" ng-class="{'text-danger':test_device.preset == 3,'text-dark':test_device.preset != 3}"></i>                                                <div class="w-100">
                                                    <h6 class="m-0">PROG CHG 4</h6>
                                                    <h6 class="m-0">&nbsp;</h6>
                                                </div>
                                            </div>
                                            <h1 class="fcb1010-number">4</h1>
                                        </button>
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                        <button class="btn btn-outline-light fcb1010-button w-100" ng-mousedown="testPreset(4,true)" ng-mouseup="testPreset(4,false)">
                                            <div class="d-flex justify-content-between">
                                            <i class="fa-solid fa-circle" ng-class="{'text-danger':test_device.preset == 4,'text-dark':test_device.preset != 4}"></i>                                                <div class="w-100">
                                                    <h6 class="m-0">PROG CHG 5</h6>
                                                    <h6 class="m-0 badge text-bg-light">COPY PRESET</h6>
                                                </div>
                                            </div>
                                            <h1 class="fcb1010-number">5</h1>
                                        </button>    
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                    </div>
                                    <div class="col-1 p-0 m-0">
                                        <button class="btn btn-outline-light fcb1010-button w-100" ng-click="testBank(false)">
                                            <h6 class="m-0 badge text-bg-light w-100">SWITCH 2</h6>
                                            <h1 class="fcb1010-text">
                                                DOWN
                                            </h1>
                                            <h6 class="m-0 badge text-bg-light w-100">ESCAPE</h6>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="row mb-3">
                                    <div class="col-2 m-0 p-0">
                                    </div>
                                    <div class="col-4 m-0 p-0">
                                        <span class="mt-2 w-100 badge bg-black text-light text-uppercase align-middle">EXPRESSION PEDAL A</span>
                                    </div>
                                    <div class="col-1 m-0 p-0">
                                    </div>
                                    <div class="col-4 m-0 p-0">
                                        <span class="mt-2 w-100 badge bg-black text-light text-uppercase align-middle">EXPRESSION PEDAL B</span>
                                    </div>
                                    <div class="col-1 m-0 p-0">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-2 m-0 p-0">
                                    </div>
                                    <div class="col-4 m-0 p-0">
                                        <button class="btn btn-outline-light fcb1010-button-expression w-100">
                                            <h1 class="fcb1010-text-expression text-danger" style="opacity:{{(test_expression_b*0.7874015748)/100}}">
                                                {{test_device.expression_1}}
                                            </1>
                                        </button>
                                        <input ng-model="test_device.expression_1" type="range" class="form-range" id="customRange1 min="{{sysex.expression_1_min}}" max="{{sysex.expression_1_max}}" step="1" ng-change="testExpression(false)"/>
                                    </div>
                                    <div class="col-1 m-0 p-0">
                                    </div>
                                    <div class="col-4 m-0 p-0">
                                        <button 
                                            class="btn btn-outline-light 
                                            fcb1010-button-expression w-100"
                                            
                                        >
                                            <h1 class="fcb1010-text-expression text-danger" style="opacity:{{(test_expression_b*0.7874015748)/100}}">
                                                {{test_device.expression_2}}
                                            </h1>
                                        </button>
                                        <input ng-model="test_device.expression_2" type="range" class="form-range" id="customRange1 min="{{sysex.expression_2_min}}" max="{{sysex.expression_2_max}}" step="1" ng-change="testExpression(true)"/>
                                    </div>
                                    <div class="col-1 m-0 p-0">
                                    </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th>Write Status</th>
                <td colspan="6" class="text-start">
                    <span ng-show="fcb1010_configuration_form.$valid">
                        Ready.
                    </span>
                    <span ng-show="fcb1010_configuration_form.$invalid">
                        Please check empty fields or fields out of range.
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    <form name="fcb1010_configuration_form">
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
                <td colspan="5" style="text-align:left;font-size:8pt!important">
                    <small>FCB1010 ignores the messages on this table</small>
                </td>
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
                <td data-bs-toggle="popover" 
                data-bs-title="{{popovers.global.direct_select.title}}"
                    data-bs-content="{{popovers.global.direct_select.content}}"
                    data-bs-placement="bottom" 
                    data-bs-trigger="hover" 
                    class="lcd pointer"
                    ng-class="{off : !sysex.direct_select}" ng-click="sysex.direct_select = !sysex.direct_select">
                    {{sysex.direct_select ? "ON" : "OFF"}}
                </td>
                <td data-bs-toggle="popover" 
                data-bs-title="{{popovers.global.switch_1_up.title}}"
                    data-bs-content="{{popovers.global.switch_1_up.content}}"
                    data-bs-placement="bottom" 
                    data-bs-trigger="hover" 
                    class="lcd pointer"
                    ng-class="{off : !sysex.switch_1_up}" ng-click="sysex.switch_1_up = !sysex.switch_1_up">
                    {{sysex.switch_1_up ? "UP" : "OFF"}}
                </td>
                <td data-bs-toggle="popover" 
                data-bs-title="{{popovers.global.switch_2_down.title}}"
                    data-bs-content="{{popovers.global.switch_2_down.content}}"
                    data-bs-placement="bottom" 
                    data-bs-trigger="hover" 
                    class="lcd pointer"
                    ng-class="{off : !sysex.switch_2_down}" ng-click="sysex.switch_2_down = !sysex.switch_2_down">
                    {{sysex.switch_2_down ? "DOWN" : "OFF"}}
                </td>
                <td data-bs-toggle="popover" 
                data-bs-title="{{popovers.global.merge.title}}"
                    data-bs-content="{{popovers.global.merge.content}}"
                    data-bs-placement="bottom" 
                    data-bs-trigger="hover" 
                    class="lcd pointer"
                    ng-class="{off : !sysex.merge}" ng-click="sysex.merge = !sysex.merge">
                    {{sysex.merge ? "ON" : "OFF"}}
                </td>
                <td data-bs-toggle="popover" 
                data-bs-title="{{popovers.global.running_status.title}}"
                    data-bs-content="{{popovers.global.running_status.content}}"
                    data-bs-placement="bottom" 
                    data-bs-trigger="hover" 
                    class="lcd pointer"
                    ng-class="{off : !sysex.running_status}" ng-click="sysex.running_status = !sysex.running_status">
                    {{sysex.running_status ? "ON" : "OFF"}}
                </td>
                <td class="lcd">
                    <input data-bs-toggle="popover" 
                    data-bs-title="{{popovers.global.expression_1_min.title}}"
                        data-bs-content="{{popovers.global.expression_1_min.content}}"
                        data-bs-placement="bottom" data-bs-trigger="hover" type="number" ng-required="true" class="form-control"
                        ng-model="sysex.expression_1_min" min="0" max="{{sysex.expression_1_max}}" step="1">
                </td>
                <td class="lcd">
                    <input data-bs-toggle="popover" 
                    data-bs-title="{{popovers.global.expression_1_max.title}}"
                        data-bs-content="{{popovers.global.expression_1_max.content}}"
                        data-bs-placement="bottom" data-bs-trigger="hover" type="number" ng-required="true" class="form-control"
                        ng-model="sysex.expression_1_max" min="{{sysex.expression_1_min}}" max="255" step="1">
                </td>
                <td class="lcd">
                    <input data-bs-toggle="popover" 
                    data-bs-title="{{popovers.global.expression_2_min.title}}"
                        data-bs-content="{{popovers.global.expression_2_min.content}}"
                        data-bs-placement="bottom" data-bs-trigger="hover" type="number" ng-required="true" class="form-control"
                        ng-model="sysex.expression_2_min" min="0" max="{{sysex.expression_2_max}}" step="1">
                </td>
                <td class="lcd">
                    <input data-bs-toggle="popover" 
                    data-bs-title="{{popovers.global.expression_2_max.title}}"
                        data-bs-content="{{popovers.global.expression_2_max.content}"
                        data-bs-placement="bottom" data-bs-trigger="hover" type="number" ng-required="true" class="form-control"
                        ng-model="sysex.expression_2_max" min="{{sysex.expression_2_min}}" max="255" step="1">
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
                <td class="lcd yellow">
                    <input data-bs-toggle="popover" data-bs-title="{{popovers.program_1.midi.title}}"
                        data-bs-content="{{popovers.program_1.midi.content}}" data-bs-placement="bottom"
                        data-bs-trigger="hover" type="number" ng-required="true" class="form-control" ng-model="sysex.program_1_channel"
                        min="0" max="15" step="1">
                </td>
                <td class="lcd yellow">
                    <input data-bs-toggle="popover" data-bs-title="{{popovers.program_2.midi.title}}"
                        data-bs-content="{{popovers.program_2.midi.content}}" data-bs-placement="bottom"
                        data-bs-trigger="hover" type="number" ng-required="true" class="form-control" ng-model="sysex.program_2_channel"
                        min="0" max="15" step="1">
                </td>
                <td class="lcd yellow">
                    <input data-bs-toggle="popover" data-bs-title="{{popovers.program_3.midi.title}}"
                        data-bs-content="{{popovers.program_3.midi.content}}" data-bs-placement="bottom"
                        data-bs-trigger="hover" type="number" ng-required="true" class="form-control" ng-model="sysex.program_3_channel"
                        min="0" max="15" step="1">
                </td>
                <td class="lcd yellow">
                    <input data-bs-toggle="popover" data-bs-title="{{popovers.program_4.midi.title}}"
                        data-bs-content="{{popovers.program_4.midi.content}}" data-bs-placement="bottom"
                        data-bs-trigger="hover" type="number" ng-required="true" class="form-control" ng-model="sysex.program_4_channel"
                        min="0" max="15" step="1">
                </td>
                <td class="lcd yellow">
                    <input data-bs-toggle="popover" data-bs-title="{{popovers.program_5.midi.title}}"
                        data-bs-content="{{popovers.program_5.midi.content}}" data-bs-placement="bottom"
                        data-bs-trigger="hover" type="number" ng-required="true" class="form-control" ng-model="sysex.program_5_channel"
                        min="0" max="15" step="1">
                </td>
                <td class="lcd yellow" colspan="2">
                    <input data-bs-toggle="popover" data-bs-title="{{popovers.control_1.midi.title}}"
                        data-bs-content="{{popovers.control_1.midi.content}}" data-bs-placement="bottom"
                        data-bs-trigger="hover" type="number" ng-required="true" class="form-control" ng-model="sysex.control_1_channel"
                        min="0" max="15" step="1">
                </td>
                <td class="lcd yellow" colspan="2">
                    <input data-bs-toggle="popover" data-bs-title="{{popovers.control_2.midi.title}}"
                        data-bs-content="{{popovers.control_2.midi.content}}" data-bs-placement="bottom"
                        data-bs-trigger="hover" type="number" ng-required="true" class="form-control" ng-model="sysex.control_2_channel"
                        min="0" max="15" step="1">
                </td>
                <td class="lcd yellow" colspan="3">
                    <input data-bs-toggle="popover" data-bs-title="{{popovers.expression_1.midi.title}}"
                        data-bs-content="{{popovers.expression_1.midi.content}}" data-bs-placement="bottom"
                        data-bs-trigger="hover" type="number" ng-required="true" class="form-control" ng-model="sysex.expression_1_channel"
                        min="0" max="15" step="1">
                </td>
                <td class="lcd yellow" colspan="3">
                    <input data-bs-toggle="popover" data-bs-title="{{popovers.expression_2.midi.title}}"
                        data-bs-content="{{popovers.expression_2.midi.content}}" data-bs-placement="bottom"
                        data-bs-trigger="hover" type="number" ng-required="true" class="form-control" ng-model="sysex.expression_2_channel"
                        min="0" max="15" step="1">
                </td>
                <td class="lcd yellow">
                    <input data-bs-toggle="popover" data-bs-title="{{popovers.note.midi.title}}"
                        data-bs-content="{{popovers.note.midi.content}}" data-bs-trigger="hover" type="number" ng-required="true"
                        class="form-control" ng-model="sysex.note_channel" min="0" max="15" step="1">
                </td>
            </tr>
        </tbody>

        <tbody ng-repeat="b in sysex.banks track by $index">
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
                    <small class="text-uppercase">
                        click bank number to access increments |
                        click preset number to access power switches
                    </small>
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
            <tr class="border-bottom-dark" ng-show="!bank_power_mode">
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.all_bank.title}}"
                    data-bs-content="{{popovers.general.all_bank.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="lcd">
                    {{$index | padding:2}}
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.all_preset.title}}"
                    data-bs-content="{{popovers.general.all_preset.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="context-cursor" ng-click="bank_power_mode = !bank_power_mode">
                    <b class="pedal">ALL</b>
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.switch_1.on.title}}"
                    data-bs-content="{{popovers.switch_1.on.content+popovers.bank_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="lcd blue pointer"
                    ng-class="{off : !bank_presets[$index].switch_1.on}"
                    ng-click="bank_presets[$index].switch_1.on = !bank_presets[$index].switch_1.on">
                    {{bank_presets[$index].switch_1.on ? "ON" : "OFF"}}
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.switch_2.on.title}}"
                    data-bs-content="{{popovers.switch_2.on.content+popovers.bank_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="lcd blue pointer"
                    ng-class="{off : !bank_presets[$index].switch_2.on}"
                    ng-click="bank_presets[$index].switch_2.on = !bank_presets[$index].switch_2.on">
                    {{bank_presets[$index].switch_2.on ? "ON" : "OFF"}}
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.program_1.value_0.title}}"
                    data-bs-content="{{popovers.program_1.value_0.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].program_1.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].program_1.value_0" min="0"
                        max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.program_2.value_0.title}}"
                    data-bs-content="{{popovers.program_2.value_0.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].program_2.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].program_2.value_0" min="0"
                        max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.program_3.value_0.title}}"
                    data-bs-content="{{popovers.program_3.value_0.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].program_3.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].program_3.value_0" min="0"
                        max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.program_4.value_0.title}}"
                    data-bs-content="{{popovers.program_4.value_0.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].program_4.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].program_4.value_0" min="0"
                        max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.program_5.value_0.title}}"
                    data-bs-content="{{popovers.program_5.value_0.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].program_5.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].program_5.value_0" min="0"
                        max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.control_1.value_0.title}}"
                    data-bs-content="{{popovers.control_1.value_0.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].control_1.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].control_1.value_0" min="0"
                        max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.control_1.value_1.title}}"
                    data-bs-content="{{popovers.control_1.value_1.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].control_1.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].control_1.value_1" min="0"
                        max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.control_2.value_0.title}}"
                    data-bs-content="{{popovers.control_2.value_0.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].control_2.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].control_2.value_0" min="0"
                        max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.control_2.value_1.title}}"
                    data-bs-content="{{popovers.control_2.value_1.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].control_2.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].control_2.value_1" min="0"
                        max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.expression_1.value_0.title}}"
                    data-bs-content="{{popovers.expression_1.value_0.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].expression_1.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].expression_1.value_0"
                        min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.expression_1.value_1.title}}"
                    data-bs-content="{{popovers.expression_1.value_1.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].expression_1.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].expression_1.value_1"
                        min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.expression_1.value_2.title}}"
                    data-bs-content="{{popovers.expression_1.value_2.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].expression_1.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].expression_1.value_2"
                        min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.expression_2.value_0.title}}"
                    data-bs-content="{{popovers.expression_2.value_0.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].expression_2.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].expression_2.value_0"
                        min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.expression_2.value_1.title}}"
                    data-bs-content="{{popovers.expression_2.value_1.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].expression_2.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].expression_2.value_1"
                        min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.expression_2.value_2.title}}"
                    data-bs-content="{{popovers.expression_2.value_2.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd blue"
                    ng-class="{off : !bank_presets[$index].expression_2.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].expression_2.value_2"
                        min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.note.value_0.title}}"
                    data-bs-content="{{popovers.note.value_0.content+popovers.bank_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="lcd blue" ng-class="{off : !bank_presets[$index].note.on}"
                    tooltip="{{bank_presets[$index].note.value_0 | midinote}}">
                    <input type="number" ng-required="true" class="form-control" ng-model="bank_presets[$index].note.value_0" min="0"
                        max="127" step="1">
                </td>
            </tr>
            <tr class="th-switches" ng-show="bank_power_mode">
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.all_bank.title}}"
                    data-bs-content="{{popovers.general.all_bank.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="lcd context-cursor" ng-click="bank_power_mode = !bank_power_mode">
                    {{$index | padding:2}}
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.all_preset.title}}"
                    data-bs-content="{{popovers.general.all_preset.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="context-cursor" ng-click="bank_power_mode = !bank_power_mode">
                    <b class="pedal">ALL</b>
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.copy.title}}"
                    data-bs-content="{{popovers.general.copy.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover">
                    <button class="btn btn-outline-success btn-sm" ng-click="copyBankPreset($index)">
                        <i class="fa-solid fa-copy"></i>
                    </button>
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.paste.title}}"
                    data-bs-content="{{popovers.general.paste.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover">
                    <button class="btn btn-outline-warning btn-sm" ng-click="pasteBankPreset($index)"
                        ng-disabled="!$root.preset_clipboard">
                        <i class="fa-solid fa-paste"></i>
                    </button>
                </td>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.program_1.on.title}}"
                    data-bs-content="{{popovers.program_1.on.content+popovers.bank_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" ng-class="{off : !bank_presets[$index].program_1.on}">
                    <button class="btn btn-outline-danger btn-sm"
                        ng-click="bank_presets[$index].program_1.on = !bank_presets[$index].program_1.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.program_2.on.title}}"
                    data-bs-content="{{popovers.program_2.on.content+popovers.bank_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" ng-class="{off : !bank_presets[$index].program_2.on}">
                    <button class="btn btn-outline-danger btn-sm"
                        ng-click="bank_presets[$index].program_2.on = !bank_presets[$index].program_2.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.program_3.on.title}}"
                    data-bs-content="{{popovers.program_3.on.content+popovers.bank_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" ng-class="{off : !bank_presets[$index].program_3.on}">
                    <button class="btn btn-outline-danger btn-sm"
                        ng-click="bank_presets[$index].program_3.on = !bank_presets[$index].program_3.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.program_4.on.title}}"
                    data-bs-content="{{popovers.program_4.on.content+popovers.bank_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" ng-class="{off : !bank_presets[$index].program_4.on}">
                    <button class="btn btn-outline-danger btn-sm"
                        ng-click="bank_presets[$index].program_4.on = !bank_presets[$index].program_4.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.program_5.on.title}}"
                    data-bs-content="{{popovers.program_5.on.content+popovers.bank_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" ng-class="{off : !bank_presets[$index].program_5.on}">
                    <button class="btn btn-outline-danger btn-sm"
                        ng-click="bank_presets[$index].program_5.on = !bank_presets[$index].program_5.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.control_1.on.title}}"
                    data-bs-content="{{popovers.control_1.on.content+popovers.bank_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" colspan="2" ng-class="{off : !bank_presets[$index].control_1.on}">
                    <button class="btn btn-outline-danger btn-sm"
                        ng-click="bank_presets[$index].control_1.on = !bank_presets[$index].control_1.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.control_2.on.title}}"
                    data-bs-content="{{popovers.control_2.on.content+popovers.bank_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" colspan="2" ng-class="{off : !bank_presets[$index].control_2.on}">
                    <button class="btn btn-outline-danger btn-sm"
                        ng-click="bank_presets[$index].control_2.on = !bank_presets[$index].control_2.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.expression_1.on.title}}"
                    data-bs-content="{{popovers.expression_1.on.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" colspan="3"
                    ng-class="{off : !bank_presets[$index].expression_1.on}">
                    <button class="btn btn-outline-danger btn-sm"
                        ng-click="bank_presets[$index].expression_1.on = !bank_presets[$index].expression_1.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.expression_2.on.title}}"
                    data-bs-content="{{popovers.expression_2.on.content+popovers.bank_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" colspan="3"
                    ng-class="{off : !bank_presets[$index].expression_2.on}">
                    <button class="btn btn-outline-danger btn-sm"
                        ng-click="bank_presets[$index].expression_2.on = !bank_presets[$index].expression_2.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.note.on.title}}"
                    data-bs-content="{{popovers.note.on.content+popovers.bank_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" ng-class="{off : !bank_presets[$index].note.on}">
                    <button class="btn btn-outline-danger btn-sm"
                        ng-click="bank_presets[$index].note.on = !bank_presets[$index].note.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
            </tr>
            <tr ng-repeat-start="p in b track by $index" class="border-bottom-dark"
                ng-show="!power_mode && !increment_mode">
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.bank.title}}"
                    data-bs-content="{{popovers.general.bank.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="lcd context-cursor" ng-click="toggleIncrementMode()">
                    {{$parent.$index | padding:2}}
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.preset.title}}"
                    data-bs-content="{{popovers.general.preset.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="context-cursor" ng-click="power_mode = !power_mode">
                    <b class="pedal">{{$index+1}}</b>
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.switch_1.on.title}}"
                    data-bs-content="{{popovers.switch_1.on.content+popovers.preset_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="lcd pointer" ng-class="{off : !p.switch_1.on}"
                    ng-click="p.switch_1.on = !p.switch_1.on">
                    {{p.switch_1.on ? "ON" : "OFF"}}
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.switch_2.on.title}}"
                    data-bs-content="{{popovers.switch_2.on.content+popovers.preset_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="lcd pointer" ng-class="{off : !p.switch_2.on}"
                    ng-click="p.switch_2.on = !p.switch_2.on">
                    {{p.switch_2.on ? "ON" : "OFF"}}
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.program_1.value_0.title}}"
                    data-bs-content="{{popovers.program_1.value_0.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd" ng-class="{off : !p.program_1.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.program_1.value_0" min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.program_2.value_0.title}}"
                    data-bs-content="{{popovers.program_2.value_0.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd" ng-class="{off : !p.program_2.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.program_2.value_0" min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.program_3.value_0.title}}"
                    data-bs-content="{{popovers.program_3.value_0.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd" ng-class="{off : !p.program_3.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.program_3.value_0" min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.program_4.value_0.title}}"
                    data-bs-content="{{popovers.program_4.value_0.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd" ng-class="{off : !p.program_4.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.program_4.value_0" min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.program_5.value_0.title}}"
                    data-bs-content="{{popovers.program_5.value_0.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd" ng-class="{off : !p.program_5.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.program_5.value_0" min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.control_1.value_0.title}}"
                    data-bs-content="{{popovers.control_1.value_0.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd yellow"
                    ng-class="{off : !p.control_1.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.control_1.value_0" min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.control_1.value_1.title}}"
                    data-bs-content="{{popovers.control_1.value_1.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd yellow"
                    ng-class="{off : !p.control_1.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.control_1.value_1" min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.control_2.value_0.title}}"
                    data-bs-content="{{popovers.control_2.value_0.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd" ng-class="{off : !p.control_2.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.control_2.value_0" min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.control_2.value_1.title}}"
                    data-bs-content="{{popovers.control_2.value_1.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd" ng-class="{off : !p.control_2.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.control_2.value_1" min="0" max="127" step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.expression_1.value_0.title}}"
                    data-bs-content="{{popovers.expression_1.value_0.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd yellow"
                    ng-class="{off : !p.expression_1.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.expression_1.value_0" min="0" max="127"
                        step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.expression_1.value_1.title}}"
                    data-bs-content="{{popovers.expression_1.value_1.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd yellow"
                    ng-class="{off : !p.expression_1.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.expression_1.value_1" min="0" max="127"
                        step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.expression_1.value_2.title}}"
                    data-bs-content="{{popovers.expression_1.value_2.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd yellow"
                    ng-class="{off : !p.expression_1.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.expression_1.value_2" min="0" max="127"
                        step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.expression_2.value_0.title}}"
                    data-bs-content="{{popovers.expression_2.value_0.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd"
                    ng-class="{off : !p.expression_2.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.expression_2.value_0" min="0" max="127"
                        step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.expression_2.value_1.title}}"
                    data-bs-content="{{popovers.expression_2.value_1.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd"
                    ng-class="{off : !p.expression_2.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.expression_2.value_1" min="0" max="127"
                        step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.expression_2.value_2.title}}"
                    data-bs-content="{{popovers.expression_2.value_2.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd"
                    ng-class="{off : !p.expression_2.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.expression_2.value_2" min="0" max="127"
                        step="1">
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.note.value_0.title}}"
                    data-bs-content="{{popovers.note.value_0.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" class="lcd yellow" ng-class="{off : !p.note.on}">
                    <input type="number" ng-required="true" class="form-control" ng-model="p.note.value_0" min="0" max="127" step="1">
                </td>
            </tr>
            <tr class="increment-buttons" ng-show="increment_mode">
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.bank.title}}"
                    data-bs-content="{{popovers.general.bank.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="lcd context-cursor" ng-click="toggleIncrementMode()">
                    {{$parent.$index | padding:2}}
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.preset.title}}"
                    data-bs-content="{{popovers.general.preset.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="context-cursor" ng-click="toggleIncrementMode()">
                    <b class="pedal">{{$index+1}}</b>
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.increment_start.title}}"
                    data-bs-content="{{popovers.general.increment_start.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" colspan="2">
                    <i class="fa-solid fa-flag-checkered text-primary"
                        ng-show="increment_start && increment_start.b == $parent.$index && increment_start.p == $index "></i>
                </td>
                <th data-bs-toggle="popover" data-bs-title="PROGRAM 1 {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} PROGRAM 1 {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
						ng-class="getIncrementClass($parent.$index,$index,'program_1',0)"
						ng-mouseover="setIncrementHover($parent.$index,$index,'program_1',0)"
						ng-mouseout="removeIncrementHover()"
                        ng-click="addIncrementPoint($parent.$index,$index,'program_1',0)">
                        {{p.program_1.value_0}}
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="PROGRAM 2 {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} PROGRAM 2 {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'program_2',0)"
						ng-mouseout="removeIncrementHover()"
						ng-class="getIncrementClass($parent.$index,$index,'program_2',0)"
                        ng-click="addIncrementPoint($parent.$index,$index,'program_2',0)"
						>
                        {{p.program_2.value_0}}
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="PROGRAM 3 {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} PROGRAM 3 {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'program_3',0)"
						ng-mouseout="removeIncrementHover()"
					ng-class="getIncrementClass($parent.$index,$index,'program_3',0)"
                        ng-click="addIncrementPoint($parent.$index,$index,'program_3',0)">
                        {{p.program_3.value_0}}
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="PROGRAM 4 {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} PROGRAM 4 {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'program_4',0)"
						ng-mouseout="removeIncrementHover()"
					ng-class="getIncrementClass($parent.$index,$index,'program_4',0)"
                        ng-click="addIncrementPoint($parent.$index,$index,'program_4',0)">
                        {{p.program_4.value_0}}
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="PROGRAM 5 {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} PROGRAM 5 {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'program_5',0)"
						ng-mouseout="removeIncrementHover()"
					ng-class="getIncrementClass($parent.$index,$index,'program_5',0)"
                        ng-click="addIncrementPoint($parent.$index,$index,'program_5',0)">
                        {{p.program_5.value_0}}
                    </button>
                </th>
                <th data-bs-toggle="popover"
                    data-bs-title="CONTROL CHANGE 1 control change {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} CONTROL 1 control change {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'control_1',0)"
						ng-mouseout="removeIncrementHover()"
					ng-class="getIncrementClass($parent.$index,$index,'control_1',0)"
                        ng-click="addIncrementPoint($parent.$index,$index,'control_1',0)">
                        {{p.control_1.value_0}}
                    </button>
                </th>
                <th data-bs-toggle="popover"
                    data-bs-title="CONTROL CHANGE 1 value {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} CONTROL CHANGE 1 value {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'control_1',1)"
						ng-mouseout="removeIncrementHover()"
					ng-class="getIncrementClass($parent.$index,$index,'control_1',1)"
                        ng-click="addIncrementPoint($parent.$index,$index,'control_1',1)">
                        {{p.control_1.value_1}}
                    </button>
                </th>
                <th data-bs-toggle="popover"
                    data-bs-title="CONTROL CHANGE 2 control change {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} CONTROL CHANGE 2 control change {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'control_2',0)"
						ng-mouseout="removeIncrementHover()"
					ng-class="getIncrementClass($parent.$index,$index,'control_2',0)"
                        ng-click="addIncrementPoint($parent.$index,$index,'control_2',0)">
                        {{p.control_2.value_0}}
                    </button>
                </th>
                <th data-bs-toggle="popover"
                    data-bs-title="CONTROL CHANGE 2 value {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} CONTROL CHANGE 2 value {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover"
				>
                    <button class="btn btn-outline-primary btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'control_2',1)"
						ng-mouseout="removeIncrementHover()"
					ng-class="getIncrementClass($parent.$index,$index,'control_2',1)"
                        ng-click="addIncrementPoint($parent.$index,$index,'control_2',1)">
                        {{p.control_2.value_1}}
                    </button>
                </th>
                <th data-bs-toggle="popover"
                    data-bs-title="EXPRESSION PEDAL A control change {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} EXPRESSION PEDAL A control change {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'expression_1',0)"
						ng-mouseout="removeIncrementHover()"
					ng-class="getIncrementClass($parent.$index,$index,'expression_1',0)"
                        ng-click="addIncrementPoint($parent.$index,$index,'expression_1',0)">
                        {{p.expression_1.value_0}}
                    </button>
                </th>
                <th data-bs-toggle="popover"
                    data-bs-title="EXPRESSION PEDAL A minimum value {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} EXPRESSION PEDAL A minimum value {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'expression_1',1)"
						ng-mouseout="removeIncrementHover()"
					ng-class="getIncrementClass($parent.$index,$index,'expression_1',1)"
                        ng-click="addIncrementPoint($parent.$index,$index,'expression_1',1)">
                        {{p.expression_1.value_1}}
                    </button>
                </th>
                <th data-bs-toggle="popover"
                    data-bs-title="EXPRESSION PEDAL A maximum value {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} EXPRESSION PEDAL A maximum value {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'expression_1',2)"
						ng-mouseout="removeIncrementHover()"
					ng-class="getIncrementClass($parent.$index,$index,'expression_1',2)"
                        ng-click="addIncrementPoint($parent.$index,$index,'expression_1',2)">
                        {{p.expression_1.value_2}}
                    </button>
                </th>
                <th data-bs-toggle="popover"
                    data-bs-title="EXPRESSION PEDAL B control change {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} EXPRESSION PEDAL B control change {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'expression_2',0)"
						ng-mouseout="removeIncrementHover()"
					ng-class="getIncrementClass($parent.$index,$index,'expression_2',0)"
                        ng-click="addIncrementPoint($parent.$index,$index,'expression_2',0)">
                        {{p.expression_2.value_0}}
                    </button>
                </th>
                <th data-bs-toggle="popover"
                    data-bs-title="EXPRESSION PEDAL B minimum value {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} EXPRESSION PEDAL B minimum value {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'expression_2',1)"
						ng-mouseout="removeIncrementHover()"
					ng-class="getIncrementClass($parent.$index,$index,'expression_2',1)"
                        ng-click="addIncrementPoint($parent.$index,$index,'expression_2',1)">
                        {{p.expression_2.value_1}}
                    </button>
                </th>
                <th data-bs-toggle="popover"
                    data-bs-title="EXPRESSION PEDAL B maximum value {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} EXPRESSION PEDAL B maximum value {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'expression_2',2)"
						ng-mouseout="removeIncrementHover()"
					ng-class="getIncrementClass($parent.$index,$index,'expression_2',2)"
                        ng-click="addIncrementPoint($parent.$index,$index,'expression_2',2)">
                        {{p.expression_2.value_2}}
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="NOTE value {{popovers.general.increment.title}}"
                    data-bs-content="{{popovers.general.increment.content_start}} NOTE value {{popovers.general.increment.content_end}}"
                    data-bs-placement="bottom" data-bs-trigger="hover">
                    <button class="btn btn-sm"
					ng-mouseover="setIncrementHover($parent.$index,$index,'note',0)"
						ng-mouseout="removeIncrementHover()"
						ng-class="getIncrementClass($parent.$index,$index,'note',0)"
                        ng-click="addIncrementPoint($parent.$index,$index,'note',0)">
                        {{p.note.value_0}}
                    </button>
                </th>
            </tr>
            <tr ng-repeat-end class="th-switches" ng-show="power_mode">
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.bank.title}}"
                    data-bs-content="{{popovers.general.bank.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="lcd context-cursor" ng-click="power_mode = !power_mode">
                    {{$parent.$index | padding:2}}
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.preset.title}}"
                    data-bs-content="{{popovers.general.preset.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" class="context-cursor" ng-click="power_mode = !power_mode">
                    <b class="pedal">{{$index+1}}</b>
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.copy.title}}"
                    data-bs-content="{{popovers.general.copy.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover">
                    <button class="btn btn-outline-success btn-sm" ng-click="copyPreset($parent.$index,$index)">
                        <i class="fa-solid fa-copy"></i>
                    </button>
                </td>
                <td data-bs-toggle="popover" data-bs-title="{{popovers.general.paste.title}}"
                    data-bs-content="{{popovers.general.paste.content}}" data-bs-placement="bottom"
                    data-bs-trigger="hover">
                    <button class="btn btn-outline-warning btn-sm" ng-click="pastePreset($parent.$index,$index)"
                        ng-disabled="!$root.preset_clipboard">
                        <i class="fa-solid fa-paste"></i>
                    </button>
                </td>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.program_1.on.title}}"
                    data-bs-content="{{popovers.program_1.on.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" ng-class="{off : !p.program_1.on}">
                    <button class="btn btn-outline-danger btn-sm" ng-click="p.program_1.on = !p.program_1.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.program_2.on.title}}"
                    data-bs-content="{{popovers.program_2.on.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" ng-class="{off : !p.program_2.on}">
                    <button class="btn btn-outline-danger btn-sm" ng-click="p.program_2.on = !p.program_2.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.program_3.on.title}}"
                    data-bs-content="{{popovers.program_3.on.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" ng-class="{off : !p.program_3.on}">
                    <button class="btn btn-outline-danger btn-sm" ng-click="p.program_3.on = !p.program_3.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.program_4.on.title}}"
                    data-bs-content="{{popovers.program_4.on.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" ng-class="{off : !p.program_4.on}">
                    <button class="btn btn-outline-danger btn-sm" ng-click="p.program_4.on = !p.program_4.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.program_5.on.title}}"
                    data-bs-content="{{popovers.program_5.on.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" ng-class="{off : !p.program_5.on}">
                    <button class="btn btn-outline-danger btn-sm" ng-click="p.program_5.on = !p.program_5.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.control_1.on.title}}"
                    data-bs-content="{{popovers.control_1.on.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" colspan="2" ng-class="{off : !p.control_1.on}">
                    <button class="btn btn-outline-danger btn-sm" ng-click="p.control_1.on = !p.control_1.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.control_2.on.title}}"
                    data-bs-content="{{popovers.control_2.on.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" colspan="2" ng-class="{off : !p.control_2.on}">
                    <button class="btn btn-outline-danger btn-sm" ng-click="p.control_2.on = !p.control_2.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.expression_1.on.title}}"
                    data-bs-content="{{popovers.expression_1.on.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" colspan="3"
                    ng-class="{off : !p.expression_1.on}">
                    <button class="btn btn-outline-danger btn-sm" ng-click="p.expression_1.on = !p.expression_1.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.expression_2.on.title}}"
                    data-bs-content="{{popovers.expression_2.on.content+popovers.preset_change}}"
                    data-bs-placement="bottom" data-bs-trigger="hover" colspan="3"
                    ng-class="{off : !p.expression_2.on}">
                    <button class="btn btn-outline-danger btn-sm" ng-click="p.expression_2.on = !p.expression_2.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
                <th data-bs-toggle="popover" data-bs-title="{{popovers.note.on.title}}"
                    data-bs-content="{{popovers.note.on.content+popovers.preset_change}}" data-bs-placement="bottom"
                    data-bs-trigger="hover" ng-class="{off : !p.note.on}">
                    <button class="btn btn-outline-danger btn-sm" ng-click="p.note.on = !p.note.on">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </th>
            </tr>
        </tbody>
    </table>
    </form>
    <div class="modal fade" tabindex="-1" role="dialog" id="sysex-send-modal">
        <div class="modal-dialog">
            <div class="modal-content bg-black text-light">
                <div class="modal-header d-flex justify-content-between">
                        <h5 class="modal-title">Action Needed</h5>
                        <button type="button" class="btn btn-outline-light border-0" data-bs-dismiss="modal" aria-label="Close">
                         <i class="fa-solid fa-times"></i>
                        </button>
                </div>
                <div class="modal-body">
                    <p>
                        <span class="badge rounded-pill text-bg-danger">1</span>
                        The <span class="badge text-bg-secondary">config</span> led on your FCB1010 must be on.
                    </p>
                    <p>
                        <img class="rounded mx-auto d-block" src="css/fcb1010-connection.gif" />
                    </p>
                    <p>
                        <span class="badge rounded-pill text-bg-danger">2</span>
                        Press <b>7</b> on your FCB1010 (<b>7</b> led must be on).
                    </p>
                    <p>
                        <span class="badge rounded-pill text-bg-danger">3</span>
                        Press the <b>Send</b> button in this window.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger text-uppercase" data-bs-dismiss="modal"
                        ng-click="sendSysex()" ng-disabled="!midi_out || fcb1010_configuration_form.$invalid">
                        Send
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    controller: function ($rootScope, $scope, fcb1010Service, midiService, fileService) {
        $scope.sysex = fcb1010Service.getTemplate();
        $scope.preset_properties = fcb1010Service.getPresetProperties();
        $scope.bank_presets = fcb1010Service.getBankPresetTemplate();
        $scope.popovers = {
            viewer: {
                read: {
                    title: "Read from FCB1010 [VIEWER]",
                    content: "Copies the SysEx data from the Viewer to the Editor."
                },
                refresh: {
                    title: "Refresh",
                    content: "Refresh MIDI output devices list."
                },
                midi_out: {
                    title: "MIDI OUT devices",
                    content: "List of devices you can send sysex messages to."
                },
                write: {
                    title: "Write to FCB1010",
                    content: "Sends edit configuration to the FCB1010."
                }
            },
            default_settings: {
                read: {
                    title: "Read from default setting",
                    content: "Loads the selected default setting to the editor."
                },
                list: {
                    title: "List of default settings",
                    content: "This is the list of default settings shipped with the FCB1010."
                }
            },
            sysex_file: {
                read: {
                    title: "Open SysEx file",
                    content: "Loads a SysEx file to the editor."
                },
                write: {
                    title: "Save SysEx file",
                    content: "Saves the current configuration to a SysEx file."
                }
            },
            json_file: {
                read: {
                    title: "Open JSON file",
                    content: "Loads a JSON file to the editor."
                },
                write: {
                    title: "Save JSON file",
                    content: "Saves the current configuration to a JSON file."
                }
            },
            help: {
                message: {
                    title: "Help",
                    content: "Click this button to toggle explanatory popovers like this when hovering on the editor components."
                }
            },
            test: {
                message: {
                    title: "Test",
                    content: "Click to show a virtual recreation of the FCB1010, so you can test before reconfiguring the physical device."
                }
            },
            global: {
                direct_select: {
                    title: "Direct select",
                    content: "Toggles the DIRECT SELECT function (ignored by FCB1010)."
                },
                switch_1_up: {
                    title: "UP as SWITCH 1",
                    content: "When ON, it determines if UP key toggles SWITCH 1 relay while DIRECT SELECT is enabled (ignored by FCB1010)."
                },
                switch_2_down: {
                    title: "DOWN as SWITCH 2",
                    content: "When ON, it determines if UP key toggles SWITCH 2 relay while DIRECT SELECT is enabled (ignored by FCB1010)."
                },
                merge: {
                    title: "MERGE",
                    content: "When ON, it allows to merge MIDI IN data with FCB1010-generated data. The combined data stream is subsequently output as the MIDI OUT (ignored by FCB1010)."
                },
                running_status: {
                    title: "RUNNING STATUS",
                    content: "When ON, it enables RUNNING STATUS feature. Serves to make efficient use of the MIDI transmission rate. The MIDI status byte from the expression pedals is sent only if it differs from the preceding status byte (ignored by FCB1010)."
                },
                expression_1_min: {
                    title: "EXPRESSION PEDAL A calibration minimum",
                    content: "Calibrates the minimum value for EXPRESSION PEDAL A (ignored by FCB1010)."
                },
                expression_1_max: {
                    title: "EXPRESSION PEDAL A calibration maximum",
                    content: "Calibrates the maximum value for EXPRESSION PEDAL A (ignored by FCB1010)."
                },
                expression_2_min: {
                    title: "EXPRESSION PEDAL B calibration minimum",
                    content: "Calibrates the minimum value for EXPRESSION PEDAL B (ignored by FCB1010)."
                },
                expression_2_max: {
                    title: "EXPRESSION PEDAL B calibration maximum",
                    content: "Calibrates the maximum value for EXPRESSION PEDAL B (ignored by FCB1010)."
                }
            },
            program_1: {
                midi: {
                    title: "PROGRAM CHANGE 1 MIDI channel",
                    content: "Sets the MIDI Channel for PROGRAM CHANGE 1 for all presets in all banks. Please note that the FCB1010 displays values from 1 to 16, while the editor displays values from 0 to 15, consistent with other functions."
                },
                on: {
                    title: "PROGRAM CHANGE 1 activation switch",
                    content: "Toggles activation of the PROGRAM CHANGE 1 function. Active MIDI functions are indicated by a bright display, while inactive functions are indicated by a dimmer display."
                },
                value_0: {
                    title: "PROGRAM CHANGE 1 value",
                    content: "Sets the value for PROGRAM CHANGE 1. Please note that the FCB1010 displays values from 1 to 128, while the editor displays values from 0 to 127, consistent with other functions."
                }
            },
            program_2: {
                midi: {
                    title: "PROGRAM CHANGE 2 MIDI channel",
                    content: "Sets the MIDI Channel for PROGRAM CHANGE 2 for all presets in all banks. Please note that the FCB1010 displays values from 1 to 16, while the editor displays values from 0 to 15, consistent with other functions."
                },
                on: {
                    title: "PROGRAM CHANGE 2 activation switch",
                    content: "Toggles activation of the PROGRAM CHANGE 2 function. Active MIDI functions are indicated by a bright display, while inactive functions are indicated by a dimmer display."
                },
                value_0: {
                    title: "PROGRAM CHANGE 2 value",
                    content: "Sets the value for PROGRAM CHANGE 2. Please note that the FCB1010 displays values from 1 to 128, while the editor displays values from 0 to 127, consistent with other functions."
                }
            },
            program_3: {
                midi: {
                    title: "PROGRAM CHANGE 3 MIDI channel",
                    content: "Sets the MIDI Channel for PROGRAM CHANGE 3 for all presets in all banks. Please note that the FCB1010 displays values from 1 to 16, while the editor displays values from 0 to 15, consistent with other functions."
                },
                on: {
                    title: "PROGRAM CHANGE 3 activation switch",
                    content: "Toggles activation of the PROGRAM CHANGE 3 function. Active MIDI functions are indicated by a bright display, while inactive functions are indicated by a dimmer display."
                },
                value_0: {
                    title: "PROGRAM CHANGE 3 value",
                    content: "Sets the value for PROGRAM CHANGE 3. Please note that the FCB1010 displays values from 1 to 128, while the editor displays values from 0 to 127, consistent with other functions."
                }
            },
            program_4: {
                midi: {
                    title: "PROGRAM CHANGE 4 MIDI channel",
                    content: "Sets the MIDI Channel for PROGRAM CHANGE 4 for all presets in all banks. Please note that the FCB1010 displays values from 1 to 16, while the editor displays values from 0 to 15, consistent with other functions."
                },
                on: {
                    title: "PROGRAM CHANGE 4 activation switch",
                    content: "Toggles activation of the PROGRAM CHANGE 4 function. Active MIDI functions are indicated by a bright display, while inactive functions are indicated by a dimmer display."
                },
                value_0: {
                    title: "PROGRAM CHANGE 4 value",
                    content: "Sets the value for PROGRAM CHANGE 4. Please note that the FCB1010 displays values from 1 to 128, while the editor displays values from 0 to 127, consistent with other functions."
                }
            },
            program_5: {
                midi: {
                    title: "PROGRAM CHANGE 5 MIDI channel",
                    content: "Sets the MIDI Channel for PROGRAM CHANGE 5 for all presets in all banks. Please note that the FCB1010 displays values from 1 to 16, while the editor displays values from 0 to 15, consistent with other functions."
                },
                on: {
                    title: "PROGRAM CHANGE 5 activation switch",
                    content: "Toggles activation of the PROGRAM CHANGE 5 function. Active MIDI functions are indicated by a bright display, while inactive functions are indicated by a dimmer display."
                },
                value_0: {
                    title: "PROGRAM CHANGE 5 value",
                    content: "Sets the value for PROGRAM CHANGE 5. Please note that the FCB1010 displays values from 1 to 128, while the editor displays values from 0 to 127, consistent with other functions."
                }
            },
            control_1: {
                midi: {
                    title: "CONTROL CHANGE 1 MIDI channel",
                    content: "Sets the MIDI Channel for CONTROL CHANGE 1 for all presets in all banks. Please note that the FCB1010 displays values from 1 to 16, while the editor displays values from 0 to 15, consistent with other functions."
                },
                on: {
                    title: "CONTROL CHANGE 1 activation switch",
                    content: "Toggles activation of the CONTROL CHANGE 1 function. Active MIDI functions are indicated by a bright display, while inactive functions are indicated by a dimmer display."
                },
                value_0: {
                    title: "CONTROL CHANGE 1 control change",
                    content: "Sets the control change number for CONTROL CHANGE 1."
                },
                value_1: {
                    title: "CONTROL CHANGE 1 value",
                    content: "Sets the control change value for CONTROL CHANGE 1."
                }
            },
            control_2: {
                midi: {
                    title: "CONTROL CHANGE 2 MIDI channel",
                    content: "Sets the MIDI Channel for CONTROL CHANGE 2 for all presets in all banks. Please note that the FCB1010 displays values from 1 to 16, while the editor displays values from 0 to 15, consistent with other functions."
                },
                on: {
                    title: "CONTROL CHANGE 2 activation switch",
                    content: "Toggles activation of the CONTROL CHANGE 2 function. Active MIDI functions are indicated by a bright display, while inactive functions are indicated by a dimmer display."
                },
                value_0: {
                    title: "CONTROL CHANGE 2 control change",
                    content: "Sets the control change number for CONTROL CHANGE 2."
                },
                value_1: {
                    title: "CONTROL CHANGE 2 value",
                    content: "Sets the control change value for CONTROL CHANGE 2."
                }
            },
            expression_1: {
                midi: {
                    title: "EXPRESSION PEDAL A MIDI channel",
                    content: "Sets the MIDI Channel for EXPRESSION PEDAL A for all presets in all banks. Please note that the FCB1010 displays values from 1 to 16, while the editor displays values from 0 to 15, consistent with other functions."
                },
                on: {
                    title: "EXPRESSION PEDAL A activation switch",
                    content: "Toggles activation of the EXPRESSION PEDAL A function. Active MIDI functions are indicated by a bright display, while inactive functions are indicated by a dimmer display."
                },
                value_0: {
                    title: "EXPRESSION PEDAL A control change",
                    content: "Sets the control change number for EXPRESSION PEDAL A."
                },
                value_1: {
                    title: "EXPRESSION PEDAL A minimum value",
                    content: "Sets the control change value when EXPRESSION PEDAL A is fully open."
                },
                value_2: {
                    title: "EXPRESSION PEDAL A maximum value",
                    content: "Sets the control change value when EXPRESSION PEDAL A is fully pressed downward."
                }
            },
            expression_2: {
                midi: {
                    title: "EXPRESSION PEDAL B MIDI channel",
                    content: "Sets the MIDI Channel for EXPRESSION PEDAL B for all presets in all banks. Please note that the FCB1010 displays values from 1 to 16, while the editor displays values from 0 to 15, consistent with other functions."
                },
                on: {
                    title: "EXPRESSION PEDAL B activation switch",
                    content: "Toggles activation of the EXPRESSION PEDAL B function. Active MIDI functions are indicated by a bright display, while inactive functions are indicated by a dimmer display."
                },
                value_0: {
                    title: "EXPRESSION PEDAL B control change",
                    content: "Sets the control change number for EXPRESSION PEDAL B."
                },
                value_1: {
                    title: "EXPRESSION PEDAL B minimum value",
                    content: "Sets the control change value when EXPRESSION PEDAL B is fully open."
                },
                value_2: {
                    title: "EXPRESSION PEDAL B maximum value",
                    content: "Sets the control change value when EXPRESSION PEDAL B is fully pressed downward."
                }
            },
            note: {
                midi: {
                    title: "NOTE MIDI channel",
                    content: "Sets the MIDI Channel for NOTE for all presets in all banks. Please note that the FCB1010 displays values from 1 to 16, while the editor displays values from 0 to 15, consistent with other functions."
                },
                on: {
                    title: "NOTE activation switch",
                    content: "Toggles activation of the NOTE function. Active MIDI functions are indicated by a bright display, while inactive functions are indicated by a dimmer display."
                },
                value_0: {
                    title: "NOTE value",
                    content: "Sets the note value for NOTE."
                }
            },
            switch_1: {
                on: {
                    title: "SWITCH 1 activation switch",
                    content: "Toggles activation of the SWITCH 1 relay. Active MIDI functions are indicated by a bright display, while inactive functions are indicated by a dimmer display."
                }
            },
            switch_2: {
                on: {
                    title: "SWITCH 2 activation switch",
                    content: "Toggles activation of the SWITCH 2 relay. Active MIDI functions are indicated by a bright display, while inactive functions are indicated by a dimmer display."
                }
            },
            general: {
                bank: {
                    title: "Bank indicator",
                    content:
                        "Displays the currently edited bank in the current row. "
                        + "When pressed, it toggles between the default function value editor and the increment generator utility for the current row in the editor. "
                        + "The function value editor allows users to edit all values for functions (except for their activation) within the bank and preset related to the current row. "
                        + "The increment generator utility enables users to automatically update values between two selected points in a matrix of MIDI functions. Each column of the matrix, determined by the first selected point, establishes the start value for its respective column. Subsequent rows then increment by 1 until the row specified by the second point is reached. This process ensures that the numbers between the selected points are in succession across the specified columns."
                },
                preset: {
                    title: "Preset indicator",
                    content:
                        "Displays the currently edited preset in the current row."
                        + "When pressed, it toggles between the default function value editor and the function activation editor for the current row in the editor. "
                        + "The function value editor allows users to edit all values for functions (except for their activation) within the bank and preset related to the current row. "
                        + "The function activation editor allows users to toggle function activation within the bank and preset related to the current row."
                },
                all_bank: {
                    title: "Bank indicator",
                    content: "Displays the currently edited bank in the current row. "
                },
                all_preset: {
                    title: "All presets indicator",
                    content: "Indicates that the changes perfomed in this row are applied to all presets within the current bank. "
                        + "When pressed, it toggles between the default function value editor and the function activation editor for the current row in the editor. "
                        + "The function value editor allows users to edit all values for functions (except for their activation) for all presets within the current bank. "
                        + "The function activation editor allows users to toggle function activation for all presets within the current bank."

                },
                copy: {
                    title: "Copy",
                    content: "Copies the current preset to the clipboard."
                },
                paste: {
                    title: "Paste",
                    content: "Replaces the current preset with the preset from the clipboard. " +
                        "When ALL preset indicator is present, it replaces all the presets in the current bank."
                },
                increment_start: {
                    title: "Increment start indicator",
                    content: "If an increment has been started in the current row a checkered flag will appear."
                },
                increment: {
                    title: "increment point",
                    content_start: "Sets the increment point on ",
                    content_end: "in the current bank and preset. " +
                        "If another point has already been set, then the increment utility function will be executed, and the increment points will be reset."
                }
            },
            preset_change: " Changes to this value apply exclusively to the current bank and preset.",
            bank_change: " Changes to this value apply to all presets within the current bank."
        };
        $scope.power_mode = false;
        $scope.bank_power_mode = false;
        $scope.increment_mode = false;
        $scope.test_mode = false;
        $scope.midi_out = null;
        $scope.midi_out_test = null;
        $scope.midi_out_devices = [];
        $scope.midiAccess = null;
        $scope.default_settings = fcb1010Service.DEFAULT_SETTINGS;
        $scope.default_setting = $scope.default_settings[0];
        $scope.increment_start = null;
        $scope.increment_hover = null;
        $scope.popover = false;
        $scope.popover_triggers = [];
        $scope.test_device = {
            bank:0,
            preset:null,
            expression_1:null,
            expression_2:null,
            switch_1:false,
            switch_2:false,
            expression_1_old:null,
            expression_2_old:null,
            control:true
        }

        INCREMENT_CONTROLS = [
            "program_1",
            "program_2",
            "program_3",
            "program_4",
            "program_5",
            "control_1",
            "control_2",
            "expression_1",
            "expression_2",
            "note"
        ];

        INCREMENT_VALUES = [
            1, 1, 1, 1, 1, 2, 2, 3, 3, 1
        ];

        MIDI_FAILURE = {
            success: false,
            source: "Editor",
            message: "Error requesting MIDI access. Please use Chrome browser and click 'allow' when prompted."
        };

        REMOTE_SYSEX_READ_SUCCESS = {
            success: true,
            source: "Editor",
            message: "Data copied successfully from Viewer."
        };

        SETTING_READ_SUCCESS = {
            success: true,
            source: "Editor",
            message: "Data copied successfully from setting."
        };

        OPEN_SYSEX_SUCCESS = {
            success: true,
            source: "Editor",
            message: "SysEx file loaded."
        };

        OPEN_SYSEX_FAILURE = {
            success: false,
            source: "Editor",
            message: "Unable to load SysEx file."
        };

        OPEN_JSON_SUCCESS = {
            success: true,
            source: "Editor",
            message: "JSON file loaded."
        };

        OPEN_JSON_FAILURE = {
            success: false,
            source: "Editor",
            message: "Unable to load JSON file."
        };

        SEND_SUCCESS = {
            success: true,
            source: "Editor",
            message: "Configuration sent to FCB1010. Press and hold 'DOWN' to load it (this will exit configuration mode)."
        };

        $scope.toggleTest = function(){
            $scope.test_mode = !$scope.test_mode;
        } 

        $scope.testExpression = function(expression_2){
            if($scope.test_device.bank == null) return;
            if($scope.test_device.preset == null) return;
            var x = "expression_"+(1+expression_2);
            var preset = $scope.sysex.banks[$scope.test_device.bank][$scope.test_device.preset][x];
            if(!preset.on) return;
            var value = Math.floor(
                $scope.test_device[x]*((preset.value_2-preset.value_1)/($scope.sysex[x+"_max"]-$scope.sysex[x+"_min"]))
            )+preset.value_1;
            value = value > 127 ? 127 : value;
            value = value < 0 ? 0 : value;
            var data = new Uint8Array([(176+$scope.sysex[x+"_channel"]),preset.value_0,value]);
            var running_status = $scope.sysex.running_status;
            if(running_status && $scope.test_device[x+"_old"] == value) return;
            $scope.test_device[x+"_old"] = value;
            $scope.send(data);
        }

        $scope.testPreset = function(preset,mouse_down){
            $scope.test_device.preset = preset;
            var preset = $scope.sysex.banks[$scope.test_device.bank][preset];
            if(!mouse_down){
                if(preset.note.on){
                    var data = new Uint8Array([144+$scope.sysex.note_channel,preset.note.value_0,0]);
                    $scope.send(data);
                }
                $scope.test_device.switch_1 = false;
                $scope.test_device.switch_2 = false;
                return;
            }
            var controller_toggle = 
                $scope.sysex.control_1_channel == $scope.sysex.control_2_channel
                && preset.control_1.on 
                && preset.control_2.on
                && preset.control_1.value_0 == preset.control_2.value_0
            ;
            if(preset.switch_1.on){
                $scope.test_device.switch_1 = true;
            }
            if(preset.switch_2.on){
                $scope.test_device.switch_2 = true;
            }
            if(preset.program_1.on){
                var data = new Uint8Array([192+$scope.sysex.program_1_channel,preset.program_1.value_0]);
                $scope.send(data);
            }
            if(preset.program_2.on){
                var data = new Uint8Array([192+$scope.sysex.program_2_channel,preset.program_2.value_0]);
                $scope.send(data);
            }
            if(preset.program_3.on){
                var data = new Uint8Array([192+$scope.sysex.program_3_channel,preset.program_3.value_0]);
                $scope.send(data);
            }
            if(preset.program_4.on){
                var data = new Uint8Array([192+$scope.sysex.program_4_channel,preset.program_4.value_0]);
                $scope.send(data);
            }
            if(preset.program_5.on){
                var data = new Uint8Array([192+$scope.sysex.program_5_channel,preset.program_5.value_0]);
                $scope.send(data);
            }
            if(controller_toggle){
                var value = $scope.test_device.control ? preset.control_1.value_1 : preset.control_2.value_1;
                $scope.test_device.control = !$scope.test_device.control;
                var data = new Uint8Array([176+$scope.sysex.control_1_channel,preset.control_1.value_0,value]);
                $scope.send(data);
            }else{
                if(preset.control_1.on){
                    var data = new Uint8Array([176+$scope.sysex.control_1_channel,preset.control_1.value_0,preset.control_1.value_1]);
                    $scope.send(data);
                }
                if(preset.control_2.on){
                    var data = new Uint8Array([176+$scope.sysex.control_2_channel,preset.control_2.value_0,preset.control_2.value_1]);
                    $scope.send(data);
                }
            }        
            if(preset.note.on){
                var data = new Uint8Array([144+$scope.sysex.note_channel,preset.note.value_0,64]);
                $scope.send(data);
            }
        }

        $scope.testBank= function(up){
            var bank = $scope.test_device.bank;
            bank += (up ? 1 : -1);
            bank = bank > 9 ? 0 : bank;
            bank = bank < 0 ? 9 : bank;
            $scope.test_device.bank = bank;
            $scope.test_device.preset = null;
            $scope.test_device.expression_1_old =null;
            $scope.test_device.expression_2_old =null;
            $scope.test_device.control = true;
        }

        $scope.showModal = function () {
            var modal = new bootstrap.Modal(document.getElementById('sysex-send-modal'));
            modal.show();
        }

        $scope.toggleIncrementMode = function () {
            $scope.increment_mode = !$scope.increment_mode;
        }

        $scope.addIncrementPoint = function (b, p, c, v) {
            var point = { b, p, c, v };
            if (isNaN(point.v)) return;
            if (point.v < 0) return;
            if (point.v > 127) return;
            if (!$scope.increment_start) {
                $scope.increment_start = point;
            } else {
                var start_control_index = INCREMENT_CONTROLS.indexOf($scope.increment_start.c);
                var start_value_index = $scope.increment_start.v;
                var end_control_index = INCREMENT_CONTROLS.indexOf(point.c);
                var end_value_index = point.v + 1;
                var initial_values = {};
                for (var a = start_control_index; a <= end_control_index; a++) {
                    initial_values[INCREMENT_CONTROLS[a]] = {};
                    var start_value = a == start_control_index ? start_value_index : 0;
                    var end_value = a == end_control_index ? end_value_index : INCREMENT_VALUES[a];
                    for (var b = start_value; b < end_value; b++) {
                        initial_values[INCREMENT_CONTROLS[a]]['value_' + b] =
                            $scope.sysex.banks[$scope.increment_start.b][$scope.increment_start.p][INCREMENT_CONTROLS[a]]['value_' + b]
                            ;
                    }
                }
                var start_bank = $scope.increment_start.b;
                var end_bank = point.b;
                var start_preset = $scope.increment_start.p;
                var end_preset = point.p;
                for (var x = start_bank; x <= end_bank; x++) {
                    var open_preset = x == start_bank ? start_preset + 1 : 0;
                    var close_preset = x == end_bank ? end_preset + 1 : 10;
                    for (var y = open_preset; y < close_preset; y++) {
                        for ([control, value_items] of Object.entries(initial_values)) {
                            for ([value_item, value] of Object.entries(value_items)) {
                                initial_values[control][value_item] += 1;
                                initial_values[control][value_item] =
                                    initial_values[control][value_item] > 127 ?
                                        127 :
                                        initial_values[control][value_item]
                                    ;
                                $scope.sysex.banks[x][y][control][value_item] = initial_values[control][value_item];
                            }
                        }
                    }
                }

                $scope.increment_start = null;
            }
        }

        $scope.setIncrementHover = function (b, p, c, v) {
            if (!$scope.increment_start) return;
            $scope.increment_hover = { b, p, c, v };
        }

        $scope.removeIncrementHover = function () {
            $scope.increment_hover = null;
        }

        $scope.getIncrementClass = function (b, p, c, v) {
            if (!$scope.increment_start) return 'btn-outline-primary';
            if (
                b == $scope.increment_start.b &&
                p == $scope.increment_start.p &&
                c == $scope.increment_start.c &&
                v == $scope.increment_start.v
            ) {
                return 'btn-warning';
            }
            if ($scope.increment_hover) {
                var start_control = INCREMENT_CONTROLS.indexOf($scope.increment_start.c);
                var hover_control = INCREMENT_CONTROLS.indexOf($scope.increment_hover.c);
                var class_control = INCREMENT_CONTROLS.indexOf(c);
                var start_cell =
                    $scope.increment_start.b * 10
                    + $scope.increment_start.p
                    ;
                var hover_cell =
                    $scope.increment_hover.b * 10
                    + $scope.increment_hover.p
                    ;
                var class_cell =
                    b * 10
                    + p
                    ;
                if (
                    class_cell >= start_cell &&
                    class_cell <= hover_cell &&
                    class_control >= start_control &&
                    class_control <= hover_control
                ) {
                    if (class_control == start_control && v < $scope.increment_start.v) return 'btn-outline-primary';
                    if (class_control == hover_control && v > $scope.increment_hover.v) return 'btn-outline-primary';
                    return 'btn-primary';
                }
            }
            return 'btn-outline-primary';
        }

        $scope.copyPreset = function (b, p) {
            $rootScope.preset_clipboard = JSON.stringify($scope.sysex.banks[b][p]);
        }
        $scope.pastePreset = function (b, p) {
            $scope.sysex.banks[b][p] = JSON.parse($rootScope.preset_clipboard);
        }

        $scope.copyBankPreset = function (b) {
            $rootScope.preset_clipboard = JSON.stringify($scope.bank_presets[b]);

        }
        $scope.pasteBankPreset = function (b) {
            $scope.bank_presets[b] = JSON.parse($rootScope.preset_clipboard);
        }

        $scope.pasteRemoteSysex = function () {
            $scope.sysex = JSON.parse(JSON.stringify($rootScope.remote_sysex));
            $rootScope.toast = REMOTE_SYSEX_READ_SUCCESS;
        }

        $scope.pasteDefaultSettingSysex = function () {
            $scope.sysex = $scope.default_setting.sysex;
            $rootScope.toast = REMOTE_SYSEX_READ_SUCCESS;
        }

        $scope.sendSysex = function () {
            var data = fcb1010Service.encode($scope.sysex);
            var result = $scope.send(data);
            if(result){
                $rootScope.toast = SEND_SUCCESS;
            }
        }

        $scope.send = function (data) {
            var result = false;
            $scope.midiAccess.outputs.forEach(function (output) {
                if (output.id == $scope.midi_out.id) {
                    output.send(data);
                    result = true; 
                }
            });
            return result;
        }

        $scope.getMidiOutDevices = function () {
            $scope.midi_out_devices = [];
            $scope.midiAccess.outputs.forEach(function (output) {
                $scope.midi_out_devices.push({
                    id: output.id,
                    name: output.manufacturer + " " + output.name
                });
            });
            $scope.midi_out = $scope.midi_out_devices[0];
            $scope.midi_out_test = $scope.midi_out_devices[0];
        }

        $scope.saveJSON = function () {
            var now = Date.now();
            fileService.toJSONFile($scope.sysex, 'fcb1010-json-' + now);
        }

        $scope.saveSysex = function () {
            var now = Date.now();
            var data = fcb1010Service.encode($scope.sysex);
            fileService.toSysexFile(data, 'fcb1010-sysex-' + now);
        }

        $scope.openSysex = function (event) {
            var files = event.target.files;
            if (files.length === 0) return;
            var file = files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                $rootScope.$apply(function () {
                    var sysex_raw = new Uint8Array(event.target.result);
                    var sysex = fcb1010Service.decode(sysex_raw);
                    if (sysex == null) {
                        $rootScope.toast = OPEN_SYSEX_FAILURE;
                    } else {
                        $scope.sysex = sysex;
                        $rootScope.toast = OPEN_SYSEX_SUCCESS;
                    }
                });
            };
            reader.readAsArrayBuffer(file);
        }

        $scope.openJSON = function (event) {
            console.log("JSON");
            var files = event.target.files;
            if (files.length === 0) return;
            var file = files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                $rootScope.$apply(function () {
                    try {
                        var sysex = JSON.parse(event.target.result);
                        $scope.sysex = sysex;
                        $rootScope.toast = OPEN_JSON_SUCCESS;
                    } catch (e) {
                        $rootScope.toast = OPEN_JSON_FAILURE;
                    }
                });
            };
            reader.readAsText(file);
        }

        $scope.toggleHelp = function () {
            $scope.popover = !$scope.popover;
            var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
            if ($scope.popover) {
                popoverTriggerList.forEach(function (popoverTriggerEl) {
                    var popover = new bootstrap.Popover(popoverTriggerEl);
                    $scope.popover_triggers.push(popover);
                });
                document.getElementById("help").dispatchEvent(new MouseEvent('mouseover'));
            } else {
                $scope.popover_triggers.forEach(function (e) {
                    e.dispose();
                });
                $scope.popover_triggers = [];
            }
        }

        function init() {
            $scope.bank_presets.forEach(function (e, i) {
                $scope.preset_properties.forEach(function (a, b) {
                    var expression = 'bank_presets[' + i + '].';
                    expression += a[0] + ".";
                    expression += a[1];
                    $scope.$watch(expression, function (newValue, oldValue, scope) {
                        if (newValue !== oldValue) {
                            $scope.sysex.banks[i].forEach(function (x, y) {
                                $scope.sysex.banks[i][y][a[0]][a[1]] = newValue;
                            });
                        }
                    });
                });
            });
            midiService.requestMIDIAccess()
                .then(function (access) {
                    $scope.midiAccess = access;
                    $scope.getMidiOutDevices();
                })
                .catch(function (err) {
                    $rootScope.toast = MIDI_FAILURE;
                });
        }

        init();

    }
});