/*	Write a function that inserts an element into a list only if the element to be
	inserted is larger than any of the elements currently in the list. Larger can
	mean either greater than when working with numeric values, or further down in
	the alphabet, when working with textual values.
*/


var List = (function () {
	this.dataStore = [];
	var that = this;

	function insert(element) {

			if(that.dataStore.length > 0){
				for(var i=0; i < that.dataStore.length; i++){
					if( element > that.dataStore[i]){
						that.dataStore.push(element);
						return true;
					}

				}
				return false;
			} else {
				that.dataStore.push(element);
				return true;
			}
	}

	function toString() {
		return that.dataStore;
	}

	return {
		insert: insert,
		toString: toString
	};


})();



//Testing
//var list = new List();
List.insert(6);
List.insert(5);
List.insert(8)
console.log(List.toString());
