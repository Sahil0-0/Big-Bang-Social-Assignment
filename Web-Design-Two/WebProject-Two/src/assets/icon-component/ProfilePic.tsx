import { Image } from "@chakra-ui/react";
import ProfilePicture from "../../assets/icons/ProfilePic.jpg";

const ProfilePic = () => {
  return <Image src={ProfilePicture} borderRadius={"full"} boxSize={'40px'}></Image>;
};

export default ProfilePic;
