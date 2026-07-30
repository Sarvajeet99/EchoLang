import axios from "axios";

export const transcribeAudio = async (
    blob,
    source,
    target
)=>{

    const formData = new FormData();

    formData.append("file", blob);
    formData.append("source", source);
    formData.append("target", target);

    const response = await axios.post(
        "http://127.0.0.1:8000/transcribe",
        formData
    );

    return response.data;
}