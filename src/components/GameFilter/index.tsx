import React, { ChangeEvent, ReactElement } from 'react'

import { PLATFORMS, GENRES, TAGS, SORT_BY } from './constants'

interface Props {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameFilter = ({ onChange }: Props): ReactElement => (
	<form onChange={onChange}>
		<label htmlFor="platform-select">
			Platform:
			<select name="platform" id="platform-select">
				{PLATFORMS.map(platform => (
					<option key={platform.value} value={platform.value}>
						{platform.display}
					</option>
				))}
			</select>
		</label>

		<label htmlFor="genre-select">
			Genre:
			<select name="genre" id="genre-select">
				{GENRES.map(genre => (
					<option key={genre.value} value={genre.value}>
						{genre.display}
					</option>
				))}
			</select>
		</label>

		<label htmlFor="tag-select">
			Tag:
			<select name="tag" id="tag-select">
				{TAGS.map(tag => (
					<option key={tag.value} value={tag.value}>
						{tag.display}
					</option>
				))}
			</select>
		</label>

		<label htmlFor="sortBy-select">
			Sort By:
			<select name="sortBy" id="sortBy-select">
				{SORT_BY.map(sortBy => (
					<option key={sortBy.value} value={sortBy.value}>
						{sortBy.display}
					</option>
				))}
			</select>
		</label>
	</form>
)

export default GameFilter
