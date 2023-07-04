"use client";
import { useEffect, useState } from "react";
import { getAllUsers, getUnverifiedUsers } from "@utils/admin";

import UserCard from "@components/usercard/usercard.component";
import { userPfpUrl } from "@utils/pocket";
import Button from "@components/button/button.component";
import { HiCheck } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
interface IUser {
  collectionId: string;
  collectionName: string;
  created: string;
  expand: any;
  first_name: string;
  id: string;
  last_name: string;
  role: string;
  updated: string;
  avatar: string;
  email: string;
  verified: boolean;
}

export default function Page() {
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  useEffect(() => {
    getAllUsers().then((res) => {
      setAllUsers(res?.items as any);
    });
  }, []);
  return (
    <div className="project">
      <div className={`project_content`}>
        <section className="accounts-to-approve">
          <h2>Accounts to approve</h2>
          {allUsers
            .filter((user) => user.verified === false)
            .map((user) => (
              <UserCard
                key={user.id}
                name={`${user.first_name} ${user.last_name}`}
                role={user.role}
                profilePicture={`${userPfpUrl}${user.id}/${user.avatar}`}
                email={user.email}
                action={
                  <>
                    <Button
                      onClicked={() => {
                        console.log("rejecting:" + user.id);
                      }}
                      type="warning"
                      isTransparent
                      rightIcon={<HiX />}
                    />
                    <Button
                      onClicked={() => {
                        console.log("approving:" + user.id);
                      }}
                      type="success"
                      isTransparent
                      rightIcon={<HiCheck />}
                    />
                  </>
                }
              />
            ))}
        </section>
        <section className="all-accounts">
          <h2>All accounts</h2>
          {allUsers
            .filter((user) => user.verified === true)
            .map((user) => (
              <UserCard
                key={user.id}
                name={`${user.first_name} ${user.last_name}`}
                role={user.role}
                profilePicture={`${userPfpUrl}${user.id}/${user.avatar}`}
                email={user.email}
              />
            ))}
        </section>
      </div>
    </div>
  );
}
