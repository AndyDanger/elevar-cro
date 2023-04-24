function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; domain=bartesian.com; path=/";
}

setCookie('just_uno_test', `variant`, 60)

window.ju_num = "63D68274-CEB7-4113-8947-327E417E8C73";
window.asset_host = '//cdn.jst.ai/';
(function (i, s, o, g, r, a, m) { i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }; a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) })(window, document, 'script', asset_host + 'vck.js', 'juapp');