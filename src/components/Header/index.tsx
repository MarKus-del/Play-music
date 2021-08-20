import { ReactNode } from "react";
import { HeaderContainer } from "./styles";

type HeaderProps = {
  title: string;
  children: ReactNode
}

export default function Header({ title, children }: HeaderProps) {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      {children}
    </HeaderContainer>
  );
}
