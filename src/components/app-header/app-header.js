import React from "react";

import { Spinner } from "reactstrap";

import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    transition: all 0.3s ease;
    color: ${(props) => (props.colored ? "red" : "pink")};
    :hover {
      color: blueviolet;
      transition: all 0.3s ease;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const AppHeader = ({ liked, allPosts }) => {
  return (
    <Header>
      <Spinner size="sm">Loading...</Spinner> <h1>React Notes</h1>
      <h2>{allPosts} entries, of which {liked} liked </h2>
    </Header>
  );
};

export default AppHeader;
