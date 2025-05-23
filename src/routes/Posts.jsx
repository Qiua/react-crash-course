import { Outlet } from "react-router-dom";

import PostList from "../components/PostsList";

function Posts() {
    return (
        <>
            <Outlet />
            <main>
                <PostList />
            </main>
        </>
    );
}

export default Posts;

export async function loader() {
    const response = await fetch("http://localhost:8080/posts");
    if (!response.ok) {
        throw new Response("Could not fetch posts", { status: 500 });
    }
    const data = await response.json();
    return data.posts;
}
