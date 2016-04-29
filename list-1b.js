/*	Write a function that inserts an element into a list only if the element to be
	inserted is larger than any of the elements currently in the list. Larger can
	mean either greater than when working with numeric values, or further down in
	the alphabet, when working with textual values.
*/

/*
 * 	List Class
 */

function List() {

	this.dataStore = []; // initializes

	this.toString = function() {
		return this.dataStore;
	};


	this.insert = function(element) {
	//	var insertedElement = this.dataStore.sort();
		//console.log("test:" + insertedElement);
		if(this.dataStore.length > 0){
			for(var i=0; i < this.dataStore.length; i++){
				if( element > this.dataStore[i]){
					this.dataStore.push(element);
					return true;
				}

			}
			return false;
		}else{
			this.dataStore.push(element);
			return true;
		}
	};

}



	//Testing
	var list = new List();
	list.insert("cat");
	list.insert("dog");
	list.insert("apple");
	console.log(list.toString());

	//list.insert(5);
	//list.insert(7);
	//list.insert(3);
	//console.log(list.toString());
