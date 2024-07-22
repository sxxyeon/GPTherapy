import {
  DiaryContainer,
  ResultTitle,
  Divider,
  CardContainer,
  CardTitle,
  CardContent,
  ActionListItem,
} from "./CommonStyles";

import {
  LoadingOutlined,
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
  MessageTwoTone,
  SoundTwoTone,
} from "@ant-design/icons";
import styled from "styled-components";


const DiaryDisplay = ({ data, isLoading }) => {
  return (
    <DiaryContainer>
      {isLoading && (
        <>
          불러오는중...
          <LoadingOutlined />
        </>
      )}
      <ResultTitle>{data?.title}</ResultTitle>

      <Divider />
      <CardContainer>
        <CardTitle>
          <CheckCircleTwoTone
            twoToneColor="#a991ed"
            style={{ marginRight: "6px" }}
          />
          요약문
        </CardTitle>
        <CardContent>{data?.summary}</CardContent>
      </CardContainer>


      <Divider />
      <CardContainer>
        <CardTitle>
          <HeartTwoTone twoToneColor="#a991ed" style={{ marginRight: "6px" }} />
          회고문
        </CardTitle>
        <CardContent>{data?.emotional_content}</CardContent>
      </CardContainer>

      <Divider />
      <CardContainer>
        <CardTitle>
          <SmileTwoTone twoToneColor="#a991ed" style={{ marginRight: "6px" }} />
          당신이 느낀 감정
        </CardTitle>
        <CardContent>{data?.emotional_result}</CardContent>
      </CardContainer>

      <Divider />
      <CardContainer>
        <CardTitle>
          <MessageTwoTone
            twoToneColor={"#a991ed"}
            style={{ marginRight: "6px" }}
          />
          심리 분석
        </CardTitle>
        <CardContent>{data?.analysis}</CardContent>
      </CardContainer>

      <Divider />
      <CardContainer>
        <CardTitle>
          <SoundTwoTone twoToneColor="#a991ed" style={{ marginRight: "6px" }} />
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
