import './index.module.scss';
import { GetStaticProps } from 'next';


/* eslint-disable-next-line */
export interface AboutProps {
  name: string
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: 'Juri'
    },
  };
};

export function About(props: AboutProps) {
  return (
    <div>
      <h1>Welcome, {props.name}!</h1>
    </div>
  );
}

export default About;
