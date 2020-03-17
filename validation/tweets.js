const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateTweetInput(data) {
	let errors = {};
	data.text = validText(data.text) ? data.text : "";

	if (!Validator.isLength(data.text, { min: 2, max: 280 })) {
		errors.text = "Tweet must be between 2 and 280 characters";
	}

	if (Validator.isEmpty(data.text)) {
		errors.text = "Text field is required";
	}

	return {
		errors,
		isValid: Object.keys(errors).length === 0,
	};
};
