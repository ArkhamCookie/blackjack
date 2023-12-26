export class Hand {
	constructor() {
		this.hand = []
	}

	addCard(card) {
		this.hand.push(card)
	}

	getCardIndex(card) {
		const index = this.hand.indexOf(card)

		if (index < 0) {
			Error('No such card in hand')
		}
		return index
	}

	removeCard(card) {
		const index = this.hand.indexOf(card)

		if (index < 0) {
			Error('No such card in hand')
		}
		this.hand.splice(index, 1)
		return true
	}

	toString() {
		return this.hand.toString()
	}
}
