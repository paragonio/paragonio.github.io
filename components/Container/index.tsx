import { Container, ContainerProps } from '@mantine/core';

import { Dots } from './Dots';
import { useStyles } from './styles';

export const DotsContainer: React.FC<ContainerProps> = (props) => {
  const { classes, cx } = useStyles();
  return (
    <Container className={cx({ [classes.wrapper]: true })} size={1400} {...props}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      {props.children}
    </Container>
  );
};
