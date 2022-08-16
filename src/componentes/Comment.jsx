import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(){
    return(
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="foto-perfil2.jpg"/>

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Gustavo Felix</strong>

                        <time title='11 de maio ás 08:13' dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
                    </div>

                    <button title="Deletar comentário">
                        <Trash size={24} />
                    </button>
                </header>

                <p>Muito bom Gustavo, parabéns !! </p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    </div>
    )
}