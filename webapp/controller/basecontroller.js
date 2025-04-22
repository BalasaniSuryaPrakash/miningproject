sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (Controller) => {
    "use strict";
  
    return Controller.extend("miningproject.suryasprint.controller.basecontroller", {
        onInit() {
        },
        getRouter:function(){
          return this.getOwnerComponent().getRouter()
        
        },
        getModel:function(){
          return this.getOwnerComponent().getModel()

        }
    });
  });