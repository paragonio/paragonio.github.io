import { Image, Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';

import IMAGES from './images';
import { useStyles } from './styles';

interface Feature {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface Props {
  supTitle: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  features: readonly Feature[];
}

export function Features(props: Props) {
  const { supTitle, title, description, features } = props;
  const { classes } = useStyles();
  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>{supTitle}</Text>
      <Title className={classes.title} order={2}>
        {title}
      </Title>

      <Container size={660} p={0}>
        <Text color="dimmed" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        cols={1}
        spacing={40}
        breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
        mt={40}
      >
        {features.map((f, i) => (
          <Feature {...f} key={i} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

const Feature: React.FC<Feature> = (feature) => {
  const { classes } = useStyles();
  return (
    <div className={classes.item} key={feature.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src={IMAGES[feature.image]} />
      </ThemeIcon>

      <div>
        <Text weight={700} size="lg" className={classes.itemTitle}>
          {feature.title}
        </Text>
        <Text color="dimmed">{feature.description}</Text>
      </div>
    </div>
  );
};
