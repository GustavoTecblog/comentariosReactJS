/* npm run dev (Iniciar pelo VITE)  */

import { Header } from './componentes/Header';
import { Post } from './componentes/Post';
import { Sidebar } from './componentes/Sidebar';

import styles from './App.module.css'

import './global.css' /* Importar um estilo */

// JSX = Java script + XML (HTML)

/*
  Componentes, como indentificar?
  : Componentes no REACT, é uma função que retorna HTML.
*/

/*
  Propiedades, o que são?
  Propiedades elas alteram elemento visuais de um componente, sem a gente precisar
  perder a flexibilidade de abstrair um componente em um outro arquivo, para reaproveite 
  elemetos comuns nesse componente.
*/

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author = "Diego Fernandes"
            content = "Olá meus amigos, textos teste para trabalharmos !"
          />

          <Post 
            author = "Gustavo Felix"
            content = "Olá meus amigos, textos teste para trabalharmos !"
          />
        </main>
      </div>
      
    </div>
  )
} 
    