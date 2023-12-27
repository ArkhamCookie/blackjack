import { assert } from 'assert'
import { Hand } from '../public/js/lib/mod.js'

Deno.test('Hand: hand exists', () => {
	assert(Hand)
	const hand = new Hand()
	assert(hand.hand)
})
