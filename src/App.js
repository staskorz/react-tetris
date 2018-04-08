import React from "react"

import "./App.css"

import Board from "./components/Board"
import PiecePart from "./components/PiecePart"

export default () => (
	<div className="App">
		<Board>
			<PiecePart color="yellow" />
		</Board>
	</div>
)
