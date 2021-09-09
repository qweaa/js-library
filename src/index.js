// 去掉url上的 token
exports.removeQueryForUrl = (query) => {
  const href = window.location.href;
  if (href.indexOf('?') === -1) return;
  const search = href.split('?')[1];
  if (search.indexOf(query) === -1) return; // url上不存在token参数 则不需要处理
  const querys = search.split('&');
  const res = [];
  querys.map(item => {
    if (item.indexOf(query) === -1) {
      res.push(item);
    };
  });
  window.history.replaceState(null, null, res.length ? `?${res.join('&')}` : window.location.pathname);
}
// 加载js资源
exports.loadJS = (url, callback) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  if (typeof callback === 'function') {
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

console.log('hello world!')

module.exports = {
  removeQueryForUrl,
  loadJS
}