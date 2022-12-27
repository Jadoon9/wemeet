import React, { useState } from "react";
import Editor from "../../components/Editor";
import CkEditor from "../../components/Editor/CkEditor";
import MainPageLayout from "../../components/MainPageLayout";

const EditorPage = () => {
  const [editorInput, setEditorInput] = useState("");

  const onChange = (event, editor) => {
    const data = editor.getData();
    setEditorInput(data);
    // console.log({ event, data });
  };

  console.log(editorInput, "editorinput");
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
        {/* <Editor theme="snow" value={value} onChange={setValue} /> */}
        <CkEditor editorInput={editorInput} onChange={onChange} />
      </MainPageLayout>
    </>
  );
};

export default EditorPage;
