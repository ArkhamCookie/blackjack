import { assert, assertEquals } from 'assert'
import { Deck } from '../public/js/lib/mod.js'

Deno.test('Deck: deck exists', () => {
	assert(Deck)
	const deck = new Deck()
	assert(deck.deck)
})

Deno.test('Deck: deal a card', () => {
	const deck = new Deck()

	assertEquals(deck.cardsRemaining, 52)
	assertEquals(deck.dealtCards, 0)

	deck.deal()

	assertEquals(deck.cardsRemaining, 51)
	assertEquals(deck.dealtCards, 1)
})

Deno.test('Deck: deal cards', () => {
	const deck = new Deck()

	deck.deal(2)

	assertEquals(deck.cardsRemaining, 50)
	assertEquals(deck.dealtCards, 2)

	deck.deal(2)

	assertEquals(deck.cardsRemaining, 48)
	assertEquals(deck.dealtCards, 4)
})

Deno.test('Deck: multiple deck', () => {
	let deck = new Deck(2)

	assertEquals(deck.cardsRemaining, 104)

	deck = new Deck(4)

	assertEquals(deck.cardsRemaining, 208)

	deck.deal(8)

	assertEquals(deck.cardsRemaining, 200)
	assertEquals(deck.dealtCards, 8)
})
