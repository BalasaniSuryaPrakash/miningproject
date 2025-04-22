sap.ui.define([
    "./basecontroller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("miningproject.suryasprint.controller.detailview", {
        onInit() {
            let oRouter=this.getRouter()
            oRouter.attachRoutePatternMatched(this.onRouteMatched,this)
        },

        onRouteMatched:function(oEvent){
            this.index=oEvent.getParameter("arguments").indexdetail
            console.log(this.index);
            let sPath="MiningModel>/"+this.index
            let oView=this.getView()
            oView.bindElement(sPath)
            console.log(sPath);
        },
    
        onEdit:function(){
            let oRouter=this.getRouter()
            oRouter.navTo("Routeupdateview",{
                indexupdate:this.index
            })
        }

    });
  });

  