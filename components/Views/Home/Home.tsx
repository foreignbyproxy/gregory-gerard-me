import React from 'react';

import styles from './Home.module.scss';

function Home() {
  return (
    <>
      <p className={styles.title}>Heyyo!</p>
      <p>Thanks for dropping by.</p>
      <h2>About Me</h2>
      <p>
        I've been programming since the early 2010s, but didn't start my
        software career until 2016. I started by programming VBA macros in Excel
        and training bots in Diablo 3 using C#. Since then, my career has been
        focused around web technologies.
      </p>

      <p>
        For about 5 years I was the lead developer at Blue Laser Digital, a
        digital marketing agency in Columbus, OH. I wore many hats there —
        scoping and executing full-stack web solutions for over 100 clients,
        performing performance and accessibility audits, implementing SEO and
        analytics strategies, and building out internal tooling and product
        offerings.
      </p>

      <p>
        Most recently I was a senior engineer and tech lead at Block Renovation,
        a marketplace platform connecting property owners with contractors for
        residential and commercial renovations. Over four years, I grew from an
        L3 engineer into a senior tech lead, touching every layer of the product
        — from core platform features and third-party integrations to developer
        tooling and analytics infrastructure. I led the engineering effort for a
        major business pivot, contributed to an agentic chat experience, and
        drove platform-wide upgrades that improved our daily developer
        experience.
      </p>

      <p>
        Outside of work, my main driver is to travel and kitesurf. If you've
        known me for a while, then you've probably seen me working from Aruba,
        the OBX and other locations. When I'm not traveling, I spend a ton of
        time on the bike. Last year, I did about 2,500 miles. I'm a glutton for
        good food and I always joke that I exercise so I can justify how much I
        like to eat.
      </p>

      <h2>Current Situation</h2>
      <p>
        I'm currently looking for my next opportunity. I'm interested in remote
        roles on well-managed teams that are solving problems for people in the
        physical world. I care a lot about the craft and thrive in environments
        where the work actually matters — whether that's a product people rely
        on every day or a platform that helps a team move faster and build
        better.
      </p>

      <h2>What I'm reading</h2>
      <ul>
        <li>
          Ramen Obsession: The Ultimate Bible For Mastering Japanese Ramen
        </li>
        <li>
          The Wok: Recipes and Techniques & The Food Lab: Better Home Cooking
          Through Science by J. Kenji López-Alt
        </li>
        <li>Options as a Strategic Investment</li>
      </ul>
    </>
  );
}

export default Home;
