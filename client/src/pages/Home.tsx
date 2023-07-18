import {
  Container,
  Dialog,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createPost,
  deletePost,
  getOnePost,
  getPosts,
  updatePost,
} from "../services/postService";
import PostCard from "../features/PostCard";
import SendIcon from "@mui/icons-material/Send";
import { useCookies } from "react-cookie";

const Home = () => {
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [postText, setPostText] = React.useState("");
  const [cookies, setCookies, removeCookie] = useCookies(["userID"]);
  const [postTextToEdit, setPostTextToEdit] = React.useState("");
  const postedBy = cookies.userID;
  const { data, refetch } = useQuery(["posts"], getPosts);

  const postMutation = useMutation((data: any) => createPost(data), {
    onSuccess: (data: any) => {
      console.log(data);
      refetch();
    },
  });

  const deletePostMutation = useMutation((data: string) => deletePost(data), {
    onSuccess: (data: string) => {
      console.log(data);
      refetch();
    },
  });

  const handlePostSubmit = () => {
    if (postText === "") return;
    postMutation.mutate({ postText, postedBy });
    setPostText("");
  };

  const handlePostDelete = (id: string) => {
    deletePostMutation.mutate(id);
  };

  const updatePostMutation = useMutation(updatePost);

  const handleUpdatePost = async (post: any) => {
    try {
      const newPost = { ...post, postText: postTextToEdit };
      const updatedPost = await updatePostMutation.mutateAsync(newPost);
      console.log(updatedPost);
    } catch (error) {
      // Handle error
    }
  };
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      handlePostSubmit();
    }
  };

  const handleEditClick = async (id: string) => {
    try {
      const post = await getOnePost(id);
      console.log(post);
      setIsEditModalOpen(true);
      setPostTextToEdit(post.postText);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container sx={{ margin: "5%" }}>
      {isEditModalOpen && (
        <Dialog
          open={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          fullWidth
        >
          <Container sx={{ p: 4, display: "flex" }}>
            <TextField
              defaultValue={postTextToEdit}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => {
                setPostTextToEdit(e.target.value);
                console.log(postTextToEdit);
              }}
              multiline
              fullWidth
              sx={{ height: "50vh" }}
            />
            <IconButton onClick={() => handleUpdatePost}>
              <SendIcon />
            </IconButton>
          </Container>
        </Dialog>
      )}
      <TextField
        sx={{
          display: "flex",
        }}
        multiline
        rows={4}
        variant="outlined"
        label="Write a post"
        value={postText}
        placeholder="Write a post!"
        fullWidth
        onKeyDown={(e: any) => handleKeyPress(e)}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
          setPostText(e.target.value);
        }}
      />
      <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={() => handlePostSubmit()}>
          {" "}
          <SendIcon />
        </IconButton>
      </Container>
      <Container sx={{ height: "80vh" }}>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <div>
            {data
              ? data.map((post: any) => (
                  <PostCard
                    onDelete={() => handlePostDelete(post._id)}
                    onUpdate={() => handleEditClick(post._id)}
                    key={post._id}
                    postText={post.postText}
                    postedBy={post.postedBy}
                    sharedQuote={post.sharedQuote}
                    likes={post.likes}
                    createdAt={post.createdAt}
                    comments={post.comments}
                  />
                ))
              : null}
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
