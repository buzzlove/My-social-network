import React from 'react';

const Profile = () => {
    return (
        <div className='Content'>
            <div>
                <img src={require('./../../img/databg.jpg')}></img>
            </div>

            <div>
                AVA+desription
            </div>

            <div>
                MyPosts
                <div>
                 NewPost
                </div>
            </div>
        </div>
    )
}

export default Profile;