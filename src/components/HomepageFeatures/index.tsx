import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Share More Resources',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Know of a great Catholic resource that should be included? Help expand this directory 
        by contributing additional websites, apps, or tools that serve the Catholic community.
        <br /><br />
        <a href="/docs/contributing" className="button button--primary button--lg">
          Learn How to Contribute →
        </a>
      </>
    ),
  },
  {
    title: 'Connect on GitHub',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        This directory is open source! Connect with this and other Catholic tech projects 
        on GitHub. Contribute code, suggest improvements, or find inspiration for your own projects.
        <br /><br />
        <a href="https://github.com/codexcommunion" className="button button--secondary button--lg" target="_blank" rel="noopener noreferrer">
          Visit GitHub →
        </a>
      </>
    ),
  },
  {
    title: 'Submit Request Interactively',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Have an idea for a Catholic app, website, or digital tool that should exist but doesn't yet? 
        Use our interactive AI agent to capture and record new project ideas that could serve the Church.
        <br /><br />
        <a href="https://requests.codexcommunion.com" className="button button--secondary button--lg" target="_blank" rel="noopener noreferrer">
          Submit Interactive Request →
        </a>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
