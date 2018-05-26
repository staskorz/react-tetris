import {
	PIECE_TYPE_I,
	PIECE_TYPE_J,
	PIECE_TYPE_L,
	PIECE_TYPE_O,
	PIECE_TYPE_S,
	PIECE_TYPE_T,
	PIECE_TYPE_Z,
} from "../constants"

const ROTATIONS = {
	[PIECE_TYPE_I]: [
		[[1, -1], [0, 0], [-1, 1], [-2, 2]],
		[[-1, 1], [0, 0], [1, -1], [2, -2]],
	],

	[PIECE_TYPE_J]: [
		[[1, -1], [0, 0], [-1, 1], [-2, 0]],
		[[1, 0], [-1, 0], [0, -1], [2, -1]],
		[[2, 0], [1, -1], [0, 0], [-1, 1]],
		[[-2, 1], [0, 1], [1, 0], [1, 0]],
	],

	[PIECE_TYPE_L]: [
		[[0, -2], [1, -1], [0, 0], [-1, 1]],
		[[2, 0], [1, 1], [0, 0], [-1, -1]],
		[[0, -2], [-1, 1], [0, 0], [1, -1]],
		[[-2, 0], [-1, -1], [0, 0], [1, 1]],
	],

	[PIECE_TYPE_O]: [[[0, 0], [0, 0], [0, 0], [0, 0]]],

	[PIECE_TYPE_S]: [
		[[0, -2], [-1, -1], [0, 0], [-1, 1]],
		[[0, 2], [1, 1], [0, 0], [1, -1]],
	],

	[PIECE_TYPE_T]: [
		[[1, -1], [0, 0], [-1, -1], [-1, 1]],
		[[1, -1], [0, 0], [-1, -1], [-1, 1]],
		[[-1, 1], [0, 0], [1, 1], [1, -1]],
		[[-1, -1], [0, 0], [-1, 1], [1, 1]],
	],

	[PIECE_TYPE_Z]: [
		[[1, -1], [0, 0], [-1, -1], [-2, 0]],
		[[-1, 1], [0, 0], [1, 1], [2, 0]],
	],
}

const rotate = (
	{ type, partCoordinates, rotation, ...rest },
	calculateNextRotation,
) => {
	const ROTATIONS_FOR_TYPE = ROTATIONS[type]

	const nextRotation = calculateNextRotation(
		rotation,
		ROTATIONS_FOR_TYPE.length,
	)

	return {
		type,
		partCoordinates: partCoordinates.map(({ x, y }, index) => ({
			x: x + ROTATIONS_FOR_TYPE[index][0],
			y: y + ROTATIONS_FOR_TYPE[index][1],
		})),
		rotation: nextRotation,
		...rest,
	}
}

export const rotateClockwise = piece =>
	rotate(
		piece,
		(rotation, numRotations) =>
			rotation + 1 < numRotations ? rotation + 1 : 0,
	)

export const rotateCounterclockwise = piece =>
	rotate(
		piece,
		(rotation, numRotations) =>
			rotation - 1 < 0 ? numRotations - 1 : rotation - 1,
	)
