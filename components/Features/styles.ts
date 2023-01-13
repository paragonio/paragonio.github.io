import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  item: {
    display: 'flex',
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },
}));
