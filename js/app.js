(function (){

	var app = angular.module('spettacolo', []);

	app.controller('serieController', function (){
		this.serie = {
			id: "janethevirgin",
			name: "Jane the Virgin",
			cast: [ "Gina Rodriguez","Justin Baldoni","Brett Dier","Andrea Navedo","Yael Grobglas","Ivonne Coll","Jaime Camil"],
			genre: [ "Comedia" ],
			country: "Estados Unidos",
			seasons: 1,
			argument: "Jane the Virgin es una serie de televisión estadounidense transmitida por The CW. Se estrenó el 13 de octubre de 2014. Es una adaptación de la telenovela venezolana Juana la virgen creada por Perla Farías."
		}
	});

	app.controller('ComentarioController', function(){
		this.comentario = [];
		this.mostrar = false;

		this.toggle = function (){
			this.mostrar = !this.mostrar;
		};

	});

})();