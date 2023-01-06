import { Button, Container, Text, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons';
import Link from 'next/link';

import { DotsContainer } from '../Container';
import { useStyles } from './styles';

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.inner}>
      <Title className={classes.title}>
        Build a{' '}
        <Text component="span" variant="gradient" className={classes.highlight} inherit>
          Premium{' '}
        </Text>
        Interview Experience
      </Title>

      <Container p={0} size={600}>
        <Text size="lg" color="dimmed" className={classes.description}>
          Set your company apart by optimizing your hiring process to attract top talent.
        </Text>
      </Container>

      <div className={classes.controls}>
        <Link href="http://localhost:3000/login" className={classes.control}>
          <Button
            radius="xl"
            size="md"
            rightIcon={<IconArrowRight size={16} stroke={2.5} />}
            fullWidth
            className={classes.button}
          >
            Get started
          </Button>
        </Link>
        <Link href="http://localhost:3000/demo" className={classes.control}>
          <Button variant="default" radius="xl" size="md" fullWidth className={classes.button}>
            Schedule demo
          </Button>
        </Link>
      </div>
    </div>
  );
}
