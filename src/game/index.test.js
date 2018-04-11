import { BOARD_HEIGHT, BOARD_WIDTH } from "../constants"
import game from "./index"

describe("game", () => {
	it("creates a game board matrix of BOARD_HEIGHT x BOARD_WIDTH", () => {
		const matrix = game()

		expect(matrix[0][0]).toBeNull()
		expect(matrix[BOARD_HEIGHT - 1][BOARD_WIDTH - 1]).toBeNull()

		expect(matrix[BOARD_HEIGHT]).toBeUndefined()
		expect(matrix[BOARD_HEIGHT - 1][BOARD_WIDTH]).toBeUndefined()
	})
})
