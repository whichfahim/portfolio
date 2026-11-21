import type { CaseStudyChapter } from '@/types/content';
import styles from './ChapterList.module.css';

/** The story of the project, told in stages: problem, process, build. */
export function ChapterList({ chapters }: { chapters: CaseStudyChapter[] }) {
  return (
    <div className={styles.list}>
      {chapters.map((chapter) => (
        <section key={chapter.stage} className={styles.chapter} aria-label={chapter.label}>
          <p className={styles.stage}>
            {chapter.stage}
            <br />
            <span className={styles.label}>{chapter.label}</span>
          </p>
          <div className={styles.body}>
            <h2 className={styles.heading}>{chapter.heading}</h2>
            {chapter.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
