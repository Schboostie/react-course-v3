const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author}</h4>
    </article>
  );
};

export default Book;

/* I wanted to come aswell to 
play with you both in hte park
did you if we knew taht you wanted to cm
we would have taken you to  the park*/
