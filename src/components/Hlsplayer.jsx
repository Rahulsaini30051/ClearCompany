
import ReactHlsPlayer from 'react-hls-player';
import React from 'react';

import {Modal} from 'react-bootstrap';





function Hlsplayer() {
  return (
   
      <ReactHlsPlayer
    src="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
    autoPlay={false}
    controls={true}
    width="100%"
    height="auto"
  />
      
  );
}
export default Hlsplayer;


