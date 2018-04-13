import { BOARD_HEIGHT, BOARD_WIDTH, NEXT_PIECES } from "../constants"
import { PUSH_NEXT_PIECE } from "./actions"
import calculateInitialPiecePartCoordinates from "./calculate-initial-piece-part-coordinates"

// creates matrix (2d array) of BOARD_HEIGHT x BOARD_WIDTH
const emptyBoard = Array(BOARD_HEIGHT)
	.fill(null)
	.map(() => Array(BOARD_WIDTH).fill(null))

export default (
	state = {
		board: emptyBoard,
		current: null,
		next: Array(NEXT_PIECES).fill(null),
	},
	action = null,
) => {
	if (action) {
		switch (action.name) {
			case PUSH_NEXT_PIECE:
				const { board, next } = state
				const [first, ...rest] = next

				return {
					board,
					current:
						first === null
							? null
							: {
									type: first,
									partCoordinates: calculateInitialPiecePartCoordinates(first),
									uid: Symbol(first),
							  },
					next: [...rest, action.payload],
				}

			default:
				return state
		}
	} else {
		return state
	}
}
