/*global Ember, DS, Todos:true */
window.SilverTick = Ember.Application.create();

SilverTick.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'silvertick-emberjs'
});
