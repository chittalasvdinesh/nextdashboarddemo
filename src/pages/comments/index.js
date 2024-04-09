import { useState } from "react";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [activeCommentId, setActiveCommentId] = useState(null);
    const [editedComment,setEditedComment]=useState("")


    const fetchComments = async () => {
        const response = await fetch("/api/comments");
        const data = await response.json();
        setComments(data)
    }

    const postComment = async () => {
        const response = await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': "application/json",

            }
        })
        const data = await response.json();
        console.log(data)
        fetchComments()
    };

    const deleteComment = async (id) => {
        console.log("id", id)

        const response = await fetch(`/api/comments/${id}`, {
            method: "DELETE",
        })
        const data = await response.json();
        console.log(data, response),
            fetchComments()
    }

    const editComment =  (id, text) => {
        console.log("id", id);
        setActiveCommentId(id)
        setEditedComment(text)


    };

    const saveEditedComment=async(id)=>{
        const response = await fetch(`/api/comments/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ comment:editedComment }),
            headers: {
                'Content-Type': "application/json",

            }

        })
        const data = await response.json();
        console.log(data, response),
        fetchComments();
        setActiveCommentId("")
    }



    return <>
        <h1>Comments</h1>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button onClick={postComment}>Submit Comment</button>
        <button onClick={fetchComments}>Load Comments</button>
        {comments.map((val) => {
            return <div key={val.id}>
                {activeCommentId === val.id ? <><h2>{val.id}| {val.text}</h2><input type="text" value={editedComment} onChange={(e) => setEditedComment(e.target.value)} /> <button onClick={() => saveEditedComment(val.id)}>Save</button></> : <h2>{val.id}| {val.text}</h2>}
                {activeCommentId !== val.id && <><button onClick={() => deleteComment(val.id)}>Delete</button>
                    <button onClick={() => editComment(val.id, val.text)}>Edit</button></>}

            </div>
        })}
    </>
};

export default Comments