import BinarySearchTreeNode from "BinarySearchTreeNode.js";

class BinarySearchTree { // probably

    constructor()
    {
        this.#root = null; // BinarySearchTreeNode
    }

    getRoot() {
        return this.#root;
    }

    searchNode(data) {
        var curr = this.#root;
        while(curr !== null || curr.data !== data ) {
            if( curr.getData() > data)
                curr = curr.getLeftChild();
            else
                curr = curr.getRightChild();
        }

        if(curr.data === data)
            return true;
        return false;
    }

    addNode(data) {
        var curr = this.#root;

        while(curr !== null)
        {
            if(curr.getData() === data)
            {
                alert("You have entered a data existed in the current tree"); // TODO Implement alert messages on the screen
            }
            else if (curr.getData() > data) { // data is smaller than the data of current data
                if(curr.getLeftChild() !== null)
                    curr = curr.getLeftChild();
                else {
                    curr = new BinarySearchTreeNode(data);
                    break;
                }

            }
            else {
                if(curr.getRightChild() !== null)
                    curr = curr.getRightChild();
                else {
                    curr = new BinarySearchTreeNode(data);
                    break;
                }
            }
        }
    }
}
