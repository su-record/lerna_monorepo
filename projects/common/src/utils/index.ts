export class CommonUtils {
  /***
   * @description const to array
   * */
  static objectToArray<T extends object>(obj: T): T[] {
    return Object.entries(obj).reduce((result: T[], [key, value]) => {
      if (Number.isNaN(Number(key))) {
        result.push({ label: key, value } as T);
      }
      return result;
    }, []);
  }

  /***
   * @description delay
   * */

  static delay(ms = 100) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
