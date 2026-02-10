import { Wrapper, Container, Title, Logo } from "./styles";
import blog_png from "../../assets/blog-png7.png";
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
      <Wrapper>
        <Container>
          <div>
            <Title as={"h2"}>Meu Blog</Title>
            {message}
          </div>
          <Logo src={blog_png} />
        </Container>
      </Wrapper>
    </>
  );
}
