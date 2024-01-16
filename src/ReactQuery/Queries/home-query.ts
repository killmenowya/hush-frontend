import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { GetThread } from "../axios"

export const threads = () => {
    return useInfiniteQuery({
        queryKey: ['GetThread'],
        queryFn: GetThread,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length+1 :undefined;
            return nextPage
        }
});
}
  
export const testaxios= () => {
    return useQuery({
        queryKey: ['lool'],
        queryFn: GetThread
    })
}