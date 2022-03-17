import React from "react";
import './ProfilePhoto.css' ;


const ProfilePhoto = () => {
    return (
        <div>
            <h1 className="phrase"> "On peut savoir sans être intelligent, mais on ne peut être intelligent sans savoir" </h1> 
            <h1 className="MyProfile">Voilà mon profil !</h1>

          <img src="zz.jpg" width={420} height={320} />
        </div>
      

    );
}
export default ProfilePhoto;