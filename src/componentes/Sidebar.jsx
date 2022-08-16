import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';


export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img
             className={styles.cover}
             src="https://media.istockphoto.com/photos/woman-using-covid19-lockdown-to-finally-finish-coding-for-a-new-picture-id1280720394?b=1&k=20&m=1280720394&s=170667a&w=0&h=eRUffvpLTljTivBkS6YMa_5RIJjOoijyEcL6KbgCp8A="
            />
        
            <div
             className={styles.profile}>
                <Avatar src="https://github.com/diego100.png"/>
                

                <strong>Gustavo</strong>
                <span>Web developer</span>

                <footer>
                    
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    );  
}