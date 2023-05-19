import React, { useState } from 'react';
import data from './json/data.json';
import './App.css';
interface UserDetails {
  name?: string;
  lastSeen?: string;
  phoneNumber?: string;
  profile_picture?: any;
  status?: any;
  email_id?: string;
  username?: string;
  profile_URL?: string;
  upi_ID?: string;
  telegram_bio?: string;
  skype_ID?:string;
}

function App() {

  const [users, setUsers] = useState(data);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [userWhatsappDetails, setUserWhatsappDetails] = useState<UserDetails>({});
  const [userTruecallerDetails, setUserTruecallerDetails] = useState<UserDetails>({});
  const [userGpayDetails, setUserGpayDetails] = useState<UserDetails>({});
  const [userSkypeDetails, setUserSkypeDetails] = useState<UserDetails>({});
  const [userTelegramDetails, setUserTelegramDetails] = useState<UserDetails>({});
  const [userFacebookDetails, setUserFacebookDetails] = useState<UserDetails>({});
  const [show, setShow] = useState(false);

  const isWhatsappEmpty = Object.keys(userWhatsappDetails).length === 0;
  const isTruecallerEmpty = Object.keys(userTruecallerDetails).length === 0;
  const isGpayEmpty = Object.keys(userGpayDetails).length === 0;
  const isSkypeEmpty = Object.keys(userSkypeDetails).length === 0;
  const isTelegramEmpty = Object.keys(userTelegramDetails).length === 0;
  const isFacebookEmpty = Object.keys(userFacebookDetails).length === 0;

  const handlePhoneNumberChange = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShow(true);
    const userdata: any = users.find((user: any) => user.phone_number === phoneNumber && user.email === email);
    if (userdata.platform.includes('WhatsApp')) {
      setUserWhatsappDetails({
        name: userdata.name,
        status: userdata.status,
        lastSeen: userdata.last_seen,
        profile_picture: userdata.profile_picture
      });
    }
    if (userdata.platform.includes('Truecaller')) {
      setUserTruecallerDetails({
        name: userdata.name,
        phoneNumber: userdata.phone_number,
        email_id: userdata.email,
      });
    }
    if (userdata.platform.includes('Gpay')) {
      setUserGpayDetails({
        name: userdata.name,
        phoneNumber: userdata.phone_number,
        upi_ID: userdata.upi_id,
      });
    }
    if (userdata.platform.includes('Skype')) {
      setUserSkypeDetails({
        name: userdata.name,
        username:userdata.username,
        phoneNumber: userdata.phone_number,
        skype_ID: userdata.skype_id,
      });
    }
    if (userdata.platform.includes('Telegram')) {
      setUserTelegramDetails({
        name: userdata.name,
        phoneNumber: userdata.phone_number,
        telegram_bio: userdata.telegram_bio,
        profile_picture: userdata.profile_picture,
      });
    }
    if (userdata.platform.includes('Facebook')) {
      setUserFacebookDetails({
        name: userdata.name,
        lastSeen: userdata.last_seen,
        username: userdata.username,
        profile_URL: userdata.profile_url,
        profile_picture: userdata.profile_picture,
      });
    }
  }


  return (
  <>
    {show === false ? (<div className='container'>
      <h2 style={{ textAlign: "center" }}>User Details</h2><br></br>
      <form onSubmit={handleSubmit} className="form-horizontal">
        <div className="form-group row">
          <label className="col-sm-2 col-form-label"><b>Phone Number :</b></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={phoneNumber} onChange={handlePhoneNumberChange} />
          </div>
        </div><br></br>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label"><b>Email:</b></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={email} onChange={handleEmailChange} />
          </div>
        </div>
        <br />
        <button type="submit" className='user-btn'>Get User Details</button>
      </form>
    </div>)
      :
      (<>
        <div className='maincontainer'>
          <div className="grid-container">
            <div className='containerdiv'>
              <h3>Whatsapp</h3><br></br>
              <div className='rounded-class'>
                <b>Registered : </b>{isWhatsappEmpty ? "No" : (<>Yes <br />
                  <b>Name : </b>{userWhatsappDetails.name}<br />
                  <b>Status : </b>{userWhatsappDetails.status}<br />
                  <b>LastSeen : </b>{userWhatsappDetails.lastSeen}<br />
                  <b>Profile Picture : </b><img src={userWhatsappDetails.profile_picture} /><br /></>)}
              </div>
            </div>
            <div className='containerdiv' >
              <h3>Truecaller</h3><br></br>
              <div className='rounded-class'>
                <b>Registered : </b>{isTruecallerEmpty ? "No" : (<>Yes <br />
                  <b>Name : </b>{userTruecallerDetails.name}<br />
                  <b>Phone number : </b>{userTruecallerDetails.phoneNumber}<br />
                  <b>Email ID : </b>{userTruecallerDetails.email_id}<br /></>)}
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div className='containerdiv'>
              <h3>Gpay</h3><br></br>
              <div className='rounded-class'>
                <b>Registered : </b>{isGpayEmpty ? "No" : (<>Yes <br />
                  <b>Name : </b>{userGpayDetails.name}<br />
                  <b>Phone number : </b>{userGpayDetails.phoneNumber}<br />
                  <b>UPI_ID : </b>{userGpayDetails.upi_ID}</>)}
              </div>
            </div>
            <div className='containerdiv' >
              <h3>Skype</h3><br></br>
              <div className='rounded-class'>
                <b>Registered : </b>{isSkypeEmpty ? "No" : (<>Yes <br />
                  <b>Name : </b> {userSkypeDetails.name}<br />
                  <b>Username : </b> {userSkypeDetails.username}<br />
                  <b>Phone number : </b>{userSkypeDetails.phoneNumber}<br />
                  <b>Skype_ID : </b> {userSkypeDetails.skype_ID}</>)}
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div className='containerdiv' >
              <h3>Facebook</h3><br></br>
              <div className='rounded-class'>
                <b>Registered : </b>{isFacebookEmpty ? "No" : (<>Yes <br />
                  <b>Name : </b>{userFacebookDetails.name}<br />
                  <b>Username : </b>{userFacebookDetails.username}<br />
                  <b>Profile_URl : </b>{userFacebookDetails.profile_URL}<br />
                  <b>Profile Picture : </b><img src={userFacebookDetails.profile_picture} /><br /></>)}
              </div>
            </div>
            <div className='containerdiv'>
              <h3>Telegram</h3><br></br>
              <div className='rounded-class'>
                <b>Registered : </b>{isTelegramEmpty ? "No" : (<>Yes <br />
                  <b>Name : </b>{userTelegramDetails.name}<br />
                  <b>Phone number : </b>{userTelegramDetails.phoneNumber}<br />
                  <b>Bio : </b>{userTelegramDetails.telegram_bio}<br />
                  <b>Profile Picture : </b><img src={userTelegramDetails.profile_picture} /><br /></>)}
              </div>
            </div>
          </div>
        </div>
      </>)
    }
  </>
  );
}

export default App;
