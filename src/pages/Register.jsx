function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
