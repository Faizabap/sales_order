sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("salesorder.controller.sales_details", {
        onInit() {

            const oModel = this.getOwnerComponent().getModel();
           
            oModel.read("/sales_itemSet", {

                success: (oData )=> {                 
                    console.log("Data retrieved:", oData.results[0]);
                   
                    const oJSONModel = new sap.ui.model.json.JSONModel(oData.results);
                    this.getView().setModel(oJSONModel,"salesitem");
                },
                error:(oError) => {
                    console.error("Error fetching data:", oError);
                }
            });


        }
    });
});