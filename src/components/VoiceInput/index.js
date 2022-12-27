import React, { useEffect, useState } from "react";
import MicRecorder from "mic-recorder-to-mp3";

const VoiceInput = () => {
  const [micData, setMicData] = useState({
    isRecording: false,
    blobURL: "",
    isBlocked: false,
  });
  const Mp3Recorder = new MicRecorder({ bitRate: 128 });

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
    <div>
      <button onClick={startRecording} disabled={micData.isRecording}>
        Record
      </button>
      <button onClick={stopRecording} disabled={!micData.isRecording}>
        Stop
      </button>
      <audio src={micData.blobURL} controls="controls" />
    </div>
  );
};

export default VoiceInput;
