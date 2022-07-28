class TrieNode {
  constructor() {
    this.children = {};
    this.isEndNode = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let cur = this.root;
    for (let char of word) {
      if (!(char in cur.children)) {
        cur.children[char] = new TrieNode();
      }
      cur = cur.children[char];
    }
    cur.isEndNode = true;
  }

  search(word) {
    const dfs = (root, j) => {
      let cur = root;
      for (let i = j; i < word.length; i++) {
        let char = word[i];
        if (char === ".") {
          for (let key in cur.children) {
            if (dfs(cur.children[key], i + 1)) {
              return true;
            }
          }
          return false;
        } else {
          if (!(char in cur.children)) {
            return false;
          }
          cur = cur.children[char];
        }
      }
      return cur.isEndNode;
    };

    return dfs(this.root, 0);
  }
}
