import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Testimonial extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Quotes about NFT (Non-Fungible Token)',
      paragraph: 'To know more about it, you can read the below Quotes about NFT.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — A non-fungible token (NFT) is a unique and non-interchangeable unit of data stored on a blockchain.
                      </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">NFT Quote</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a href="#0">Anonymous</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — The unique identity and ownership of an NFT are verifiable via the blockchain ledger.
                      </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">NFT Quote</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a href="#0">Anonymous</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-left" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — An NFT is a unit of data stored on a digital ledger, called a blockchain, which can be sold and traded.
                      </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">NFT Quote</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a href="#0">Anonymous</a>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
