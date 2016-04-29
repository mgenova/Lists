/*	Write a function that inserts an element into a list only if the element to be
	inserted is larger than any of the elements currently in the list. Larger can
	mean either greater than when working with numeric values, or further down in
	the alphabet, when working with textual values.
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
			if( element > this.dataStore[i]){
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
list.insert("cat");
list.insert("dog");
list.insert("apple");
console.log(list.toString());

//list.insert(5);
//list.insert(7);
//list.insert(3);
//console.log(list.toString());















/*
// Removing an Element from a List
function remove(element) {
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true;
	}
	return false;
}

// Determining the Number of Elements in a List
function length() {
	return this.listSize;
}



// Inserting an Element into a List
//if element is larger than any elements in list, insert element




// Removing All Elements from a List
function clear() {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

// Determining if a Given Value Is in a List
function contains(element) {
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) {
			return true;
		}
	}
	return false;
}


// Traversing a List

function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize-1;
}

function prev() {
	if (this.pos > 0) {
		--this.pos;
	}
}

function next() {
	if (this.pos < this.listSize-1) {
		++this.pos;
	}
}

function currPos() {
	return this.pos;
}

function moveTo(position) {
	this.pos = position;
}


*/
