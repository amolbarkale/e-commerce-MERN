import "./newUser.css";
const NewUser = () => {
  return (
    <div className="NewUser">
      <h1 className="newUserTitle">New user</h1>
      <form className="newUserForm">
        <div className="newUserItm">
          <label>Username</label>
          <input type="text" placeholder="amol" />
        </div>
        <div className="newUserItm">
          <label>Full name</label>
          <input type="text" placeholder="amol S Barkale" />
        </div>
        <div className="newUserItm">
          <label>Email</label>
          <input type="email" placeholder="amol@gmail.com" />
        </div>
        <div className="newUserItm">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItm">
          <label>Phone</label>
          <input type="text" placeholder="123456789" />
        </div>
        <div className="newUserItm">
          <label>Address</label>
          <input type="text" placeholder="Maha | India" />
        </div>
        <div className="newUserItm">
          <label>Gender</label>
          <div className="newUserGender">
            <input value="male" type="radio" name="gender" id="male" />
            <label for="male">Male</label>

            <input value="female" type="radio" name="gender" id="female" />
            <label for="female">Female</label>

            <input value="other" type="radio" name="gender" id="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItm">
          <label>Active</label>
          <select id="active" name="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserBtn">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
