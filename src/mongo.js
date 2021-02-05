const mongoose = require('mongoose')
const  { mongo_path } = require('./config.json')

module.exports = async() => {
	await mongoose.connect(mongo_path, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify : false
	})
	return mongoose
}