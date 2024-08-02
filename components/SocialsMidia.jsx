import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const SocialsMidia = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconsStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialsMidia;
