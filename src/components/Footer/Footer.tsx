import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <CustomFooter className="bg-transparent fc-primary">
      ©2019 Market • Privacy Policy
    </CustomFooter>
  );
};

export default Footer;

const CustomFooter = styled.footer`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
