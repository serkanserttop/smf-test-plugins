tests = tests || {};
tests.SMF_GoogleAnalytics = tests.SMF_GoogleAnalytics || {};
GLOBAL_GA = GAI.sharedInstance();
tests.SMF_GoogleAnalytics.iOS = {
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
		var ts = tests.SMF_GoogleAnalytics.iOS;
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
		GLOBAL_GA.dispatchInterval = dispatchInterval;
		GLOBAL_GA.trackUncaughtException = trackUncaughtException;
		GLOBAL_GA.logger = new GAILogger();
		GLOBAL_GA.logger.logLevel = logLevel;
		var tracker = GLOBAL_GA.trackerWithTrackingId(trackingId);
		return tracker;
	},
	sendCampaign: function () {
		var tracker = GLOBAL_GA.defaultTracker();
		var name = Device.deviceOS + '-email', 
			source = 'email_marketing', 
			medium = 'summer_campaign', 
			term = 'term', 
			content = (new Date()).toISOString();
		var objects = {
  		"utm_campaign": name,
      "utm_source" : source,
      "utm_medium"   : medium,
      "utm_term"   : term,
      "utm_content"  : content
		};
		tracker.send(GAIDictionaryBuilder.createAppView().setAll(objects).build());
	},
	sendEvent: function (){
		var category = Device.deviceOS + '-ui-action', 
			action = 'press', 
			label = 'Button1', 
			value = (new Date()).toISOString();
		var tracker = GLOBAL_GA.defaultTracker();
		tracker.send(GAIDictionaryBuilder.createEventWithCategoryActionLabelValue(category, action, label, value).build());
	},
	sendInAppItem: function (){
		var transactionId = Device.deviceOS + '-TR_ID', 
			name = 'A product',
			sku = 'F_123', 
			category = 'Level', 
			price = 2.5, 
			quantity = 4, 
			currency = 'TRY';
		var tracker = GLOBAL_GA.defaultTracker();
		tracker.send(GAIDictionaryBuilder.createItemWithTransactionIdNameSkuCategoryPriceQuantityCurrencyCode(transactionId, name, sku, category, price, quantity, currency).build());
	},
	sendInAppTransaction: function (){
		var transactionId = Device.deviceOS + '-TR_ID', 
			affiliation = 'In-App Store',
			revenue = 5.25,
			tax = 0.3,
			shipping = 0.15,
			currency = 'TRY';
		var tracker = GLOBAL_GA.defaultTracker();
		tracker.send(GAIDictionaryBuilder.createTransactionWithIdAffiliationRevenueTaxShippingCurrencyCode(transactionId, affiliation, revenue, tax, shipping, currency).build());
	},
	sendScreen: function(){
		var tracker = GLOBAL_GA.defaultTracker();
		var screen = 'Page1';
		var key = GAITrackerHelper.getKey('ScreenName');
    tracker.setValue(key, screen);
    tracker.send(GAIDictionaryBuilder.createAppView().build());
	},
	sendSocial: function(){
		var network = 'facebook',
			action = 'share',
			target = 'http://www.smartface.io/' + Device.deviceOS;
		var tracker = GLOBAL_GA.defaultTracker();
		tracker.send(GAIDictionaryBuilder.createSocialWithNetworkActionTarget(network, action, target).build());
	},
	sendTiming: function(){
		var category = Device.deviceOS + '-pageload',
			value = (new Date()).toISOString(),
			name = 'name',
			label = 'label';
		var tracker = GLOBAL_GA.defaultTracker();
		tracker.send(GAIDictionaryBuilder.createTimingWithCategoryIntervalNameLabel(category, value, name, label).build());
	},
	setOptOut: function(optout){

	},
	runNativeInterfaceTestsOnAndroid: function() {
		var ga = new SMFGoogleAnalytics("Landroid/content/Context;");
		GLOBAL_GA.initTracker(APP_GLOBALS.GA_TRACKING_ID, 1, 0, true);
		GLOBAL_GA.sendScreen("page1");
		GLOBAL_GA.sendEvent("ui-action", "press", "Button1", 0);
		GLOBAL_GA.sendSocial("facebook", "share", "http://www.smartface.io");
		GLOBAL_GA.sendTiming("pageload", 123123433, "name", "label");
		GLOBAL_GA.sendInAppTransaction("TR_ID", "In-App Store", 5.25, 0.3, 0.15, "TRY");
		GLOBAL_GA.sendInAppItem("TR_ID", "A product", "F_123", "Level", 2.5, 4, "TRY");
		GLOBAL_GA.sendCampaign("email", "email_marketing", "summer_campaign", "term", "email_variation_1");
	}
};