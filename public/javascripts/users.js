
function User(data) {
    this.name = ko.observable(data.name);
    this.userName = ko.observable(data.username);
    this.bio = ko.observable(data.bio);
}

function UsersViewModel() {
    // Data
    var self = this;
    self.users = ko.observableArray([]);
    self.name = ko.observable();
	self.userName = ko.observable();
	self.bio = ko.observable();

    $.getJSON("/users", function(users) {
        var mappedUsers = $.map(users, function(user) 
        	{ 
        		return new User(user) ;
        	});
        self.users(mappedUsers);
    });  	

    // Operations
    self.addUser = function() {
        self.users.push(new User({ name: this.name(),userName: this.userName(),bio: this.bio()}));
     
      /*  $.postJSON("/users",{ id : 287 }, function (data) {
            console.log(data.name);
        });*/

        /*$.post('/users', function(data) {
            //$('.result').html(data);
        });*/
    
        $.ajax(
            '/users',{
            data: ko.toJSON({
                    name: self.name(),
                    username: self.userName(),
                    bio: self.bio() 
            }),

            type: 'POST',
            contentType: "application/json",
            success: function () {
                alert('added successfuly');
                self.name("");
                self.userName("");
                self.bio("");

            },
            error: function () {
                alert('error');
            }
        });

    };

}

ko.applyBindings(new UsersViewModel());
/*$(document).ready(function() {

});*/

