var tests = tests || {};
tests.SMF_Facebook = {
	checkIfInstalled: function(){
		var fb, isError = false;
    try {
        if(Device.deviceOS === 'Android') {
            fb = SMFFacebook('Landroid/app/Activity');
        } else {
            fb = new FBClass();
        }
    } catch(e) {
        isError = true;
        alert('Facebook plugin does not work');
    }
    if(!isError) {
        alert('Facebook plugin works');
    }
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