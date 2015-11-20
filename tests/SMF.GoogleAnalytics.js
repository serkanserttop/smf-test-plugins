tests = tests || {};
// GLOBAL_GA;
tests.SMF_GoogleAnalytics = {
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
		var ts = tests.SMF_GoogleAnalytics;
		var createButton = ts.createButton;
		createButton('initTracker', 10, ts.initTracker);
		createButton('sendScreen', 20, ts.sendScreen);
		createButton('sendEvent', 30, ts.sendEvent);
		createButton('sendSocial', 40, ts.sendSocial);
		createButton('sendTiming', 50, ts.sendTiming);
		createButton('sendInAppTransaction', 60, ts.sendInAppTransaction);
		createButton('sendInAppItem', 70, ts.sendInAppItem);
		createButton('sendCampaign', 80, ts.sendCampaign);
	},
	initTracker: function(){
		var dispatchInterval = 1;
		var logLevel = 0;
		var trackUncaughtException = true;
		return SMF_GA_SCB.initTracker(APP_GLOBALS.GA_TRACKING_ID, dispatchInterval, logLevel, trackUncaughtException);
	},
	sendCampaign: function () {
		var name = Device.deviceOS + '-email', 
			source = 'email_marketing', 
			medium = 'summer_campaign', 
			term = 'term', 
			content = (new Date()).toISOString();
		SMF_GA_SCB.sendCampaign(name, source, medium, term, content);
	},
	sendEvent: function (){
		var category = Device.deviceOS + '-ui-action', 
			action = 'press', 
			label = 'Button1', 
			value = (new Date()).toISOString();
		SMF_GA_SCB.sendEvent(category, action, label, value);
	},
	sendInAppItem: function (){
		var transactionId = Device.deviceOS + '-TR_ID', 
			name = 'A product',
			sku = 'F_123', 
			category = 'Level', 
			price = 2.5, 
			quantity = 4, 
			currency = 'TRY';
		SMF_GA_SCB.sendInAppItem(transactionId, name, sku, category, price, quantity, currency);
	},
	sendInAppTransaction: function (){
		var transactionId = Device.deviceOS + '-TR_ID', 
			affiliation = 'In-App Store',
			revenue = 5.25,
			tax = 0.3,
			shipping = 0.15,
			currency = 'TRY';
		SMF_GA_SCB.sendInAppTransaction(transactionId, affiliation, revenue, tax, shipping, currency);
	},
	sendScreen: function(){
		SMF_GA_SCB.sendScreen("page1");
	},
	sendSocial: function(){
		var network = 'facebook',
			action = 'share',
			target = 'http://www.smartface.io/' + Device.deviceOS;
		SMF_GA_SCB.sendSocial(network, action, target);
	},
	sendTiming: function(){
		var category = Device.deviceOS + '-pageload',
			value = (new Date()).toISOString(),
			name = 'name',
			label = 'label';
		SMF_GA_SCB.sendTiming(category, value, name, label);
	},
	setOptOut: function(optout){

	},
	runNativeInterfaceTestsOnAndroid: function() {
		var ga = new SMFGoogleAnalytics("Landroid/content/Context;");
		ga.initTracker(APP_GLOBALS.GA_TRACKING_ID, 1, 0, true);
		ga.sendScreen("page1");
		ga.sendEvent("ui-action", "press", "Button1", 0);
		ga.sendSocial("facebook", "share", "http://www.smartface.io");
		ga.sendTiming("pageload", 123123433, "name", "label");
		ga.sendInAppTransaction("TR_ID", "In-App Store", 5.25, 0.3, 0.15, "TRY");
		ga.sendInAppItem("TR_ID", "A product", "F_123", "Level", 2.5, 4, "TRY");
		ga.sendCampaign("email", "email_marketing", "summer_campaign", "term", "email_variation_1");
	}
};