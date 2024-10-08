import { useState } from "react";
import { CallGPT } from "./api/gpt";
import DiaryInput from "./components/DiaryInput";
import styled from "styled-components";
import DiaryDisplay from "./components/DiaryDisplay";
import { message } from "antd";
import Logo from "/img/logo.png";
const dummyData = JSON.parse(
  `{ "title": "", "summary": "", "emotional_content": " ", "emotional_result": "", "analysis": "", "action_list": [] }`
);

function App() {
  const [data, setData] = useState(dummyData);
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleClickAPICall = async (userInput) => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `${userInput}`,
      });
      setData(JSON.parse(message));
      console.log(message);
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error?.message,
      });
      return;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (userInput) => {
    handleClickAPICall(userInput);
  };

  return (
    <AppConatiner>
      {contextHolder}
      <AppTitle>
        <img src={Logo} alt="logo" />
      </AppTitle>
      <DiaryInput
        messageApi={messageApi}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
      <div id="capture">
        <DiaryDisplay isLoading={isLoading} data={data} />
      </div>
    </AppConatiner>
  );
}

export default App;

const AppConatiner = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const AppTitle = styled.div`
  width: 250px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;
