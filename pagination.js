class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1;
    if (pageIndex == this.pageCount() - 1) {
      return itemCount() % this.itemsPerPage || this.itemsPerPage;
    } else {
     return this.itemsPerPage;
    }
  }
  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    }

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
const collection = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
const helper = new PaginationHelper(collection, 10);
console.log(helper.pageItemCount(1));
// doTest(helper, 'pageItemCount', 10, 1);
// doTest(helper, 'pageItemCount', 4, 2);
// doTest(helper, 'pageItemCount', -1, 3);
// doTest(helper, 'pageIndex', -1, 40);
