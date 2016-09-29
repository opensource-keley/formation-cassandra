$(document).ready(function() {
	$('a[href^="#"]').click(function(){
		var the_id = $(this).attr("href");
		$('html, body').animate({
			scrollTop:$(the_id).offset().top
		}, 'slow');
		return false;
	});
	$(document).scroll(function(){
            var scrollTop = $(document).scrollTop();
            if(scrollTop > $('header').height() + 250 ){
                $(".header").addClass('ancre');
            }
            else {
                $(".header").removeClass('ancre');
            }
        });
});

var app = angular.module("appCassandra", []);

app.controller('descriptionController', ['$scope', function($scope) {
	$scope.descriptionCTitle ="Définitions";
	$scope.descriptionCText= "Créée par Facebook pour ses besoins de haute disponibilité, performance et gestion de gros volumes de données, Cassandra a été mis à disposition de la communauté open source depuis 2008 et reprise par la fondation Apache. Cassandra est un système de gestion de base de données NoSQL conçu pour stoker de gros volumes de données de manière distribuée sur plusieurs serveurs.";
  	$scope.descriptionC = [
	  {
		  name : 'SGBD',
		  desc : 'Système de gestion de base de données.',
	  },
	  {
		  name : 'NoSQL',
		  desc : 'C\'est un type de SGBD non relationnel.',
	  },
	  {
		  name : 'Haute disponibilité',
		  desc : 'Les données sont toujours accessibles.',
	  },
	  {
		  name : 'Système distribué',
		  desc : 'Les données répliquées sur différents serveurs et dans différents datacenters.',
	  },
	  {
		  name : 'Keyspace',
		  desc : 'C\'est le schéma de base de données dans Cassandra, il comporte les tables et le modèle de réplication.',
	  },
	  {
		  name : 'CSV',
		  desc : 'Format simple de fichier texte représentant des données séparées par des virgules, points virgules etc. … souvent utilisé pour les exports / imports de données.',
	  },
	  {
		  name : 'CQL',
		  desc : 'Cassandra Query Language',
	  },
	  {
		  name : 'Accès aux données',
		  desc : '<ul><li>Écriture dans le commit log</li><li>Écriture des données dans la memtable</li><li>Écriture des données depuis la memtable vers la sstable<ol><li>Automatique lorsque la memtable va être pleine</li>Peut être déclenché manuellement (opération d\'admin)<li></li></ol></li>',
	  },
  	];
  	$scope.details = $scope.descriptionC[0];
  	$scope.changeContent =function(index) {
	  $scope.details = $scope.descriptionC[index];
	};
}]);

app.controller('bddController', ['$scope', function($scope) {
	$scope.gestionBDDTitle ="Gestion";
	$scope.gestionBDDText= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis odio, ipsa voluptatum nobis beatae blanditiis deleniti necessitatibus numquam";
  	$scope.gestionBDD = [
	  {
		  name : 'Afficher les différents Keyspace',
		  requete : "DESCRIBE KEYSPACE",
		  texteComplementaire : "Commande permettant d'afficher les différents KEYSPACES des datacenters.",
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Créer un Keyspace avec un Datacenter',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Créer un Keyspace avec plusieurs Datacenters',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'NetworkTopologyStrategy', 'Paris': 4, 'Toulouse': 3, 'Lille': 2} ;",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présent sur les datacenters.',
		  imageRel : 'images/hardDrive.jpg',
	  },
		{
			name : 'Créer une table',
			requete : 'CREATE TABLE villes.coordonnees (nom text, code_postal text, latitude text, longitude text,  nom_affiche text, primary key (nom, code_postal));',
			texteComplementaire : 'Ici la clef est composée des deux champs « nom » et « code postal » Dans le cas présent les données ayant la même clef seront stockées sur le même nœud.',
			imageRel : 'images/hardDrive.jpg',
		},
		{
			name : 'Afficher les proriétés d\'une table',
			requete : 'DESCRIBE villes.coordonnees ;',
			texteComplementaire : 'On va afficher les données contenues dans la table villes',
			imageRel : 'images/hardDrive.jpg',
		},
		{
			name : 'Insérer des données',
			requete : 'INSERT into villes.coordonnees (nom, code_postal, latitude, longitude, nom_affiche) values ("Clumanc", "04330", "6.416670", "1.25", "clumanc");',
			texteComplementaire : 'ici on va créer une nouvelle entrée Clumanc dans la table villes.coordonnees',
			imageRel : 'images/hardDrive.jpg',
		},
		{
			name : 'Supprimer une colonne',
			requete : 'ALTER TABLE villes.coordonnees drop colonne_a_supprimer;',
			texteComplementaire : 'Cette commande permet de supprimer une entrée dans la table villes.coordonnees',
			imageRel : 'images/hardDrive.jpg',
		},
		{
			name : 'Sélectionner des données',
			requete : 'SELECT * FROM villes.coordonnees;',
			texteComplementaire : 'Cette commande permet ici de récupérer toutes les données enregistrées dans la table villes.coordonnees',
			imageRel : 'images/hardDrive.jpg',
		},
		{
			name : 'Importer des données depuis un CSV',
			requete : 'COPY villes.coordonnees FROM "liste_villes.csv" WITH DELIMITER = ";";',
			texteComplementaire : 'Ici on va importer les données du fichier CSV liste_villes.csv dans la table villes.coordonnees',
			imageRel : 'images/hardDrive.jpg',
		},
		{
			name : 'Exporter des données vers un CSV',
			requete : 'COPY villes.coordonnees to "liste_villes.csv" WITH DELIMITER = ";";',
			texteComplementaire : 'Ici on va exporter les données de la table dans le fichier CSV liste_villes.csv',
			imageRel : 'images/hardDrive.jpg',
		}
  	];
  	$scope.details = $scope.gestionBDD[0];
  	$scope.changeContent =function(index) {
		$scope.details = $scope.gestionBDD[index];
	};
}]);

