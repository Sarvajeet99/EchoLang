import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export async function transcribeAudio(blob, source, target) {
  const formData = new FormData();

  formData.append("file", blob, "recording.webm");
  formData.append("source", source);
  formData.append("target", target);

  const response = await axios.post(
    `${API_URL}/transcribe`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}