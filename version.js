// version.js - 版本号（以后发新版只需修改下面这一行）
window.MOMOTALK_VERSION = {
  current: "v2.2.0"
};

// 兼容旧字段名：index.html 等文件可能仍在引用，确认无用后可删除以下两行
window.MOMOTALK_VERSION.stable = window.MOMOTALK_VERSION.current;
window.MOMOTALK_VERSION.beta = window.MOMOTALK_VERSION.current;

// 供导出等脚本读取纯数字版本号，例如 "2.2.0"
window.getMomoTalkVersionNum = function () {
  return String(window.MOMOTALK_VERSION.current).replace(/^v/i, "").trim();
};

// 把页面中带有版本占位类名的元素替换为当前版本号
document.addEventListener("DOMContentLoaded", function () {
  var version = window.MOMOTALK_VERSION.current;
  document.querySelectorAll(".version-stable, .version-beta").forEach(function (el) {
    el.textContent = version;
  });
});