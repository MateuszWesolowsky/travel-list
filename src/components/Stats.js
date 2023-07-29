export const Stats = ({ items }) => {
	if (!items.length)
		return (
			<em className='stats'>Start adding some items to your packing list 🚀</em>
		);

	const numberOfItems = items.length;
	const itemsPacked = items.filter((item) => item.packed).length;
	const percentage = Math.round((itemsPacked / numberOfItems) * 100);
	console.log(percentage);

	return (
		<footer className='stats'>
			<em>
				{percentage === 100
					? "You got everything! Ready to go 🛫"
					: `👜You have ${numberOfItems} items on your list, and you already packed
				${itemsPacked} (${percentage}%)`}
			</em>
		</footer>
	);
};
