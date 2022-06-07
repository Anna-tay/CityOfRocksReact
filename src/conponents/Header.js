import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Click')
    }



    return (
        <header className='header'>
            <h1 style = {{color:'green', backgroundColor: 'White'}}>City of Rocks</h1>
            <h2 style = {{color:'blue', backgroundColor: 'White'}}>Routs to Do</h2>
            {/* <Button color='blue' text='Add route' onCLick={onClick}/> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
    
}

export default Header

