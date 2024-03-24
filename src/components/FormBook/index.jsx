const FormBook = () => {
  return (
    <div>
      <form className="form-book" action="">
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="bookdate" placeholder="Book date" />
        <input type="textarea" nama="comment" placeholder="Comment" />
        <textarea
          cols="25"
          rows="4"
          name="comment"
          placeholder="Comment"
        ></textarea>
        <button className="showmore-button">
          <span>Send</span>
        </button>
      </form>
    </div>
  );
};

export default FormBook;
