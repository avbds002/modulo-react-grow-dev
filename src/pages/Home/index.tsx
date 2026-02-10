import type { ChangeEvent, FormEvent } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { posts } from "../../posts";

export function Home() {
  let filterText = "";
  function handleFilterChange(event: ChangeEvent<HTMLInputElement>) {
    filterText = event.target.value.toLowerCase();
    console.log("Texto do filtro: ", filterText);
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    const filteredPosts = posts.filter((post) =>
      post.title?.toLowerCase().includes(filterText),
    );

    console.log("Posts filtrados: ", filteredPosts);
  }

  return (
    <>
      <Header />

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Filtrar posts por titulo"
          onChange={handleFilterChange}
        />
        <button>Filtrar</button>
      </form>

      <main>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            image={post.image}
            category={post.category}
            avatar={post.avatar}
            createdAt={post.createdAt}
            description={post.description}
            author={post.author}
          ></Post>
        ))}
      </main>

      <Footer />
    </>
  );
}
