import { Image } from "@chakra-ui/react";
import InstaLogo from "../../assets/icons/InstagramIconFilled.png";

const ProfilePic = () => {
  return (
    <Image src={InstaLogo} borderRadius={"full"} boxSize={"20px"}></Image>
  );
};

export default ProfilePic;
