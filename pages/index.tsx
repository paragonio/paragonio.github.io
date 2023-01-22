import { Text } from '@mantine/core';

import { Section } from '../components/Section';
import { useStyles } from '../components/Section/styles';
import { Hero } from '../components/Hero';
import { DotsContainer } from '../components/Container';
import { Features } from '../components/Features';
import { CTA } from '../components/CTA';

export default function HomePage() {
  const { classes } = useStyles();

  return (
    <DotsContainer pb={120}>
      <Hero
        title={
          <>
            Build a{' '}
            <Text component="span" variant="gradient" className={classes.highlight} inherit>
              Premium{' '}
            </Text>
            Interview Experience
          </>
        }
        description="Get the candidate engagement, performance and development tools, and insights you need to build a world-class interview process."
      />
      <CTA />
      <Section
        supTitle="Problem"
        title={
          <>
            Recruiting is <span className={classes.highlight}>hard</span>
          </>
        }
        description="Recruiting top talent is critical for the success of any growing company. Don't lose the best candidates due to a poor interview experience."
      />
      {/*todo: provide infographic of how much money is spent per interview for engineers*/}
      <Section
        supTitle="Solution"
        title={
          <>
            <span className={classes.highlight}>Supercharge</span> your interviews
          </>
        }
        description="Set your company apart by leveraging data to make informed decisions to upgrade your hiring process. Our platform provides key metrics and feedback to help interviewers present the company and themselves in the best light to candidates."
      />
      <Section
        supTitle="How it works"
        title={
          <>
            Recruiting made <span className={classes.highlight}>easy</span>
          </>
        }
        description=""
      >
        <Features
          features={
            [
              {
                image: 'auditors',
                title: 'Collect Feedback',
                description:
                  'Automatically collect feedback from the candidate about their interview experience.',
              },
              {
                image: 'accountants',
                title: 'Gain Insight',
                description:
                  'Understand the effectiveness of your interview process with our candidate NPS calculator. Track your progress and see where you stand.',
              },
              {
                image: 'lawyers',
                title: 'Refine Process',
                description:
                  'Use the insights and feedback to improve your hiring process and develop a stronger interviewing team.',
              },
              {
                image: 'others',
                title: 'Hire the Best',
                description:
                  'Build a world-class hiring reputation to attract and hire elite candidates.',
              },
            ] as const
          }
        />
      </Section>
      <CTA mt={60} />
    </DotsContainer>
  );
}
