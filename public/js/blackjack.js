import { Card } from './lib/mod.js'

function getValue(cardRank, high) {
	if (typeof cardRank === 'number') {
		return cardRank
	}

	if (cardRank !== 'A') {
		return 10
	}

	if (high === true) {
		return 11
	} else {
		return 1
	}
}

export function initDeal() {
	let handValue = 0
	const card = new Card()

	for (let i = 0; i < 2; i++) {
		card.random()
		handValue = getValue(card.rank, false) + handValue
	}

	return handValue
}
