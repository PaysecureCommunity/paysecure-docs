import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'API Reference',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        API Reference is a powerful tool that allows you to explore and
        understand the various APIs available in our system. It provides
        detailed information about each API, including its endpoints,
        parameters, and response formats.
      </>
    ),
  },
  {
    title: 'Guide',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The guide is a comprehensive resource that provides step-by-step
        instructions on how to use our system effectively. It covers a wide
        range of topics, from basic concepts to advanced features, ensuring
        that you have all the information you need to get started and succeed.
      </>
    ),
  },
  {
    title: 'Payment Methods',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Payment methods are the various ways in which you can make payments
        using our system. We support a wide range of payment options, including
        credit cards, debit cards, and digital wallets, ensuring that you can
        choose the method that works best for you.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
