var tests = tests || {};
tests.SMF_Facebook.iOS = {
	openSession: function(){
		APP_GLOBALS.FB.openSessionOnSuccessOnError(
			["publish_actions","user_friends","user_about_me","user_status","email","user_posts"],
			function(e){ alert("login successful" + e.data);},//onSuccess callback parameter
			function(e){alert("error: " + e.message);}//onError callback parameter
		);
	},
	userDetails: function(){
		APP_GLOBALS.FB.userDetailsOnSuccessOnError(
			function(e){alert("name: " + e.name + " id: " + e.id);},//onSuccess
			function(e){alert("error: " + e.message);}//onError
		);
	},
	getFriendsList: function() {
		APP_GLOBALS.FB.getFriendsListOnSuccessOnError(
			function(e){
				alert("facebook friends list : "+JSON.stringify(e));
			},
			function(e){ alert("error: " + e.message);}
		);
	},
	postStatusUpdate: function() {
  	APP_GLOBALS.FB.postStatusUpdateOnSuccessOnError(
			"This is a status update message.",
			function(){
				alert("Post sent successfully!");
			},
			function(e){
				alert("error: " + e.message);
			}
		);
	},
	showFriendsPicker: function() {
		APP_GLOBALS.FB.showFriendPickerOnSelectedOnCancelledOnError(
			false,
			function(e){
				alert(JSON.stringify(e));
				var names = [];
				for (i = 0; i < e.length; i++){
					names.push(e[i].name);
				}
				alert("selected friends' names:" + names.join(', '));
			},
			function(){
				alert("picker cancelled");
			},
			function(e){
				alert("error: " + e.message);
			}
		);
	}
};