$(document).ready(function() {
	$('a[href^="#"]').click(function(){
		var the_id = $(this).attr("href");
		$('html, body').animate({
			scrollTop:$(the_id).offset().top
		}, 'slow');
		return false;
	});
	ancrageMenu();
	$(document).scroll(function(){
        ancrageMenu();
    });
	// Scroll Top 0 if user click on the button
	$('#top').on('click', function(event) {
		$('html, body').animate({
			scrollTop:0
		}, 'slow');
	});
	// Function to sticky or not the navbar
	function ancrageMenu(){
		var scrollTop = $(document).scrollTop();
		var offset = $('.header').offset();
		// if(scrollTop > $('header').height() + 40 ){
		if(scrollTop > offset.top ){
			$(".header").addClass('ancre');
		}
		else {
			$(".header").removeClass('ancre');
		}
	}
});

var app = angular.module("appCassandra", []);

app.controller('descriptionController', ['$scope', function($scope) {
	$scope.descriptionCTitle ="Définitions";
	$scope.descriptionCText= "Créée par Facebook pour ses besoins de haute disponibilité, de performance et de gestion de gros volumes de données, Cassandra a été mise à disposition de la communauté open source depuis 2008 et offerte à la fondation Apache. Cassandra est un système de gestion de base de données NoSQL conçu pour stocker de gros volumes de données de manière distribuée sur plusieurs serveurs.";
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
		  desc : 'Cassandra stocke et accède aux données en écrivant dans le commit log, en écrivant des données dans la memtable, puis de la memtable vers la sstable (automatique lorsque la memtable va être pleine, peut être déclenché manuellement (opération d\'admin))',
	  },
  	];
  	$scope.details = $scope.descriptionC[0];
  	$scope.changeContent =function(index) {
	  $scope.details = $scope.descriptionC[index];
	};
}]);

app.controller('bddController', ['$scope', function($scope) {
	$scope.gestionBDDTitle ="Gestion";
	$scope.gestionBDDText= "Avant de pouvoir stocker vos données dans votre base de données, il vous faut bien paramétrer la base de données, créer vos keyspaces, créer vos tables et commencer à importer des données. Suivons ces étapes pas à pas.";
  	$scope.gestionBDD = [
	  {
		  name : 'Afficher les différents Keyspace',
		  requete : "DESCRIBE KEYSPACE",
		  texteComplementaire : "Commande permettant d'afficher les différents KEYSPACES des datacenters.",
		  imageRel : 'images/datacenter.svg',
	  },
	  {
		  name : 'Créer un Keyspace avec un Datacenter',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor': 4}",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor supérieur au nombre de nœuds présents sur le datacenter.',
		  imageRel : 'images/datacenter.svg',
	  },
	  {
		  name : 'Créer un Keyspace avec plusieurs Datacenters',
		  requete : "CREATE KEYSPACE villes WITH REPLICATION = {'class': 'NetworkTopologyStrategy', 'Paris': 4, 'Toulouse': 3, 'Lille': 2} ;",
		  texteComplementaire : 'Attention à ne pas choisir un replication_factor supérieur au nombre de nœuds présents sur les datacenters.',
		  imageRel : 'images/datacenters.svg',
	  },
		{
			name : 'Créer une table',
			requete : 'CREATE TABLE villes.coordonnees (nom text, code_postal text, latitude text, longitude text,  nom_affiche text, primary key (nom, code_postal));',
			texteComplementaire : 'Ici la clef est composée des deux champs « nom » et « code postal ». Dans le cas présent les données ayant la même clef seront stockées sur le même nœud.',
			imageRel : 'images/tables.svg',
		},
		{
			name : 'Afficher les proriétés d\'une table',
			requete : 'DESCRIBE villes.coordonnees ;',
			texteComplementaire : 'On va afficher les données contenues dans la table villes',
			imageRel : 'images/tables.svg',
		},
		{
			name : 'Insérer des données',
			requete : "INSERT into villes.coordonnees (nom, code_postal, latitude, longitude, nom_affiche) values ('Clumanc', '04330', '6.416670', '1.25','clumanc');",
			texteComplementaire : 'ici on va créer une nouvelle entrée Clumanc dans la table villes.coordonnees',
			imageRel : 'images/addEntry.svg',
		},
		{
			name : 'Supprimer une colonne',
			requete : 'ALTER TABLE villes.coordonnees drop colonne_a_supprimer;',
			texteComplementaire : 'Cette commande permet de supprimer une entrée dans la table villes.coordonnees',
			imageRel : 'images/supCol.svg',
		},
		{
			name : 'Sélectionner des données',
			requete : 'SELECT * FROM villes.coordonnees;',
			texteComplementaire : 'Cette commande permet ici de récupérer toutes les données enregistrées dans la table villes.coordonnees',
			imageRel : '',
		},
		{
			name : 'Importer des données depuis un CSV',
			requete : "COPY villes.coordonnees FROM 'liste_villes.csv' WITH DELIMITER = ';';",
			texteComplementaire : 'Ici on va importer les données du fichier CSV liste_villes.csv dans la table villes.coordonnees',
			imageRel : '',
		},
		{
			name : 'Exporter des données vers un CSV',
			requete : "COPY villes.coordonnees to 'liste_villes.csv' WITH DELIMITER = ';';",
			texteComplementaire : 'Ici on va exporter les données de la table dans le fichier CSV liste_villes.csv',
			imageRel : '',
		}
  	];
  	$scope.details = $scope.gestionBDD[0];
  	$scope.changeContent =function(index) {
		$scope.details = $scope.gestionBDD[index];
	};
}]);

