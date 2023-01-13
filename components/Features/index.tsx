import { Text, ThemeIcon, SimpleGrid } from '@mantine/core';

import IMAGES from './images';
import { useStyles } from './styles';

interface Feature {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface Props {
  features: readonly Feature[];
}

export function Features(props: Props) {
  const { features } = props;
  return (
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
  );
}

const Feature: React.FC<Feature> = (feature) => {
  const { classes } = useStyles();
  const SVG = IMAGES[feature.image];
  return (
    <div className={classes.item} key={feature.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        {SVG && <SVG />}
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
