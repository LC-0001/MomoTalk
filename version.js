// version.js - 版本控制中心
document.addEventListener("DOMContentLoaded", function() {
  // 👇 以后更新，只需要修改这里的两行数字即可
  var VERSION_STABLE = "v2.1.3";       // 稳定版版本号
  var VERSION_BETA = "v2.2.0 Beta";    // 测试版版本号

  // 自动替换页面中带有 .version-stable 的元素
  document.querySelectorAll(".version-stable").forEach(function(el) {
    el.textContent = VERSION_STABLE;
  });

  // 自动替换页面中带有 .version-beta 的元素
  document.querySelectorAll(".version-beta").forEach(function(el) {
    el.textContent = VERSION_BETA;
  });
});