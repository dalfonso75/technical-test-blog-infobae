import { useState, useEffect } from "react";

import usePosts from "../../hooks/usePosts";

import Posts from "../../Components/Posts";
import Pagination from "../../Components/Pagination";
import Modal from "../../Components/Modal";
import Comments from "../../Components/Comments";

function HomePage() {
  const { get, data } = usePosts();

  const [posts, setPosts] = useState([]);

  // ID to make the request and bring comments
  const [postID, setPostID] = useState();

  // state to Modal
  const [showModal, setShowModal] = useState(false);

  // pagination
  const [numberCurrentPage, setNumberCurrentPage] = useState(0);

  // Fetch Posts
  useEffect(() => {
    get(numberCurrentPage);
  }, [get, numberCurrentPage]);

  // add post by pagination
  useEffect(() => {
    if (data) {
      const { data: postsApi = [] } = data || {};
      setPosts((prevPosts) => [...prevPosts, ...postsApi]);
    }
  }, [data]);

  // function close to Modal
  const onClose = () => {
    setShowModal(false);
    setPostID(null);
  };

  return (
    <div>
      <Posts posts={posts} setShowModal={setShowModal} setPostID={setPostID} />

      {posts.length > 0 && (
        <Pagination
          total={data?.total}
          numberCurrentPage={numberCurrentPage}
          setNumberCurrentPage={setNumberCurrentPage}
          limit={data?.limit}
        />
      )}

      {postID && (
        <Modal show={showModal} onClose={onClose}>
          <Comments postId={postID} />
        </Modal>
      )}
    </div>
  );
}

export default HomePage;
