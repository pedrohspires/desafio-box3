import HomeContext from '../../../../context/Home.context';
import { useContext } from 'react';

function Profile(){
  let userName = localStorage.getItem('username');
  const { showingSidebar } = useContext(HomeContext);

  return (
    <div className={`profile-container grid place-items-center overflow-hidden ease-in-out duration-300
                    ${!showingSidebar ? "h-0" : "h-full sm:h-1/3"}`}>
      <div className="photo m-1">
        <img className="w-28 h-28 rounded-full" src={require('./imgs/profile.png')} alt="Rounded avatar" />
      </div>
      <div className="text-white sm:h-full">
        {userName}
      </div>
    </div>
  );
}

export default Profile;