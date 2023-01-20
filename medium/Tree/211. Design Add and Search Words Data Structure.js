/*

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

*/

/* 

APPROACH: USe DFS recursive function to (search) Trie (prefix tree) and iterative function (addWord). For (addWord), if char of string does not exist, create a trie node with a hashmap for it's children and bool if end of word. For (search), call dfs function (dfs) passing (iterator, node, word) to traverse through node and child nodes.

Step 1:
	Create TrieNode class
	*set children hash map for any child nodes
	*set end to default of false
	*create setEnd() to set end to true for last node of word
	*create isEnd() to return bool value of end to check if node is end of word

Step 2:
	Create WordDictionary class
	* Create addWord function (to add a trie node for every char of word string)
	* Create search function (to search word in Trie)
	* Create dfs recursive function (for searching char of word string in Trie)

Step 3:
	For addWord function:
	* For every char in word, if tried node does not exist create node, else set current node (curr) to current char of word
	* Set end = true for last char of word

Step 4:
	For search function
	* Call recursive dfs function initialized with i (0), node (root), word (word)

Step 5:
	For dfs recursive function
	* Set base case, if index == word.length return node.end
	* Check for "." edge case
	** if current char of word is ".", call dfs recursive function on ALL child nodes, increment index (i)
	** for non "." characters, call dfs recursive function on child nodes of CURRENT node, increment index (i)


TIME COMPLEXITY: 

(search) Traverse through children of matching node and check for next match, O(log n)
(search) Word string contains ".", traverse through every node and check for match, O(n)
(addWord) Traverse through every char of string (word) and create Trie node, O(n)



*/

// node class
class TrieNode {
    constructor() {
        this.children = {}; //hash map of child nodes
        this.end = false; //bool if end of word
    }
    setEnd(){
    	// function to change end value if last trie node
        this.end = true;
    }
    isEnd(){
    	// function to check node.end value
        return this.end;
    }
}

class WordDictionary {
    constructor(){
    	// initialized with empty trie node 
        this.root = new TrieNode();
    }
    addWord(word){
    	// curr pointer
        let curr = this.root;
        
        // traverse through every char of word
        for(const char of word){
        	// create new trie node if char is not yet child of current node (curr)
            if(!(char in curr.children)){
                curr.children[char] = new TrieNode();
                
            }
            // current node (curr) already has child with value of current char of word, update curr pointer to that child
            curr = curr.children[char];
        }
        
        // call function to set node.end = true for last trie node
        curr.setEnd();
      
    }
    dfs(i, node, word){
    	// index has reached last node
    	// call function to return bool value of node.end
        if(i == word.length) {
            return node.isEnd();
        }
        
        let curr = node;
        
        // check for edge case when char is "."
        // if char == "." it can be matched to any char trie node
        if(word[i] == "."){
        	// call dfs recursive function on ALL children of current node
            for (let key in curr.children) {
            	// increment index (i) for next char of word
                if(this.dfs(i+1, curr.children[key], word)) return true;   
            }
        } else {
        	// current char of word[i] is not "."
        	// current node has child node of value char
            if(curr.children[word[i]]){
            	// call dfs recursive function on that child and check for next char of word[i]
            	// increment index (i) for next char of word
                return this.dfs(i+1, curr.children[word[i]], word);
            }
        }
        
        // node for char of word[i] not found
        // word does not exist in Trie, return false
        return false;
    }
    search(word){
    	// call recursive dfs function, initialized with i(0), node(root), word(word)
        return this.dfs(0, this.root, word);
    }
}