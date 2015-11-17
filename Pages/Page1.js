function Page1_Self_OnKeyPress(e) {
	if (e.keyCode === 4) {
		Application.exit();
	}
}
function Page1_Self_OnShow() {
	header.init(this);
	header.setTitle("Page1");
	header.setRightItem("RItem");
	header.setLeftItem();
	this.statusBar.transparent = true;
}
function Page1_TextButton1_OnPressed(e){
	tests.SMF_Facebook.checkIfInstalled();
	tests.SMF_GoogleAnalytics.checkIfInstalled();
	// var tracker = 
	tests.SMF_GoogleAnalytics.initTracker();
	// if(tracker) {
	tests.SMF_GoogleAnalytics.sendTiming();
	tests.SMF_GoogleAnalytics.sendSocial();
	tests.SMF_GoogleAnalytics.sendScreen();
	tests.SMF_GoogleAnalytics.sendInAppTransaction();
	tests.SMF_GoogleAnalytics.sendInAppItem();
	tests.SMF_GoogleAnalytics.sendEvent();
	tests.SMF_GoogleAnalytics.sendCampaign();
	// } else {
	// 	alert('tracker not created');
	// }
	/*
	// Facebook instance
	var fb = new FBClass();

	///////////////////////////////////////////////////////////////

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

	///////////////////////////////////////////////////////////////

	// Close Session
	fb.closeSession();

	///////////////////////////////////////////////////////////////

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

	///////////////////////////////////////////////////////////////

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

	///////////////////////////////////////////////////////////////

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

	///////////////////////////////////////////////////////////////

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

	///////////////////////////////////////////////////////////////

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

	///////////////////////////////////////////////////////////////

	// IsSessionActive
	alert(fb.isSessionActive());
	
	*/
}