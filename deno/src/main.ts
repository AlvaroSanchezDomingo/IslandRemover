import {removeIslands} from './islands.ts'
import {getMatrix} from './test_cases.ts'

const params = Deno.args

if (params.length != 1) {
    Deno.exit(1)
}

const level = params[0]
const matrix = getMatrix(level)

const without_islands = removeIslands(matrix)
without_islands.forEach( (row) => console.log(`[${row.join(', ')}]`))