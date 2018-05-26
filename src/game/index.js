import { BOARD_HEIGHT, BOARD_WIDTH, NEXT_PIECES } from "../constants"
import { PUSH_NEXT_PIECE, ROTATE_CLOCKWISE } from "./actions"
import calculateInitialPiecePartCoordinates from "./calculate-initial-piece-part-coordinates"
import placePieceOnBoard from "./place-piece-on-board"

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

				if (first) {
					const currentPiece = {
						type: first,
						partCoordinates: calculateInitialPiecePartCoordinates(first),
						rotation: 0,
						uid: Symbol(first),
					}

					return {
						board: placePieceOnBoard(board, currentPiece),
						current: currentPiece,
						next: [...rest, action.payload],
					}
				} else {
					return { board, current: null, next: [...rest, action.payload] }
				}

			case: ROTATE_CLOCKWISE:
				
			default:
				return state
		}
	} else {
		return state
	}
}
