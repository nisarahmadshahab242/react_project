function Students() {
  return (
    <div className="container mt-4">
      <h2>Students</h2>
      <p>Manage your students here.</p>

      <button className="btn btn-primary">Add Student</button>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Ahmad</td>
            <td>ahmad@example.com</td>
            <td>
              <button className="btn btn-warning btn-sm me-2">Edit</button>

              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Students;