app.controller('requetesController', ['$scope', function($scope) {
	$scope.requetesTitle ="Requêtes simples";
	$scope.requetesText= "Une fois votre base de données structurée, vos premières données stockées, vous pouvez visualiser ces informations, via différentes requêtes.";
  	$scope.requetes = [
	  {
		  name : 'Sélectionner toutes les données',
		  requete : "SELECT * FROM villes.coordonnees;",
		  texteComplementaire : "",
		  imageRel : '',
	  },
	  {
		  name : 'Sélectionner des données et limiter le nombre de lignes retournées',
		  requete : "SELECT * FROM villes.coordonnees limit 10;",
		  texteComplementaire : '',
		  imageRel : '',
	  },
	  {
		  name : 'Sélectionner des données selon la clef primaire',
		  requete : "SELECT * FROM villes.coordonnees WHERE nom = 'Lagny-sur-Marne' and code_postal = '77400' ;",
		  texteComplementaire : '',
		  imageRel : '',
	  },
	  {
		  name : 'Sélectionner des données selon un seul élément de la clef primaire',
		  requete : "SELECT * FROM villes.coordonnees WHERE code_postal = '77400' ALLOW FILTERING ;",
		  texteComplementaire : "Attention cette requête peut affecter les performances de la base de données, c\'est pour cette raison qu\'il faut « forcer » la requête avec  ALLOW FILTERING. Une bonne pratique consiste à utiliser LIMIT pour éviter la perte de performances : SELECT * FROM villes.coordonnees WHERE code_postal = '77400' LIMIT 5 ALLOW FILTERING ;",
		  imageRel : '',
	  },
	  {
		  name : 'Compter le nombre de lignes',
		  requete : "SELECT count(*) from villes.coordonnees;",
		  texteComplementaire : 'Attention cette requête peut affecter les performances de la base de données, elle doit interroger tous les nœuds.',
		  imageRel : '',
	  },
	  {
		  name : 'Supprimer des données',
		  requete : "DELETE from villes.coordonnees where nom = 'Clumanc';",
		  texteComplementaire : 'Possible que sur une clef pour des raisons de performances.',
		  imageRel : 'images/suppData.svg',
	  },
	  {
		  name : 'Mettre à jour un champ',
		  requete : "UPDATE villes.coordonnees set nb_habitants = 20718 WHERE nom = 'Clumanc' and code_postal = '04330';",
		  texteComplementaire : '',
		  imageRel : 'images/updateData.svg',
	  },
  	];
  	$scope.details = $scope.requetes[0];
  	$scope.changeContent =function(index) {
		$scope.details = $scope.requetes[index];
	};
}]);

