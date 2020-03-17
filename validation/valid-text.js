const validText = str => {
	return  typeof str === 'string' && str.trim()
}

module.exports = validText;