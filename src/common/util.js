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
  }
}
