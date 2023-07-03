import Image from "next/image";
import "./userChip.styles.scss";
export default function UserChip({
  userInfo,
}: {
  userInfo: {
    avatar: string;
    email: string;
    first_name: string;
    id: string;
    last_name: string;
    role: string;
    username: string;
    verified: boolean;
  };
}) {
  return (
    <div className="user-chip">
      <Image
        src={userInfo.avatar}
        alt="Profile Picture"
        width={500}
        height={500}
        className="user-chip__profile-picture"
      />
      <div className="user-info">
        <abbr title={userInfo.email}>
          <p className="user-name">{`${userInfo.first_name} ${userInfo.last_name}`}</p>
          <p className="user-role">{userInfo.role}</p>
        </abbr>
      </div>
    </div>
  );
}
