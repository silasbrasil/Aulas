db.fisicos.update(
	{ name: "" },
	{ name: "", yearBirth: 1772	}
)

// upsert
db.fisicos.update(
	{ name: "" },
	{ yearBirth: 1839 },
	{ upsert: true }
)

// multi
db.fisicos.update(
	{ name: "" },
	{ yearBirth: 1873 },
	{ multi: true }
)

// $setOnInsert
db.fisicos.update(
	{ name: "" },
	{ 
		yearBirth: 1990,
		areas: [ "Biologia", "Química" ],
		$setOnInsert: { name: "" } 
	},
	{ upsert: true }
)

// $set
db.fisicos.update(
	{ name: "" },
	{ $set: { name: "Chiquinho da Silva", yearBirth: 1660 } }
)

// $set um campo inexistente
db.fisicos.update(
	{ name: "" },
	{ $set: { name: "Chiquinho da Silva", yearBirth: 1660, numArticles: 4 } }
)

// $inc
db.fisicos.update(
	{ name: "" },
	{ $inc: { numArticles: 3 } }
)

// $mul
db.fisicos.update(
	{ name: "" },
	{ $mul: { numArticles: 2 } }
)

// $rename
db.fisicos.update(
	{ name: "" },
	{ $rename: { numArticles: "quantArticles" } }
)

// $unset
db.fisicos.update(
	{ name: "" },
	{ $unset: { numArticles: "" } }
)