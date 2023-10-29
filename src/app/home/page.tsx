'use client'
import { Metadata } from 'next'
import { useProfile } from '@/hooks/useProfile'
import { Navigation } from '@/components/Navigation'
import { AboutMe } from '@/components/AboutMe'
import { MyServices } from '@/components/MyServices'
import { SoftwaresOnline } from '@/components/SoftwaresOnline'
import { Repositories } from '@/components/Repositories'
import { Footer } from '@/components/Footer'
import { ProjectModal } from '@/components/ProjectModal'

import developer from '@/assets/images/developer.svg'
import waves from '@/assets/images/waves.svg'

import styles from '@/styles/Home.module.scss'
import { Contributions } from '@/components/Contributions'
import { ProjectModalApp } from '@/components/ProjectModalApp'
import Image from 'next/image'
import Modal from 'react-modal'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }
Modal.setAppElement('#body')
export default function Home() {
  const {
    showProject,
    handleOpenCloseModal,
    showContribution,
    handleOpenCloseModalApp,
  } = useProfile()

  return (
    <>
      <Navigation />
      <main className={`${styles.main_container} ${inter.className}`}>
        <section id="start" className={styles.front_cover}>
          <Image
            className={styles.developer}
            src={developer}
            alt="developer"
            width={350}
          />
          <Image className={styles.waves} src={waves} alt="waves" />
        </section>

        <AboutMe />
        <MyServices />
        <Contributions />
        <Repositories />
        <SoftwaresOnline />
        {/* <PrototypesUI /> */}
        <Footer />

        <ProjectModal
          isOpen={showProject}
          onRequestClose={handleOpenCloseModal}
        />
        <ProjectModalApp
          isOpen={showContribution}
          onRequestClose={handleOpenCloseModalApp}
        />
      </main>
    </>
  )
}
