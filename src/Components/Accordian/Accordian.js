import React, { useState } from "react";
import "./Accordian.css";

function Accordian({ accordianShow }) {
  const [openAccordianOne, setOpenAccordianOne] = useState(false);
  const [openAccordianTwo, setOpenAccordianTwo] = useState(false);
  const [openAccordianThree, setOpenAccordianThree] = useState(false);

  function accordianOne() {
    setOpenAccordianOne(!openAccordianOne);
    if (openAccordianTwo) {
      setOpenAccordianTwo(!openAccordianTwo);
    }
    if (openAccordianThree) {
      setOpenAccordianThree(!openAccordianThree);
    }
  }
  function accordianTwo() {
    setOpenAccordianTwo(!openAccordianTwo);
    if (openAccordianOne) {
      setOpenAccordianOne(!openAccordianOne);
    }
    if (openAccordianThree) {
      setOpenAccordianThree(!openAccordianThree);
    }
  }
  function accordianThree() {
    setOpenAccordianThree(!openAccordianThree);
    if (openAccordianOne) {
      setOpenAccordianOne(!openAccordianOne);
    }
    if (openAccordianTwo) {
      setOpenAccordianTwo(!openAccordianTwo);
    }
  }

  return (
    <div
      className={accordianShow ? "accordian-box showaccord" : "accordian-box "}
    >
      <div className="accord-one">
        <div className="accord">
          <p>HiCoder</p>
          <button onClick={accordianOne}>
            {!openAccordianOne ? (
              <i className="fas fa-chevron-down"></i>
            ) : (
              <i className="fas fa-chevron-up"></i>
            )}
          </button>
        </div>
        <div
          className={
            openAccordianOne ? "inner-accordion" : "inner-accordion showAccord"
          }
        >
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Blog</a>
          <button onClick={accordianOne} className="close-accord-btn">
            <i className="fas fa-times"></i> Close
          </button>
        </div>
      </div>
      <div className="accord-two ">
        <div className="accord">
          <p>Course</p>
          <button onClick={accordianTwo}>
            {!openAccordianTwo ? (
              <i className="fas fa-chevron-down"></i>
            ) : (
              <i className="fas fa-chevron-up"></i>
            )}
          </button>
        </div>
        <div
          className={
            openAccordianTwo ? "inner-accordion" : "inner-accordion showAccord"
          }
        >
          <a href="/">What you learn?</a>
          <a href="/">How To Apply?</a>
          <a href="/">Fee Structure</a>
          <a href="/">Apply</a>
          <button onClick={accordianTwo} className="close-accord-btn">
            <i className="fas fa-times"></i> Close
          </button>
        </div>
      </div>
      <div className="accord-three ">
        <div className="accord">
          <p>Hire</p>
          <button onClick={accordianThree}>
            {!openAccordianThree ? (
              <i className="fas fa-chevron-down"></i>
            ) : (
              <i className="fas fa-chevron-up"></i>
            )}
          </button>
        </div>
        <div
          className={
            openAccordianThree
              ? "inner-accordion"
              : "inner-accordion showAccord"
          }
        >
          <a href="/">Hire</a>
          <button onClick={accordianThree} className="close-accord-btn">
            <i className="fas fa-times"></i> Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
