import { Container, Text, Title } from '@mantine/core';

import { useStyles } from './styles';

interface Props {
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Hero({ title, description }: Props) {
  const { classes } = useStyles();

  return (
    <div className={classes.inner}>
      <Title className={classes.title}>{title}</Title>

      <Container p={0} size={600}>
        <Text size="lg" color="dimmed" className={classes.description}>
          {description}
        </Text>
      </Container>
    </div>
  );
}
