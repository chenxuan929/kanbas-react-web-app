import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const [user, setUser] = useState({ username: "", password: "" });
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  return (
    <div className="w-50">
      <h1>Account</h1>

      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        placeholder="password"
        className="form-control mb-2"
      />

      <button onClick={save} className="btn btn-primary w-100 mb-2">
        Save
      </button>
      <button onClick={signout} className="btn btn-primary w-100 mb-2">
        Signout
      </button>
      <Link to="/project/admin/users" className="btn btn-warning w-100 mb-2">
        Users
      </Link>
      <div>
        {account && (
          <div>
            <input
              value={account.password}
              onChange={(e) =>
                setAccount({
                  ...account,
                  password: e.target.value,
                })
              }
            />
            <input
              value={account.firstName}
              onChange={(e) =>
                setAccount({
                  ...account,
                  firstName: e.target.value,
                })
              }
            />
            <input
              value={account.lastName}
              onChange={(e) =>
                setAccount({
                  ...account,
                  lastName: e.target.value,
                })
              }
            />
            <input
              value={account.dob}
              onChange={(e) =>
                setAccount({
                  ...account,
                  dob: e.target.value,
                })
              }
            />
            <input
              value={account.email}
              onChange={(e) =>
                setAccount({
                  ...account,
                  email: e.target.value,
                })
              }
            />
            <select
              onChange={(e) =>
                setAccount({
                  ...account,
                  role: e.target.value,
                })
              }
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
export default Account;