/*global QUnit*/

sap.ui.define([
	"sales_order/controller/sales_details.controller"
], function (Controller) {
	"use strict";

	QUnit.module("sales_details Controller");

	QUnit.test("I should test the sales_details controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
