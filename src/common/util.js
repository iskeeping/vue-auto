export default {
  getYMDHMS(timestamp = '') {
    const d = new Date(timestamp)
    return {
      year: d.getFullYear(),
      month: this.bZero(d.getMonth() + 1),
      date: this.bZero(d.getDate()),
      hour: this.bZero(d.getHours()),
      minute: this.bZero(d.getMinutes()),
      second: this.bZero(d.getSeconds())
    }
  },
  bZero(d) {
    if (d > 9) {
      return d
    }
    return '0' + d
  },
  findChildren(arr, parentId) {
    let children = []
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
      if (item.parentId === parentId) {
        children.push(item)
      }
    }
    return children
  },
  findParents(arr, id) {
    let parents = []
    // eslint-disable-next-line no-shadow
    let findParent = function (arr, id) {
      let parent
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (item._id === id) {
          parent = item
          break
        }
      }
      return parent
    }
    let parent = findParent(arr, id)
    if (parent) {
      parents.unshift(parent)
    }
    while (parent && parent.parentId !== '0') {
      parent = findParent(arr, parent.parentId)
      parents.unshift(parent)
    }
    return parents
  },
  createTree(arr, rootId) {
    let children = this.findChildren(arr, rootId)
    if (children.length <= 0) {
      return
    }
    for (let i = 0; i < children.length; i++) {
      let childTree = this.createTree(arr, children[i]._id)
      if (childTree) {
        children[i]['children'] = childTree
      }
    }
    return children
  }
}

