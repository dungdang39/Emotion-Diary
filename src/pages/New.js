import { useEffect } from "react";
import DiaryEditer from "../components/DiaryEditor";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장- 새 일기`;
  }, []);
  return (
    <div>
      <DiaryEditer />
    </div>
  );
};

export default New;
