// videoconference.js

import React, { useRef, useEffect } from 'react';

const VideoConference = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnectionRef = useRef(null);

  useEffect(() => {
    const setupLocalVideo = async () => {
      try {
        // Get user media for local video
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

        // Attach stream to local video element
        localVideoRef.current.srcObject = stream;

        // Create peer connection
        peerConnectionRef.current = new RTCPeerConnection();

        // Add local stream to peer connection
        stream.getTracks().forEach(track => {
          peerConnectionRef.current.addTrack(track, stream);
        });

        // Set up event listeners for ICE candidates and remote stream
        peerConnectionRef.current.addEventListener('icecandidate', handleIceCandidate);
        peerConnectionRef.current.addEventListener('track', handleRemoteStream);

        // Create offer
        const offer = await peerConnectionRef.current.createOffer();
        await peerConnectionRef.current.setLocalDescription(offer);

        // Send offer to server for signaling
        sendSignalingData(peerConnectionRef.current.localDescription);
      } catch (error) {
        console.error('Error setting up local video:', error);
      }
    };

    setupLocalVideo();
  }, []);

  const handleIceCandidate = event => {
    if (event.candidate) {
      // Send ICE candidate to server for signaling
      sendSignalingData(event.candidate);
    }
  };

  const handleRemoteStream = event => {
    // Attach remote stream to remote video element
    remoteVideoRef.current.srcObject = event.streams[0];
  };

  const sendSignalingData = data => {
    // Send signaling data to server for signaling
    // You can implement your own signaling server or use a third-party service for signaling
    console.log('Signaling data:', data);
  };

  return (
    <div>
      <video ref={localVideoRef} autoPlay muted playsInline />
      <video ref={remoteVideoRef} autoPlay playsInline />
    </div>
  );
};

export default VideoConference;
