import { Image } from "@chakra-ui/react";
import ProfilePicture from "../../assets/icons/ProfilePic.jpg";

const ProfilePicSmaller = () => {
  return (
    <Image src={ProfilePicture} borderRadius={"full"} boxSize={"30px"}></Image>
  );
};

export default ProfilePicSmaller;
