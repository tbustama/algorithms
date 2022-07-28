class TrieNode {
  constructor() {
    this.children = {};
    this.isEndNode = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let cur = this.root;
    for (const char of word) {
      if (!(char in cur.children)) {
        cur.children[char] = new TrieNode();
      }
      cur = cur.children[char];
    }
    cur.isEndNode = true;
  }

  search(word) {
    let cur = this.root;
    for (const char of word) {
      if (char in cur.children) {
        cur = cur.children[char];
      } else {
        return false;
      }
    }
    return cur.isEndNode;
  }

  startsWith(prefix) {
    let cur = this.root;
    for (let char of prefix) {
      if (char in cur.children) {
        cur = cur.children[char];
      } else {
        return false;
      }
    }
    return true;
  }
}
