sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("appstate01.controller.View1", {
			onInit: function () {
				// if (Object.keys(this.getOwnerComponent().getComponentData().startupParameters).length !== 1) {
				// 	var state_key = this.getOwnerComponent().getComponentData().startupParameters.App_Key[0];
				// 	var oComponent = this.getOwnerComponent();
				// 	var that = this;
				// 	sap.ushell.Container.getService("CrossApplicationNavigation").getAppState(oComponent, state_key).done(function (oSavedAppState) {
				// 		// this.getView().byId("slName").setProperty("selectedKeys", oSavedAppState.getData());	
				// 		that.getView().byId("input1").setValue(oSavedAppState.getData());
	
				// 	});
				// }
			},

			onPress: function () {
				var inputVal = this.getView().byId("input1").getValue();
				var oAppState = sap.ushell.Container.getService("CrossApplicationNavigation").createEmptyAppState(this.getOwnerComponent());
				oAppState.setData(inputVal);
				oAppState.save();
				var navService = sap.ushell.Container.getService("CrossApplicationNavigation");
				var href = (navService && navService.hrefForExternal({
					target: {
						semanticObject: "zappState002",
						action: "Display"
					},
					params: {
						// "Data": inputVal
					},
					appStateKey: oAppState.getKey()
				}) || "");
				navService.toExternal({
					target: {
						shellHash: href
					}
				});
			}
		});
	});
