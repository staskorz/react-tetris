export default (board, piece) => {
	const { partCoordinates } = piece

	return board.map((row, indexY) =>
		row.map(
			(cellContent, indexX) =>
				partCoordinates.some(({ x, y }) => x === indexX && y === indexY)
					? piece
					: cellContent,
		),
	)
}
