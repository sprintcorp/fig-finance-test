const responseQuery = (model, populate = "") => async(req, res, next) => {

	let query;

	//Copy req.query
	const reqQuery = {...req.query };

	//Fields to exclude
	const removeFields = ["select", "sort", "page", "limit", "search"];

	//Loop over removeFields and delete them from reqQuery
	removeFields.forEach((param) => delete reqQuery[param]);

	//Create query string
	let queryStr = JSON.stringify(reqQuery);


	//Finding resource
	query = model.find(JSON.parse(queryStr));


	//Pagination
	const page = parseInt(req.query.page, 10) || 1;
	const limit = parseInt(req.query.limit, 10) || 100;
	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;
	const total = await model.countDocuments();

	query = query.skip(startIndex).limit(limit);

	//populate
	if (populate) {
		query = query.populate(populate);
	}

	//Executing query
	const results = await query;

	//Pagination result
	const pagination = {};

	if (endIndex < total) {
		pagination.next = {
			page: page + 1,
			limit,
		};
	}

	if (startIndex > 0) {
		pagination.prev = {
			page: page - 1,
			limit,
		};
	}

	res.responseQuery = {
		success: true,
		count: results.length,
		pagination,
		data: results
	}

	next();

}

module.exports = responseQuery
