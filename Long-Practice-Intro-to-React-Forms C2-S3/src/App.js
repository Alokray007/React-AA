import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [staff, setStaff] = useState("instructor");
  const [bio, setBio] = useState("");
  const [notification, setNotification] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    const errors = {name:[], email:[], phone:[], bio:[]};
    const phonePattern = /^[6-9][0-9]{9}$/;

    if(!name.length) errors['name'].push("Please enter your Name");
    if(name.length) errors['name'].pop("Please enter your Name");
    if (name.length > 30) errors['name'].push("Name must be less than 30 characters");
    if (name.length < 30) errors['name'].pop("Name must be less than 30 characters");

    if (email.length && !email.includes('@')) errors['email'].push('Please provide a valid Email');
    if (email.length && email.includes('@')) errors['email'].pop('Please provide a valid Email');
    if (!email.length) errors['email'].push('Please provide an Email.')

    if (!phone.length) {
      // No phone number, so remove "required" from phone type
      document.getElementById('phonetype').removeAttribute('required');
      document.getElementById('phonetype').setAttribute('disabled', 'true');

    } else {
      // Phone number is present, check if it's properly formatted
      if (!phonePattern.test(phone)) errors['phone'].push('Please provide a valid phone number');

      // Set "required" for phone type
      document.getElementById('phonetype').setAttribute('required', 'true');
      document.getElementById('phonetype').removeAttribute('disabled');
    }

    if(bio.length > 280) errors['bio'].push('Only 280 Characters allowed!')

    setValidationErrors(errors);
  }, [name, email, phone, phoneType, bio]);

  const onSubmit = (e) => {
    e.preventDefault();

    setHasSubmitted(true);

    if (hasValidationErrors()) {
      alert("Cannot Submit");
    } else {
      // Handle form submission
      const contactUsInfo = {
        name,
        email,
        phone,
        phoneType,
        staff,
        bio,
        notification,
        Submittedon: new Date().toLocaleString(),
      };

      console.log(contactUsInfo);

      // Reset the form state
      resetForm();
    }
  };

  const hasValidationErrors = () => {
    return Object.values(validationErrors).some((errors) => errors.length > 0);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPhoneType("");
    setStaff("instructor");
    setBio("");
    setNotification("");
    setValidationErrors({});
    setHasSubmitted(false);
    document.getElementById("phonetype").removeAttribute("required");
    document.getElementById('phonetype').removeAttribute('disabled');
  };


  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" onChange={(e) => setName(e.target.value)} value={name} />
            {hasSubmitted && validationErrors.name.length > 0 && validationErrors.name.map((error, idx) => (
              <ul key={idx}>
                  <li className='error'>* {error}</li>
              </ul>
            ))}
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input id="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            {hasSubmitted && validationErrors.email.length > 0 && validationErrors.email.map((error, idx) => (
              <ul key={idx}>
                  <li className='error'>* {error}</li>
              </ul>
            ))}
        </div>
        <div>
            <label htmlFor="phone">phone: </label>
            <input id="phone" type="text" placeholder='Start with 6/7/8/9 & 10 digit'  onChange={(e) => setPhone(e.target.value)} value={phone} />
            {hasSubmitted && validationErrors.phone.length > 0 && validationErrors.phone.map((error, idx) => (
              <ul key={idx}>
                  <li className='error'>* {error}</li>
              </ul>
          ))}
            <select name="Phone Type" id="phonetype" onChange={(e) => setPhoneType(e.target.value)} value={phoneType}>
              <option value="" disabled>
                Select a phone type...
              </option>
              <option>Home</option>
              <option>Work</option>
              <option>Mobile</option>
            </select>

        </div>
        <div>Staff Type:
        <div>
            <input id="Instructor" type="radio" name="staff" value="instructor" checked={staff === "instructor"} onChange={(e) => setStaff(e.target.value)} />
            <label htmlFor="Instructor"> Instructor</label>
        </div>
        <div>
            <input id="Student" type="radio" name="staff" value="student" checked={staff === "student"} onChange={(e) => setStaff(e.target.value)}  />
            <label htmlFor="Student"> Student</label>
        </div>
        </div>
        <div>
            <label htmlFor="Bio">Bio: </label>
            <textarea id="Bio" type="text"  onChange={(e) => setBio(e.target.value)} value={bio} />
            {hasSubmitted && validationErrors.bio.length > 0 && validationErrors.bio.map((error, idx) => (
              <ul key={idx}>
                <li className='error'>* {error}</li>
                <li>It's {bio.length} chars now.</li>
              </ul>
            ))}
        </div>
        <div>
            <input id="notification" type="checkbox" name="notification"  onChange={(e) => setNotification(e.target.value)} value={notification} />
            <label htmlFor="notification"> Sign up for email notifications</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
