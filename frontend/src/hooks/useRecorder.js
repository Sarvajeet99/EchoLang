import { useRef, useState } from "react";

export default function useRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [levels, setLevels] = useState(Array(16).fill(8));

  const mediaRecorder = useRef(null);
  const chunks = useRef([]);
  const streamRef = useRef(null);

  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const animationRef = useRef(null);

  const updateLevels = () => {
    if (!analyserRef.current) return;

    const analyser = analyserRef.current;

    const buffer = new Uint8Array(analyser.fftSize);

    analyser.getByteTimeDomainData(buffer);

    let sum = 0;

    for (let i = 0; i < buffer.length; i++) {
      const x = (buffer[i] - 128) / 128;
      sum += x * x;
    }

    const rms = Math.sqrt(sum / buffer.length);

    // Sensitivity (increase/decrease this if needed)
    const volume = Math.min(1, rms * 8);

    const bars = Array.from({ length: 16 }, (_, i) => {
      const random = 0.75 + Math.random() * 0.35;
      return 8 + volume * random * 55;
    });

    setLevels((prev) =>
      prev.map((old, i) => old * 0.8 + bars[i] * 0.2)
    );

    animationRef.current = requestAnimationFrame(updateLevels);
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    streamRef.current = stream;
    chunks.current = [];

    const audioContext = new AudioContext();

    const analyser = audioContext.createAnalyser();

    analyser.fftSize = 1024;
    analyser.smoothingTimeConstant = 0.92;

    const source =
      audioContext.createMediaStreamSource(stream);

    source.connect(analyser);

    audioContextRef.current = audioContext;
    analyserRef.current = analyser;

    updateLevels();

    const recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunks.current.push(e.data);
      }
    };

    recorder.start();

    mediaRecorder.current = recorder;

    setIsRecording(true);
  };

  const stopRecording = () => {
    return new Promise((resolve) => {
      if (!mediaRecorder.current) return;

      mediaRecorder.current.onstop = () => {
        cancelAnimationFrame(animationRef.current);

        audioContextRef.current?.close();

        setLevels(Array(16).fill(8));

        const blob = new Blob(chunks.current, {
          type: "audio/webm",
        });

        streamRef.current
          ?.getTracks()
          .forEach((track) => track.stop());

        mediaRecorder.current = null;
        streamRef.current = null;
        analyserRef.current = null;
        audioContextRef.current = null;
        chunks.current = [];

        setIsRecording(false);

        resolve(blob);
      };

      mediaRecorder.current.stop();
    });
  };

  return {
    isRecording,
    levels,
    startRecording,
    stopRecording,
  };
}