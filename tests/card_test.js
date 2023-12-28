import { assert, assertEquals } from 'assert'
import { Card } from '../public/js/lib/mod.js'

Deno.test('Card: create a 10 of clubs', () => {
	const card = new Card('10', 'clubs')
	assertEquals(card.suit, 'clubs')
	assertEquals(card.rank, '10')
})

Deno.test('Card: random()', () => {
	const card = new Card()
	card.random()
	assert(card.suit)
	assert(card.rank)
})

Deno.test('Card: toString()', () => {
	const card = new Card('10', 'clubs')
	assertEquals(card.toString(), '10 of clubs')
})
