import React from "react";
import styles from "./SocialLinks.module.css";
import LinkCard from "./linkcard/LinkCard";
import linkedin from "../../../../../../assets/linkedin.png";
import github from "../../../../../../assets/github.png";
import twitter from "../../../../../../assets/x.png";
import facebook from "../../../../../../assets/facebook.png";
import instagram from "../../../../../../assets/instagram.png";
const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <h3>Social Media Links</h3>
      <LinkCard name="github" linkImage={github} />
      <LinkCard name="linkedin" linkImage={linkedin} />
      <LinkCard name="twitter" linkImage={twitter} />
      <LinkCard name="facebook" linkImage={facebook} />
      <LinkCard name="instagram" linkImage={instagram} />
    </div>
  );
};

export default SocialLinks;
