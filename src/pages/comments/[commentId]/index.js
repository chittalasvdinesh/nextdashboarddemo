import { comments } from "../../../../data/comments";

const CommentDetails = ({ comment }) => {
    return (
        <div>
            {comment.id} {comment.text}
        </div>
    )
}

export default CommentDetails;

export async function getStaticPaths() {
    return {
        // paths:[
        //     {params:{commentId:'1'}},
        //     {params:{commentId:'2'}},
        //     {params:{commentId:'3'}},

        // ],
        paths: comments.map((comment) => {
            return { params: { commentId: JSON.stringify(comment.id) } }
        }),
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const { commentId } = params;

    const comment = comments.find((val) => val.id === parseInt(commentId))
    return {
        props: { comment }
    }

}
