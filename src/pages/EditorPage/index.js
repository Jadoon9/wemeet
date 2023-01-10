import React, { useState } from "react";
import Card from "../../components/Card";
import Editor from "../../components/Editor";
import CkEditor from "../../components/Editor/CkEditor";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import { useDispatch, useSelector } from "react-redux";
import { setCkEditorInput, setReactQuillInput } from "../../redux/store";
import { Helmet } from "react-helmet";

const EditorPage = () => {
  const dispatch = useDispatch();
  const ckEditorInputData = useSelector((state) => state.editor);
  const reactQuillInputData = useSelector((state) => state.editor);

  const ckEditorChangeHandler = (event, editor) => {
    dispatch(setCkEditorInput(editor.getData()));
  };
  const quillChangeHandler = (event) => {
    dispatch(setReactQuillInput(event));
  };

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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dashboard | Text Editors</title>
          <meta
            name="description"
            content="Implemented Text editors with react quill and ckeditor"
          />
        </Helmet>
        <Card title="React Quill Editor">
          <Editor
            theme="snow"
            value={reactQuillInputData.reactQuilInput}
            onChange={quillChangeHandler}
          />
        </Card>

        <Card title="CK Editor">
          <CkEditor
            editorInput={ckEditorInputData.CkEditorInput}
            onChange={ckEditorChangeHandler}
          />
        </Card>
      </MainPageLayout>
    </>
  );
};

export default EditorPage;
