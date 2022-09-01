type IslandMatrix = any

function checkPosition(row : number,  column: number, matrix: IslandMatrix, newMatrix: IslandMatrix){
    if(row === undefined || column === undefined){
        return
    }
    if(matrix[row][column] ===0 ){
        return
    }
    if(newMatrix[row][column] === 1 ){
        return
    }

    newMatrix[row][column] = 1

    let positions : any = {   up:     row - 1 < 0 ? undefined :  row - 1 ,
                        down:   row + 1 > (matrix.length -1) ? undefined :  row + 1 ,
                        left:   column - 1 < 0 ? undefined :  column - 1 ,
                        right:  column + 1 > (matrix[row].length -1) ? undefined :  column + 1}          
              
    checkPosition(positions.up, column, matrix, newMatrix)
    checkPosition(positions.down, column, matrix, newMatrix)
    checkPosition(row, positions.left, matrix, newMatrix)
    checkPosition(row, positions.right, matrix, newMatrix)
    
}

export function removeIslands(matrix: IslandMatrix): IslandMatrix {

    let newMatrix : any = []
    
    for(let i = 0; i < matrix.length ; i++){
        let jMatrix : any = []
        for(let j = 0; j < matrix[i].length ; j++){
            jMatrix.push(0) 
            

        }    
        newMatrix.push(jMatrix)
    }

    //fila 0 y ultima
    for(let i = 0; i < matrix.length ; i++){ 
        checkPosition(0, i, matrix, newMatrix)
        checkPosition( matrix.length-1, i, matrix, newMatrix)
    }
    //columna 0 y ultima
    for(let i = 0; i < matrix[0].length ; i++){ 
        checkPosition(i, 0, matrix, newMatrix)
        checkPosition( i, matrix[0].length-1 , matrix, newMatrix)
    }
    return newMatrix
}
