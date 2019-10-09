const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
	adharNumber: { type: Number, unique: true, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	phone: { type: Number, required: true },
	alternatePhone: { type: Number, required: true },
	dob: { type: String, required: true },
	address: {
		address1: { type: String, required: true },
		address2: { type: String, required: true },
		city: { type: String, required: true },
		district: { type: String, required: true },
		state: { type: String, required: true },
		country: { type: String, required: true }
	},
	email: { type: String, required: true },
	gender: { type: String, enum: ['male', 'female', 'other'], required: true },
	source: { type: String, enum: ['event', 'roadshow', 'referral', 'wordOfMouth', 'press'], required: true },
	sourceType: { type: String, enum: ['inbound', 'outbound'], required: true },
	employementStatus: { type: String, enum: ['self-employed', 'unemployed', 'employed'], required: true },
	occupation: { type: String, enum: ['farmer', 'mason', 'poultryFarmer', 'shopkeeper', 'mechanic', 'teacher', 'housewife'], required: true },
	annualIncome: { type: String, enum: ['lessThan2', 'twoToFive', 'fiveToTen', 'tenToTwenty', 'greaterThan20'], required: true },
	qualification: { type: String, enum: ['never', '5th', '8th', '10th', '12th', 'diploma', 'graduate', 'postGraduate'], required: true },
	successfulEnterprises: { type: Number, required: true },
	failedEnterprises: { type: Number, required: true },
	hasBankAccount: { type: Boolean, required: true },
	hasAssets: { type: Boolean, required: true },
	needsTraining: { type: Boolean, required: true },
	status: { type: String, enum: ['interestedInExploring', 'undergoingTraining', 'trainingComplete', 'streamIdentified', 'resumeMade', 'resumeSubmitted', 'resumeSentForProcessing', 'resumeDeclined', 'resumeAccepted', 'dueDiligence', 'backgroundCheck', 'jobOfferReceived', 'nolongerInterested', 'deceased'], required: true },
});

module.exports = {
	Candidates: mongoose.model('Candidates', candidateSchema)
}