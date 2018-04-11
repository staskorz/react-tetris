import { BOARD_HEIGHT, BOARD_WIDTH } from "../constants"
import game from "./index"

describe("game", () => {
	it("creates an empty game board matrix of BOARD_HEIGHT x BOARD_WIDTH", () => {
		const { board } = game()

		expect(board[0][0]).toBeNull()
		expect(board[BOARD_HEIGHT - 1][BOARD_WIDTH - 1]).toBeNull()

		expect(board[BOARD_HEIGHT]).toBeUndefined()
		expect(board[BOARD_HEIGHT - 1][BOARD_WIDTH]).toBeUndefined()
	})
})
