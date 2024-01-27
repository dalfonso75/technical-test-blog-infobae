import { useState, useEffect } from "react";

import usePosts from "../../hooks/usePosts";

import Posts from "../../Components/Posts";
import Pagination from "../../Components/Pagination";

function HomePage() {
  const { get, data, hasError } = usePosts();

  const [posts, setPosts] = useState([]);

  // pagination
  const [numberCurrentPage, setNumberCurrentPage] = useState(0);

  // Fetch Posts
  useEffect(() => {
    get(numberCurrentPage);
  }, [get, numberCurrentPage]);

  useEffect(() => {
    if (data) {
      const { data: postsApi = [] } = data || {};
      setPosts((prevPosts) => [...prevPosts, ...postsApi]);
    }
  }, [data]);

  return (
    <div>
      <Posts posts={posts} />

      {posts.length > 0 && (
        <Pagination
          total={data?.total}
          numberCurrentPage={numberCurrentPage}
          setNumberCurrentPage={setNumberCurrentPage}
          limit={data?.limit}
        />
      )}
    </div>
  );
}

export default HomePage;
