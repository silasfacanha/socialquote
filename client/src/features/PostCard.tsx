import { Delete, Edit } from "@mui/icons-material";
import { Button, Card, Typography } from "@mui/material";
import React from "react";

interface PostCardProps {
  postText: string;
  sharedQuote: string;
  likes: number;
  postedBy: string;
  createdAt: string;
  comments: string[];
  onDelete: () => void;
  onUpdate: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  postText,
  sharedQuote,
  likes,
  postedBy,
  createdAt,
  comments,
  onDelete,
  onUpdate,
}) => {
  return (
    <Card>
      <Typography>{postText}</Typography>
      <Typography>{sharedQuote}</Typography>
      <Typography>{likes}</Typography>
      <Typography>{postedBy}</Typography>
      <Typography>{createdAt}</Typography>
      <Typography>{comments}</Typography>
      <Button onClick={onDelete}>
        {" "}
        <Typography>
          {" "}
          <Delete />{" "}
        </Typography>
      </Button>
      <Button onClick={onUpdate}>
        {" "}
        <Typography>
          {" "}
          <Edit />
        </Typography>
      </Button>
    </Card>
  );
};

export default PostCard;
