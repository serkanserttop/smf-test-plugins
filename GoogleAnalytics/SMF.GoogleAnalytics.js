SMF.GoogleAnalytics = (function() {
	var slice = Array.prototype.slice;
	var isAndroid = (Device.deviceOS === "Android") ? true : false;
	var fn = (isAndroid) ? SMFGoogleAnalytics : GAI;
	var ga;
	if(isAndroid) {
		ga = new SMFGoogleAnalytics("Landroid/content/Context;");
	} else {
		ga = GAI.sharedInstance();
	}
	return {
		dispatch: function(){
			ga.dispatch();
		},
		//getOptOut
		initTracker: function(trackingId, dispatchInterval, logLevel, trackUncaughtException) {
			if(isAndroid) {
				ga.initTracker.apply(ga, slice.call(arguments));
			} else {
				ga.dispatchInterval = dispatchInterval;
				ga.trackUncaughtException = trackUncaughtException;
				ga.logger = new GAILogger();
				ga.logger.logLevel = logLevel;
				var tracker = ga.trackerWithTrackingId(trackingId);
				return tracker;
			}
		},
	 	sendCampaign: function (name, source, medium, term, content) {
	 		if(isAndroid) {
				ga.sendCampaign.apply(ga, slice.call(arguments));
			} else {
				var tracker = ga.defaultTracker();
				var objects = {
    		"utm_campaign": name,
        "utm_source" : source,
        "utm_medium"   : medium,
        "utm_term"   : term,
        "utm_content"  : content
    	};
    	tracker.send(GAIDictionaryBuilder.createAppView().setAll(objects).build());
			}
	 	},
		sendEvent: function (category, action, label, value) {
			if(isAndroid) {
				ga.sendEvent.apply(ga, slice.call(arguments));
			} else {
				var tracker = ga.defaultTracker();
				tracker.send(GAIDictionaryBuilder.createEventWithCategoryActionLabelValue(category, action, label, value).build());
			}
		},
	 	sendInAppItem: function (transactionId, name, sku, category, price, quantity, currency) {
	 		if(isAndroid) {
				ga.sendInAppItem.apply(ga, slice.call(arguments));
			} else {
				var tracker = ga.defaultTracker();
				tracker.send(GAIDictionaryBuilder.createItemWithTransactionIdNameSkuCategoryPriceQuantityCurrencyCode(transactionId, name, sku, category, price, quantity, currency).build());
			}
	 	},
	 	sendInAppTransaction: function (transactionId, affiliation, revenue, tax, shipping, currency) {
	 		if(isAndroid) {
				ga.sendInAppTransaction.apply(ga, slice.call(arguments));
			} else {
				var tracker = ga.defaultTracker();
				tracker.send(GAIDictionaryBuilder.createTransactionWithIdAffiliationRevenueTaxShippingCurrencyCode(transactionId, affiliation, revenue, tax, shipping, currency).build());
			}
	 	},
		sendScreen: function(screen) {
			if(isAndroid) {
				ga.sendScreen.apply(ga, slice.call(arguments));
			} else {
				var tracker = ga.defaultTracker();
				var key = GAITrackerHelper.getKey('ScreenName');
		    tracker.setValue(key, screen);
		    tracker.send(GAIDictionaryBuilder.createAppView().build());
			}
		},
		sendSocial: function(network, action, target) {
			if(isAndroid) {
				ga.sendSocial.apply(ga, slice.call(arguments));
			} else {
				var tracker = ga.defaultTracker();
				tracker.send(GAIDictionaryBuilder.createSocialWithNetworkActionTarget(network, action, target).build());
			}
	 	},
	 	sendTiming: function(category, value, name, label) {
	 		if(isAndroid) {
				ga.sendTiming.apply(ga, slice.call(arguments));
			} else {
				var tracker = ga.defaultTracker();
				tracker.send(GAIDictionaryBuilder.createTimingWithCategoryIntervalNameLabel(category, value, name, label).build());
			}
	 	},
	 	//setDryRun(dryRun)
	 	setOptOut: function(optout) {
	 		ga.setOptOut(optout);
	 	}
	 	//setSessionControl(sessionControl)
	}
})();