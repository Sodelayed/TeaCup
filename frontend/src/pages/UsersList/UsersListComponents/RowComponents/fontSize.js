export const fontSize = (login) => {
	if (login.length >= 24) return 1.5;
	else return 2;
};

export const smallFontSize = (fontSize) => {
	const smallFontSize = fontSize / 1.3;
	return smallFontSize;
};
