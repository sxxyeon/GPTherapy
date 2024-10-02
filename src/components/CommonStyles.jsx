import React from "react";
import styled from "styled-components";

export const Title = styled.div`
  font-size: 17px;
  margin: 10px;
  font-weight: 600;
  color: #937bd9;
`;
export const ResultTitle = styled.div`
  font-size: 17px;
  margin-top: 50px;
  font-weight: 600;
`;
export const DiaryContainer = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  border-radius: 10px;

  background-image: url("/img/note.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
`;
export const CardContainer = styled.div`
  box-shadow: 0 1px 10px 7px rgba(149, 157, 165, 0.2);
  padding: 20px;
  border-radius: 10px;
`;
export const CardTitle = styled.div`
  color: #6b6b6b;
  margin-bottom: 20px;
`;
export const CardContent = styled.div``;
export const ActionList = styled.ul`
  font-size: 16px;
`;
export const ActionListItem = styled.li`
  margin-bottom: 5px;
`;
