/* eslint-disable no-unused-vars */
import Wrapper from '../assets/wrappers/StatItem';

const StatsItem = ({count, color, icon, title, bgc}) => {
  return (
    <Wrapper color={color} bgc={bgc}>
        <header>
            <span className='count'>{count}</span>
            <span className='icon'>{icon}</span>
        </header>
        <h5 className='title'>{title}</h5>
    </Wrapper>
  )
}

export default StatsItem;
