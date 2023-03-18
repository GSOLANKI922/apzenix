import React from 'react'
import { postApi, putApi } from '../api/API';

const Post = (props) => {
    const { editObj, value, setValue, PostList, setPostList, setIsEdit } = props;

    const changeHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setValue((v) => ({
            ...v,
            [name]: value
        }))
    }

    const putRequest = async () => {
        const newObj = { ...editObj, title: value.title, body: value.body }

        try {
            // ADD NEW POST
            const postRes = await putApi(newObj)
            if (postRes.data) {
                const findIndex = PostList.findIndex((elem) => elem.id == postRes.data.id)
                PostList[findIndex] = postRes.data
                const updatedList = [...PostList]
                setPostList(updatedList)
                setValue({
                    title: "",
                    body: "",
                })
            }
        } catch (error) {
            return error
        }
    }

    const postRequest = async () => {
        try {
            const post = {
                title: value.title,
                body: value.body,
                useId: 1
            }
            // EDIT POST POST
            const postRes = await postApi(post)
            if (postRes.data) {
                PostList.splice(0, 0, postRes.data);
                const updatedList = [...PostList]
                setPostList(updatedList)
                setValue({
                    title: "",
                    body: "",
                })
            }
        } catch (error) {
            return error
        }
    }

    const onSubmit = async () => {
        if (editObj.title && editObj.body) {
            await putRequest()
        } else {
            await postRequest()
        }
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <input type="text" value={value.title} onChange={changeHandler} className="form-control" name='title' id="exampleFormControlInput1" placeholder="Type Title" />
                            </div>
                            <div className="mb-3">
                                <textarea class="form-control" value={value.body} onChange={changeHandler} name='body' placeholder="Type Body" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={onSubmit} data-bs-dismiss="modal">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post