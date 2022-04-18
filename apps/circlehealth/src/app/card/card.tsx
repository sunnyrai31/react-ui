import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {
  name:string,
  designation:string,
  address:string
}

export function Card(props: CardProps) {
  return (
    <>
      <div className="card" style={{width:'48rem', margin:'2%'}}>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.designation}</h6>
          <p className="card-text">{props.address}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
