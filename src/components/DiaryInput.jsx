import { Input, Button, message } from "antd";
import { useState } from "react";
import { Title } from "./CommonStyles";
import styled from "styled-components";
import { FileImageOutlined } from "@ant-design/icons";
import html2canvas from "html2canvas";

const { TextArea } = Input;

const DiaryInput = ({ isLoading, onSubmit, messageApi }) => {
  const [userInput, setUserInput] = useState("");
  // 사용자의 입력을 받아, 상위컴포넌트로 데이터를 전달

  // loading 상태 - 사용자가 제출버튼을 못 누르도록 처리
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleClick = () => {
    if (!userInput) {
      messageApi.open({
        type: "error",
        content: "일과를 적어주세요.",
      });
      return;
    }
    messageApi.open({
      type: "success",
      content: "생성 요청 완료",
    });

    onSubmit(userInput);
    setUserInput(null);
  };

  const captureAndDownload = async () => {
    const nodeToCapture = document.getElementById("capture");
    console.log(nodeToCapture);
    // HTML2Canvas를 사용하여 노드의 스크린샷을 생성.
    html2canvas(nodeToCapture, {
      allowTaint: true,
      useCORS: true,
    }).then(function (canvas) {
      // 스크린샷을 이미지로 변환.
      const image = canvas.toDataURL("image/png");

      // 이미지를 다운로드할 수 있는 링크를 생성.
      const a = document.createElement("a");
      a.href = image;
      a.download = "gpt-diary-result.png";
      a.click();
    });
  };

  return (
    <InputWrap>
      <Title>오늘의 일?</Title>
      <TextArea
        value={userInput}
        onChange={handleUserInput}
        placeholder="오늘 일어난 일들을 2줄 이상 적어주세요."
      />
      <ButtonContainer>
        <Button loading={isLoading} onClick={handleClick}>
          심리분석 시작
        </Button>
        <Button
          icon={<FileImageOutlined />}
          loading={isLoading}
          onClick={captureAndDownload}
        >
          저장
        </Button>
      </ButtonContainer>
      <canvas id="canvas" style={{ display: "none" }}></canvas>
    </InputWrap>
  );
};

export default DiaryInput;

const InputWrap = styled.div`
  padding-top: 30px;
  textarea {
    height: 200px;
    max-height: 200px;
    box-shadow: 0 1px 10px 4px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 10px;
  }
`;

const ButtonContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  gap: 5px;
  button {
    padding: 20px;
    box-sizing: border-box;
  }
  button:first-child {
    background: #937bd9;
    color: #fff;
    border: 1px solid #937bd9;
    &:hover {
      background: #fff;
      border: 1px solid #937bd9 !important;
      color: #937bd9 !important;
    }
  }
  button:nth-child(2) {
    box-sizing: border-box;
    &:hover {
      border: 1px solid #937bd9 !important;
      color: #937bd9 !important;
    }
  }
`;
