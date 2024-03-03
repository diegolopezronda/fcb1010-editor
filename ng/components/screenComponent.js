angular.module('fcb1010EditorApp').component("screenComponent", {
	controllerAs:"$ctrl",
	bindings:{
		arrows: "<",
		message: "<"
	},
    template:
    `
<div class="screen">
	<table class="table table-dark table-lcd">
	<thead>
		<tr>
			<td class="lcd-screen">
				<span ng-show="$ctrl.arrows" class="dash-animation">&lt;&lt;&lt;</span>
				{{$ctrl.message}}
			</td>
		</tr>
	</thead>
</table>
</div>
    `,
    controller: function(){}
});