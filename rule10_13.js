const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		cars: [Car!]!
	}

  type Mutation {
    create(
      name: String!
      image: ImageInput!
      description: String!
      featureSet: GrouptFeatureFields
    )
    groupDelete(groupId: ID!) 
    groupPublish(groupId: ID!)
    groupUnpublish(groupId: ID!)
    groupAddCars(groupId: ID!, carId: ID!)
    grouptRemoveCars(groupId:ID!, carId:ID!)
    update(
      groupId: ID!
      groupInput: GroupInput!
    )
  }

  input GroupInput{
    name: String
    image: ImageInput
    description: String
    featureSet: GrouptFeatureFields
  }

	type Car {
		id: ID!
		color: String!
		make: String!
	}

  type imageInput {
    url: String!
  }

	type Group {
		id: ID!
		featureSet: GroupFeatureSet
    hasCar(id:ID!): Boolean
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
		feature: GroupFeatureField!
	}

  enum GroupFeatureField {
    INCLINE_ENGINE
    FOUR_CYLINDER_ENGINE
    TWIN_CYLINDER_ENGINE
    RED_PAINT
    BLACK_PAINT
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
