import React from "react";
import { useParams } from "react-router-dom";

import Header from "./../components/Header";
import Footer from "./../components/Footer";

import './../assets/styles/project-page.scss';

const Project = () => {
  let { id } = useParams();

  return (
    <div>
      <Header />
      <main>
        <div className="page-header bg--main-green p-5">
            <h1 class="text-center text-white m-0 text-uppercase">
                Nombre del proyecto {id}
            </h1>
        </div>
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-9 col-md-10">
                    <p className="project-description text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla consequat velit ac bibendum. Nullam egestas elit vel justo ultrices, at semper odio scelerisque. Nullam scelerisque tellus et leo consequat scelerisque. Quisque eros arcu, faucibus et accumsan sed, pharetra ut ante. Nunc quis purus bibendum, dictum nibh nec, interdum leo. Nulla facilisi. Vestibulum ut nisi a velit sagittis egestas vel sed ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="project-card pt-3 pb-3">
                        <img src="https://via.placeholder.com/300x300" alt="card" className="project-card__img"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="project-card pt-3 pb-3">
                        <img src="https://via.placeholder.com/300x300" alt="card" className="project-card__img"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="project-card pt-3 pb-3">
                        <img src="https://via.placeholder.com/300x300" alt="card" className="project-card__img"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="project-card pt-3 pb-3">
                        <img src="https://via.placeholder.com/300x300" alt="card" className="project-card__img"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="project-card pt-3 pb-3">
                        <img src="https://via.placeholder.com/300x300" alt="card" className="project-card__img"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="project-card pt-3 pb-3">
                        <img src="https://via.placeholder.com/300x300" alt="card" className="project-card__img"/>
                    </div>
                </div> 
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="project-card pt-3 pb-3">
                        <img src="https://via.placeholder.com/300x300" alt="card" className="project-card__img"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="project-card pt-3 pb-3">
                        <img src="https://via.placeholder.com/300x300" alt="card" className="project-card__img"/>
                    </div>
                </div>                
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Project;
