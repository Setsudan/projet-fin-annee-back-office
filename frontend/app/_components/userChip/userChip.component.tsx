import Image from "next/image";
import "./userChip.styles.scss";
export default function UserChip({
  userInfo,
}: {
  userInfo: {
    name: string;
    role: string;
    email: string;
    avatar: string;
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
          <p className="user-name">{userInfo.name}</p>
          <p className="user-role">{userInfo.role}</p>
        </abbr>
      </div>
    </div>
  );
}
