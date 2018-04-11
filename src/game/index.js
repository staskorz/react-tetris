import { BOARD_HEIGHT, BOARD_WIDTH } from "../constants"

// creates matrix (2d array) of BOARD_HEIGHT x BOARD_WIDTH
const defaultState = Array(BOARD_HEIGHT)
	.fill(null)
	.map(() => Array(BOARD_WIDTH).fill(null))

export default (state = defaultState, action = null) => state
