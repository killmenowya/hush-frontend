import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { CreateThread, DeleteThread, GetThread } from "../axios"
import { Thread } from "../objects";

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

export const createthread = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (thread:Thread) => CreateThread(thread),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['GetThread']
            })
        }
    })
}

export const deleteThread = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id } : {id:number}) => DeleteThread({id}),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['GetThread']
            })
        }
    })
}
