import React from "react";
import { isProductionEnv, resumeUrl } from "./utils/constants";

const linkGroups = [
  {
    groupName: "personal",
    title: "More about me",
    links: [
      {
        name: "github",
        href: "https://github.com/jtaaa/",
        src: "/assets/octocat_small_color.webp",
        fallbackSrc: "/assets/octocat_small_color.png",
        alt: "GitHub profile",
        tooltip: <span>View GitHub Profile</span>,
        title: "GitHub",
      },
      {
        name: "resume",
        href: isProductionEnv ? "/web-resume" : resumeUrl,
        src: "/assets/resume_small.webp",
        fallbackSrc: "/assets/resume_small_color_short.png",
        alt: "Résumé",
        tooltip: <span>View Résumé</span>,
        title: "Résumé",
      },
      {
        name: "email",
        href: "mailto:joshuatallum@gmail.com",
        src: "/assets/paperplane_small_color.webp",
        fallbackSrc: "/assets/paperplane_small_color.png",
        alt: "Email address",
        tooltip: <span>Contact Me</span>,
        title: "Email me",
      },
    ],
  },
  {
    groupName: "affiliations",
    title: "Companies and Clubs",
    size: "small",
    links: [
      {
        name: "teleios",
        href: "https://www.teleios-systems.com/",
        src: "/assets/teleios_small_color_whitebg.webp",
        fallbackSrc: "/assets/teleios_small_color_whitebg.png",
        alt: "Teleios Systems Limited",
        tooltip: <span>Teleios Systems Limited</span>,
      },
      {
        name: "massy",
        href: "http://www.massygroup.com/home.aspx",
        src: "/assets/massy_small_color.webp",
        fallbackSrc: "/assets/massy_small_color.png",
        alt: "Massy Group",
        tooltip: <span>Massy Technologies InfoCom</span>,
      },
      {
        name: "ibm",
        href: "https://www.ibm.com/ca-en",
        src: "/assets/ibm_small_color.webp",
        fallbackSrc: "/assets/ibm_small_color.png",
        alt: "IBM",
        tooltip: <span>IBM Canada</span>,
      },
      {
        name: "cognite",
        href: "https://www.cognite.com/en/",
        src: "/assets/cognite_small_bw.webp",
        fallbackSrc: "/assets/cognite_small_bw.png",
        alt: "Cognite",
        tooltip: <span>Cognite AS</span>,
      },
      {
        name: "sellyourstuff",
        href: "https://github.com/SYSTT/sys-monorepo",
        src: "/assets/sellyourstuff-logo.webp",
        fallbackSrc: "/assets/sellyourstuff-logo.jpg",
        alt: "Sell Your Stuff",
        tooltip: <span>Sell Your Stuff Ltd</span>,
      },
      {
        name: "acs",
        href: "http://uwacs.club",
        src: "/assets/acs_small_bw.webp",
        fallbackSrc: "/assets/acs_small_bw.png",
        alt: "University of Waterloo Association of Caribbean Students",
        tooltip: (
          <span>
            University of Waterloo
            <br />
            Association of Caribbean Students
          </span>
        ),
      },
      {
        name: "blueprint",
        href: "http://uwblueprint.org",
        src: "/assets/bp_small_color.webp",
        fallbackSrc: "/assets/bp_small_color.png",
        alt: "UW Blueprint",
        tooltip: <span>Blueprint</span>,
        round: true,
      },
    ],
  },
];

export default linkGroups;
