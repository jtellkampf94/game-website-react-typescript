import React, { ReactElement, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from 'components/GlobalStyles'

import Home from 'components/Home'

const App = (): ReactElement => (
	<Fragment>
		<GlobalStyles />
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</BrowserRouter>
	</Fragment>
)

export default App
