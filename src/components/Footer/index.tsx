import { FooterWrapper } from "./styles";

export function Footer() {
  const message = true;
  return (
    <>
      <FooterWrapper>
        <p>₢ 2026 Meu Blog</p>
        {message && <p>Obrigado por visitar nosso blog</p>}
      </FooterWrapper>
    </>
  );
}
