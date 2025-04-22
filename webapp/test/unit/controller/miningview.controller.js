/*global QUnit*/

sap.ui.define([
	"miningproject/suryasprint/controller/miningview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("miningview Controller");

	QUnit.test("I should test the miningview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
