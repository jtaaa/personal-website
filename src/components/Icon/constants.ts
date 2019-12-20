import GitHubIcon from './src/octocat_small_color.png';
import ResumeIcon from './src/resume_small_color_short.png';
import EmailIcon from './src/paperplane_small_color.png';
import TeliosLogo from './src/teleios_small_color_whitebg.png';
import MassyLogo from './src/massy_small_color.png';
import ACSLogo from './src/acs_small_bw.png';
import BlueprintLogo from './src/bp_small_color.png';

export const ICONS = {
  github: {
    src: GitHubIcon,
    alt: 'GitHub profile',
  },
  resume: {
    src: ResumeIcon,
    alt: 'Résumé',
  },
  email: {
    src: EmailIcon,
    alt: 'Email address',
  },
  // Company and organization logos
  teleios: {
    src: TeliosLogo,
    alt: 'Teleios Systems Limited',
  },
  massy: {
    src: MassyLogo,
    alt: 'Massy Technologies InfoCom',
  },
  acs: {
    src: ACSLogo,
    alt: 'Association of Caribbean Students',
  },
  blueprint: {
    src: BlueprintLogo,
    alt: 'UWaterloo Blueprint',
  },
} as const;
