import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { FaPaperPlane, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { bool, func, number } from 'prop-types';
import { ModalFooterContainer, FooterControlBtns } from './index.style';
import Button from '../../Button';
import { colorsType } from '../../../types/generalTypes';

const ModalFooter = ({
  actualPage, isSummary, percent, showBackButton, showProgressBar, colors, onPrev,
}) => (
  <ModalFooterContainer>
    {showProgressBar && (
    <ProgressBar
      completed={percent}
      bgcolor={colors.primary}
      borderRadius={0}
      isLabelVisible={false}
      height={5}
      baseBgColor="transparent"
    />
    )}
    <FooterControlBtns>
      <div>
        {showBackButton && actualPage > 0 && (
        <Button inverted bg={colors.primary} onClick={onPrev} type="button">
          <FaChevronLeft />
        </Button>
        )}
      </div>
      <div>
        <Button bg={colors.primary} type="submit">
          {isSummary ? (
            <>
              <span>Next</span>
              <FaChevronRight />
            </>
          ) : (
            <>
              <span>Submit</span>
              <FaPaperPlane />
            </>
          )}
        </Button>
      </div>
    </FooterControlBtns>

  </ModalFooterContainer>
);

ModalFooter.propTypes = {
  actualPage: number.isRequired,
  isSummary: bool.isRequired,
  percent: number.isRequired,
  showBackButton: bool.isRequired,
  showProgressBar: bool.isRequired,
  colors: colorsType.isRequired,
  onPrev: func.isRequired,
};

export default ModalFooter;
