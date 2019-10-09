const { CandidateModel } = require('../models');

const addCandidate = async (data) => {
	try {
		const response = await CandidateModel.Candidates(data);
		await response.save();
		return response;
	} catch (error) {
		// console.log('errorrrrrrrrrrrr.......................', error);
		throw error;
	}
}

const getCandidates = async () => {
	try {
		const response = await CandidateModel.Candidates.find();
		console.log(response)
		return response;
	} catch (error) {
		throw error;
	}
}

const getCandidate = async (predicate) => {
	try {
		const response = await CandidateModel.Candidates.findOne(predicate);
		return response;
	} catch (error) {
		throw error
	}
}

const updateCandidate = async (predicate, data) => {
	try {
		const response = await CandidateModel.Candidates.findOneAndUpdate(predicate, data);
		return response;
	} catch (error) {
		throw error;
	}
}


module.exports = {
	addCandidate,
	getCandidates,
	getCandidate,
	updateCandidate
}