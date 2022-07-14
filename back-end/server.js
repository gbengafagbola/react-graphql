const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Album {
    id: ID
    title: String
    genre: String
    runtime: String
    image: String
    date: String
  }
  input AlbumsInputFilter {
    id: ID
    title: String
    genre: String
    runtime: String
    image: String
    date: String
  }
  type Query {
    albums(input: AlbumsInputFilter): [Album]
  }
`

const albums = [
  {
    "id": "802c52d7-8533-4fbc-8ff1-1b2c3be9fafc",
    "title": "The Avengers",
    "genre": "action, thriller, sci-fi",
    "runtime": "143 min",
    "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "date": "04 May 2012"
  },
  {
    "id": "3285316d-ccc2-47bf-a054-ffe9a55b25a7",
    "title": "I Am Legend",
    "genre": "drama, horror, sci-fi",
    "runtime": "101 min",
    "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
    "date": "14 Dec 2007"
  },
  {
    "id": "c5f39504-0f51-41e4-9aaa-6deebfbebe98",
    "title": "Game of Thrones",
    "genre": "action, adventure, drama",
    "runtime": "56 min",
    "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "date": "17 Apr 2011"
  },
  {
    "id": "1ab284b0-3787-42a7-8a70-b7a190cbd009",
    "title": "Vikings",
    "genre": "action, adventure, history",
    "runtime": "44 min",
    "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
    "date": "03 Mar 2013"
  },
  {
    "id": "4dc759f1-be74-4cdf-b47d-40288b14faf2",
    "title": "Avatar",
    "genre": "action, adventure, fantasy",
    "runtime": "162 min",
    "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "date": "18 Dec 2009"
  },


{ 
  "id": "912c52d7-8333-4fbc-8ff1-1b2a3be9fqfc",
  "title": "Power",
  "genre": "crime, drama, action",
  "runtime": "56 min",
  "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
  "date": "04 May 2014"
},
{
  "id": "1235316d-cac2-47bf-a054-ffe9a55b25a7",
  "title": "Doctor Strange",
  "genre": "drama, horror, sci-fi",
  "runtime": "101 min",
  "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
  "date": "04 Nov 2016"
},
{
  "id": "chq39qw4-0f51-41e4-9aaa-6deebfbebe98",
  "title": "Assassin's Creed",
  "genre": "action, adventure, fantansy",
  "runtime": "56 min",
  "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
  "date": "21 Dec 2016"
},
{
  "id": "1ab284b0-3787-42bz-8a70-b7a190cbd009",
  "title": "Vikings",
  "genre": "action, adventure, history",
  "runtime": "44 min",
  "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
  "date": "03 Mar 2013"
},
{
  "id": "4az752wa1-be74-4cdf-b47d-40288b14faf2",
  "title": "Luke Cage",
  "genre": "action, crime, drama",
  "runtime": "162 min",
  "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
  "date": "30 Sep 2016"
},
{
  "id": "802c52d7-8533-4dcc-8ff1-1b2c3be9fafc",
  "title": "The Avengers",
  "genre": "action, thriller, sci-fi",
  "runtime": "143 min",
  "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  "date": "04 May 2012"
},
{
  "id": "3285316d-c2c2-47bf-a054-ffe9a55b25a7",
  "title": "I Am Legend",
  "genre": "drama, horror, sci-fi",
  "runtime": "101 min",
  "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
  "date": "14 Dec 2007"
},
{
  "id": "c5f39504-105d-41e4-9aaa-6deebfbebe98",
  "title": "Game of Thrones",
  "genre": "action, adventure, drama",
  "runtime": "56 min",
  "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  "date": "17 Apr 2011"
},
{
  "id": "3ab284b0-3787-42a7-8a70-b7a190cbd209",
  "title": "Vikings",
  "genre": "action, adventure, history",
  "runtime": "44 min",
  "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
  "date": "03 Mar 2013"
},
{
  "id": "4dc759f1-be74-4cdf-b47d-40288b14zzz2",
  "title": "Avatar",
  "genre": "action, adventure, fantasy",
  "runtime": "162 min",
  "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  "date": "18 Dec 2009"
},


{ 
"id": "80aas2d7-8333-4fbc-8ff1-1b2a3be9fwfc",
"title": "Power",
"genre": "crime, drama, action",
"runtime": "56 min",
"image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
"date": "04 May 2014"
},
{
"id": "3285316d-cac2-47bf-wer4-ffe9a55b25a7",
"title": "Doctor Strange",
"genre": "drama, horror, sci-fi",
"runtime": "101 min",
"image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
"date": "04 Nov 2016"
},
{
"id": "c5f39qw4-0f51-41e4-9aaa-6decvbbebe98",
"title": "Assassin's Creed",
"genre": "action, adventure, fantansy",
"runtime": "56 min",
"image": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
"date": "21 Dec 2016"
},
{
"id": "1ab284b0-3787-42a7-8a70-asda1qcbd009",
"title": "Vikings",
"genre": "action, adventure, history",
"runtime": "44 min",
"image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
"date": "03 Mar 2013"
},
{
"id": "4dc752wa1-be74-4cdf-b47d-402rty14faf2",
"title": "Luke Cage",
"genre": "action, crime, drama",
"runtime": "162 min",
"image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
"date": "30 Sep 2016"
}

]

const resolvers = {
  Query: {
    albums: (_, args, ___) => {
      let result = albums;

      const shouldApplyNameFilter = args.input && args.input.title;

      if (shouldApplyNameFilter) {
        const nameFilter = args.input.title;

        result = result.filter((r) => r.title.toLowerCase()
          .indexOf(nameFilter.toLowerCase()) !== -1);
      }

      console.log(args)

      console.log(result);

      return result;
    }
  }
}

const server = new ApolloServer({
  resolvers,
  typeDefs
})

server.listen().then(({ port }) => {
  console.log(`Server started on port: ${port}`)
})