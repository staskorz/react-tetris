import {
	BOARD_HEIGHT,
	BOARD_WIDTH,
	NEXT_PIECES,
	PIECE_TYPE_I,
	PIECE_TYPE_J,
} from "../constants"
import game from "./index"
import { PUSH_NEXT_PIECE } from "./actions"

describe("game", () => {
	it("creates an empty game board matrix of BOARD_HEIGHT x BOARD_WIDTH", () => {
		const { board } = game()

		expect(board[0][0]).toBeNull()
		expect(board[BOARD_HEIGHT - 1][BOARD_WIDTH - 1]).toBeNull()

		expect(board[BOARD_HEIGHT]).toBeUndefined()
		expect(board[BOARD_HEIGHT - 1][BOARD_WIDTH]).toBeUndefined()
	})

	it("creates a new game state with array of next pieces of size NEXT_PIECES", () => {
		const newGameState = game()

		expect(newGameState.next).toHaveLength(NEXT_PIECES)
	})

	it("pushes next pieces", () => {
		const gameState0 = game()

		const gameState1 = game(gameState0, {
			name: PUSH_NEXT_PIECE,
			payload: PIECE_TYPE_I,
		})

		expect(gameState1.next[0]).toBe(PIECE_TYPE_I)

		let gameStateFilled = gameState1

		for (let i = 0; i < NEXT_PIECES; i++) {
			gameStateFilled = game(gameStateFilled, {
				name: PUSH_NEXT_PIECE,
				payload: PIECE_TYPE_J,
			})
		}

		expect(gameStateFilled.next[0]).toBe(PIECE_TYPE_J)
		expect(gameStateFilled.current.type).toBe(PIECE_TYPE_I)
	})

	it("correctly places a piece of type I at its initial position", () => {
		const gameState0 = game()

		let gameState = gameState0

		for (let i = 0; i <= NEXT_PIECES; i++) {
			gameState = game(gameState, {
				name: PUSH_NEXT_PIECE,
				payload: PIECE_TYPE_I,
			})
		}

		const { board, current } = gameState

		const leftX = Math.floor(BOARD_WIDTH / 2) - 2

		expect(current.partCoordinates).toEqual([
			{ x: leftX, y: 1 },
			{ x: leftX + 1, y: 1 },
			{ x: leftX + 2, y: 1 },
			{ x: leftX + 3, y: 1 },
		])
	})
})
