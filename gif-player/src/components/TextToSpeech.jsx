import React, { Component } from 'react';
import { VoicePlayer, VoiceRecognition } from 'react-voice-components';



const TextToSpeech = (props) => {
  const { word } = props;
  console.log(props);
  return (
    <VoicePlayer
      play
      text={word}
      />
  )
}

export default TextToSpeech
