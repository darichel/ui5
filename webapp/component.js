sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function(UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("my.app.component", {
        metadata: {
            rootView: {
                "viewName" : "my.app.view.App",
                "type": "XML",
                "async": true,
                "id": "app",
            }
        },
        init: function () {
            //Call init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            
            //Set data models
            let oData = {
                recipient: {
                    name: "UI5"
                }
            };
            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            //Set i18n model
            let i18nModel = new ResourceModel({
                bundleName: "my.app.i18n.i18n",
                supportedLocales: [""],
                fallBackLocale: "",
            });
            this.getView().setModel(i18nModel, "i18n");
            
        }
    })
});