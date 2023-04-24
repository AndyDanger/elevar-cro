var variants = {
    '1': '#shopify-section-1661785021788e456a',
    '2': '#shopify-section-16617863481492411b',
    '3': '#shopify-section-1659330857b40908a4, #shopify-section-16593306089aa0cfc6',
    '4': '#shopify-section-16617922577d41f087',
}

var url = new URL(window.location.href)
var utmCampaign = url.searchParams.get('variant')
var variant = variants[utmCampaign] || variants[1]
var styleTag = document.createElement('style')
styleTag.innerHTML = `
  ${variant} {
    display: none !important;
  }
`

document.head.append(styleTag)