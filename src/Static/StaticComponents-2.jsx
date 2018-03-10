import React from 'react';

const StaticComponents = (props) => {
  return (
    <div>
      <Header />
      <Banner />
      <CardRow />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header class="main-header">
      <HeaderName />
      <Navigation />
    </header>
  );
}

const HeaderName = () => {
  return (
    <h1 class="name">
      <a href="">React Bootcamp</a>
    </h1>
  );
}

const Navigation = () => {
  return (
    <ul class="main-nav">
      <NavOne />
      <NavTwo />
    </ul>
  );
}

const NavOne = () => {
  return (
    <li><a href="">My Courses</a></li>
  );
}

const NavTwo = () => {
  return (
    <li><a href="">Account</a></li>
  );
}

const Banner = () => {
  return (
    <div class="banner">
      <Headline />
      <Tagline />
    </div>
  );
}

const Headline = () => {
  return (
    <h1 class="headline">React Bootcamp</h1>
  );
}

const Tagline = () => {
  return (
    <span class="tagline">Helping you understand everything React</span>
  );
}

const CardRow = () => {
  return (
    <div class="row">
      <ColumnOne />
      <ColumnTwo />
      <ColumnThree />
    </div>
  );
}

const ColumnOne = () => {
  return (
    <div class="col">
      <h2>Tutoring</h2>
      <p>Progress starts with accountability. Be a part of a community. Find a mentor.</p>
      <button class="btn-blue"><a href="">Learn More</a></button>
    </div>
  );
}

const ColumnTwo = () => {
  return (
    <div class="col">
      <h2>Tutorials</h2>
      <p>Don't start from scratch, just learn the pieces that you need to advance.</p>
      <button class="btn-blue"><a href="">Learn More</a></button>
    </div>
  );
}

const ColumnThree = () => {
  return (
    <div class="col">
      <h2>Code Reviews</h2>
      <p>Code isn't working out? Have a tutor review your code and get answers to your problems.</p>
      <button class="btn-blue"><a href="">Learn More</a></button>
    </div>
  );
}

const Footer = () => {
  return (
    <footer class="main-footer">
     <Copyright />
    </footer>
  );
}

const Copyright = () => {
  return (
    <span>&copy;2018 React Bootcamp</span>
  );
}

export default StaticComponents;
