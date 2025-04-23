sap.ui.define([
    "./basecontroller",
    "sap/m/MessageBox"
   
], (basecontroller,MessageBox) => {
    "use strict";

    return basecontroller.extend("miningproject.suryasprint.controller.updateview", {
        onInit() {
            let oRouter=this.getRouter()
            oRouter.attachRoutePatternMatched(this._onMatched,this)
        },

        _onMatched:function(oEvent){
            let index=oEvent.getParameter("arguments").indexupdate
            let spath="MiningModel>/"+index
            let oView=this.getView()
            oView.bindElement(spath)

        },

        onUpdate:function(){
          
                
                let oLocId=this.getView().byId("idlUp")
                let oCurKey=this.getView().byId("idUpCurKey")
                let oDrill=this.getView().byId("idUpDri")
                let oMin=this.getView().byId("idUpMin")
                let oRep=this.getView().byId("idUprep")  
                let oDesc = this.getView().byId("idUpdesc")  
                let oCos=this.getView().byId("idUpCos")
    

                let sLocId=oLocId.getValue()
                let sCurKey=oCurKey.getValue()
                let sDrill=oDrill.getValue()
                let sMin=oMin.getValue()
                let sRep=oRep.getValue()
                let sDesc=oDesc.getValue()
                let sCos=oCos.getValue()

    
                // let vDate=new Date(sFld).getTime()
    
                // let fDate="\/Date("+vDate+")\/"


                // {

                //     "LocId" : "0000001067",
                //     "Currency" : "USD",
                //     "DrillN" : "2",
                //     "LMineral" : "SILVER",
                //     "LDesc" : "WESTERN RIDGE2",
                //     "Report" : "PURE SILVER DEPOSITS, PROMISING HIGH RETURNS ON INVESTMENT.",
                //     "LCost" : "300000.00"
                
                
                // }
    
                let payLoad={
                    
                    "DrillN":sDrill,
                    "LMineral":sMin,
                    "LDesc":sDesc,
                    "Report":sRep,
                    "LCost":sCos
                    //  "LMineral":sMin,
                    //  "Report":sRep
                }
    
    
    
                //get the model
                    let oModel=this.getOwnerComponent().getModel()
                    
                //get entity

                //            /SprintProjectSet(LocId='0000001004',Currency='USD')
                let entity = "/SprintProjectSet(LocId='"+ sLocId +"')"
    
             
                //method
              let that=this
                oModel.update(entity,payLoad,{
                    success:function(){
                        MessageBox.success("record updated",{
                            onClose:function(){
                                let oRouter=that.getOwnerComponent().getRouter();
                                oRouter.navTo("RouteMiningview")
               
                
                            }.bind(that)
                        
                    })
                    
    
                    },
                    error:function(){
                        MessageBox.error("record failed")
                    }
                })
    
    
            
    
        }
    });
});