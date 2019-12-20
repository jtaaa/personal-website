import React from 'react';
import { Centered } from 'utils/styled-components/align';
import { FlexEven, Flex } from 'utils/styled-components/flex';
import Icon, { IconList } from 'components/Icon';
import { VerticalDivider } from 'utils/styled-components/misc';
import { Content } from './elements';
import HeadShot from './headshot.jpg';

export type HomePageProps = {};
const HomePage: React.FC<HomePageProps> = () => {
  return (
    <FlexEven directionBreakpoint="md" column>
      <div>
        <img src={HeadShot} alt="Handsome headshot o.O" />
      </div>
      <Centered>
        <Content>
          <h1 style={{ marginBlockEnd: '0.25em' }}>Joshua Allum</h1>
          <h4>Software Developer</h4>
          <p style={{ marginBlockStart: '2em' }}>
            Cloud Platform Developer at IBM Toronto Labs.
            <br />
            On season 1 episode 18 of This is Us.
          </p>
          <Flex
            style={{ justifyContent: 'flex-end' }}
            directionBreakpoint="md"
            column
          >
            <IconList style={{ fontSize: '2rem' }}>
              <Icon
                type="github"
                href="https://github.com/jtaaa"
                tooltip="View GitHub Profile"
                greyed
              />
              <Icon
                type="resume"
                href="https://raw.githack.com/jtaaa/Resume/master/Resume-blue.pdf"
                tooltip="View résumé"
                greyed
              />
              <Icon
                type="email"
                href="mailto:joshuatallum@gmail.com"
                tooltip="Email me"
                greyed
              />
            </IconList>
            <VerticalDivider />
            <IconList style={{ fontSize: '1.5rem' }}>
              <Icon
                type="teleios"
                tooltip="Teleios Systems Limitted"
                href="https://github.com/jtaaa"
                greyed
              />
              <Icon type="massy" tooltip="Massy Technologies InfoCom" greyed />
              <Icon
                type="acs"
                tooltip="Association of Caribbean Students"
                href="https://github.com/jtaaa"
                greyed
              />
              <Icon
                type="blueprint"
                tooltip="UW Blueprint"
                href="https://github.com/jtaaa"
                greyed
                round
              />
            </IconList>
          </Flex>
        </Content>
      </Centered>
    </FlexEven>
  );
};

export default HomePage;
