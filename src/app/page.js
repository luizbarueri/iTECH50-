import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Euipe 9 - Luiza, Luiz, Ingrid, Juliana, Monique&nbsp;
          <code className={styles.code}>aTip tech 2023</code>
        </p>
        <div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            por{' '}
            <Image
              src="/logo.jpeg"
              alt="ESG"
              className={styles.vercelLogo}
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/esg.png"
          alt="ESG"
          width={400}
          height={300}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/equipe.html"
          className={styles.card}
          target="_blank"
          rel="Luiza"
        >
          <h2>
            Tema 1 <span>-&gt;</span>
          </h2>
          <p>Aqui alguma coisa sobre Tema 1.</p>
        </a>

        <a
          href="/equipe.html"
          className={styles.card}
          target="_blank"
          rel="Luiz"
        >
          <h2>
            Tema 2 <span>-&gt;</span>
          </h2>
          <p>Aqui alguma coisa sobre &nbsp;Tema 2</p>
        </a>

        <a
          href="/equipe.html"
          className={styles.card}
          target="_blank"
          rel="Ingrid"
        >
          <h2>
            Tema 3 <span>-&gt;</span>
          </h2>
          <p>Aqui alguma coisa sobre Tema 3</p>
        </a>

        <a
          href="/equipe.html"
          className={styles.card}
          target="_blank"
          rel="Juliana"
        >
          <h2>
            Tema 4 <span>-&gt;</span>
          </h2>
          <p>
          Aqui alguma coisa sobre Tema 4
          </p>
        </a>
        
      </div>
    </main>
  )
}
