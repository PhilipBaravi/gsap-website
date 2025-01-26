import { FC } from "react";

type ButtonProps = {
  title: string;
  id: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass: string;
};

const Button: FC<ButtonProps> = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
}) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
        {rightIcon}
      </span>
    </button>
  );
};

export default Button;
