// Problem #2: Singly Linked List: 
// Please construct the two classes with the appropriate properties for the Node and SLL, then for the SLL, 
// please write the methods for: 
// - Push()
// - Pop()

//we need to create a class with value and the poiner to the next node. Node has two properties value and next (pointer)
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

//then we need to create a Class for our DS which is SSL. SSL has three properties head, tail and length.
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    //when we create push method for SSL it works similar to how we use JS method push for an array. 

    push(val) {
        //creating a new node using the passing value
        let newNode = new Node(val);
        //if linked list is empty we will set head and tail to be a new Node
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            //if there is a linked list we set the new node to the tail
            this.tail.next = newNode;
        }
        //then we need to reasign the tail to be a newNode
        this.tail = newNode;
        //we need to update the length
        this.length++;
        //we are returning the linked list
        return this;
    }


    //in pop method we don't pass any values. Pop removes last node from SSL
    pop() {
        //if there is no node in the list we need to return null or undefined
        if (!this.length)
            return undefined;
        else {
            //we need to set current head as a current node as we need to start from head
            let current = this.head;
            //as we cannot go back we neeed to set the second to last node
            let newTail = current;
            //we loop as long as current node has a next node
            while (current.next) {
                //we need to set current node to the second to last
                newTail = current;
                //we set current to the next node
                current = current.next;
            }
            //setting the tail to the second to last
            this.tail = newTail;
            //we need to cut the connection by setting second to last node to null
            this.tail.next = null;
            //as the size of the list changed, now we need to decrease the length of SSL by 1
            this.length--;
            //if SSl is empty after remmoving the node we set its head and tail to initial values which is null
            if (!this.length) {
                this.head = null;
                this.tail = null;
            }
            return current;
        }
    }
}


const newSLL = new SinglyLinkedList();
newSLL.push(8);
newSLL.push(10);
console.log(newSLL);
console.log(newSLL.pop());