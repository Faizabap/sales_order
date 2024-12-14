sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("salesorder.controller.sales_details", {
        onInit() {

            const oModel = this.getOwnerComponent().getModel();
           
            oModel.read("/sales_headerSet", {

                success: (oData )=> {                 
                    console.log("Data retrieved:", oData.results);
                   
                    const oJSONModel = new sap.ui.model.json.JSONModel(oData.results);
                    this.getView().setModel(oJSONModel,"saleshead");
                },
                error:(oError) => {
                    console.error("Error fetching data:", oError);
                }
            });
        },

        onPressGoToMaster: function (oEvent) {
            // Get the clicked item
            var oSelectedItem = oEvent.getSource();
        
            // Get the binding context of the selected item
            var oBindingContext = oSelectedItem.getBindingContext("saleshead");
        
            // Extract the `DocNumber` value
            var sDocNumber = oBindingContext.getProperty("DocNumber");
        
            // Log or handle the selected DocNumber
            
            // sDocNumber = "0000000" + sDocNumber;
            console.log("Selected DocNumber:", sDocNumber);
            //Get Item service result
            const oModel = this.getOwnerComponent().getModel();
            var sFilter = encodeURIComponent("DocNumber eq '" + sDocNumber + "'");
            oModel.read("/sales_itemSet", {
             
                filters: [new sap.ui.model.Filter("DocNumber", sap.ui.model.FilterOperator.EQ, sDocNumber)],
             
                success: (oData )=> {                                  
                    const oJSONModel = new sap.ui.model.json.JSONModel(oData.results);
                    this.getView().setModel(oJSONModel,"salesitems");
                    console.log("Data retrieved:", oData.results);
                },
                error:(oError) => {
                    console.error("Error fetching data:", oError);
                }
            });
        },
    
    });
});