import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Oval
        visible={true}
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="oval-loading"
      />
    </div>
  );
};
