const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		cars: [Car!]!
	}

	type Car {
		id: ID!
		color: String!
		make: String!
	}

	type Group {
		id: ID!
		featureSet: GroupFeatureSet
		cars(skip: Int!, take: Int!): [Car!]!
		name: Stri ng!
		image: Image!
		description: String!
	}

	type Image {
		id: ID!
		url: String
	}

	type GroupFeatureSet {
		features: [GroupFeatures!]!
		applyFeatureSeparately: Boolean!
	}

	type GroupFeatures {
		feature: String!
	}
`;

const server = new ApolloServer({
	typeDefs,
	resolvers: {
		Query: {
			cars: () => [{ id: 1, color: "blue", make: "Toyota" }],
		},
	},
});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});

module.exports = {
	typeDefs,
};
