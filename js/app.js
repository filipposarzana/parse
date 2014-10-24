$(function() { 
    Parse.$ = jQuery;
	Parse.initialize("kKy5K3VQBZN1pVS2K0OHBkdXVAp3s3sv58LAvBIw", "72DMFBWSA46VZsBohVuMOnjK4PDA9MIxWyBKR2Nx");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
	  alert("yay! it worked");
	});
});