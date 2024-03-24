const FormBook = () => {
  return (
    <div>
      <form className="form-book" action="">
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="date" name="bookdate" placeholder="Book date" required />
        <textarea
          cols="25"
          rows="4"
          name="comment"
          placeholder="Comment"
        ></textarea>
        <button type="submit" className="showmore-button">
          <span>Send</span>
        </button>
      </form>
    </div>
  );
};

export default FormBook;
