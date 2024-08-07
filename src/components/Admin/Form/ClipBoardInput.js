import { toast } from "react-toastify";
import TextInput from "./TextInput";

export default function ClipBoardInput({ value }) {
  return (
    <TextInput
      type="text"
      onClick={(e) => {
        if (typeof window !== "undefined") {
          e.target.select();
          document.execCommand("copy");
          toast(`Bağlantı panoya kopyalandı: ${e.target.value}`, "info");
        }
      }}
      value={value}
    />
  );
}
