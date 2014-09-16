/*global Todos, Ember */
'use strict';

SilverTick.EditTodoView = Ember.TextField.extend({
	focusOnInsert: function () {
		// Re-set input value to get rid of a reduntant text selection
		this.$().val(this.$().val());
		this.$().focus();
	}.on('didInsertElement')
});

Ember.Handlebars.helper('edit-todo', SilverTick.EditTodoView);
