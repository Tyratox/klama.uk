export const formatIsoDate = (
	string,
	hours = true,
	minutes = true,
	seconds = false
) => {
	const d = new Date(string);

	let date =
		d
			.getDate()
			.toString()
			.padStart(2, "0") +
		"." +
		(d.getMonth() + 1).toString().padStart(2, "0") +
		"." +
		d.getFullYear();

	if (hours) {
		date +=
			", " +
			d
				.getHours()
				.toString()
				.padStart(2, "0");
	}

	if (minutes) {
		date +=
			":" +
			d
				.getMinutes()
				.toString()
				.padStart(2, "0");
	}

	if (seconds) {
		date +=
			":" +
			d
				.getSeconds()
				.toString()
				.padStart(2, "0");
	}

	return date;
};
