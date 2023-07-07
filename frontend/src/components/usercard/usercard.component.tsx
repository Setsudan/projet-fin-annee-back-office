import Image from "next/image";
import "./usercard.styles.scss";
export default function UserCard({
  profilePicture,
  name,
  role,
}: {
  profilePicture: string;
  name: string;
  role: string;
}) {
  return (
    <div className="user-card">
      <Image
        src={
          profilePicture
            ? profilePicture
            : "/images/default-profile-picture.jpg"
        }
        alt="Profile Picture"
        width={500}
        height={500}
        className="user-card__profile-picture"
      />
      <div className="user-card__name">{name}</div>
      <div className="user-card__role">{role}</div>
    </div>
  );
}
