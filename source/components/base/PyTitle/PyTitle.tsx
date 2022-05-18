import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyTitleProperties = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
};

const PyTitle: FC<PyTitleProperties> = ({
  children,
  ...rest
}: PyTitleProperties) => {
  return <py-title {...rest}>{children}</py-title>;
};

export default PyTitle;
