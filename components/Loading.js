import styles from '../styles/Loading.module.css'

import Image from 'next/image'

export default function Loading() {
    return (
        <div className={styles.loading_container}>
            <Image src='/images/loading.svg' width='120' height='120' alt='Loading' />
        </div>
    )
}