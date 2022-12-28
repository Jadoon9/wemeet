import React, { useState } from "react";
import Card from "../../components/Card";
import Editor from "../../components/Editor";
import CkEditor from "../../components/Editor/CkEditor";
import MainPageLayout from "../../components/MainPageLayout";

const EditorPage = () => {
  const [editorInput, setEditorInput] = useState("");
  const [value, setValue] = useState("");

  const ckEditorChangeHandler = (event, editor) => {
    const data = editor.getData();
    setEditorInput(data);
    // console.log({ event, data });
  };
  const quillChangeHandler = (event) => {
    setValue(event);
  };

  console.log(editorInput, "editorinput");
  return (
    <>
      <MainPageLayout
        title="Editor"
        breadcrum1="Dashboard"
        breadcrum2="UI Elements"
        breadcrum3="Editor"
        cardTitle="Editors Page"
        link1="/"
        link2="/ui-elements"
        link3="/editor"
      >
        <Card title="React Quill Editor">
          <Editor theme="snow" value={value} onChange={quillChangeHandler} />
        </Card>

        <Card title="CK Editor">
          <CkEditor
            editorInput={editorInput}
            onChange={ckEditorChangeHandler}
          />
        </Card>
      </MainPageLayout>
    </>
  );
};

export default EditorPage;
