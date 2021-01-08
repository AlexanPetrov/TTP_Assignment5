let cells = 1;
//code for adding columns to grid
const addCol = () => {
  let grid = document.getElementById("table")
  let rows = grid.getElementsByTagName("tr")
  for (let i = 0; i < rows.length; i++) {
    let cell = document.createElement("td")
    rows[i].appendChild(cell)
  }
  cells++
}
//code for adding rows to grid
const addRow = () =>  {
  let grid = document.getElementById("table")
  let newRow = grid.insertRow(0)
  for (let i = 0; i < cells; i++) {
    let cell = document.createElement("td")
    newRow.appendChild(cell)
  }
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