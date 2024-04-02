import PropTypes from 'prop-types';

function AddUserForm({ handleSubmit, handleChange, handleCancel, formData, errorToast }) {
  const toggleRole = (role) => {
    const updatedRoles = formData.roles.includes(role)
      ? formData.roles.filter(r => r !== role)
      : [...formData.roles, role];

    handleChange({
      target: {
        name: 'roles',
        value: updatedRoles
      }
    });
  };

  return (
    <div>
      {errorToast && (
        <div className="absolute bottom-4 left-4 bg-red-500 text-white py-2 px-4 rounded-md">
          {errorToast}
        </div>
      )}
      <div className="max-w-lg mx-auto my-28 relative">
        <h2 className="text-3xl font-semibold mb-4 text-center">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-lg font-medium text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-lg p-2 border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-lg p-2 border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Roles:</label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="adminRole"
                  name="ADMIN"
                  checked={formData.roles.includes("ADMIN")}
                  onChange={() => toggleRole("ADMIN")}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <label htmlFor="adminRole" className="ml-2 text-gray-700">ADMIN</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sysAdminRole"
                  name="SYS_ADMIN"
                  checked={formData.roles.includes("SYS_ADMIN")}
                  onChange={() => toggleRole("SYS_ADMIN")}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <label htmlFor="sysAdminRole" className="ml-2 text-gray-700">SYSTEM ADMIN</label>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-16">
            <button
              type="submit"
              className="bg-black w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add User
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

AddUserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  errorToast: PropTypes.string.isRequired,
};

export default AddUserForm;
