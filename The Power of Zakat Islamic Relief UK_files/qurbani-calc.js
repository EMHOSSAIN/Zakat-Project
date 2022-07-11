function groupArray(name, quantity) {
	var self = this;
	self.name = name;
	self.quantity = ko.observable(quantity);
	self.totalA = ko.computed(function() {
   		return (getIntValue(document.getElementById("qurbanipriceA")) * self.quantity()).toFixed(2) ;
	});

	self.totalB = ko.computed(function() {
   		return (getIntValue(document.getElementById("qurbanipriceB")) * self.quantity()).toFixed(2) ;
	});

	self.totalC = ko.computed(function() {
   		return (getIntValue(document.getElementById("qurbanipriceC")) * self.quantity()).toFixed(2) ;
	});

	self.totalD = ko.computed(function() {
   		return (getIntValue(document.getElementById("qurbanipriceD")) * self.quantity()).toFixed(2) ;
	});

	self.totalE = ko.computed(function() {
   		return (getIntValue(document.getElementById("qurbanipriceE")) * self.quantity()).toFixed(2) ;
	});



	self.totalK = ko.computed(function() {
   		return (getIntValue(document.getElementById("qurbanipriceUK")) * self.quantity()).toFixed(2) ;
	});

	self.totalL = ko.computed(function() {
   		return (getIntValue(document.getElementById("qurbanipricePlus")) * self.quantity()).toFixed(2) ;
	});

	self.totalEID = ko.computed(function() {
   		return (getIntValue(document.getElementById("qurbanipriceEID")) * self.quantity()).toFixed(2) ;
	});
//	self.totalS = ko.computed(function() {
//   		return (15 * self.quantity()).toFixed(2) ;
//	});
//	self.totalZAKAT = ko.computed(function() {
//   		return (50 * self.quantity()).toFixed(2) ;
//	});
//	self.totalSADAQAH = ko.computed(function() {
//   		return (75 * self.quantity()).toFixed(2) ;
//	});
//


}

function getIntValue(field) {
    if (isNaN(field.value)) {
        field.value = "0";
        return 0;
    }
    else if (field.value == "") {
        field.value = "0";
        return 0;
    }
    else {
        return parseFloat(field.value);
    }
}
function validateValue(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

function validateQurbani(){
var oTotal = $('#overallTotal');
if(oTotal.val() == 0)
{
     alert("Please enter a quantity");
     return false;
}
return true;
}

$(document).on("change", ".quantity", function(){
	var totalA = 0;
	var totalB = 0;
	var totalC = 0;
	var totalD = 0;
	var totalE = 0;
	var totalK = 0;
	var totalL = 0;
	var totalEID = 0;
	var totalFG = 0;
	var totalstove= 0;
	var totalO = 0;

	$('.oTotal').each(function() {
	  totalO += parseInt($(this).val()) || 0;
	});

	$('#totalGroupA').val(totalA.toFixed(2));
	$('#totalGroupAtext').text(totalA.toFixed(2));

	$('#totalGroupB').val(totalB.toFixed(2));
	$('#totalGroupBtext').text(totalB.toFixed(2));

	$('#totalGroupC').val(totalC.toFixed(2));
	$('#totalGroupCtext').text(totalC.toFixed(2));

	$('#totalGroupD').val(totalD.toFixed(2));
	$('#totalGroupDtext').text(totalD.toFixed(2))

	$('#totalGroupE').val(totalE.toFixed(2));
	$('#totalGroupEtext').text(totalE.toFixed(2))

	$('#totalGroupK').val(totalK.toFixed(2));
	$('#totalGroupKtext').text(totalK.toFixed(2))

	$('#totalGroupL').val(totalL.toFixed(2));
	$('#totalGroupLtext').text(totalL.toFixed(2))


	$('#totalEID').val(totalEID.toFixed(2));
	$('#totalEIDtext').text(totalEID.toFixed(2));

	$('#totalFG').val(totalFG.toFixed(2));
	$('#totalFGtext').text(totalFG.toFixed(2));
	$('#totalstove').val(totalstove.toFixed(2));
	$('#totalstovetext').text(totalstove.toFixed(2));

	$('#overallTotal').val(totalO.toFixed(2));
	$('#overallTotalText').text(totalO.toFixed(2));
});



function QurbaniViewModel() {
    var self = this;

    self.groupA = ko.observableArray([
		new groupArray("Group A - £49", "", "0")
    ]);

    self.groupB = ko.observableArray([
		new groupArray("Group B - £79", "", "0")
    ]);

    self.groupC = ko.observableArray([
		new groupArray("Group C - £139", "", "0")
    ]);

    self.groupD = ko.observableArray([
		new groupArray("Group D - £199", "", "0")
    ]);
    self.groupE = ko.observableArray([
		new groupArray("Group E - £159", "", "0")
    ]);
    self.groupK = ko.observableArray([
		new groupArray("Group K - £159", "", "0")
    ]);

		self.groupL = ko.observableArray([
		new groupArray("Group L - £159", "", "0")
    ]);

    self.EID = ko.observableArray([
		new groupArray("EID - £10", "", "0")
    ]);
//     self.S = ko.observableArray([
//		new groupArray("S - £15", "", "0")
//    ]);
//     self.ZAKAT = ko.observableArray([
//		new groupArray("ZAKAT - £50", "", "0")
//    ]);
//     self.SADAQAH = ko.observableArray([
//		new groupArray("SADAQAH - £75", "", "0")
//    ]);


}

// Activates knockout.js
//ko.applyBindings(new QurbaniViewModel());
