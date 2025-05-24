function Card(props) {
  return (
    <div className={props.class}>
      <h2>{props.heading}</h2>
      <img src={props.src} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
