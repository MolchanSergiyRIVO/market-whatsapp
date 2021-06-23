function createButton(options) {
	const defaultButton = {
		'Columns': 6,
		'Rows': 1,
		'ActionType': 'reply',
		'ActionBody': 'categories',
		'Text': 'Categories',
		'BgColor': '#7844e9',
		'TextSize': 'regular',
		'TextHAlign': 'center',
		'TextVAlign': 'middle',
		'Silent': 'true'
	};

	return { ...defaultButton, ...options };
}

module.exports = { createButton };
