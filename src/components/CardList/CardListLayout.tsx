'use client'
import { ReactNode, useState } from 'react'
import Image from 'next/image'
import { PiGearSixFill } from 'react-icons/pi'

import { Project } from '@/types/profileContextTypes'
import { SeeMoreButton } from './SeeMoreButton'
import { CardActiveModalClient } from './CardActiveModalClient'

import styles from './styles.module.scss'

interface CardListLayoutProps {
  children: ReactNode
  listProjects: Project[]
}

export function CardListLayout({
  children,
  listProjects,
}: CardListLayoutProps) {
  const [seeMore, setSeeMore] = useState<boolean>(false)

  function handleSeeMore() {
    console.log(listProjects)
    setSeeMore((state) => {
      return !state
    })
  }

  const animationSeeMore = seeMore ? styles.seeMore : styles.seeLess

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {children}
      <div
        // eslint-disable-next-line @typescript-eslint/no-empty-function, prettier/prettier
        className={`${animationSeeMore} ${styles.cardList}`}
      >
        {seeMore &&
          listProjects?.slice(0, listProjects.length)?.map((project) => (
            <CardActiveModalClient key={project.id} project={project}>
              <div className={styles.imageCard}>
                <Image
                  src={project.image_url}
                  alt={project.title}
                  quality={80}
                  width={400}
                  height={200}
                />
              </div>
              <div className={styles.info}>
                <div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
                <div className={styles.stackList}>
                  {project.technologies?.slice(0, 5).map((tech) => (
                    <div key={tech.name} className={styles.stack}>
                      <PiGearSixFill size={16} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardActiveModalClient>
          ))}
      </div>
      <SeeMoreButton seeMore={seeMore} handleSeeMore={handleSeeMore} />
    </div>
  )
}
