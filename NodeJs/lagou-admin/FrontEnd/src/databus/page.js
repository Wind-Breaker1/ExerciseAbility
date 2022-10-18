class Page {
  constructor() {
    this.currentPage = 1;
    this.pageSize = 3;
    this.currentRoute = '#/index';
  }
  reset() {
    this.currentPage = 1;
    this.pageSize = 3;
  }
  setCurRoute(route) {
    this.currentRoute = route;
  }
  setCurPage(currentPage) {
    this.currentPage = currentPage;
  }
}

export default new Page();