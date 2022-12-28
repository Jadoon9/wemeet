import React, { useEffect, useState } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import Buttonn from "../UiElements/Button";

const VoiceInput = () => {
  const [micData, setMicData] = useState({
    isRecording: false,
    blobURL: "",
    isBlocked: false,
  });
  const [Mp3Recorder, setMp3Recorder] = useState(
    new MicRecorder({ bitRate: 128 })
  );

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        setMicData({ ...micData, isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        setMicData({ ...micData, isBlocked: false });
      }
    );
  }, []);

  const startRecording = () => {
    if (micData.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          setMicData({ ...micData, isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };
  const stopRecording = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setMicData({ ...micData, blobURL, isRecording: false });
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="d-flex flex-column w-25 ">
      <audio src={micData.blobURL} controls="controls" />
      <div className=" d-flex align-content-center align-items-center">
        <Buttonn
          variant="info"
          onClick={startRecording}
          disabled={micData.isRecording}
          text="Record"
        />
        &nbsp;&nbsp;&nbsp;
        <Buttonn
          variant="danger"
          onClick={stopRecording}
          disabled={!micData.isRecording}
          text="Stop"
        />
      </div>
    </div>
  );
};

export default VoiceInput;
