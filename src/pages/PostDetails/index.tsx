import { useNavigate, useParams } from "react-router-dom";
import { posts } from "../../posts";

export function PostDetails() {
  //Esse método permite que a gente recupere parametros que foram passados na rota
  const { id } = useParams();

  const navigate = useNavigate();

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <p>Erro 404: Post não encontrado.</p>;
  }

  function handleBack() {
    navigate("/");
  }

  return (
    <>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>
        <strong>Categoria: </strong> {post.category}
      </p>
      <p>
        <strong>Descrição: </strong> {post.description}
      </p>
      <div>
        <img src={post.avatar} alt={post.author} />
        <p>
          <strong>Autor: </strong>
          {post.author}
        </p>
        <p>
          <strong>Data de criação: </strong>
          {post.createdAt}
        </p>
      </div>

      <button onClick={handleBack}>Voltar para a página inicial</button>
    </>
  );
}
