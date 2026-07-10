// 📌 Shortcut: srtapi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { env } from "../config/env"
import { CREATE_TODO_REQUEST, CREATE_TODO_RESPONSE, DELETE_TODO_REQUEST, DELETE_TODO_RESPONSE, GET_TODO_REQUEST, GET_TODO_RESPONSE, UPDATE_TODO_REQUEST, UPDATE_TODO_RESPONSE } from "../types/ToDo"

export const toDoApi = createApi({
    reducerPath: "toDoApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${env.APP_URL}/api/todo` }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getToDos: builder.query<GET_TODO_RESPONSE, GET_TODO_REQUEST>({
                query: () => {
                    return {
                        url: "/get",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            addToDo: builder.mutation<CREATE_TODO_RESPONSE, CREATE_TODO_REQUEST>({
                query: userData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            updateToDo: builder.mutation<UPDATE_TODO_RESPONSE, UPDATE_TODO_REQUEST>({
                query: userData => {
                    return {
                        url: "/update/" + userData.id,
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            deleteToDo: builder.mutation<DELETE_TODO_RESPONSE, DELETE_TODO_REQUEST>({
                query: userData => {
                    return {
                        url: "/delete/" + userData.id,
                        method: "DELETE"
                        // body: userData
                    }
                },
                invalidatesTags: ["todo"]
            }),
        }
    }
})

export const {
    useAddToDoMutation,
    useGetToDosQuery,
    useUpdateToDoMutation,
    useDeleteToDoMutation
} = toDoApi
