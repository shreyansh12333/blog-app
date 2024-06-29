import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.userSlice);

  return (
    <div className="flex flex-col text-center p-2 max-w-lg mx-auto w-full">
      <h1 className="m-5 font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-5">
        <div className="flex items-center justify-center">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="rounded-full"
          ></img>
        </div>
        <TextInput placeholder={currentUser.userName} type="text"></TextInput>
        <TextInput placeholder={currentUser.email} type="text"></TextInput>
        <TextInput placeholder="password" type="password"></TextInput>
        <Button outline gradientDuoTone="purpleToBlue">
          Update
        </Button>
        <div className="flex justify-between mt-5">
          <p>
            <span className="text-red-400">Delete Account</span>
          </p>
          <p>
            <span className="text-red-400">Sign out</span>
          </p>
        </div>
      </form>
    </div>
  );
}
