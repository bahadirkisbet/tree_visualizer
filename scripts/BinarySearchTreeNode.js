

class BinarySearchTreeNode{
    constructor(cdata = null, cleft = null ,cright = null) {
        this.data = cadata;
        this.left = cleft;
        this.right = cright;
    }
    function getData() {
        return this.data;
    }

    function getLeftChild() {
        return this.left;
    }

    function getRightChild() {
        return this.right;
    }

    function setData(newData) {
        this.data = newData;
    }

    function setRightChild(newChild) {
        this.right = newChild;
    }

    function setLeftChild(newChild) {
        this.left = newChild;
    }
}
