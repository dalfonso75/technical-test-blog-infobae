import { useState, useEffect } from "react";

import usePosts from "../../hooks/usePosts";

import Posts from "../../Components/Posts";

function HomePage() {
  const { get, data, hasError } = usePosts();

  const [posts, setPosts] = useState([]);

  // Fetch Posts
  useEffect(() => {
    get();
  }, [get]);

  useEffect(() => {
    if (data) {
      const { data: postsApi = [] } = data || {};
      setPosts(postsApi);
    }
  }, [data]);

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}

export default HomePage;
