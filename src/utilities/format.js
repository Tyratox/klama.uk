export const formatIsoDate = (
	string, //2018-06-16T22:00:00+00:00
	day = true,
	hours = true,
	minutes = true,
	seconds = false
) => {
	let date = "";

	const y = string.substr(0, 4),
		m = string.substr(5, 2),
		d = string.substr(8, 2),
		h = string.substr(11, 2),
		mi = string.substr(14, 2),
		s = string.substr(17, 2);

	if (day) {
		date += d + "." + m + "." + y;
	}

	if (hours) {
		date += (day ? ", " : "") + h;

		if (minutes) {
			date += ":" + mi;

			if (seconds) {
				date += ":" + s;
			}
		}
	}

	return date;
};

export const isoToDate = string => {
	let date = "";

	const y = parseInt(string.substr(0, 4)),
		m = parseInt(string.substr(5, 2)),
		d = parseInt(string.substr(8, 2)),
		h = parseInt(string.substr(11, 2)),
		mi = parseInt(string.substr(14, 2)),
		s = parseInt(string.substr(17, 2));

	return new Date(y, m - 1, d, h, mi, s);
};
