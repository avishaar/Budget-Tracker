import ProgressBar from 'react-bootstrap/ProgressBar';

const WithLabelExample = () => {
    
    const now = 100;
  
    return (
    <ProgressBar variant='success' now={now} label={`${now}%`} />);
}

export default WithLabelExample;