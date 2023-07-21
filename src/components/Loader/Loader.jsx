import { ThreeDots } from 'react-loader-spinner';
import { Div } from './Loader.styled';

const Loader = () => {
  return (
    <Div>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="var(--main-clr-blue)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Div>
  );
};

export default Loader;
