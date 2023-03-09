function () {
    var url = new URL(window.location.href)
    var utmCampaign = url.searchParams.get('utm_campaign')
    var promoCookie = getCookie('just_uno_test')
    return (utmCampaign && utmCampaign.indexOf('just_uno_test') !== -1) || !!promoCookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}