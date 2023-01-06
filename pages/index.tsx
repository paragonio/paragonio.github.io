import { Space } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle';
import { Features } from '../components/Features';
import { useStyles } from '../components/Features/styles';
import { Hero } from '../components/Hero';

export default function HomePage() {
  const { classes } = useStyles();

  return (
    <>
      <Hero />
      {/*<Problem*/}
      {/*  supTitle="Problem"*/}
      {/*  content={*/}
      {/*    <>*/}
      {/*      You know hiring is a hard problem — especially in this economy — but where do you even start?*/}
      {/*      How do you convinced the 10x engineer to join your company?*/}
      {/*      Existing hiring strategies focus on increasing top of the funnel and */}
      {/*      less about converting  */}
      {/*      Juggling product releases and growth is hard enough.*/}
      {/*      And then hiring is left as a nebulous priority with no clear owner.*/}
      {/*      <Space h="xl" />*/}
      {/*      What if you could optimize the interview experience to maximize your odds of recruiting the 10x engineer?*/}
      {/*      You’d boost your company’s profitability, keep customers around longer,*/}
      {/*      and demystify the reasons why people leave your product.*/}
      {/*      So if you want to recruit the best of the best, let’s begin.*/}
      {/*    </>*/}
      {/*  }*/}
      {/*/>*/}
      <Features
        supTitle="Process"
        title={
          <>
            <span className={classes.highlight}>Supercharge</span> your interviews
          </>
        }
        description={
          <>
            Achieve hiring success with Paragon.
            <br />
            Our platform helps you refine your interview process, giving you an advantage in
            attracting and recruiting top talent in your industry.
          </>
        }
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
                'Understand the effectiveness of your interview process with our CNPS (Candidate Net Promoter Score) calculator.',
            },
            {
              image: 'lawyers',
              title: 'Refine Process',
              description:
                'Receive actionable advice for each interviewer from our personalized recommendation system to improve your hiring processes.',
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
      {/*<Features*/}
      {/*  supTitle="Customers"*/}
      {/*  title=""*/}
      {/*  description=""*/}
      {/*  features={[]}*/}
      {/*/>*/}
      <ColorSchemeToggle />
      <Space h="xl" />
    </>
  );
}
