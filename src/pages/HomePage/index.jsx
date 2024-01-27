import { useState, useEffect } from "react";

import usePosts from "../../hooks/usePosts";
import useTag from "../../hooks/useTag";

import Tags from "../../Components/Tags";
import Posts from "../../Components/Posts";
import Pagination from "../../Components/Pagination";
import Modal from "../../Components/Modal";
import Comments from "../../Components/Comments";

function HomePage() {
  // custom hook for posts
  const { get, data } = usePosts();
  // custom hook for tags
  const { get: getTags, dataGet: tags, getByTag, dataGetByTag } = useTag();

  const [posts, setPosts] = useState([]);

  // ID to make the request and bring comments
  const [postID, setPostID] = useState();

  // state for Modal
  const [showModal, setShowModal] = useState(false);

  // pagination
  const [numberCurrentPage, setNumberCurrentPage] = useState(0);

  // state to control filters by tags
  const [currentTag, setCurrentTag] = useState("");
  const [isFilterTag, setIsFilterTag] = useState(false);

  // Fetch Posts and Tags with pagination
  useEffect(() => {
    if (isFilterTag) {
      console.log("request");
      getByTag(currentTag, numberCurrentPage);
    } else {
      get(numberCurrentPage);
    }
  }, [get, numberCurrentPage, isFilterTag, getByTag, currentTag]);

  // Fetch Tags
  useEffect(() => {
    getTags();
  }, [getTags]);

  // Post by pagination
  useEffect(() => {
    if (data) {
      const { data: postsApi = [] } = data || {};
      setPosts((prevPosts) => [...prevPosts, ...postsApi]);
    }
  }, [data]);

  // set state post by tags pagination
  // TODO: Resolve bug: empty the posts and add the posts by tag
  useEffect(() => {
    if (dataGetByTag && dataGetByTag.length > 0)
      setPosts((prevPosts) => [...prevPosts, ...dataGetByTag]);
  }, [dataGetByTag, setPosts]);

  // function close for Modal
  const onClose = () => {
    setShowModal(false);
    setPostID(null);
  };

  // function handle for onchange select tags
  const handleStatesByTag = (tag) => {
    setCurrentTag(tag);
    setNumberCurrentPage(0);
    setIsFilterTag(true);
  };

  console.log(currentTag);
  return (
    <div>
      <Tags
        tags={tags}
        handleStatesByTag={handleStatesByTag}
        hasResults={dataGetByTag && dataGetByTag.length === 0}
      />

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
