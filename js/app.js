(function(){
	var app = angular.module('store', ['angular-carousel']);

	app.controller('StoreController', ['$http', function($http){
		var store = this;

		store.json_obj = [];
		store.movies = [];

		$http.get("http://api.themoviedb.org/3/list/5408fb3d0e0a263a130008d4?api_key=2b5c9b428ad1f3d2bef3e001d318e366").success(function(data){
			store.json_obj = data['items'];
			for (i=0; i<data['items'].length; i++){
				store.movies[i] = data['items'][i];
			}
		});

		this.poster = 1;
		this.selectPoster = function(setPoster){
			this.poster = setPoster;
		};
		this.isSelected = function(checkPoster){
			return this.poster === checkPoster;
		};

	}]);


})();
	