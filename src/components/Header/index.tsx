export function Header() {
  const isUserLoggedIn = false;

  let message;

  if (isUserLoggedIn) {
    message = <p>Bem-vindo(a) de volta!</p>;
  } else {
    message = <p>Por favor, faça login para continuar</p>;
  }

  return (
    <>
      <h1>Meu Blog</h1>
      {message}
    </>
  );
}
