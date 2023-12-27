export class Card {
	constructor(rank, suit) {
		this.rank = rank
		this.suit = suit

		/**
		 * @see {@link https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=[:Block=Playing_Cards:]}
		 */
		let unicode = '1F0'

		switch (suit) {
		case 'clubs':
			unicode = unicode + 'D'
			break
		case 'diamonds':
			unicode = unicode + 'C'
			break
		case 'hearts':
			unicode = unicode + 'B'
			break
		case 'spades':
			unicode = unicode + 'A'
			break
		default:
			Error('Invaild suit')
			break
		}

		switch (rank) {
		case ('A'):
			unicode = unicode + '1'
			break
		case ('10'):
			unicode = unicode + 'A'
			break
		case ('J'):
			unicode = unicode + 'B'
			break
		case ('Q'):
			unicode = unicode + 'D'
			break
		case ('K'):
			unicode = unicode + 'E'
			break
		default:
			if (rank > 1 && rank <= 9) {
				rank.toString()
				unicode = unicode + rank
			}
			Error('Invaild rank')
			break
		}
		this.unicode = unicode
		this.html = '&#x' + this.unicode
	}

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
