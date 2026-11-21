import { profile } from '@/data/profile';
import { Container } from '../Container/Container';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer>
      <Container className={styles.footer}>
        <span>
          © {new Date().getFullYear()} {profile.name} · Press start to continue
        </span>
        <span>{profile.coordinates}</span>
      </Container>
    </footer>
  );
}
