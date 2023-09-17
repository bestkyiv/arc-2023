import classes from './title.module.css';
export default function Title({title}){
  return <h1 className={classes.title}>{title}</h1>
}