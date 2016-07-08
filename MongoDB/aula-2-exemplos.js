db.fisicos.find(
	{
		name: ""
	}
)


db.fisicos.find( { name: "", yearBirth: 2122 } )


// Formtando resultadoda query
db.fisicos.find( { name: "" },	{ name: 1, yearBirth: 1	} )


db.fisicos.find(
	{ _id: ObjectID("")	},
	{ _id: 0 }
)


// Retorna o documento
db.fisicos.findOne(
	{ _id: ObjectID("")	},
	{ _id: 0 }
)