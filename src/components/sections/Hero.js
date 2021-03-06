import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class HeroFull extends React.Component {

  state = {
    videoModalActive: false
  }
  openModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  } 

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'hero section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                JOIN THE <span className="text-color-primary">CRYPTO</span> OG CLUB
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                  Noise Everyday is an extraordinary spirit that we consciously build to be able to coexist with the future World.
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button tag="a" color="primary" wideMobile href="#">
                      Get started
                    </Button>
                    <Button tag="a" color="dark" wideMobile href="https://github.com/noiseeveryday">
                      View on Github
                    </Button>                    
                  </ButtonGroup>
                </div>
              </div>
            </div>
            <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
              <a
                data-video="https://player.vimeo.com/video/174002812"
                href="#0"
                aria-controls="video-modal"
                onClick={this.openModal}
              >
                <Image
                  className="has-shadow"
                  src={require('./../../assets/images/video-placeholder.jpg')}
                  alt="Hero"
                  width={896}
                  height={504} />
              </a>
            </div>
            <Modal
              id="video-modal"
              show={this.state.videoModalActive}
              handleClose={this.closeModal}
              video="https://player.vimeo.com/video/174002812"
              videoTag="iframe" />            
          </div>
        </div>
      </section>
    );
  }
}

HeroFull.propTypes = propTypes;
HeroFull.defaultProps = defaultProps;

export default HeroFull;
