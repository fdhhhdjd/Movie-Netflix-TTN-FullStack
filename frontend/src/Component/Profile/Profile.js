import React from "react";
import { ProfileStyle } from "../../Style/ProfileStyle/ProfileStyle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoadingSmall, MetaData, Header } from "../../imports/index";
const Profile = () => {
  const { profile, loading } = useSelector((state) => state.auth);
  const auth = profile;
  return (
    <>
      <Header />
      <ProfileStyle />
      {loading ? (
        <LoadingSmall />
      ) : (
        <>
          <MetaData title={`${auth.fullname || auth.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              {auth.image && <img src={auth.image.url} alt={auth.name} />}
              <Link to="/profile/edit">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{auth.fullname || "Chưa thêm đầy đủ tên"}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{auth.email}</p>
              </div>
              <div>
                <h4>Phone</h4>
                <p>{auth.phone_number || "Chưa thêm số điện thoại"}</p>
              </div>
              <div>
                <h4>Sex</h4>
                <p>
                  {(profile.sex === 1 && "Nam") ||
                    (profile.sex === 0 && "Nữ ") ||
                    "Chưa có giới tính !"}
                </p>
              </div>
              <div>
                <h4>Date</h4>

                <p>{auth.date_of_birth || "Chưa thêm Ngày sinh"}</p>
              </div>
              <div>
                <h4>Joined On</h4>

                <p>{String(auth.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/profile/ChangePassword">Change Password</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
