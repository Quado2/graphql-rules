
//Importing Apollo server

const { ApolloServer, gql } = require("apollo-server");




//Type definitions
const typeDefs = gql`
	type Query {
		cars: [Car!]!
	}

	type Car {
		id: ID!
		color: String!
		make: String!
	}

	type ManualGroup {
		Image
    [GroupMembership]
	}

	type AutomaticGroup {
		
		Image
    [AutomaticGroupFeatures]
		[GroupMembership]
		
	}

	type AutomaticGroupFeatures {
	}

	type GroupMembership {
		groupId: ID!
		carId: ID!
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
