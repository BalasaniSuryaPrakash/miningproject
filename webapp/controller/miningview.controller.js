

sap.ui.define([
    "./basecontroller",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"

   
], (basecontroller, MessageBox, Filter,FilterOperator,Sorter) => {
    "use strict";

    return basecontroller.extend("miningproject.suryasprint.controller.miningview", {
        onInit() {



            
                let oModel=this.getModel()
                let entity="/SprintProjectSet"
                oModel.read(entity,{
                    success:(odata,resp)=>{
    
                        let JModel=this.getOwnerComponent().getModel("MiningModel")
                        JModel.setData(odata.results)
                        // let oModelJs=new sap.ui.model.json.JSONModel(odata)
                        // this.getView().setModel(oModelJs,"MiningModel")
                        
                    },
                    error:(error)=>{
                        console.log(error)
                    }
                })
        






        },

        onCreate:function(){
            var oRouter = this.getRouter();
                oRouter.navTo("RouteCreateview");
        },

        onDelete:function(oEvent){
            let oContext=oEvent.getSource().getBindingContext("MiningModel").getObject()
             MessageBox.confirm("are you sure you want to delete",{
                   onClose:(choice)=>{
                        if(choice==='OK'){
                           this._onDeleteCall(oContext)
  
                 }
  
             }
             })
         },
         _onDeleteCall: function(parm) {
             let key1 = parm.LocId;
            
            
             let oModel = this.getModel();
          
             let entity = `/SprintProjectSet('${key1}')`;
  
             oModel.remove(entity, {
                 success: (resp) => {
                     MessageBox.success("Record Deleted",{
                         onClose: function(){
                             this.onInit()
                         }.bind(this)
                     });
                 },
                 error: (err) => {
                     MessageBox.error("Deletion Failed");
                 }
             });
         },
         
        onSearch: function(oEvent){
            var searchString=oEvent.getParameter("query")||oEvent.getParameter("newValue");
            var oName=new Filter("Mineral", FilterOperator.Contains, searchString);
            var oAvail=new Filter("LocationId", FilterOperator.Contains, searchString);
            var aFilter=[oName, oAvail];
            var mainFilter=new Filter({
                filters:aFilter,
                and:false
            });
            var oList=this.getView().byId("idListCtrl");
            var oBinding=oList.getBinding("items");
            oBinding.filter(mainFilter);
        },

        onRowSelection:function(oEvent){
            let oItem=oEvent.getParameter("listItem")
            let oContext=oItem.getBindingContextPath("MiningModel")
            let aItems=oContext.split("/")
            let index=aItems[aItems.length-1]
            let oRouter=this.getRouter()
            oRouter.navTo("Routedetailview",{
                indexdetail:index
            })

        }
    });
});



