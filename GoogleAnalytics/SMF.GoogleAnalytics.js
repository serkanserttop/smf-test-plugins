SMF_GA_SCB = (function() {
	var isAndroid = (Device.deviceOS === "Android") ? true : false;
	var ga = (isAndroid) ? new SMFGoogleAnalytics("Landroid/content/Context;") : GAI.sharedInstance();
	return {
		dispatch: function(){
			ga.dispatch();
		},
		sharedInstance: function(){
			return ga;
		},
		//getOptOut
		initTracker: function(trackingId, dispatchInterval, logLevel, trackUncaughtException) {
			if(isAndroid) {
				// return ga.initTracker.apply(ga, slice.call(arguments));
				ga.initTracker(trackingId, dispatchInterval, logLevel, trackUncaughtException);
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
	 			ga.sendCampaign(name, source, medium, term, content);
				// ga.sendCampaign.apply(ga, slice.call(arguments));
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
				// ga.sendEvent.apply(ga, slice.call(arguments));
				ga.sendEvent(category, action, label, value);
			} else {
				var tracker = ga.defaultTracker();
				tracker.send(GAIDictionaryBuilder.createEventWithCategoryActionLabelValue(category, action, label, value).build());
			}
		},
	 	sendInAppItem: function (transactionId, name, sku, category, price, quantity, currency) {
	 		if(isAndroid) {
				// ga.sendInAppItem.apply(ga, slice.call(arguments));
				ga.sendInAppItem(transactionId, name, sku, category, price, quantity, currency);
			} else {
				var tracker = ga.defaultTracker();
				tracker.send(GAIDictionaryBuilder.createItemWithTransactionIdNameSkuCategoryPriceQuantityCurrencyCode(transactionId, name, sku, category, price, quantity, currency).build());
			}
	 	},
	 	sendInAppTransaction: function (transactionId, affiliation, revenue, tax, shipping, currency) {
	 		if(isAndroid) {
				// ga.sendInAppTransaction.apply(ga, slice.call(arguments));
				ga.sendInAppTransaction(transactionId, affiliation, revenue, tax, shipping, currency);
			} else {
				var tracker = ga.defaultTracker();
				tracker.send(GAIDictionaryBuilder.createTransactionWithIdAffiliationRevenueTaxShippingCurrencyCode(transactionId, affiliation, revenue, tax, shipping, currency).build());
			}
	 	},
		sendScreen: function(screen) {
			if(isAndroid) {
				// ga.sendScreen.apply(ga, slice.call(arguments));
				ga.sendScreen(screen);
			} else {
				var tracker = ga.defaultTracker();
				var key = GAITrackerHelper.getKey('ScreenName');
		    tracker.setValue(key, screen);
		    tracker.send(GAIDictionaryBuilder.createAppView().build());
			}
		},
		sendSocial: function(network, action, target) {
			if(isAndroid) {
				// ga.sendSocial.apply(ga, slice.call(arguments));
				ga.sendSocial(network, action, target);
			} else {
				var tracker = ga.defaultTracker();
				tracker.send(GAIDictionaryBuilder.createSocialWithNetworkActionTarget(network, action, target).build());
			}
	 	},
	 	sendTiming: function(category, value, name, label) {
	 		if(isAndroid) {
				// ga.sendTiming.apply(ga, slice.call(arguments));
				ga.sendTiming(category, value, name, label);
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