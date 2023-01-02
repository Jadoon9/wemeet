import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({ theme, value, onChange }) => {
  console.log(value, "valueeee");
  return (
    <div
    //   style={{
    //     minHeight: "500px",
    //     maxHeight: "800px",
    //     overflow: "hidden",
    //     overflowY: "scroll",
    //     overflowX: "scroll",
    //   }}
    >
      <ReactQuill
        style={{
          height: "auto",
        }}
        theme={theme}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Editor;
