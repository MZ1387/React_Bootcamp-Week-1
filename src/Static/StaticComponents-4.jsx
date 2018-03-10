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
      <HeaderName
        title={"React Bootcamp"}
        href={"#"}
      />
      <Navigation />
    </header>
  );
}

const HeaderName = (props) => {
  return (
    <h1 class="name">
      <a href={props.href}>
        {props.title}
      </a>
    </h1>
  );
}

const Navigation = () => {
  return (
    <ul class="main-nav">
      <NavLink
        title={"My Courses"}
        href={"#"}
      />
      <NavLink
        title={"Account"}
        href={"#"}
      />
    </ul>
  );
}

const NavLink = (props) => {
  return (
    <li>
      <a href={props.href}>
        {props.title}
      </a>
    </li>
  );
}

const Banner = () => {
  return (
    <div class="banner">
      <Headline
        title={"React Bootcamp"}
      />
      <Tagline
        tagline={"Helping you understand everything React"}
      />
    </div>
  );
}

const Headline = (props) => {
  return (
    <h1 class="headline">
      {props.title}
    </h1>
  );
}

const Tagline = (props) => {
  return (
    <span class="tagline">
      {props.tagline}
    </span>
  );
}

const CardRow = () => {
  return (
    <div class="row">
      <Card
        title={"Tutoring"}
        paragraph={"Progress starts with accountability. Be a part of a community. Find a mentor."}
        href={"#"}
        buttonName={"Learn More"}
      />
      <Card
        title={"Tutorials"}
        paragraph={"Don't start from scratch, just learn the pieces that you need to advance."}
        href={"#"}
        buttonName={"Learn More"}
      />
      <Card
        title={"Code Reviews"}
        paragraph={"Code isn't working out? Have a tutor review your code and get answers to your problems."}
        href={"#"}
        buttonName={"Learn More"}
      />
    </div>
  );
}

const Card = (props) => {
  return (
    <div class="col">
      <h2>{props.title}</h2>
      <p>{props.paragraph}</p>
      <button class="btn-blue">
        <a href={props.href}>
          {props.buttonName}
        </a>
      </button>
    </div>
  );
}

const Footer = () => {
  return (
    <footer class="main-footer">
      <Copyright
        content={"2018 React Bootcamp"}
      />
    </footer>
  );
}

const Copyright = (props) => {
  return (
    <span>
      &copy;{props.content}
    </span>
  );
}

export default StaticComponents;
