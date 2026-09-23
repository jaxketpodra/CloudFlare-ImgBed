/* NERV 主题补丁：把前端硬编码的 GitHub 链接改到哥哥的博客
   覆盖：登录页 logo / 上传页标题 / 页脚署名 等所有指向 MarSeventh 的 <a> */
(function () {
    var TARGET = 'https://akaka.xin';
    function rewrite() {
        var links = document.querySelectorAll('a[href*="github.com/MarSeventh"]');
        for (var i = 0; i < links.length; i++) {
            links[i].href = TARGET;
        }
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', rewrite);
    } else {
        rewrite();
    }
    // SPA 动态渲染，监听 DOM 变化兜底
    new MutationObserver(rewrite).observe(document.documentElement, { childList: true, subtree: true });
})();
