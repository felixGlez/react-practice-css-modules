import style from './title.module.css'

const Title = (props) => {
    return (
        <>
            <h1 className={style[props.color]}>Soy un título</h1>;
            <img src="/images/icon-luxury.svg" alt="" />
        </>
    )
}

export default Title