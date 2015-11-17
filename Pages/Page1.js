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
	tests.SMF_Facebook.runNativeInterfaceTestsOnAndroid();
	// tests.SMF_GoogleAnalytics.runNativeInterfaceTestsOnAndroid();
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
}