CATARSE.User = Backbone.Model.extend({
	initialize: function() {
		this.backs = new CATARSE.UserBacks()
		this.backs.url = '/' + 'users/' + this.id + '/backers'
		this.projects = new CATARSE.UserProjects()
		this.projects.url = '/' + 'users/' + this.id + '/projects'
	}
})
