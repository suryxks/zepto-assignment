import { FC } from "react";
import styled from "styled-components";
interface Avatar {
  src: string;
  alt: string;
}
const Image = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
`;

export const Avatar: FC<Avatar> = ({ src, alt }) => {
  return <Image src={src} alt={alt} />;
};
