export default class CommonUtils {
  public static generateRandomId() {
    return Math.random().toString(36).substring(2, 16);
  }

  public static range(start: number, end: number) {
    if (start > end) throw new RangeError();
    return [...Array(end - start + 1).keys()].map(i => i + start);
  }
}
