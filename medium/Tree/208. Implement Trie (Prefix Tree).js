/*

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

*/

/*

APPROACH: 
	Create Trie (prefix tree) by creating trie nodes with hash map for children and bool to show end of word. 
	For (insert), create new trie node if one does not already exist, update bool for last character of word. 
	For (search), traverse through every character of word to check if word exists in trie. Word exists if last character of word is node.end = true.
	For (startsWith), traverse through every character of prefix to check if prefix exists in trie. Prefix exists if word starting with prefix is in trie.

Step 1:
	Create TrieNode class
	* TrieNode will have hash map for its child nodes and bool to show if it is the last node of word

Step 2: 
	Create Trie Class
	* Initialized with empty TrieNode for root
	* Create insert function to add word to Trie
	* Create search function to check if word exists in Trie
	* Create startsWith function to check of word starting with prefix exists
	* Create dfs function to traverse through trie nodes and check if complet word or prefix exits, called by search and startsWith functions

Step 3:
	For insert function:
	* For every char in word, if tried node does not exist create node, else set current pointer node (curr) to trie node for char of word
	* Set end = true for last char of word

Step 4:
	For dfs function:
	* Initialize curr pointer to root trie node
	* Traverse through every character of word to check if trie node exists, return null if node does not exist or update pointer (curr) to trie node
	* Return node to function that called it

Step 5:
	For search function:
	* Set current node pointer (curr) to value returned by dfs function
	* Return true if node value returned by dfs function is not null and node is last node (node.end = true), else return false

Step 6:
	For startsWith function:
	* Set current node pointer (curr) to value returned by dfs function
	* Return true if node value returned by dfs function is not null (node for last char of prefix was found), else return false



TIME COMPLEXITY: O(n)

	(insert) Traverse through every char of string (word) and create Trie node, O(n)
	(search) Traverse through children of matching node and check for next match, O(log n)
	(startsWith) Traverse through children of matching node and check for next match, O(log n)


*/

// TrieNode
class TrieNode {
    constructor(){
        this.children = {};
        this.end = false;
    }
}

// Trie class
class Trie {
    constructor(){
        this.root = new TrieNode();
    }

    // function to insert word
    insert(word){
    	// pointer to current node
        let curr = this.root;
        
        // traverse through every character of word
        for(let i = 0; i < word.length; i++){
            let c = word[i];
            
            // create trie node if node of value, word[i], does not already exist as child of current node 
            if(!(c in curr.children)){
                curr.children[c] = new TrieNode();
            }
            
            // update pointer to current trie node
            curr = curr.children[c];
        }
        
        // update node.end = true for last char of word
        curr.end = true;
    }

    // function to search for word or prefix
    dfs(word){
    	// pointer to current node
        let node = this.root;
        
        // traverse through every character of word
        for(let i = 0; i < word.length; i++){
            let c = word[i];
            
            // return null if trie node for current char of word does not exist
            if(!(c in node.children)){
                return null;
            }
            
            // trie node for current char of word exists
            // update pointer to node ^^
            node = node.children[c];
        }
        
        // return node to function that called it
        return node;
    }

    // function to search if word exists in Trie
    search(word){
    	// set curr pointer to value returned by dfs function
        let curr = this.dfs(word);
        
        // return true if curr pointer is not null and last char of word is word.end = true
        return curr != null && curr.end;
    }

    // function to check if prefix exists in Trie
    startsWith(prefix){
        // set curr pointer to value returned by dfs function
        let curr = this.dfs(prefix);
        
        // value returned by dfs function
        // node will be returned if last char of prefix exists in trie
        return curr != null;
    }
}