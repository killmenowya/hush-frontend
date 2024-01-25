
// router.HandleFunc("/comment/", controllers.CreateComment).Methods("POST")
// router.HandleFunc("/comment/{id_thread}", controllers.GetComment).Methods("GET")
// router.HandleFunc("/comment/{id_comment}", controllers.DeleteComment).Methods("DELETE")
// router.HandleFunc("/comment/{id_comment}", controllers.EditComment).Methods("PUT")

import axios from "axios";
import { Thread } from "./objects";
import { notifyManager } from "@tanstack/react-query";

// // thread
// router.HandleFunc("/thread/", controllers.CreateThread).Methods("POST")
// router.HandleFunc("/thread/", controllers.GetThread).Methods("GET")
// router.HandleFunc("/thread/{id_thread}", controllers.DeleteThread).Methods("DELETE")
// router.HandleFunc("/thread/{id_thread}", controllers.EditThread).Methods("PUT")
// router.HandleFunc("/thread/user/{id_user}", controllers.GetThreadByUser).Methods("GET")
// router.HandleFunc("/thread/{tag}", controllers.GetThreadByTag).Methods("GET")
// router.HandleFunc("/thread/{id_thread}", controllers.GetThreadByID).Methods("GET")
// router.HandleFunc("/thread/comment/{id_thread}", controllers.CountResponse).Methods("PUT")

// // tags
// router.HandleFunc("/tag/", controllers.GetTags).Methods("GET")
// router.HandleFunc("/tag/", controllers.CreateTags).Methods("POST")
// router.HandleFunc("/tag/{tag}", controllers.CountTagged).Methods("PUT")

// // saved
// router.HandleFunc("/saved/", controllers.SaveThread).Methods("POST")
// router.HandleFunc("/saved/{id_saved}", controllers.DeleteSaved).Methods("DELETE")
// router.HandleFunc("/saved/", controllers.GetSaved).Methods("GET")

const API = axios.create({
    baseURL: "http://localhost:9010",
    
})
//===============================================================//
// THREAD QUERY //
//===============================================================//
export const GetThread = async({pageParam}: {pageParam:number}) => {
    const response = await API.get(`/thread/?page=${pageParam}`)
    return response.data
}


export const CreateThread = async(thread: Thread) => {
    return await API.post("/thread/", thread)
}

export const DeleteThread = async({id}:{id:number}) => {
    return await API.delete(`/thread/${id}`)
}

export const EditThread = async(thread: Thread, {id}:{id:number}) => {
    return await API.put(`/thread/${id}`, thread)
}

//===============================================================//
// COMMENT QUERY //
//===============================================================//

//===============================================================//
// TAG QUERY //
//===============================================================//


export default API