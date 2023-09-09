import { useState } from "react";
import { ProfileCard } from "./ProfileCard";
import { getProfiles } from "./utils/api";


const HomePage = () => {
  const [profiles, setProfiles] = useState([]);

  // Appel de l'API pour obtenir 10 profils
  async function getProfiles() {
    const profiles = await getProfiles();

    setProfiles(profiles);
  }

  // Initialisation des profils
  getProfiles();

  return (
    <div className="homepage">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default HomePage;