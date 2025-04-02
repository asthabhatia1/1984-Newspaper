document.addEventListener("DOMContentLoaded", function () {
    const crosswordContainer = document.getElementById("crossword-container");
  
    // Optimized crossword grid with input fields for user input
    const grid = [
      [" ", " ", " ", "_", " ", " ", " ", " ", " ", " ", " "," "],
      [" ", " ", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_",],
      [" ", " ", " ", "_", " ", " ", " ", " ", " ", " ", " ", "_"],
      [" ", " ", " ", "_", " ", " ", " ", " ", " ", " ", " ", "_"],
      ["_", "_", "_", "_", "_", "_", "_", "_", " ", " ", " ", "_"],
      [" ", " ", "_", "_", "_", "_", "_", "_", "_", "_", " ", "_"],
      [" ", " ", " ", "_", " ", " ", " ", " ", " "," "," ", "_"],
      [" ", " ", " ", "_", " ", " ", " ", " ", " ", " ", " ",, "_"],
    ];
  
    const crosswordTable = document.createElement("table");
    crosswordTable.classList.add("crossword-grid");
  
    grid.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        if (cell.trim()) {
          const input = document.createElement("input");
          input.type = "text";
          input.maxLength = 1;
          input.classList.add("crossword-input");
          input.value = cell !== " " ? cell : "";
          td.appendChild(input);
        } else {
          td.classList.add("empty-cell");
        }
        tr.appendChild(td);
      });
      crosswordTable.appendChild(tr);
    });
  
    crosswordContainer.appendChild(crosswordTable);
  });