import { Text, Container, Title } from '@mantine/core';

import { useStyles } from './styles';

interface Props {
  supTitle: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Section(props: Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> & Props) {
  const { classes } = useStyles();
  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>{props.supTitle}</Text>
      <Title className={classes.title} order={2}>
        {props.title}
      </Title>
      <Container size={660} p={0}>
        <Text color="dimmed" className={classes.description}>
          {props.description}
        </Text>
      </Container>
      {props.children}
    </Container>
  );
}
