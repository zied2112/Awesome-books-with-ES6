export default class Contact {
  constructor() {
    this.content = `
      <h3>Contact Information</h3>
      <p>Do you have any questions or you just want to say "Hello"?
        <br>
        You can reach out to us!
      </p>
      <ul>
        <li>
          <h5>Our e-mail: mail@mail.com</h5>
        </li>
        <li>
          <h5>Our phone number: 030305959</h5>
        </li>
        <li>
          <h5>Our address: Streetname 22,3243,City,County</h5>
        </li>
      </ul>
            `;
  }

  getcontent() {
    return this.content;
  }
}
