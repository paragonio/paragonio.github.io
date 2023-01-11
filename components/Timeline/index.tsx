import { Timeline as MTimeline, Text, TimelineItemProps } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons';

interface Event extends TimelineItemProps {
  title: string;
  bullet: React.ReactNode;
  description: React.ReactNode;
  subDescription?: React.ReactNode;
}

interface Props {
  events?: readonly Event[];
}

const DEFAULT_EVENTS = [
  {
    title: 'New branch',
    bullet: <IconGitBranch size={12} />,
    description: (
      <>
        You&apos;ve created new branch{' '}
        <Text variant="link" component="span" inherit>
          fix-notifications
        </Text>{' '}
        from master
      </>
    ),
    subDescription: '2 hours ago',
  },
  {
    title: 'Commits',
    bullet: <IconGitCommit size={12} />,
    description: (
      <>
        You&apos;ve pushed 23 commits to
        <Text variant="link" component="span" inherit>
          fix-notifications branch
        </Text>
      </>
    ),
    subDescription: '52 minutes ago',
  },
  {
    title: 'Pull request',
    bullet: <IconGitPullRequest size={12} />,
    description: (
      <>
        You&apos;ve submitted a pull request
        <Text variant="link" component="span" inherit>
          Fix incorrect notification message (#187)
        </Text>
      </>
    ),
    subDescription: '34 minutes ago',
    lineVariant: 'dashed',
  },
  {
    title: 'Code review',
    bullet: <IconMessageDots size={12} />,
    description: (
      <>
        <Text variant="link" component="span" inherit>
          Robert Gluesticker
        </Text>{' '}
        left a code review on your pull request
      </>
    ),
    subDescription: '12 minutes ago',
  },
] as const;

export function Timeline(props: Props) {
  const events = props.events || DEFAULT_EVENTS;
  return (
    <MTimeline active={1} bulletSize={36} lineWidth={4}>
      {events.map(({ title, bullet, description, subDescription, ...props }) => (
        <MTimeline.Item bullet={bullet} title={title} key={title} {...props}>
          <Text color="dimmed" size="lg">
            {description}
          </Text>
          {subDescription && (
            <Text size="xs" mt={4}>
              {subDescription}
            </Text>
          )}
        </MTimeline.Item>
      ))}
    </MTimeline>
  );
}
