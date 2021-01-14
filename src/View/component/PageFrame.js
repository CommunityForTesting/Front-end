import React from "react";
import Header from "View/component/Header";
import Container from "View/component/Container";
import Footer from "View/component/Footer";

function PageFrame({ children }) {
  return (
    <div>
      <Header></Header>
      <Container>{children}</Container>
      <Footer></Footer>
    </div>
  );
}

export default PageFrame;
