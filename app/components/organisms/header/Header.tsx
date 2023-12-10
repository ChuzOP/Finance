import React from "react";
import { Text } from "../../atomic";
import Image from "next/image";

interface props {
  title: string;
}
export const Header = ({ title = "Title" }: props) => {
  return (
    <div className="flex justify-between w-full">
      <Text variant="title-01" bold>
        {title}
      </Text>
      <Image
        alt="profile-photo"
        src="/Profilephoto.jpg"
        width={60}
        height={60}
        className="rounded-[60px]"
      />
    </div>
  );
};
