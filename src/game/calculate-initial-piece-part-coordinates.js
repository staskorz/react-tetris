import { BOARD_WIDTH, PIECE_TYPE_I } from "../constants"

const middle = Math.floor(BOARD_WIDTH / 2)

const pieceI = () => [
	{ x: middle - 2, y: 1 },
	{ x: middle - 1, y: 1 },
	{ x: middle, y: 1 },
	{ x: middle + 1, y: 1 },
]

export default type => {
	switch (type) {
		case PIECE_TYPE_I:
			return pieceI()
		default:
			throw new Error("Unknown piece type")
	}
}
