const express = require('express');
const router = express.Router();
const { CandidateController } = require('../controllers');

router.get('/candidates', async (req, res) => {
	try {
		const response = await CandidateController.getCandidates();
		return res.status(200).json(response);
	} catch (error) {
		return res.status(400).json(error);
	}
});

router.get('/candidate/:id', async (req, res) => {
	try {
		let predicate = { _id: req.params.id };
		const response = await CandidateController.getCandidate(predicate);
		return res.status(200).json(response);
	} catch (error) {
		throw error;
	}
});

router.post('/candidate', async (req, res) => {
	try {
		let body = req.body;
		const response = await CandidateController.addCandidate(body);
		return res.status(200).json(response)
	} catch (error) {
		// console.log('error->>>>>>>>>>>>>>>>>>>>>', error)
		res.json({
			code: error.code,
			message: error.message
		})
	}
});

router.patch('/candidate/:id', async (req, res) => {
	try {
		let body = req.body;
		let predicate = { _id: req.params.id }
		const response = await CandidateControlleer.updateCandidate(predicate, body);
		return res.status(200).json(response);
	} catch (error) {
		// console.log('error->>>>>>>>>>>>>>>>>>>>>', error)
		res.json({
			code: 400,
			message: 'Error While Updating Candidate'
		})
	}
});


module.exports = router;