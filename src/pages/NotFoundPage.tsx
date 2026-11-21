import { Container } from '@/components/layout';
import { PixelButton } from '@/components/ui';
import { HOME_HREF } from '@/routes';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <Container className={styles.page}>
      <p className={styles.code}>404 · Quest not found</p>
      <h1 className={styles.title}>This level doesn’t exist.</h1>
      <PixelButton href={HOME_HREF} variant="primary" size="lg">
        Back to map
      </PixelButton>
    </Container>
  );
}
