import React from "react";

import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";
const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...itemProps} onDelete={() => onDelete(id)} onToggleImportant={() => onToggleImportant(id)} onToggleLiked={() => onToggleLiked(id)} />
        {/* label={item.label} important={item.important} Можно использовать такой синтаксис или более простой, просто развернуть объект item*/}
      </li>
    );
  });

  return (
    <ListGroup className="app-list">
      {/* <PostListItem label="That is so good" />
      <PostListItem label="I need a break..." /> */}
      {elements}
    </ListGroup>
  );
};

export default PostList;
