import React from 'react';
import { Button } from 'react-bootstrap';

const SignInSocialButtons = () => (
  <div className="section-head">
    <h2 className="text-small mb-5">Existing user login</h2>
    <Button className="btn-facebook ml-1 mr-1" size="md">
      <i className="icon-facebook" /> Log in with Facebook
    </Button>
    <Button className="btn-twitter ml-1 mr-1" size="md">
      <i className="icon-twitter" /> Log in with Twitter
    </Button>
    <Button className="btn-linkedin ml-1 mr-1" size="md">
      <i className="icon-linkedin" /> Log in with Linkedin
    </Button>
  </div>
);

export default SignInSocialButtons;
