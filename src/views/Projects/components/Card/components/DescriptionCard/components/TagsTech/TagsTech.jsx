import style from './TagsTech.module.css';

export default function TagsTech( props ) {
  const { tags } = props;

  return(
    <div className={style.tags_tech}>
      <div className={style.title}>Developed</div> 
      <div className={style.technologies}>
        {tags.map(element => <div>{element}</div>)}
      </div>
    </div>
  )
}