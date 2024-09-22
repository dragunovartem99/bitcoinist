export function getWalletHistory({ userID }) {
	const result = [];
	const length = Math.floor((userID % 9) + 8); // Generates a length between 8 and 16
	const seed = userID ^ (userID << 3) ^ (userID >> 2); // Mix the bits of userID

	for (let i = 0; i < length; i++) {
		const id = i.toString(16); // Convert to hex

		// Generate a more random-like amount using bitwise operations and i
		const randomFactor = (seed ^ (i << 5)) & 0xff; // Adjust randomness with i
		const amount = (randomFactor % 50) * (i % 2 === 0 ? 1 : -1) * 0.001; // Range from -50 to 49

		const timestamp = Date.now() - (i + userID) * 999 * 60 * 60;

		result.push({
			id: `0x${id}`,
			movement: amount,
			timestamp,
		});
	}
	return result;
}
