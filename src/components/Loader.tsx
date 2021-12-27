import './Loader.css'

const Loader = () => {
    return (
      <div className='position'>
        <div className='lds_ellipsis'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  };
  
  export default Loader;