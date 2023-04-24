var styles = "@import url('https://cdn.shopify.com/s/files/1/0582/8552/3124/t/23/assets/theme.css?v=4337228099761627314');";
var newSS = document.createElement('link');
newSS.rel = 'stylesheet';
newSS.href = 'data:text/css,' + escape(styles);
document.getElementsByTagName("head")[0].appendChild(newSS);

var styles = "@import url('https://cdn.shopify.com/s/files/1/0582/8552/3124/t/23/assets/custom.css');";
var newSS = document.createElement('link');
newSS.rel = 'stylesheet';
newSS.href = 'data:text/css,' + escape(styles);
document.getElementsByTagName("head")[0].appendChild(newSS);

const script = document.createElement("script");
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
script.type = 'text/javascript';
script.addEventListener('load', () => {
    // use jQuery below
    $("li.site-nav__childlist-item.subchildrens").hover(function() {
            $(this).children("ul").addClass("active")
        }, function() {
            $(this).children("ul").removeClass("active")
        }),
        $("li.site-nav--has-dropdown").hover(function() {
            $(this).children(".site-nav__dropdown").addClass("active")
        }, function() {
            $(this).children(".site-nav__dropdown").removeClass("active")
        })
});
document.head.appendChild(script);