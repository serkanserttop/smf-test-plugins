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
	var ga = new SMFGoogleAnalytics("Landroid/content/Context;");
	ga.initTracker(APP_GLOBALS.GA_TRACKING_ID, 1, 0, true);
	ga.sendScreen("page1");
	ga.sendEvent("ui-action", "press", "Button1", 0);
	ga.sendSocial("facebook", "share", "http://www.smartface.io");
	ga.sendTiming("pageload", 123123433, "name", "label");
	ga.sendInAppTransaction("TR_ID", "In-App Store", 5.25, 0.3, 0.15, "TRY");
	ga.sendInAppItem("TR_ID", "A product", "F_123", "Level", 2.5, 4, "TRY");
	ga.sendCampaign("email", "email_marketing", "summer_campaign", "term", "email_variation_1");
	/*
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
	*/
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