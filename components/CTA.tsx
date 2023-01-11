import Link from 'next/link';
import { Box, BoxProps, Button, createStyles } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons';

export const useStyles = createStyles((theme) => ({
  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    textDecoration: 'none',
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  button: {
    minWidth: '200px',
  },
}));

export function CTA(props: BoxProps) {
  const { classes } = useStyles();

  return (
    <Box className={classes.controls} {...props}>
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
    </Box>
  );
}
