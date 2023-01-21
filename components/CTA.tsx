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
      <Link href="https://forms.gle/awvK3ycTYaEnKNTX6" target="_blank" className={classes.control}>
        <Button
          radius="xl"
          size="md"
          rightIcon={<IconArrowRight size={16} stroke={2.5} />}
          fullWidth
          className={classes.button}
        >
          Join the waitlist
        </Button>
      </Link>
    </Box>
  );
}
