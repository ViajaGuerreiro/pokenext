import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Laboris aliquip officia laboris ut qui proident adipisicing eiusmod irure aliquip. Eu nostrud elit nulla ad commodo. Consectetur duis ipsum do irure aliqua incididunt reprehenderit ut. Adipisicing et ex exercitation est sunt sunt commodo deserunt nisi.</p>
            <Image src='/images/charizard.png' 
            width='300' 
            height='300' 
            alt="charizard"
            />
        </div>
    )
}