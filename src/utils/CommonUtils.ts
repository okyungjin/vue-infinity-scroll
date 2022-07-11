export default class CommonUtils {
  public static generateRandomId() {
    return Math.random().toString(36).substring(2, 16);
  }
}
