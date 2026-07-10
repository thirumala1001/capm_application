sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"employeeinformation/employeedatamodule/test/integration/pages/empbioSetList.gen",
	"employeeinformation/employeedatamodule/test/integration/pages/empbioSetObjectPage.gen",
	"employeeinformation/employeedatamodule/test/integration/pages/FamilyMembersSetObjectPage.gen"
], function (JourneyRunner, empbioSetListGenerated, empbioSetObjectPageGenerated, FamilyMembersSetObjectPageGenerated) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('employeeinformation/employeedatamodule') + '/test/flp.html#app-preview',
        pages: {
			onTheempbioSetListGenerated: empbioSetListGenerated,
			onTheempbioSetObjectPageGenerated: empbioSetObjectPageGenerated,
			onTheFamilyMembersSetObjectPageGenerated: FamilyMembersSetObjectPageGenerated
        },
        async: true
    });

    return runner;
});

