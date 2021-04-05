import React, { ReactElement, useState, useCallback, ChangeEvent } from 'react'

import useFetch from 'hooks/useFetch'
import GameListRender from './GameList.render'
import { Filter } from './types'

const GameList = (): ReactElement => {
	const [filter, setFilter] = useState<Filter>({
		platform: 'browser',
		sortBy: 'relevance',
	})
	const { games, error } = useFetch(filter)

	const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
		setFilter(current => ({
			...current,
			[e.target.name]: e.target.value,
		}))
		e.preventDefault()
	}, [])

	return (
		<GameListRender onFilterChange={onFilterChange} err={error} games={games} />
	)
}

export default GameList
