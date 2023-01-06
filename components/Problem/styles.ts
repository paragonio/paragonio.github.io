import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 60,
  },

  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    letterSpacing: 0.5,
  },

  content: {
    fontSize: 25,
    textAlign: 'left',
    padding: theme.spacing.lg,

    '@media (max-width: 520px)': {
      fontSize: 20,
      padding: theme.spacing.xs,
    },
  },
}));
