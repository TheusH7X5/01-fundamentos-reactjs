import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";
import { posts } from "./services/api";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} id={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt}  />;
          })}
        </main>
      </div>
    </div>
  );
}
