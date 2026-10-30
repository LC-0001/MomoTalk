// version.js - 版本控制中心
window.MOMOTALK_VERSION = {
  stable: "v2.1.3",       // 稳定版版本号
  beta: "v2.2.0 Beta"     // 测试版版本号
};

// 供导出等脚本读取纯数字版本号
window.getMomoTalkVersionNum = function (kind) {
  var v = (kind === "beta")
    ? window.MOMOTALK_VERSION.beta
    : window.MOMOTALK_VERSION.stable;
  return String(v).replace(/^v/i, "").replace(/\s*beta\s*$/i, "").trim();
};

document.addEventListener("DOMContentLoaded", function () {
  var VERSION_STABLE = window.MOMOTALK_VERSION.stable;
  var VERSION_BETA = window.MOMOTALK_VERSION.beta;

  document.querySelectorAll(".version-stable").forEach(function (el) {
    el.textContent = VERSION_STABLE;
  });

  document.querySelectorAll(".version-beta").forEach(function (el) {
    el.textContent = VERSION_BETA;
  });
});