app.controller('operationsController', ['$scope', function($scope) {
	$scope.operationsTitle ="Opérations";
	$scope.operationsText= "Dans certains cas, il se peut que vous ayez besoin de modifier la structure de votre base de données ou la structure de vos tables, ou de gérer les utilisateurs.";
  	$scope.operations = [
	  {
		  name : 'Ajouter une colonne',
		  requete : "ALTER TABLE villes.coordonnees ADD nb_habitants int;",
		  texteComplementaire : "",
		  imageRel : 'images/addCol.svg',
	  },
	  {
		  name : 'Supprimer une colonne',
		  requete : "ALTER TABLE villes.coordonnees DROP nb_habitants;",
		  texteComplementaire : "",
		  imageRel : 'images/supCol.svg',
	  },
	  {
		  name : 'Vider une colonne',
		  requete : "TRUNCATE  villes.coordonnees;",
		  texteComplementaire : "",
		  imageRel : '',
	  },
	  {
		  name : 'Vérifier les stratégies de réplication et coefficient de réplication',
		  requete : "SELECT * FROM system_schema.keyspaces ;",
		  texteComplementaire : "",
		  imageRel : '',
	  },
	  {
		  name : 'Changer le coefficient de réplication',
		  requete : "ALTER KEYSPACE villes WITH replication = {'class': 'SimpleStrategy' , 'replication_factor': 5} ;",
		  texteComplementaire : "",
		  imageRel : '',
	  },
	  {
		  name : 'Créer un utilisateur (SuperUser)',
		  requete : "CREATE USER bda WITH PASSWORD 'bdaPassword' SUPERUSER;",
		  texteComplementaire : "",
		  imageRel : '',
	  },
	  {
		  name : 'Créer un utilisateur',
		  requete : "CREATE USER simple_user WITH PASSWORD 'userPassword' NOSUPERUSER;",
		  texteComplementaire : "",
		  imageRel : '',
	  },
	  {
		  name : 'Supprimer un utilisateur',
		  requete : "DROP USER simple_user",
		  texteComplementaire : "",
		  imageRel : '',
	  },
	  {
		  name : 'Lister les utilisateurs',
		  requete : "LIST USERS",
		  texteComplementaire : "",
		  imageRel : '',
	  },
  	];
  	$scope.details = $scope.operations[0];
  	$scope.changeContent =function(index) {
		$scope.details = $scope.operations[index];
	};
}]);

app.controller('vuesController', ['$scope', function($scope) {
	$scope.vuesTitle ="Vues";
	$scope.vuesText= "Une vue dans une base de données est une synthèse d’une requête d’interrogation de la base. On peut voir une vue comme une table virtuelle qui est définie par une requête. Une vue permet à la fois à l’utilisateur d’éviter de taper une requête très longue, mais aussi de masquer certaines informations à certains utilisateurs. ";
  	$scope.vues = [
	  {
		  name : 'Créer une vue depuis une requête',
		  requete : "CREATE MATERIALIZED VIEW villes.grandes_villes as SELECT * from villes.coordonnees WHERE nom in ('Paris', 'Marseille') AND nom IS NOT NULL AND code_postal IS NOT NULL PRIMARY KEY (nom, code_postal);",
		  texteComplementaire : "La requête select doit vérifier que les clefs ne sont pas nulles et la nouvelle clef doit être égale ou plus restrictive que la table d'origine.",
		  imageRel : '',
	  },
	  {
		  name : 'Requête optimale au niveau performances',
		  requete : "SELECT * FROM villes.grandes_villes ;",
		  texteComplementaire : "Cette requête est optimale au niveau performances;",
		  imageRel : '',
	  },
  	];
  	$scope.details = $scope.vues[0];
  	$scope.changeContent =function(index) {
		$scope.details = $scope.vues[index];
	};
}]);
