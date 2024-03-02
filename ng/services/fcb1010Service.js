angular.module('fcb1010EditorApp').service("fcb1010Service", function () {
	var service = {};

	service.SYSEX_LENGTH = 2352;
	service.V_AMP_SYSEX =
		{
			"sysex": true,
			"brand": "BEHRINGER",
			"model": "FCB1010",
			"global_channel": 1,
			"version": 15,
			"banks": [
				[
					{
						"program_1": {
							"on": true,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 1
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 2
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 3
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 4
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 5
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 6
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 7
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 8
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 9
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 10
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 11
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 12
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 13
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 14
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 15
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 16
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 17
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 18
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 19
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 20
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 21
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 22
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 23
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 24
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 25
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 26
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 27
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 28
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 29
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 30
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 31
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 32
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 33
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 34
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 35
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 36
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 37
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 38
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 39
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 40
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 41
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 42
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 43
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 44
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 45
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 46
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 47
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 48
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 49
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 50
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 51
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 52
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 53
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 54
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 55
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 56
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 57
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 58
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 59
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 60
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 61
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 62
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 63
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 64
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 65
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 66
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 67
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 68
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 69
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 70
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 71
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 72
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 73
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 74
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 75
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 76
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 77
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 78
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 79
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 80
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 81
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 82
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 83
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 84
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 85
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 86
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 87
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 88
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 89
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 90
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 91
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 92
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 93
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 94
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 95
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 96
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 97
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 98
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 99
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 26,
							"value_1": 0
						},
						"control_2": {
							"on": false,
							"value_0": 26,
							"value_1": 127
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				]
			],
			"program_1_channel": 0,
			"program_2_channel": 0,
			"program_3_channel": 0,
			"program_4_channel": 0,
			"program_5_channel": 0,
			"control_1_channel": 0,
			"control_2_channel": 0,
			"expression_1_channel": 0,
			"expression_2_channel": 0,
			"note_channel": 0,
			"direct_select": false,
			"switch_1_up": true,
			"switch_2_down": true,
			"merge": true,
			"running_status": true,
			"expression_1_min": 8,
			"expression_1_max": 244,
			"expression_2_min": 10,
			"expression_2_max": 245
		}
	;
	service.BEHRINGER_GUITAR_AMP_SYSEX =
		{
			"sysex": true,
			"brand": "BEHRINGER",
			"model": "FCB1010",
			"global_channel": 1,
			"version": 15,
			"banks": [
				[
					{
						"program_1": {
							"on": true,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 1
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 2
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 3
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 4
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 5
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 6
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 7
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 8
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 9
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 10
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 11
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 12
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 13
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 14
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 15
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 16
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 15,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 17
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 15,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 18
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 15,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 19
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 20
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 21
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 22
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 23
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 24
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 25
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 26
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 27
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 28
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 29
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 30
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 31
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 32
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 33
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 34
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 35
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 36
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 37
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 38
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 39
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 40
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 41
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 42
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 43
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 44
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 45
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 46
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 47
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 48
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 49
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 50
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 51
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 52
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 53
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 54
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 55
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 56
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 57
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 58
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 59
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 60
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 61
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 62
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 63
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 64
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 65
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 66
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 67
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 68
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 69
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 70
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 71
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 72
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 73
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 74
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 75
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 76
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 77
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 78
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 79
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 80
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 81
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 82
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 83
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 84
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 85
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 86
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 87
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 88
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 89
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 90
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 91
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 92
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 93
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 94
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 95
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 96
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 97
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 98
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 11,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 11,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": true,
							"value_0": 7,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": false,
							"value_0": 12,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 0,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 10,
							"value_1": 0,
							"value_2": 1
						},
						"expression_2": {
							"on": false,
							"value_0": 0,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": true,
							"value_0": 63
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				]
			],
			"program_1_channel": 0,
			"program_2_channel": 0,
			"program_3_channel": 0,
			"program_4_channel": 0,
			"program_5_channel": 0,
			"control_1_channel": 0,
			"control_2_channel": 0,
			"expression_1_channel": 0,
			"expression_2_channel": 0,
			"note_channel": 0,
			"direct_select": false,
			"switch_1_up": true,
			"switch_2_down": true,
			"merge": true,
			"running_status": true,
			"expression_1_min": 8,
			"expression_1_max": 244,
			"expression_2_min": 10,
			"expression_2_max": 245
		}
	;
	service.BASS_V_AMP_SYSEX =
		{
			"sysex": true,
			"brand": "BEHRINGER",
			"model": "FCB1010",
			"global_channel": 1,
			"version": 15,
			"banks": [
				[
					{
						"program_1": {
							"on": true,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 1
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 2
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 3
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 4
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 5
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 6
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 7
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 8
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 9
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 10
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 11
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 12
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 13
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 14
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 15
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 16
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 17
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 18
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 19
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 20
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 21
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 22
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 23
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 24
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 25
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 26
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 27
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 28
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 29
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 30
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 31
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 32
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 33
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 34
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 35
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 36
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 37
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 38
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 39
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 40
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 41
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 42
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 43
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 44
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 45
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 46
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 47
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 48
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 49
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 50
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 51
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 52
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 53
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 54
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 55
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 56
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 57
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 58
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 59
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 60
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 61
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 62
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 63
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 64
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 65
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 66
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 67
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 68
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 69
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 55,
							"value_1": 100
						},
						"control_2": {
							"on": true,
							"value_0": 27,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 56,
							"value_1": 100
						},
						"control_2": {
							"on": true,
							"value_0": 27,
							"value_1": 0
						},
						"expression_1": {
							"on": false,
							"value_0": 56,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 60,
							"value_1": 100
						},
						"control_2": {
							"on": true,
							"value_0": 27,
							"value_1": 0
						},
						"expression_1": {
							"on": false,
							"value_0": 60,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 57,
							"value_1": 0
						},
						"control_2": {
							"on": true,
							"value_0": 27,
							"value_1": 0
						},
						"expression_1": {
							"on": false,
							"value_0": 60,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 59,
							"value_1": 1
						},
						"control_2": {
							"on": true,
							"value_0": 59,
							"value_1": 0
						},
						"expression_1": {
							"on": false,
							"value_0": 60,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 70
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 58,
							"value_1": 2
						},
						"control_2": {
							"on": false,
							"value_0": 58,
							"value_1": 1
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 71
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 58,
							"value_1": 2
						},
						"control_2": {
							"on": false,
							"value_0": 58,
							"value_1": 1
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 72
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 58,
							"value_1": 2
						},
						"control_2": {
							"on": false,
							"value_0": 58,
							"value_1": 1
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 73
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 58,
							"value_1": 2
						},
						"control_2": {
							"on": false,
							"value_0": 58,
							"value_1": 1
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 74
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 58,
							"value_1": 2
						},
						"control_2": {
							"on": false,
							"value_0": 58,
							"value_1": 1
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": true,
							"value_0": 75
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 76
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 77
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 78
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 79
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 80
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 81
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 82
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 83
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 84
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 21,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 27,
							"value_1": 1,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 16,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": false,
							"value_0": 0
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				],
				[
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 64,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 44,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 40,
							"value_1": 0,
							"value_2": 100
						},
						"expression_2": {
							"on": true,
							"value_0": 44,
							"value_1": 0,
							"value_2": 100
						},
						"note": {
							"on": true,
							"value_0": 28
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 64,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 44,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 40,
							"value_1": 0,
							"value_2": 100
						},
						"expression_2": {
							"on": true,
							"value_0": 44,
							"value_1": 0,
							"value_2": 100
						},
						"note": {
							"on": true,
							"value_0": 31
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 64,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 44,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 40,
							"value_1": 0,
							"value_2": 100
						},
						"expression_2": {
							"on": true,
							"value_0": 44,
							"value_1": 0,
							"value_2": 100
						},
						"note": {
							"on": true,
							"value_0": 33
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 64,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 44,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 40,
							"value_1": 0,
							"value_2": 100
						},
						"expression_2": {
							"on": true,
							"value_0": 44,
							"value_1": 0,
							"value_2": 100
						},
						"note": {
							"on": true,
							"value_0": 35
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 64,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 44,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 40,
							"value_1": 0,
							"value_2": 100
						},
						"expression_2": {
							"on": true,
							"value_0": 44,
							"value_1": 0,
							"value_2": 100
						},
						"note": {
							"on": true,
							"value_0": 38
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 64,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 44,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 40,
							"value_1": 0,
							"value_2": 100
						},
						"expression_2": {
							"on": true,
							"value_0": 44,
							"value_1": 0,
							"value_2": 100
						},
						"note": {
							"on": true,
							"value_0": 29
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 64,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 44,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 40,
							"value_1": 0,
							"value_2": 100
						},
						"expression_2": {
							"on": true,
							"value_0": 44,
							"value_1": 0,
							"value_2": 100
						},
						"note": {
							"on": true,
							"value_0": 32
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 64,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 44,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 40,
							"value_1": 0,
							"value_2": 100
						},
						"expression_2": {
							"on": true,
							"value_0": 44,
							"value_1": 0,
							"value_2": 100
						},
						"note": {
							"on": true,
							"value_0": 34
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": false,
							"value_0": 0
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 64,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 44,
							"value_1": 0
						},
						"expression_1": {
							"on": true,
							"value_0": 40,
							"value_1": 0,
							"value_2": 100
						},
						"expression_2": {
							"on": true,
							"value_0": 44,
							"value_1": 0,
							"value_2": 100
						},
						"note": {
							"on": true,
							"value_0": 36
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					},
					{
						"program_1": {
							"on": true,
							"value_0": 127
						},
						"program_2": {
							"on": false,
							"value_0": 0
						},
						"program_3": {
							"on": false,
							"value_0": 0
						},
						"program_4": {
							"on": false,
							"value_0": 0
						},
						"program_5": {
							"on": false,
							"value_0": 0
						},
						"control_1": {
							"on": true,
							"value_0": 64,
							"value_1": 127
						},
						"control_2": {
							"on": false,
							"value_0": 21,
							"value_1": 0
						},
						"expression_1": {
							"on": false,
							"value_0": 0,
							"value_1": 0,
							"value_2": 127
						},
						"expression_2": {
							"on": true,
							"value_0": 82,
							"value_1": 0,
							"value_2": 127
						},
						"note": {
							"on": true,
							"value_0": 39
						},
						"switch_1": {
							"on": false
						},
						"switch_2": {
							"on": false
						}
					}
				]
			],
			"program_1_channel": 0,
			"program_2_channel": 0,
			"program_3_channel": 0,
			"program_4_channel": 0,
			"program_5_channel": 0,
			"control_1_channel": 0,
			"control_2_channel": 0,
			"expression_1_channel": 0,
			"expression_2_channel": 0,
			"note_channel": 0,
			"direct_select": false,
			"switch_1_up": true,
			"switch_2_down": true,
			"merge": true,
			"running_status": true,
			"expression_1_min": 8,
			"expression_1_max": 244,
			"expression_2_min": 10,
			"expression_2_max": 245
		}
	;

	service.DEFAULT_SETTINGS = [
		{id:0, name:"V-AMP family products",sysex:service.V_AMP_SYSEX},
		{id:1, name:"BEHRINGER guitar amps",sysex:service.BEHRINGER_GUITAR_AMP_SYSEX},
		{id:2, name:"BASS V-AMP product range",sysex:service.BASS_V_AMP_SYSEX}
	];

	service.FORMATTED_SYSEX_TEMPLATE = JSON.stringify([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		"11111111",
		null,
		null,
		"00000000",
		"00000000",
		"00000000",
		"00000000",
		"00000000",
		"00000000",
		"00000000",
		"00000000",
		"00000000",
		"00000000",
		null,
		null,
		null,
		null,
		"00000000",
		"00000000",
		"00000000"
	]);

	service.getPresetProperties = function(){
		return [
			["program_1","on"],
			["program_2","on"],
			["program_3","on"],
			["program_4","on"],
			["program_5","on"],
			["control_1","on"],
			["control_2","on"],
			["expression_1","on"],
			["expression_2","on"],
			["note","on"],
			["switch_1","on"],
			["switch_2","on"],
			["program_1","value_0"],
			["program_2","value_0"],
			["program_3","value_0"],
			["program_4","value_0"],
			["program_5","value_0"],
			["control_1","value_0"],
			["control_2","value_0"],
			["expression_1","value_0"],
			["expression_2","value_0"],
			["note","value_0"],
			["control_1","value_1"],
			["control_2","value_1"],
			["expression_1","value_1"],
			["expression_2","value_1"],
			["expression_1","value_2"],
			["expression_2","value_2"]
		];
	};

	service.getPresetTemplate = function(){
		return JSON.parse(JSON.stringify({
			program_1: { on: true, value_0: 1 },
			program_2: { on: true, value_0: 2 },
			program_3: { on: true, value_0: 3 },
			program_4: { on: true, value_0: 4 },
			program_5: { on: true, value_0: 5 },
			control_1: { on: true, value_0: 0, value_1: 127 },
			control_2: { on: true, value_0: 32, value_1: 127 },
			expression_1: { on: true, value_0: 7, value_1: 0, value_2: 127 },
			expression_2: { on: true, value_0: 11, value_1: 0, value_2: 127 },
			note: { on: true, value_0: 60 },
			switch_1: { on: false },
			switch_2: { on: false }
		}));
	};

	service.getBankPresetTemplate = function(){
		var output = [];
		for (var b = 0; b < 10; b++) {
			var preset = service.getPresetTemplate();
			output.push(preset);
		}
		return output;
	};

	service.getTemplate = function () {
		var output = {
			sysex: true,
			brand: "BEHRINGER",
			model: "FCB1010",
			global_channel: 1,
			version: 15,
			banks: [],
			program_1_channel: 0,
			program_2_channel: 0,
			program_3_channel: 0,
			program_4_channel: 0,
			program_5_channel: 0,
			control_1_channel: 0,
			control_2_channel: 0,
			expression_1_channel: 0,
			expression_2_channel: 0,
			note_channel: 0,
			direct_select: false,
			switch_1_up: false,
			switch_2_down: false,
			merge: false,
			running_status: false,
			expression_1_min: 0,
			expression_1_max: 127,
			expression_2_min: 0,
			expression_2_max: 127
		};

		for (var a = 0; a < 10; a++) {
			output.banks.push([]);
			for (var b = 0; b < 10; b++) {
				var preset = service.getPresetTemplate();
				output.banks[a].push(preset);
			}
		}
		return JSON.parse(JSON.stringify(output));
	};

	service.decode = function (data) {
		if (data.length != service.SYSEX_LENGTH) return null;
		if (data[0] != 240) return null;
		if (data[service.SYSEX_LENGTH-1] != 247) return null;
		if (data[1] != 0) return null;
		if (data[2] != 32) return null;
		if (data[3] != 50) return null;
		if (data[4] != 1) return null;
		if (data[5] != 12) return null;
		if (data[6] != 15) return null;
		var output = service.getTemplate();
		var data_copy = Array.from(data);
		var formatted = [];
		var buffer = [];
		data_copy = data_copy.slice(7);
		data_copy.pop();
		data_copy.forEach((e, i) => {
			var j = i + 1;
			var m = j % 8;
			var b = e.toString(2).padStart(7, "0");
			switch (m) {
				case 0:
					buffer.forEach((x, y) => {
						var z = b[6 - y] + x;
						formatted.push(z);
					});
					buffer = [];
					break;
				default:
					buffer.push(b);
			}
		});
		var presets = [...formatted];
		presets = presets.slice(0, 1600);
		presets.forEach(function (e, i) {
			var m = i % 16;
			var b = Math.floor(i / 160);
			var p = Math.floor(i / 16)-(b*10);
			var on = e[0] == "0";
			var u = e.slice(1);
			var v = parseInt(u, 2);
			var k = null;
			switch (m) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
					output.banks[b][p]["program_" + (m+1)].on = on;
					output.banks[b][p]["program_" + (m+1)].value_0 = v;
					break;
				case 5:
				case 7:
					k = Math.floor(m / 7) + 1;
					output.banks[b][p]["control_" + k].on = on;
					output.banks[b][p]["control_" + k].value_0 = v;
					break;
				case 6:
				case 8:
					k = Math.floor(m / 8) + 1;
					output.banks[b][p]["switch_" + k].on = !on;
					output.banks[b][p]["control_" + k].value_1 = v;
					break;
				case 9:
				case 12:
					k = Math.floor(m / 12) + 1;
					output.banks[b][p]["expression_" + k].value_0 = v;
					output.banks[b][p]["expression_" + k].on = on;
					break;
				case 10:
				case 13:
					k = Math.floor(m / 13) + 1;
					output.banks[b][p]["expression_" + k].value_1 = v;
					break;
				case 11:
				case 14:
					k = Math.floor(m / 14) + 1;
					output.banks[b][p]["expression_" + k].value_2 = v;
					break;
				case 15:
					output.banks[b][p].note.value_0 = v;
					output.banks[b][p].note.on = on;
					break;
				default:
				//nothing
			}
		});
		output.program_1_channel = parseInt(formatted[2016], 2);
		output.program_2_channel = parseInt(formatted[2017], 2);
		output.program_3_channel = parseInt(formatted[2018], 2);
		output.program_4_channel = parseInt(formatted[2019], 2);
		output.program_5_channel = parseInt(formatted[2020], 2);
		output.control_1_channel = parseInt(formatted[2021], 2);
		output.control_2_channel = parseInt(formatted[2022], 2);
		output.expression_1_channel = parseInt(formatted[2023], 2);
		output.expression_2_channel = parseInt(formatted[2024], 2);
		output.note_channel = parseInt(formatted[2025], 2);
		output.switch_1_up = formatted[2032][0] == "1";
		output.switch_2_down = formatted[2032][1] == "1";
		output.merge = formatted[2033][3] == "1";
		output.running_status = formatted[2033][5] == "1";
		output.direct_select = formatted[2033][6] == "1";
		output.expression_1_min = parseInt(formatted[2044], 2) - 8;
		output.expression_1_max = parseInt(formatted[2045], 2) + 5;
		output.expression_2_min = parseInt(formatted[2046], 2) - 8;
		output.expression_2_max = parseInt(formatted[2047], 2) + 5;
		console.log(output);
		return output;
	}

	service.encode = function(data){
		var output = new Uint8Array(service.SYSEX_LENGTH);
		output[0] = 240;	
		output[1] = 0;	
		output[2] = 32;	
		output[3] = 50;
		output[4] = 1;
		output[5] = 12;
		output[6] = 15;
		var formatted  = JSON.parse(service.FORMATTED_SYSEX_TEMPLATE);
		data.banks.forEach(function(e,i){
			e.forEach(function(a,b){
				formatted[(0+b*16+i*160)] = 
					(a.program_1.on ? "0" : "1")+
					a.program_1.value_0.toString(2).padStart(7,"0")
				;
				formatted[(1+b*16+i*160)] =
					(a.program_2.on ? "0" : "1")+
					a.program_2.value_0.toString(2).padStart(7,"0")
				;
				formatted[(2+b*16+i*160)] = 
					(a.program_3.on ? "0" : "1")+
					a.program_3.value_0.toString(2).padStart(7,"0")
				;
				formatted[(3+b*16+i*160)] = 
					(a.program_4.on ? "0" : "1")+
					a.program_4.value_0.toString(2).padStart(7,"0")
				;
				formatted[(4+b*16+i*160)] = 
					(a.program_5.on ? "0" : "1")+
					a.program_5.value_0.toString(2).padStart(7,"0")
				;

				formatted[(5+b*16+i*160)] = 
					(a.control_1.on ? "0" : "1")+
					a.control_1.value_0.toString(2).padStart(7,"0")
				;
				formatted[(6+b*16+i*160)] = 
					(a.switch_1.on ? "1" : "0")+
					a.control_1.value_1.toString(2).padStart(7,"0")
				;

				formatted[(7+b*16+i*160)] = 
					(a.control_2.on ? "0" : "1")+
					a.control_2.value_0.toString(2).padStart(7,"0")
				;
				formatted[(8+b*16+i*160)] = 
					(a.switch_2.on ? "1" : "0")+
					a.control_2.value_1.toString(2).padStart(7,"0")
				;

				formatted[(9+b*16+i*160)] = 
					(a.expression_1.on ? "0" : "1")+
					a.expression_1.value_0.toString(2).padStart(7,"0")
				;
				formatted[(10+b*16+i*160)] = 
					a.expression_1.value_1.toString(2).padStart(8,"0")
				;
				formatted[(11+b*16+i*160)] = 
					a.expression_1.value_2.toString(2).padStart(8,"0")
				;

				formatted[(12+b*16+i*160)] = 
					(a.expression_2.on ? "0" : "1")+
					a.expression_2.value_0.toString(2).padStart(7,"0")
				;
				formatted[(13+b*16+i*160)] = 
					a.expression_2.value_1.toString(2).padStart(8,"0")
				;
				formatted[(14+b*16+i*160)] = 
					a.expression_2.value_2.toString(2).padStart(8,"0")
				;

				formatted[(15+b*16+i*160)] = 
					(a.note.on ? "0" : "1")+
					a.note.value_0.toString(2).padStart(7,"0")
				;
			});
		});
		
		formatted[2016] = data.program_1_channel.toString(2).padStart(8,"0");
		formatted[2017] = data.program_2_channel.toString(2).padStart(8,"0");
		formatted[2018] = data.program_3_channel.toString(2).padStart(8,"0");
		formatted[2019] = data.program_4_channel.toString(2).padStart(8,"0");
		formatted[2020] = data.program_5_channel.toString(2).padStart(8,"0");
		formatted[2021] = data.control_1_channel.toString(2).padStart(8,"0");
		formatted[2022] = data.control_2_channel.toString(2).padStart(8,"0");
		formatted[2023] = data.expression_1_channel.toString(2).padStart(8,"0");
		formatted[2024] = data.expression_2_channel.toString(2).padStart(8,"0");
		formatted[2025] = data.note_channel.toString(2).padStart(8,"0");

		formatted[2032] = 
			(data.switch_1_up ? "1" : "0")+
			(data.switch_2_down ? "1" : "0")+
			"000000"
		;
		
		formatted[2033] =
			"000"+
			(data.merge ? "1" : "0")+
			"0"+
			(data.running_status ? "1" : "0")+
			(data.direct_select ? "1" : "0")+
			"0"
		;

		formatted[2044] = (data.expression_1_min+8).toString(2).padStart(8,"0");
		formatted[2045] = (data.expression_1_max-5).toString(2).padStart(8,"0");
		formatted[2046] = (data.expression_2_min+8).toString(2).padStart(8,"0");
		formatted[2047] = (data.expression_2_max-5).toString(2).padStart(8,"0");

		var buffer = "";
		var q = 7;
		formatted.forEach(function(e,i){
			var k = null;
			if(i % 7 == 0 && i > 0){
				k = parseInt(buffer,2);
				output[q] = k;
				++q;
				buffer = "";
			}
			buffer = e[0]+buffer;
			k = parseInt(e.slice(1),2);
			output[q] = k;
			++q;
		});	

		var sum = 0;
		for (var i = 1; i < service.SYSEX_LENGTH-2; i++) {
			sum += output[i];
		}
		var checksum = sum & 0x7F;
		checksum = (~checksum + 1) & 0x7F;

		output[2350] = 10; //was 10
		output[service.SYSEX_LENGTH-1] = 247;
		return output;
	}

	return service;
});