import './Simpson.css';

export default function Simpson({name, surname, age, info, photo}) {

  return (
    <div className={"simpson"}>
      <img src= { photo } alt=""/>
      <div>
        <span> { name } </span>
        <span> { surname }: </span>
        <span> { age } years </span>
      </div>
      <p> { info } </p>
    </div>
  );
}