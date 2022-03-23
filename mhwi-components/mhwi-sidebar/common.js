// 格式化时间
const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}

// 格式化日期
const formatDate = (date, type) => {
	var year = date.getFullYear()
	var month = date.getMonth() + 1
	var day = date.getDate()

	var hour = date.getHours()
	var minute = date.getMinutes()
	var second = date.getSeconds()

	if (type = 'YYYY-MM-DD') {
		return [year, month, day].map(formatNumber).join('-')
	} else {
		return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(
			':')
	}
}

export {
	formatNumber,
	formatDate
}
