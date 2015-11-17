var tests = tests || {};
tests.SMF_GoogleAnalytics = {
	checkIfInstalled: function(){
		var ga, isError = false;
		try {
			if(Device.deviceOS === 'Android') {
				ga = new SMFGoogleAnalytics("Landroid/content/Context;");    
			} else {
				ga = GAI.sharedInstance();
			}
		} catch(e) {
			isError = true;
			alert('Google Analytics plugin does not work');
		}
		if(!isError) {
			alert('Google Analytics plugin works');
		}
	},
	initTracker: function(){
		var dispatchInterval = 1;
		var logLevel = 0;
		var trackUncaughtException = true;
		return SMF.GoogleAnalytics.initTracker(APP_GLOBALS.GA_TRACKING_ID, dispatchInterval, logLevel, trackUncaughtException);
	},
	sendCampaign: function () {
		var name = Device.deviceOS + '-email', 
			source = 'email_marketing', 
			medium = 'summer_campaign', 
			term = 'term', 
			content = 'email_variation_1';
		SMF.GoogleAnalytics.sendCampaign(name, source, medium, term, content);
	},
	sendEvent: function (){
		var category = Device.deviceOS + '-ui-action', 
			action = 'press', 
			label = 'Button1', 
			value = 0;
		SMF.GoogleAnalytics.sendEvent(category, action, label, value);
	},
	sendInAppItem: function (){
		var transactionId = Device.deviceOS + '-TR_ID', 
			name = 'A product', 
			sku = 'F_123', 
			category = 'Level', 
			price = 2.5, 
			quantity = 4, 
			currency = 'TRY';
		SMF.GoogleAnalytics.sendInAppItem(transactionId, name, sku, category, price, quantity, currency);
	},
	sendInAppTransaction: function (){
		var transactionId = Device.deviceOS + '-TR_ID', 
			affiliation = 'In-App Store',
			revenue = 5.25,
			tax = 0.3,
			shipping = 0.15,
			currency = 'TRY';
		SMF.GoogleAnalytics.sendInAppTransaction(transactionId, affiliation, revenue, tax, shipping, currency);
	},
	sendScreen: function(){
		SMF.GoogleAnalytics.sendScreen("page1");
	},
	sendSocial: function(){
		var network = 'facebook',
			action = 'share',
			target = 'http://www.smartface.io/' + Device.deviceOS;
		SMF.GoogleAnalytics.sendSocial(network, action, target);
	},
	sendTiming: function(){
		var category = Device.deviceOS + '-pageload',
			value = '123123433',
			name = 'name',
			label = 'label';
		SMF.GoogleAnalytics.sendTiming(category, value, name, label);
	},
	setOptOut: function(optout){

	}
};