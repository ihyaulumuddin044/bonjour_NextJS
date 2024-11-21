import { useSession } from "next-auth/react";


const ProfilePage = () => {
    const {data}: any = useSession();
    return (
        <div>
            <h1>Profile Page</h1>
            <p>{data?.user?.fullName}</p>
        </div>
    );
};

export default ProfilePage