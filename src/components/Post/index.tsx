import type { ReactNode } from "react";

interface PostProps {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  createdAt: string;
  children?: ReactNode;
}

export function Post({
  //id,
  image,
  category,
  title,
  description,
  author,
  avatar,
  createdAt,
  children,
}: PostProps) {
  const hasExtraContent = true;

  function handleLike(title: string) {
    alert(`Você curtiu o post ${title}`);
  }

  return (
    <>
      <article>
        <img src={image} alt={title} />
        <p>{category}</p>
        <h2>{title}</h2>

        <div>
          <img src={avatar} alt={title} />
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

        <button onClick={() => handleLike(title)}>Curtir</button>
      </article>
    </>
  );
}
