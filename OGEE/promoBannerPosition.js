let styleTag = document.createElement(`style`)
styleTag.innerHTML = `
@media only screen and (max-width: 1023px) {
    .header-section {
      margin-top: 0px !important;
      position: sticky !important;
    }
    
    .shopify-section.announcement-bar {
      margin-top: 0px !important;
    }
  } 
  `


if (window.location.href.includes(`variant=below`)) {
  styleTag.innerHTML = `
@media only screen and (min-width: 1024px) {
    .header-section {
      position : fixed;
      width: 100%;
    }
  
    .shopify-section.announcement-bar {
      margin-top : var(--header-height);
    }
  }
  `
}


document.head.append(styleTag)

// let onScrollFunction = () => {
//   let announcementBar = document.querySelector(`#shopify-section-announcement-bar`)
//   let header = document.querySelector(`#shopify-section-header`)

//   if (!announcementBar) return
//   if (window.scrollY > announcementBar.offsetHeight) {
//     header.classList.remove(`relative`)
//   } else {
//     header.classList.add(`relative`)
//   }

// }

// onScrollFunction()
// window.onscroll = onScrollFunction
