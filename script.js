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