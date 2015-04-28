function PersonasController ($scope) {
	// body...
	$scope.personas=[
		{nombre:"Juan Blanco", telefono:"123456789", direccion:"Calle San Carlos nº10"},
		{nombre:"Rosa Luxemburgo", telefono:"987654321", direccion:"Calle Avenida nº20"},
		{nombre:"Ana Mariño", telefono:"667895643", direccion:"Travesia del Cerro nº14"}
	];

	// el scope debe estar siempre con su scope padre, por tanto dentro de el.

	$scope.Save = function(){
		$scope.personas.push({nombre:$scope.nuevaPersona.nombre,
			telefono:$scope.nuevaPersona.telefono, 
			direccion: $scope.nuevaPersona.direccion});
	$scope.formVisibility=false;
	console.log($scope.formVisibility)
	}
$scope.formVisibility = false;
$scope.ShowForm = function(){
		$scope.formVisibility = true;
		console.log($scope.formVisibility)
	}
}


