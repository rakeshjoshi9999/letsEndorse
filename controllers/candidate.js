const { CandidateService } = require('../services');

const addCandidate = async (data) => {
	try {
		const response = await CandidateService.addCandidate(data);
		console.log(response, 'await response')
		return response;
	} catch (error) {
		throw error;
	}
}

const getCandidates = async () => {
	try {
		const response = await CandidateService.getCandidates();
		return response;
	} catch (error) {
		throw error;
	}
}

const getCandidate = async (predicate) => {
	try {
		const response = await CandidateService.getCandidate(predicate);
		return response;
	} catch (error) {
		throw error;
	}
}


const updateCandidate = async (predicate, data) => {
	try {
		const response = await CandidateService.updateCandidate(predicate, data);
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