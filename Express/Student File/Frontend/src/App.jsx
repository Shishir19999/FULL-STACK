import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const [students, setStudents] = useState([]);

  const getStudent = async () => {
    let response = await fetch(API_URL);
    let data = await response.json();
    console.log(data);
    setStudents(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    let active = true;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (active) setStudents(Array.isArray(data) ? data : []);
      });
    return () => {
      active = false;
    };
  }, []);

  const insertData = async (e) => {
    e.preventDefault();
    let sendData = { name, email, phone, address };
    let response = await fetch(`${API_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendData),
    });

    await response.json();
    getStudent();
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  const deleteStudent = async (id) => {
    let response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    await response.json();
    getStudent();
  };

  return (
    <div className="container">
      <div className="row mb-3 mt-3">
        <div className="col-md-12">
          <h1>student Record</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <form action="" onSubmit={insertData}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail:
              </label>
              <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone:
              </label>
              <br />
              <input
                type="text"
                value={phone}
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <br />
              <input
                type="text"
                value={address}
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
              />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students &&
                students.map((student, index) => {
                  return (
                    <tr key={student._id ?? index}>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.phone}</td>
                      <td>{student.address}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteStudent(student._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="row">
          {students &&
            students.map((student, index) => {
              return (
                <div className="col-md-3" key={student._id ?? index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{student.name}</h5>
                      <p className="card-text">
                        {student.email}
                        <br />
                        {student.phone}
                        <br />
                        {student.address}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
