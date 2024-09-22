export function getWalletHistory(wallet) {
	const result = [];
	const elementCount = Math.floor((wallet.length - 2) / 8); // Calculate number of elements based on hex length

	for (let i = 0; i < elementCount; i++) {
		const start = 2 + i * 8;

		const id = wallet.slice(start, start + 2);
		const baseAmount =
			parseInt(wallet.slice(start + 2, start + 4), 16) / 1000; // Base amount for BTC
		const amount = i % 2 === 0 ? baseAmount : -baseAmount; // Alternate sign

		const daysAgo = i % 7; // Days from 0 to 6
		const timestamp = Date.now() - daysAgo * 24 * 60 * 60 * 1000; // Subtract days in milliseconds
		const timeDifference = Date.now() - timestamp; // Time difference in milliseconds

		result.push({
			id: `0x${id}`,
			movement: amount,
			timeDifference: timeDifference, // Time difference in milliseconds
		});
	}

	return result;
}
