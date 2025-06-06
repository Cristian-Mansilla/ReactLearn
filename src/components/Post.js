const Post = ({title,author,children}) => {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{children}</p>
        </div>

    )
};
export default Post;
