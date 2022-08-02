class TrieNode {
  constructor() {
    (this.children = {}), (this.isEndNode = false);
  }
}

class Trie {
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
}

var findWords = function (board, words) {
  //     implement a trie
  let trie = new Trie();
  for (let word of words) {
    trie.addWord(word);
  }
  let rows = board.length,
    columns = board[0].length;
  let seen = new Array(rows).fill().map(() => {
    return new Array(columns).fill(false);
  });
  let resSet = new Set();

  const dfs = (r, c, node, word) => {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= columns ||
      !(board[r][c] in node.children) ||
      seen[r][c]
    ) {
      return false;
    }
    seen[r][c] = true;
    node = node.children[board[r][c]];
    word += board[r][c];
    if (node.isEndNode) {
      resSet.add(word);
    }
    dfs(r + 1, c, node, word);
    dfs(r - 1, c, node, word);
    dfs(r, c + 1, node, word);
    dfs(r, c - 1, node, word);
    seen[r][c] = false;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      dfs(r, c, trie.root, "");
    }
  }
  return [...resSet];
};
