import { Box } from "@mui/material"
import Post from "./Thread"

import { useInView } from 'react-intersection-observer'
import { threads } from "../../ReactQuery/Queries/home-query"
import { useEffect } from "react"
import { Thread } from "../../ReactQuery/objects"

const Feed = () => {
  const thread = threads()
  const { ref, inView } = useInView();

  useEffect(() => {
    if(inView && thread.hasNextPage){
      console.log("scroll success")
      thread.fetchNextPage();
    }
  }, [inView, thread.hasNextPage, thread.fetchNextPage]);

  const content = thread.data?.pages.map((todos: Thread[]) =>
    todos.map((todo, index) =>{
      return <Post key={todo.ID} thread={todo} innerRef={index === todos.length - 1 ? ref : undefined} />
  })
  );

  return (
    <Box flex={4} p={2} justifyContent={'center'}>
      {content}
      {thread.isFetchingNextPage && <h3> loading ...</h3>}
    </Box>
  )
}

export default Feed