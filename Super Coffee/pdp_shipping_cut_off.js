clearInterval(cutOffInterval)
var cutOffInterval = setInterval(function() {
    var cardFooter = document.querySelector('.card__wrap .card__footer')
    if (!cardFooter) {
        return
    }
    var hongKongDate = new Date();
    hongKongDate.setHours(hongKongDate.getHours() + (hongKongDate.getTimezoneOffset() / 60) + 8)

    var nextFridayDate = getNextFriday(hongKongDate)
    nextFridayDate.setHours(12, 0, 0)
    var delta = Math.abs(nextFridayDate - hongKongDate) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
  
    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
  
    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
  
    // what's left is seconds
    var seconds = delta % 60; // in theory the modulus is not required

        console.log('asdasd')

    var cutOffDiv = document.querySelector('#cutOffDiv') || document.createElement('div')
    cutOffDiv.id = "cutOffDiv"
    cutOffDiv.innerText = `Order within ${days} days, ${hours} hours, ${minutes} minutes, ${Math.floor(seconds)} seconds.`
    cardFooter.append(cutOffDiv)

}, 1000)


function getNextFriday(date = new Date()) {
    const dateCopy = new Date(date.getTime());
  
    const nextFriday = new Date(
      dateCopy.setDate(
        dateCopy.getDate() + ((7 - dateCopy.getDay() + 5) % 7 || 7),
      ),
    );
  
    return nextFriday;
  }