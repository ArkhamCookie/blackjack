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
