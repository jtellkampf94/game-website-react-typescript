import React, { ReactElement, ChangeEvent, Fragment } from 'react'

import GameFilter from 'components/GameFilter'
import GameCard from 'components/GameCard'
import { Game } from 'types'
import { List, ListItem } from './styles'

interface Props {
	err?: string
	games: Game[]
	onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
	if (err) {
		return <p>Unable to fetch games</p>
	}

	if (!games?.length) {
		return <p>No games available</p>
	}

	return (
		<Fragment>
			<GameFilter onChange={onFilterChange} />
			<List>
				{games.map(game => (
					<ListItem key={game.id}>
						<GameCard content={game} />
					</ListItem>
				))}
			</List>
		</Fragment>
	)
}

export default GameList
