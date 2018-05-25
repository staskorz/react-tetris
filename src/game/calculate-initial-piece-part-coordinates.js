import {
	BOARD_WIDTH,
	PIECE_TYPE_I,
	PIECE_TYPE_J,
	PIECE_TYPE_L,
	PIECE_TYPE_S,
	PIECE_TYPE_T,
	PIECE_TYPE_Z,
	PIECE_TYPE_O,
} from "../constants"

const middle = Math.floor(BOARD_WIDTH / 2)

const pieceI = () => [
	{ x: middle - 2, y: 1 },
	{ x: middle - 1, y: 1 },
	{ x: middle, y: 1 },
	{ x: middle + 1, y: 1 },
]

const pieceJ = () => [
	{ x: middle - 1, y: 1 },
	{ x: middle, y: 1 },
	{ x: middle + 1, y: 1 },
	{ x: middle + 1, y: 2 },
]

const pieceL = () => [
	{ x: middle - 1, y: 1 },
	{ x: middle, y: 1 },
	{ x: middle + 1, y: 1 },
	{ x: middle + 1, y: 0 },
]

const pieceO = () => [
	{ x: middle, y: 1 },
	{ x: middle, y: 2 },
	{ x: middle + 1, y: 1 },
	{ x: middle + 1, y: 2 },
]

const pieceS = () => [
	{ x: middle - 1, y: 2 },
	{ x: middle, y: 2 },
	{ x: middle, y: 1 },
	{ x: middle + 1, y: 1 },
]

const pieceT = () => [
	{ x: middle - 1, y: 1 },
	{ x: middle, y: 1 },
	{ x: middle, y: 2 },
	{ x: middle + 1, y: 1 },
]

const pieceZ = () => [
	{ x: middle - 1, y: 1 },
	{ x: middle, y: 1 },
	{ x: middle, y: 2 },
	{ x: middle + 1, y: 2 },
]

export default type => {
	switch (type) {
		case PIECE_TYPE_I:
			return pieceI()
		case PIECE_TYPE_J:
			return pieceJ()
		case PIECE_TYPE_L:
			return pieceL()
		case PIECE_TYPE_O:
			return pieceO()
		case PIECE_TYPE_S:
			return pieceS()
		case PIECE_TYPE_T:
			return pieceT()
		case PIECE_TYPE_Z:
			return pieceZ()
		default:
			throw new Error("Unknown piece type")
	}
}
