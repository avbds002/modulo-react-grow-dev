import { Link } from "react-router-dom";
import type { IPost } from "../../types";
import { Avatar } from "./styles";

export function Post({
  id,
  image,
  category,
  title,
  description,
  author,
  avatar,
  createdAt,
  children,
}: IPost) {
  const hasExtraContent = true;

  let contadorCurtidas = 0;
  function handleLike() {
    contadorCurtidas += 1;
    alert(`Você curtiu esse post ${contadorCurtidas} vezes`);
  }

  return (
    <>
      <article>
        <img src={image} alt={title} />
        <p>{category}</p>
        <h2>
          <Link to={`/post/${id}`}>{title}</Link>
        </h2>

        <div>
          <Avatar src={avatar} alt={title} />
          <div>
            <span>
              <p>{author}</p>
            </span>
            <span>
              <p>{createdAt}</p>
            </span>
          </div>
        </div>
        <p>{description}</p>
        {children}
        {hasExtraContent ? (
          <button>Leia mais</button>
        ) : (
          <p>Nenhum conteúdo disponível</p>
        )}

        <button onClick={() => handleLike()}>Curtir</button>
      </article>
    </>
  );
}
