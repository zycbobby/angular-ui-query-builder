var app = angular.module("app", [
	'angular-ui-query-builder'
]);

app.controller("queryBuilderExampleCtrl", function($scope) {
	$scope.spec = {
		_id: {type: 'objectId'},
		lastLogin: {type: 'date'},
		status: {type: 'string', enum: ['pending', 'active', 'approved', 'deleted']},
		role: {type: 'string', enum: ['user', 'admin', 'root']},
		name: {type: 'string'},
		email: {type: 'string'},
	};

	$scope.query = {
		email: {$exists: true},
		role: 'admin',
		status: {$in: ['active', 'approved']},
		/* FIXME: Not yet supported
		$and: [
			{role: 'admin'},
			{role: 'user', $exists: {email: true}},
		],
		*/
	};
});
