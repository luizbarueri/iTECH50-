// import Image from 'next/image'
import styles from './page.module.css'
import Capitura1 from './capitura1'
import Capitura2 from './capitura2'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
            <h2>
              Capituras de diálogo <span>-&gt;</span>
            </h2>
            <p>Iniciando nossa integração</p>
          </div> 
      <div className={styles.grid}>
          <Capitura1></Capitura1>
          <Capitura2></Capitura2>
      </div>

    </main>
  )
}
