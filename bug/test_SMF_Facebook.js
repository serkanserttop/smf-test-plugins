var tests = tests || {};
var isError = false;
try {
	if(Device.deviceOS === 'Android') {
		alert('initializing Android Facebook plugin');
		GLOBAL_FB = new SMFFacebook('Landroid/app/Activity;');
  	} else {
  		alert('initializing iOS Facebook plugin');
		GLOBAL_FB = new FBClass();
  	}
} catch(e) {
	isError = true;
	alert('Facebook plugin does not work');
}
if(!isError) {
	// GLOBAL_FB = fb;
	alert('Facebook plugin works');
}
tests.SMF_Facebook = {
	checkIfInstalled: function(){
		var fb, isError = false;
    	try {
			if(Device.deviceOS === 'Android') {
				alert('initializing Android Facebook plugin');
				GLOBAL_FB = new SMFFacebook('Landroid/app/Activity;');
      		} else {
      			alert('initializing iOS Facebook plugin');
				GLOBAL_FB = new FBClass();
      		}
    	} catch(e) {
			isError = true;
			alert('Facebook plugin does not work');
    	}
    	if(!isError) {
    		// GLOBAL_FB = fb;
			alert('Facebook plugin works');
		}
	},
	closeSession: function() {
		GLOBAL_FB.closeSession();
		tests.SMF_Facebook.isSessionActive();
	},
	createButton: function(title, top, onPressed, page) {
		page = page || Pages.Page1;
		var btn = new SMF.UI.TextButton({
			top: top + "%",
			left: "10%",
			text: title,
			onPressed: function(){ onPressed(); }
		});
		page.add(btn);
	},
	createUI: function() {
		var page = Pages.Page1;
		var createButton = tests.SMF_Facebook.createButton;
		createButton('Start Facebook', 10, tests.SMF_Facebook.checkIfInstalled);
		createButton('Open Session', 20, tests.SMF_Facebook.openSession);
		createButton('userDetails', 30, tests.SMF_Facebook.userDetails);
		createButton('getFriendsList', 40, tests.SMF_Facebook.getFriendsList);
		createButton('postStatusUpdate', 50, tests.SMF_Facebook.postStatusUpdate);
		createButton('showFriendsPicker', 60, tests.SMF_Facebook.showFriendsPicker);
	},
	isSessionActive: function() {
		alert('isSessionActive' + GLOBAL_FB.isSessionActive());
	},
	openSession: function(){
		GLOBAL_FB.openSession(
			["publish_actions","user_friends","user_about_me","user_status","email","user_posts"],
			function(e){ alert("login successful" + e.data);},//onSuccess callback parameter
			function(e){alert("error: " + e.message);}//onError callback parameter
		);
	},
	userDetails: function(){
		GLOBAL_FB.userDetails(
			function(e){
				alert("name: " + e.name + " id: " + e.id);
			},
			function(e){
				alert("error: " + e.message);
			}
		);
	},
	getFriendsList: function() {
		GLOBAL_FB.getFriendsList(
			function(e){
				alert("facebook friends list : "+JSON.stringify(e));
			},
			function(e){ 
				alert("error: " + e.message);
			}
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
	},
	runNativeInterfaceTestsOnAndroid: function() {
		var fb = new SMFFacebook("Landroid/app/Activity;");
		fb.openSession(
			["publish_actions", "user_friends", "user_about_me", "user_status", "email", "user_posts"],
			function (e) {
				alert("login successful" + e.data);
				getUserDetails();
			}, //onSuccess callback parameter
			function (e) {
				alert("error: " + e.message);
			} //onError callback parameter
		);
		function getUserDetails() {
			fb.userDetails(
				function (e) {
					alert("name: " + e.name + " id: " + e.id); //success
				},
				function () {
					alert("error: " + e.message);	//error
				}
			);
		}
	},
	runNativeInterfaceTestsOniOS: function(){
		var fb = new FBClass();
		// Open Session
		fb.openSessionOnSuccessOnError(
			["public_profile","user_friends"],
			function(e){
				// alert("Success");
				alert(e.data);
			},
			function(e){
				// alert("Error");
				alert(e.message);
			}
		);
		// fb.closeSession();
		// User Details
		fb.userDetailsOnSuccessOnError(
			function(e){
				alert("Success");
				alert(e.name);
			},
			function(e){
				alert("Error");
				alert(e.message);
			}
		);
		// Post Status Update
		fb.postStatusUpdateOnSuccessOnError(
			"Smartface Plugin Test",
			function(e){
				alert("Success");
			},
			function(e){
				alert("Error");
			}
		);
		// Show Friend Picker
		fb.showFriendPickerOnSelectedOnCancelledOnError(
			false,
			function(e){
				alert("OnSelected");
			},
			function(e){
				alert("OnCancelled");
			},
			function(e){
				alert("OnError");
			}
		);
		// Get Friends List
		fb.getFriendsListOnSuccessOnError(
			function(e){
				alert("Success");
				alert(e[0].name);
			},
			function(e){
				alert("Error");
			}
		);
		// RequestWithPath
		fb.requestWithPathParamsHttpMethodOnSuccessOnError(
			"/fql",
			"SELECT message FROM status  WHERE uid=me()",
			"GET",
			function(e){
				alert("Success");
				alert(JSON.stringify(e));
			},
			function(e){
				alert(e.message);
			}
		);
		// IsSessionActive
		alert(fb.isSessionActive());
		
	}
};