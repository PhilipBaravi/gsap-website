import { FC } from "react";

type ImageClipBoxProps = {
  src: string;
  clipClass: string;
};

const ImageClipBox: FC<ImageClipBoxProps> = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );
};

export default ImageClipBox;
