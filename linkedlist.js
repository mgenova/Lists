//LinkedList implementation

// Node Class
function Node(data) {
    this.data = data;
    this.next = null;
}

// LinkedList Class
function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

// Takes data object and creates a new node from it. New node adds in the end of list
LinkedList.prototype.add = function(data) {
    var node = new Node(data);
    
    if(this.head === null) {
        this.head = node;
        this.tail = node;
    }
    
    this.tail.next = node;
    this.tail = node;
    this.length += 1;
    
    return node;
};


LinkedList.prototype.delete = functio(node) {
    if (this.length === 1) {
        return false;
    }
    
    if(node instanceof Node) {
        for (var _node = this.head; _node !== null; _node = node.next) {
            if( _node.next === node) {
                _node.next = node.next;
                this.length -= 1;
                return true;
            }
        }
    } else {
        for( var_node = this.head; _node !== null; _node = _node.next) {
            if (_node.next === this.tail) {
                _node.next = null;
                this.tail = node;
                this.length -= 1;
                return true;
            }
        }
    }
    return false;
};


LinkedList.prototype.clear = function() {
    this.length = 0;
    this.head = null;
    this.tail = null;
   
};

LinkedList.prototype.has = function(node) {
    for( var _node = list.head; _node !== null; _node = _node.next) {
        if( _node === node) {
            return true;
        }
    }
    return false;
};
