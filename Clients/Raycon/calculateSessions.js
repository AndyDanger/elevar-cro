let myTable = document.querySelector(`#myTable`)
let rows = myTable.querySelectorAll(`tr`)
let stuff = []
rows.forEach(row => {
    let cells = row.querySelectorAll(`td`)
    if (!cells.length || cells[1].innerText.includes(`Personalization`)) return
    if (cells[4].innerText.includes(`2019`) || cells[4].innerText.includes(`2020`)) return
    stuff.push({
        name: cells[0].innerText,
        type: cells[1].innerText,
        sessions: cells[2].innerText,
        started: cells[3].innerText,
        end: cells[4].innerText,
    })
})