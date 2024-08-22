import React from 'react';
import { Spin } from 'antd';
import '../assets/pages/common.css';

interface LoadingProps {
  loading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      zIndex: 1000,  
      position: 'relative'  ,
      marginTop:'300px',
    }}>
      <Spin size="large" style={{ fontSize: '3rem' }} />  
    </div>
  );
};

export default Loading;
