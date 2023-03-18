import React, { useEffect } from 'react'
import { deletePostApi, getPostsAPI } from '../api/API'

const UserList = (props) => {
    const { PostList, setPostList, setEditObj, setValue } = props

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await getPostsAPI()
            setPostList(response.data)
        } catch (error) {
            return;
        }
    }

    const editPost = (id) => {
        const filter = PostList.find((elem) => elem.id == id)
        setEditObj(filter)
        setValue(filter)
    }

    const deletePost = async (id) => {
        try {
            const response = await deletePostApi()
            if (response.data) {
                const filter = PostList.filter((elem) => elem.id !== id)
                setPostList([...filter])
            }
        } catch (error) {
            return error
        }
    }

    return (
        <>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Add New</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {PostList?.map((elem, index) => {
                        return (
                            <tr key={index}>
                                <td>{elem.title}</td>
                                <td>{elem.body}</td>
                                <td style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "11px" }}>
                                    <span style={{ marginRight: "5px" }}>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => editPost(elem.id)}><i className="fa-regular fa-pen-to-square"></i></button>
                                    </span>
                                    <span>
                                        <button type="button" className="btn btn-danger" onClick={() => deletePost(elem.id)}><i className="fa-solid fa-trash"></i></button>
                                    </span>
                                </td>
                            </tr>
                        )

                    })
                    }

                </tbody>
            </table >
        </>
    )
}

export default UserList
