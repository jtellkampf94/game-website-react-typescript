import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'

import { Game } from 'types'
import GameListRender from './GameList.render'

const GameList = (): ReactElement => {
	const [games, setGames] = useState<Game[]>([])
	const [err, setErr] = useState<string>('')

	useEffect(() => {
		axios.get('/games', {
			baseURL: `https://${process.env.API_HOST}/api`,
			headers: {
				'x-rapidapi-host': process.env.API_HOST,
				'x-rapidapi-key': process.env.API_KEY,
      },
      params: {
        platform: 'browser'
      }
		}).then(res => setGames(res.data)).catch(e => setErr(e.message))
  }, [])
  
  return <GameListRender err={err} games={games} />
}

export default GameList
