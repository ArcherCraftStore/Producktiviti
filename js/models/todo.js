/*global Todos, DS */
'use strict';

SilverTick.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean'),

	saveWhenCompletedChanged: function () {
		this.save();
	}.observes('isCompleted')
});
