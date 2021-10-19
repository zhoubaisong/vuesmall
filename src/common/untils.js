export function dateFormat(date, format) {
  let reg = {
    "M+": date.getMonth()+1,
    "d+": date.getDate(),
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  }
  if(/(y+)/.test(format)){
    format = format.replace(RegExp.$1, date.getFullYear() + '').substr(4 - RegExp.$1.length);
  }
  for(let k in reg) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (reg[k]) : (("00" + reg[k]).substr(("" + reg[k]).length)));
    }
  }
  return format;
}

export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
