// version.js - 版本号（以后发新版只需修改下面这一行）
window.MOMOTALK_VERSION = {
  current: "v2.2.0"
};

// 兼容 index.html 等文件中可能存在的旧字段引用
window.MOMOTALK_VERSION.stable = window.MOMOTALK_VERSION.current;
window.MOMOTALK_VERSION.beta = window.MOMOTALK_VERSION.current;

// 供导出等脚本读取纯数字版本号，例如 "2.2.0"
// 支持传入参数（如 "beta"），也支持不传参直接调用
window.getMomoTalkVersionNum = function (type) {
  var ver = type && window.MOMOTALK_VERSION[type] ? window.MOMOTALK_VERSION[type] : window.MOMOTALK_VERSION.current;
  return String(ver).replace(/^v/i, "").trim();
};

// 把页面中带有版本占位类名的元素替换为当前版本号
document.addEventListener("DOMContentLoaded", function () {
  var version = window.MOMOTALK_VERSION.current;
  document.querySelectorAll(".version-stable, .version-beta").forEach(function (el) {
    el.textContent = version;
  });
});