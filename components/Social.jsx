import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Shoaib-Shaukat",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/shoaib-shaukat-69bb041a3/",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Social;
