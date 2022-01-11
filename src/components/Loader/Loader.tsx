import React from "react";
import styled from "styled-components";
import LoaderGif from "../../assets/images/Loader.gif";

const Loader: React.FC<{ visible: boolean }> = (props) => {
  return (
    <CustomLoader style={{ display: props.visible ? "block" : "none" }}>
      <img src={LoaderGif} alt="gif" />
    </CustomLoader>
  );
};

export default Loader;

const CustomLoader = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  position: sticky;
  top: 50%;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 3;
  opacity: 0.3;
  background: #fff;

  img {
    top: 50%;
    position: absolute;
  }
`;
