import ProgressBar from 'react-bootstrap/ProgressBar';
import ExpenseTotal from './ExpenseTotal';

const WithLabelExample = () => {
    
    const now = <ExpenseTotal />;
  
    return (
    <ProgressBar variant='success' now={now} label={`${now}%`} />);
}

console.log(WithLabelExample);

export default WithLabelExample;
