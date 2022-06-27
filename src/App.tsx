import { ApolloProvider, gql, useQuery } from "@apollo/client"
import {client} from './lib/apollo.js'
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"


// const GET_LESSONS_QUERY = gql`
//   query{
//     lessons{
//       id
//       title
//     }  
//   }
// `

// interface Lesson {
//   id: string,
//   title: string
// }

function App() {
  // const {data} = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)


  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </ApolloProvider>
      
    </>
  )
}

export default App
