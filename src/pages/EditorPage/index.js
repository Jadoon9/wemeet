import React, { useState } from "react";
import Editor from "../../components/Editor";
import MainPageLayout from "../../components/MainPageLayout";

const EditorPage = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <MainPageLayout
        title="Editor"
        breadcrum1="Dashboard"
        breadcrum2="UI Elements"
        breadcrum3="Editor"
        cardTitle="All Rooms"
        link1="/"
        link2="/ui-elements"
        link3="/editor"
      >
        <Editor theme="snow" value={value} onChange={setValue} />
      </MainPageLayout>
    </>
  );
};

export default EditorPage;
