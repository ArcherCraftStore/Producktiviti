/*global Ember, Todos */
'use strict';

SilverTick.Router.map(function () {
	this.resource('todos', { path: '/' }, function () {
		this.route('active');
		this.route('completed');
	});
});

SilverTick.TodosRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('todo');
	}
});

SilverTick.TodosIndexRoute = Ember.Route.extend({
	setupController: function () {
		this.controllerFor('todos').set('filteredTodos', this.modelFor('todos'));
	}
});

SilverTick.TodosActiveRoute = Ember.Route.extend({
	setupController: function () {
		var todos = this.store.filter('todo', function (todo) {
			return !todo.get('isCompleted');
		});

		this.controllerFor('todos').set('filteredTodos', todos);
	}
});
SilverTick.TodosCompletedRoute = Ember.Route.extend({
	setupController: function () {
		var todos = this.store.filter('todo', function (todo) {
			return todo.get('isCompleted');
		});

		this.controllerFor('todos').set('filteredTodos', todos);
	}
});
