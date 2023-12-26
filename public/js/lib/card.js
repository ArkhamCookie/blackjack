export class Card {
	constructor(suit, rank) {
		this.suit = suit
		this.rank = rank
	}

	random() {
		// const randomSuit =
		switch (Math.floor(Math.random() * 3)) {
		case (0):
			this.suit = 'clubs'
			break
		case (1):
			this.suit = 'diamonds'
			break
		case (2):
			this.suit = 'hearts'
			break
		case (3):
			this.suit = 'spades'
			break
		}

		const randomRank = Math.floor(Math.random() * 3 + 1)
		switch (randomRank) {
		case (1):
			this.rank = 'A'
			break
		case (11):
			this.rank = 'J'
			break
		case (12):
			this.rank = 'Q'
			break
		case (13):
			this.rank = 'K'
			break
		default:
			this.rank = randomRank
			break
		}
	}

	toString() {
		switch (this.rank) {
		case 'J':
			this.rank = 'Jack'
			break
		case 'Q':
			this.rank = 'Queen'
			break
		case 'K':
			this.rank = 'King'
			break
		case 'A':
			this.rank = 'Ace'
			break
		}

		return `${this.rank} of ${this.suit}`
	}
}
