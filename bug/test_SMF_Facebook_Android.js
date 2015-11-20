// var tests = tests || {};
tests.SMF_Facebook.Android = {
	createUI: function() {
		var page = Pages.Page1;
		var ts = tests.SMF_Facebook;
		var createButton = ts.createButton;
		var tsa = ts.Android;
		createButton('Start Facebook', 10, ts.checkIfInstalled);
		createButton('Open Session', 20, tsa.openSession);
		createButton('userDetails', 30, tsa.userDetails);
		createButton('getFriendsList', 40, tsa.getFriendsList);
		createButton('postStatusUpdate', 50, tsa.postStatusUpdate);
		createButton('showFriendsPicker', 60, tsa.showFriendsPicker);
		createButton('isSessionActive', 70, ts.isSessionActive);
		createButton('closeSession', 80, ts.closeSession);
	},
	openSession: function(){
		alert(typeof GLOBAL_FB);
		GLOBAL_FB.openSession(
			["publish_actions","user_friends","user_about_me","user_status","email","user_posts"],
			function(e){ alert("login successful" + e.data);},//onSuccess callback parameter
			function(e){alert("error: " + e.message);}//onError callback parameter
		);
	},
	userDetails: function(){
		GLOBAL_FB.userDetails(
			function(e){alert("name: " + e.name + " id: " + e.id);},//onSuccess
			function(e){alert("error: " + e.message);}//onError
		);
	},
	getFriendsList: function() {
		GLOBAL_FB.getFriendsList(
			function(e){
				alert("facebook friends list : "+JSON.stringify(e));
			},
			function(e){ alert("error: " + e.message);}
		);
	},
	postStatusUpdate: function() {
  		GLOBAL_FB.postStatusUpdate(
			"This is a status update message.",
			function(){
				alert("Post sent successfully!");
			GLOBAL_FB.closeSession();
				alert("is session active "+GLOBAL_FB.isSessionActive());
			},
			function(e){
				alert("error: " + e.message);
			}
		);
	},
	showFriendsPicker: function() {
		GLOBAL_FB.showFriendsPicker(
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