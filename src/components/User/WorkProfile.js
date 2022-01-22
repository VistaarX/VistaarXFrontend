import { useEffect, useState } from "react";
import { getMyProfile } from "../../Api/profile/profile_routes";
import "../../stylesheets/User/Manufacturer.css";
import ProgressBar from "./ProgressBar";
import ProductCard from "../LandingPage/ProductCard";
import { Link } from "react-router-dom";

const WorkProfile = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    async function fun() {
      let profile = await getMyProfile();
      let response = profile["data"];
      response["manu"] !== undefined
        ? (response = {
            ...response,
            other: { profile_key: "manu", name: "Manufacturer" },
          })
        : response["retailer"] !== undefined
        ? (response = {
            ...response,
            other: { profile_key: "retailer", name: "Retailer" },
          })
        : (response = {
            ...response,
            other: { profile_key: "distributor", name: "Distributor" },
          });
      setProfile(response);
    }
    fun();
  }, []);
  if (profile !== null)
    return (
      <div className="company">
        <div className="company__headBox">
          <div className="company__avatar">
            {/* Add Avatar img here */}
            <img src="https://picsum.photos/200" alt="" />
          </div>
        </div>

        <div className="company__detail">
          <h1>
            {profile.name} {profile.other.name}
          </h1>
          <h6>{profile.place ? profile.place : "India"}</h6>
          <h4>Estd. {profile[`${profile.other.profile_key}`].year}</h4>
          <div
            className="company__designation"
            style={
              profile.other.profile_key === "manu"
                ? { backgroundColor: "orange" }
                : profile.other.profile_key === "retailer"
                ? { backgroundColor: "blue" }
                : { backgroundColor: "green" }
            }
          >
            {profile.other.name}
          </div>
        </div>
        <br />
        <ProgressBar
          title="GST"
          value={profile[`${profile.other.profile_key}`]?.gst}
        />
        <ProgressBar
          title="Annual Turnover"
          value={profile[`${profile.other.profile_key}`]?.turnover}
        />
        <ProgressBar
          title="Main Markets"
          value={profile[`${profile.other.profile_key}`]?.main_markets}
        />
        <ProgressBar
          title="Phone number"
          value={profile[`${profile.other.profile_key}`]?.number}
        />
        <ProgressBar
          title="Product Category"
          value={profile[`${profile.other.profile_key}`]?.product_category}
        />
        <br />

        <div className="company__management">
          <h4 className="title">Company Management</h4>
          {profile.owners.map((owner) => {
            return (
              <div className="managerInfo">
                <div className="avatar">
                  <img
                    src={
                      owner.photo ? owner.photo : "https://picsum.photos/200"
                    }
                    alt=""
                  />
                </div>
                <div className="otherInfo">
                  <h4 className="name">{owner.name}</h4>
                  <h5 className="address">
                    Lives in{" "}
                    <span>{owner.city ? owner.city : "Delhi, India"}</span>
                  </h5>
                  <h5 className="position">
                    {owner.position ? owner.position : "President"}
                  </h5>
                </div>
              </div>
            );
          })}

          <div className="about">
            <h4 className="title">About the Firm</h4>
            <h5 className="text">
              {profile[`${profile.other.profile_key}`].about}
            </h5>
          </div>
        </div>
        <div className="company__products">
          <div className="header">
            <h4 className="left">Our Products</h4>
            {/* <h5 className='right'>See all</h5> */}
          </div>
          <div className="container">
            {profile.products.map((product) => {
              return <ProductCard {...product}></ProductCard>;
            })}
          </div>
        </div>
        <div className="company__footer">
          <div className="header">
            <h4>Your Dashboard</h4>
          </div>
          <div className="info">
            <h1 className="count">{profile.views.length}</h1>
            <h5>People have viewed your profile</h5>
            <button><Link to='/orders' style={{color: 'white'}}>View Orders</Link></button>
          </div>
        </div>
      </div>
    );
  else return <></>;
};

export default WorkProfile;
