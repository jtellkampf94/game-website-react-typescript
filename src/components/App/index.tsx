import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from 'components/Home'

const App = (): ReactElement => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} />
		</Switch>
	</BrowserRouter>
)

export default App
