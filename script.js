let cells = 0
let clicked = false
//creates table cells with event listeners, used
//for changing colors w/ click or click and hover
const responsiveCell = () => {
  let cell = document.createElement("td")
  cell.addEventListener("mousedown", () => {
    clicked = true
    cell.style.backgroundColor = document.getElementById("colors").value
  })
  cell.addEventListener("mouseover", () => {
    if (clicked === true) {
      cell.style.backgroundColor = document.getElementById("colors").value
    }
  })
  cell.addEventListener("mouseup", () => {
    clicked = false
  })
  return cell
}
//code for adding columns to grid
const addCol = () => {
  let grid = document.getElementById("table")
  let rows = grid.getElementsByTagName("tr")
  for (let i = 0; i < rows.length; i++) {
    rows[i].appendChild(responsiveCell())
  }
  cells++
}
//code for adding rows to grid
const addRow = () =>  {
  let grid = document.getElementById("table")
  let newRow = document.createElement("tr")
  for (let i = 0; i < cells; i++) {
    newRow.appendChild(responsiveCell())
  }
  grid.appendChild(newRow)
}
//code for removing columns from grid
const removeCol = () =>  {
  let grid = document.getElementById("table")
  let rows = grid.getElementsByTagName("tr")
  for (let i = rows.length - 1; i >= 0; i--) {
    let cellList = rows[i].getElementsByTagName("td")
    let cellToRemove = cellList[cellList.length - 1]
    rows[i].removeChild(cellToRemove)
  }
  cells--
}
//code for removing rows from grid
const removeRow = () =>  {
  let grid = document.getElementById("table")
  let numbRows = grid.getElementsByTagName("tr").length
  grid.deleteRow(numbRows - 1)
}
//code for filling all cells with color
const fillAll = (color) => {
  const rows = document.getElementById("table").getElementsByTagName("tr")
  for (let i = 0; i < rows.length; i++) {
    const columns = rows[i].getElementsByTagName("td")
    for (let j = 0; j < columns.length; j++) {
      columns[j].style.backgroundColor = color
    }
  }
}
//code for filling uncolored cells
const fillUncolored = (color) => {
  const rows = document.getElementById("table").getElementsByTagName("tr")
  for (let i = 0; i < rows.length; i++) {
    const columns = rows[i].getElementsByTagName("td")
    for (let j = 0; j < columns.length; j++) {
      if (columns[j].style.backgroundColor === ""){
        columns[j].style.backgroundColor = color
      }
    }
  }
}
//code to clear color from cells
//use same code as fillAll, but pass no color instead
const removeAllColor = () => {
  fillAll("")
}