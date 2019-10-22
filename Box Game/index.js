let cell  =  document.getElementsByClassName("cell");
let cellxy = [[1,2,3,4] , [1,2,3,4] , [1,2,3,4], [1,2,3,4]];
function analyzeCells() {
    let counter = 0;
    for(let j=0; j< Math.sqrt(cell.length); j++) {
        for (let k=0; k<Math.sqrt(cell.length); k++) {
            cellxy[j][k] = cell[counter];
            counter++;
        }
    }
}

function changeCells(x, y) {
    for(let i = 0; i<4; i++) {
        for(let j = 0;j < 4; j++) {
            if(x === i || y === j) {
                if(cellxy[i][j].style.backgroundColor ===  "rgb(25,25,112)" ) {
                    cellxy[i][j].style.backgroundColor = "transparent";
                } else {
                    cellxy[i][j].style.backgroundColor = "rgb(25,25,112)" ;
                }
            }
        }
    }
}
