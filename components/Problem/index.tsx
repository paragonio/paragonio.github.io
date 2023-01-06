import { Text, Container, Title, Paper } from '@mantine/core';

import { useStyles } from './styles';

interface Props {
  supTitle: React.ReactNode;
  content: React.ReactNode;
}

export function Problem(props: Props) {
  const { supTitle, content } = props;
  const { classes } = useStyles();
  return (
    <Container size={800} className={classes.wrapper}>
      <Text className={classes.supTitle}>{supTitle}</Text>
      <Paper radius="md" mt={30} p="xl" withBorder>
        <Title className={classes.content}>{content}</Title>
      </Paper>
    </Container>
  );
}
