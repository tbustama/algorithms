var canFinish = function (numCourses, prerequisites) {
  let map = new Map();
  for (let i = 0; i < numCourses; i++) {
    map.set(i, []);
  }
  for (const pre of prerequisites) {
    map.get(pre[0]).push(pre[1]);
  }

  let visited = new Set();
  const dfs = (crs) => {
    if (visited.has(crs)) {
      return false;
    }

    if (map.get(crs) === []) {
      return true;
    }

    visited.add(crs);
    for (let pre of map.get(crs)) {
      if (!dfs(pre)) {
        return false;
      }
    }
    visited.delete(crs);
    map.set(crs, []);
    return true;
  };
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }
  return true;
};
