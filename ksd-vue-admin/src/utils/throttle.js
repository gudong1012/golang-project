/**
 * 节流原理：在一定时间内，只能触发一次
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */

const throttleObj = {
  zflag: null,
  ztimer: null,
  throttle(func, wait = 500, immediate = true) {
    if (immediate) {
      if (!throttleObj.zflag) {
        throttleObj.zflag = true
        // 如果是立即执行，则在wait毫秒内开始时执行
        typeof func === 'function' && func()
        throttleObj.ztimer = setTimeout(() => {
          throttleObj.zflag = false
        }, wait)
      }
    } else if (!throttleObj.zflag) {
      throttleObj.zflag = true
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      throttleObj.ztimer = setTimeout(() => {
        throttleObj.zflag = false
        typeof func === 'function' && func()
      }, wait)
    }
  }
}

export default throttleObj.throttle
