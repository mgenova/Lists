/*
	Write a function that inserts an element into a list only if the element to
	be inserted is smaller than any of the elements currently in the list.
*/


// List Class Implementation
function List() {

	this.dataStore = []; // initializes an empty array to store list elements
	this.insert = insert;
	this.toString = toString;


}


// Inserts a larger element in the list
function insert(element) {
	if(this.dataStore.length > 0){
		for(var i=0; i < this.dataStore.length; i++){
			if( element < this.dataStore[i]){
				this.dataStore.push(element);
				return true;
			}

		}
		return false;
	} else {
		this.dataStore.push(element);
		return true;
	}

}

// Retrieving a List’s Elements
function toString() {
	return this.dataStore;
}


//Testing
var list = new List();
//list.insert("cat");
//list.insert("dog");
//list.insert("apple");
//console.log(list.toString());

list.insert(5);
list.insert(7);
list.insert(3);
list.insert(9);
list.insert(2);
console.log(list.toString());
