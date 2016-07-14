db.fisicos.find().pretty()


db.fisicos.find( { name: "Albert Einstein" } )


var cs = db.fisicos.find()
cs.count()
cs.hasNext()
cs.next()
cs.pretty()


// Formatando resultadoda query
db.fisicos.find( { name: "James Clerk Maxwel" },	{ name: 1, yearBirth: 1	} )

db.fisicos.find( { birth: 1831 }, { _id: 0 } )

// Retorna todos os docs sem os campos birth e insertedAt
db.fisicos.find( { }, { birth: 0, insertedAt: 0 }) 

// Retorna o documento
db.fisicos.findOne(
	{ _id: ObjectID("5785b497cad215ca1a52d273")	},
	{ _id: 0 }
)

// Operadores lógicos
db.fisicos.find( { death: { $ne: 1955 } } )

db.fisicos.find(
	{ 
		$or: [ 
			{ birth: 1831 }, 
			{ name: “Isaac Newton” } 
		] 
	}
)