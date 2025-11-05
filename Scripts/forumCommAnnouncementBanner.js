let forumCommAnnouncementBannerInterval = setInterval(function () {
    let header = document.querySelector('[data-elementor-type="header"]')
    if (!header) {
        return
    }
    clearInterval(forumCommAnnouncementBannerInterval)
    let announcementBanner = document.createElement(`div`)
    announcementBanner.id = "whitePaperAnnouncementBanner"
    announcementBanner.innerHTML = `<a href="https://advertising.forumcomm.com/whitepaper-request-page/">Get your FREE Guide to Digital Advertising</a>`
    header.insertBefore(announcementBanner, header.firstElementChild)
    announcementBanner.querySelector('a').addEventListener('click', function() {
        console.log('announcement banner clicked')
        window._fpEvent.push(["eventConversion",{value:"whitePaperAnnouncementBannerClick"}]);
    })
    if (window.location.href.includes("whitepaper-request-page")) {
        FIGPII.helpers.track("submit", "[action*='whitepaper-request-page']", "whitePaperFormSubmission") 
        FIGPII.helpers.track("click", "[href*='guide-to-digital-advertising.pdf']", "whitePaperDownload") 
    }

    if (window.location.href.includes("contact-us")) {
        FIGPII.helpers.track("submit", "[action*='contact-us']", "contactUsFormSubmission") 
    }

    if (window.location.href.includes("request-a-demo")) {
        FIGPII.helpers.track("submit", "[action*='request-a-demo']", "requestADemoFormSubmission") 
    }
}, 250)