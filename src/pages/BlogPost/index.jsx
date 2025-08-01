import { useParams, Navigate } from 'react-router'
import { AppLayout } from "../../layouts/App"
import { posts } from "../Feed/data"
import styles from './blogpost.module.css'
import { ThumbsUpButton } from "../../components/CardPost/ThumbsUpButton"
import { IconButton } from "../../components/IconButton"
import { IconChat } from "../../components/icons/IconChat"
import { Author } from "../../components/Author"
import Typography from "../../components/Typography"
import { CommentList } from "../../components/CommentList"
import ReactMarkdown from 'react-markdown'

export const BlogPost = () => {
    const { slug } = useParams()
    
    // Busca o post pelo slug
    const post = posts.find(post => post.slug === slug)
    
    // Se não encontrar o post, redireciona para o feed
    if (!post) {
        return <Navigate to="/" replace />
    }

    return (
        <AppLayout>
            <main className={styles.main}>
                <article className={styles.card}>
                    <header className={styles.header}>
                        <figure className={styles.figure}>
                            <img
                                src={post.cover}
                                alt={`Capa do post de titulo: ${post.title}`}
                            />
                        </figure>
                    </header>
                    <section className={styles.body}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </section>
                    <footer className={styles.footer}>
                        <div className={styles.actions}>
                            <div className={styles.action}>
                                <ThumbsUpButton loading={false} />
                                <p>
                                    {post.likes}
                                </p>
                            </div>
                            <div className={styles.action}>
                                <IconButton>
                                    <IconChat />
                                </IconButton>
                                <p>
                                    {post.comments.length}
                                </p>
                            </div>
                        </div>
                        <Author author={post.author} />
                    </footer>
                </article>
                <Typography variant="h3">Código:</Typography>
                <div className={styles.code}>
                    <ReactMarkdown>
                        {post.markdown}
                    </ReactMarkdown>
                </div>
                <CommentList comments={post.comments} />
            </main>
        </AppLayout>
    )
}