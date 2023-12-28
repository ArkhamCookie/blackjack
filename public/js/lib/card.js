export class Card {
	/**
	 * @class Card
	 *
	 * @param {string|number} rank - Card's rank/score
	 * @param {string} suit - Card's suit
	 */
	constructor(rank, suit) {
		this.rank = rank
		this.suit = suit

		/**
		 * @see {@link https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=[:Block=Playing_Cards:]}
		 */
		let code = '1F0'

		switch (suit) {
		case 'clubs':
			code = code + 'D'
			break
		case 'diamonds':
			code = code + 'C'
			break
		case 'hearts':
			code = code + 'B'
			break
		case 'spades':
			code = code + 'A'
			break
		default:
			Error('Invaild suit')
			break
		}

		switch (rank) {
		case ('A'):
			code = code + '1'
			break
		case ('10'):
			code = code + 'A'
			break
		case ('J'):
			code = code + 'B'
			break
		case ('Q'):
			code = code + 'D'
			break
		case ('K'):
			code = code + 'E'
			break
		default:
			if (rank > 1 && rank <= 9) {
				rank.toString()
				code = code + rank
			}
			Error('Invaild rank')
			break
		}
		this.unicode = '\\u' + code
		this.html = '&#x' + code
	}

	/**
	 * Creates a random card
	 */
	random() {
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

	/**
	 * Returns a human-readable version of the card.
	 *
	 * @returns {string}
	 */
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
