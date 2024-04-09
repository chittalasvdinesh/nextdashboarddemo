import { comments } from "../../../../../data/comments";

export default function handler(req, res) {
    const { commentId } = req.query;
    if (req.method === "GET") {
        const comment = comments.find((el) => el.id === parseInt(commentId));
        res.status(200).json(comment);
    }
    else if(req.method==="DELETE"){
        const deletedComment = comments.find((el) => el.id === parseInt(commentId));
        const index=comments.findIndex((val)=>val.id===parseInt(commentId));
        comments.splice(index,1)
        res.status(200).json(deletedComment)
    }

    else if(req.method==="PATCH"){
        const comment=req.body.comment;
        console.log("comment",comment)
        const newComment={
            id:parseInt(commentId),
            text:comment
        }
        const index=comments.findIndex((val)=>val.id===parseInt(commentId));
        comments.splice(index,1,newComment)
        res.status(200).json(newComment)
    }
}

