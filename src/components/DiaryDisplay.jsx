import {
  DiaryContainer,
  ResultTitle,
  CardContainer,
  CardTitle,
  CardContent,
  ActionListItem,
} from "./CommonStyles";

import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
  MessageTwoTone,
  SoundTwoTone,
} from "@ant-design/icons";
import { Spin } from "antd";
import styled from "styled-components";

const Loading = styled.div`
  text-align: center;
  padding: 40px;
  margin: 0 auto;
`;

const DiaryDisplay = ({ data, isLoading }) => {
  if (isLoading)
    return (
      <Loading>
        <Spin size="large" twoToneColor="#969696" />
      </Loading>
    );
  return (
    <DiaryContainer>
      <ResultTitle>{data?.title}</ResultTitle>

      <CardContainer>
        <CardTitle>
          <CheckCircleTwoTone
            twoToneColor="#937bd9"
            style={{ marginRight: "6px" }}
          />
          요약문
        </CardTitle>
        <CardContent>{data?.summary}</CardContent>
      </CardContainer>

      <CardContainer>
        <CardTitle>
          <SmileTwoTone twoToneColor="#937bd9" style={{ marginRight: "6px" }} />
          당신이 느낀 감정
        </CardTitle>
        <CardContent>{data?.emotional_result}</CardContent>
      </CardContainer>

      <CardContainer>
        <CardTitle>
          <MessageTwoTone
            twoToneColor={"#937bd9"}
            style={{ marginRight: "6px" }}
          />
          심리 분석
        </CardTitle>
        <CardContent>{data?.analysis}</CardContent>
      </CardContainer>

      <CardContainer>
        <CardTitle>
          <SoundTwoTone twoToneColor="#937bd9" style={{ marginRight: "6px" }} />
          GPT 조언
        </CardTitle>
        <CardContent>
          {data?.action_list.map((action, index) => (
            <ActionListItem key={index}>{action}</ActionListItem>
          ))}
          {/* <ActionListItem>{data.action_list[0]}</ActionListItem>
          <ActionListItem>{data.action_list[1]}</ActionListItem>
          <ActionListItem>{data.action_list[2]}</ActionListItem> */}
        </CardContent>
      </CardContainer>
    </DiaryContainer>
  );
};

export default DiaryDisplay;
