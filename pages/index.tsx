import { Features } from '../components/Features';
import { useStyles } from '../components/Features/styles';
import { Hero } from '../components/Hero';
import { DotsContainer } from '../components/Container';

export default function HomePage() {
  const { classes } = useStyles();

  return (
    <DotsContainer pb={120}>
      <Hero />
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
    </DotsContainer>
  );
}
