const UserFavoriteColors = (props) => {
	return (
		<div>
			{props.array.map((item, i) => {
				return <li key={i}>{item}</li>;
			})}
		</div>
	);
};

export default UserFavoriteColors;
