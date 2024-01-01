export class Deck {
	constructor(deckAmount) {
		this.suits = ['clubs', 'diamonds', 'hearts', 'spades']
		this.ranks = [
			'2', '3', '4', '5', '6', '7', '8', '9', '10',
			'J', 'Q', 'K', 'A'
		]
		this.deck = []
		if (!deckAmount) { deckAmount = 1 }
		this.cardsRemaining = 52 * deckAmount
		this.dealtCards = 0
	}

	shuffle() {
		for (let currentIndex = this.deck.length - 1; currentIndex > 0; currentIndex--) {
			const randomIndex = Math.floor(Math.random() * (currentIndex + 1))
			const tempCard = this.deck[currentIndex]

			this.deck[currentIndex] = this.deck[randomIndex]
			this.deck[randomIndex] = tempCard
		}
		this.dealtCards = 0
		this.cardsRemaining = 52
	}

	deal(count) {
		if (!count) { count = 1 }
		if (this.dealtCards === this.deck.length) {
			Error('No more cards to deal')
		}
		for (let i = 0; i < count; i++) {
			this.dealtCards++
			this.cardsRemaining--
		}

		return this.deck[this.dealtCards - 1]
	}
}
