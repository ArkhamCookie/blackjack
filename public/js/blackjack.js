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

const card = new Card()

export function initDeal() {
	let handValue = 0

	for (let i = 0; i <= 2; i++) {
		card.random()
		handValue = getValue(card.rank, false) + handValue
	}

	return handValue
}

export function bustcheck(hand) {
	if (hand > 21) {
		return 0
	}
}

export function hit() {
	return card.random()
}
