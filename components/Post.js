import Link from "next/link";

const Post = ({ key1s, post1s }) => {
    return (
        <div>
            <span>{post1s.id}</span>
            <span>@@@{key1s}@@@</span>

            {"  :  "}
            <Link href={`/posts/${post1s.id}`}>
                <span className="cursor-pointer text-blue-500 border-blue-500 hover:bg-gray-200">
                    {post1s.title}
                </span>
            </Link>
        </div>
    )
}

export default Post;