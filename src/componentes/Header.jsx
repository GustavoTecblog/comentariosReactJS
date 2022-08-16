import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-simbol.svg';

console.log(styles)

export function Header(){
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>

         /* Lembra, quando você importa uma classe é de extrema importância você
         utilizar o {styles.nomeClasse } se nãp, o css n irá atribuir essa classe
         na sua tag. */
    );
    
}