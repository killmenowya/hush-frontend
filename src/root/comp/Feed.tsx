import { Box } from "@mui/material"
import Post from "./Thread"


// import { useInView } from 'react-intersection-observer'
// import { threads } from "../../ReactQuery/Queries/home-query"
// import { useEffect } from "react"
// import { Thread } from "../../ReactQuery/objects"



// const { ref, inView } = useInView();



// useEffect(() => {
//   if(inView && threads.hasNextPage){
//     threads.fetchNextPage();
//   }
// }, [inView, threads.hasNextPage, threads.fetchNextPage])

// const content = threads.data?.pages.map((todos: Thread[]) =>
//   todos.map((todo, index) =>{
//     if(todos.length == index +1 ){
//         return <Post thread = {todo} />
//     }
//   return <Post thread= {todo} />
// })
// );


const Feed = () => {

  return (
    <Box flex={4} p={2} justifyContent={'center'}>
      <Post/>
    </Box>
  )
}

export default Feed