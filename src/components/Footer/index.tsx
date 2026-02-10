export function Footer() {
  const message = true;
  return (
    <>
      <footer>
        <p>₢ 2026 Meu Blog</p>
        {message && <p>Obrigado por visitar nosso blog</p>}
      </footer>
    </>
  );
}