app.controller('requetesController', ['$scope', function($scope) {
	$scope.requetesTitle ="Requêtes simples";
	$scope.requetesText= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis odio, ipsa voluptatum nobis beatae blanditiis deleniti necessitatibus numquam";
  	$scope.requetes = [
	  {
		  name : 'Sélectionner toutes les données',
		  requete : "DESCRIBE KEYSPACE",
		  texteComplementaire : "Commande permettant d'afficher les différents KEYSPACES des datacenters.",
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Sélectionner des données et limiter le nombre de lignes retournées',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Sélectionner des données selon un seul élément de la clef primaire',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Compte le nombre de lignes',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Supprimer des données',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Mettre à jour un champ',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
  	];
  	$scope.details = $scope.requetes[0];
  	$scope.changeContent =function(index) {
		$scope.details = $scope.requetes[index];
	};
}]);

app.controller('operationsController', ['$scope', function($scope) {
	$scope.operationsTitle ="Opérations";
	$scope.operationsText= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis odio, ipsa voluptatum nobis beatae blanditiis deleniti necessitatibus numquam";
  	$scope.operations = [
	  {
		  name : 'Sélectionner toutes les données',
		  requete : "DESCRIBE KEYSPACE",
		  texteComplementaire : "Commande permettant d'afficher les différents KEYSPACES des datacenters.",
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Sélectionner des données et limiter le nombre de lignes retournées',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Sélectionner des données selon un seul élément de la clef primaire',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Compte le nombre de lignes',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Supprimer des données',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Mettre à jour un champ',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
  	];
  	$scope.details = $scope.operations[0];
  	$scope.changeContent =function(index) {
		$scope.details = $scope.operations[index];
	};
}]);

app.controller('vuesController', ['$scope', function($scope) {
	$scope.vuesTitle ="Vues";
	$scope.vuesText= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis odio, ipsa voluptatum nobis beatae blanditiis deleniti necessitatibus numquam";
  	$scope.vues = [
	  {
		  name : 'Sélectionner toutes les données',
		  requete : "DESCRIBE KEYSPACE",
		  texteComplementaire : "Commande permettant d'afficher les différents KEYSPACES des datacenters.",
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Sélectionner des données et limiter le nombre de lignes retournées',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Sélectionner des données selon un seul élément de la clef primaire',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Compte le nombre de lignes',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Supprimer des données',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
	  {
		  name : 'Mettre à jour un champ',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor suppérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/hardDrive.jpg',
	  },
  	];
  	$scope.details = $scope.vues[0];
  	$scope.changeContent =function(index) {
		$scope.details = $scope.vues[index];
	};
}]);
