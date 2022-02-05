import Link from "next/link";

export default function Post({ key, post1s }) {
    return (
        <div>
            <span>{post1s.id}</span>
            <span>@@@{key}@@@oooooo</span>

            {"  :  "}
            <Link href={`/posts/${post1s.id}`}>
                <span className="cursor-pointer text-blue-500 border-blue-500 hover:bg-gray-200">
                    {post1s.title}
                </span>
            </Link>
        </div>
    )
}