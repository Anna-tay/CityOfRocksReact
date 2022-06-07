
const Button = ({color,text}) => {
    const onClick = ()=>{
        console.log('click')
    }

    return <button onClick={onClick} style={{color: 'white', backgroundColor: color}} className='btn'>{text}</button>
}


export default Button