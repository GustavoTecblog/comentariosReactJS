import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/diego3.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Gustavo Felix</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de maio ás 08:13' dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p> <a href="">jane.design/doctorcare</a> </p>

                <p>
                    <a>#novoprojeto</a>{' '}
                    <a>#nlw</a>{' '}
                    <a>#rocketseat</a> </p>{' '}
            </div>

            <form className={styles.commentForm}>
                <strong>deixa o seu feedback</strong>
                <textarea
                placeholder='Deixe um comentário'
                />
                    <button type="submit">Publicar</button>

                
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
} 