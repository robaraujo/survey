import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from '@ramonak/react-progress-bar';
import { FaPaperPlane, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { ModalFooterContainer, FooterControlBtns } from './index.style';
import { nextPage, prevPage } from '../../../store/survey';
import Button from '../../Button';

const ModalFooter = () => {
  const { config, actualPage } = useSelector((state) => state.survey);
  const dispatch = useDispatch();
  const {
    showBackButton, showProgressBar, colors, pages,
  } = config;
  const totalPages = pages.length;
  const isSummary = actualPage < totalPages;
  const completed = (actualPage * 100) / totalPages;

  return (
    <ModalFooterContainer>
      {showProgressBar && (
        <ProgressBar
          completed={completed}
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
            <Button inverted bg={colors.primary} onClick={() => dispatch(prevPage())} type="button">
              <FaChevronLeft />
            </Button>
          )}
        </div>
        <div>
          {isSummary ? (
            <Button bg={colors.primary} onClick={() => dispatch(nextPage())} type="button">
              <span>Next</span>
              <FaChevronRight />
            </Button>
          ) : (
            <Button bg={colors.primary} onClick={() => dispatch(nextPage())} type="button">
              <span>Submit</span>
              <FaPaperPlane />
            </Button>
          )}
        </div>
      </FooterControlBtns>

    </ModalFooterContainer>
  );
};

export default ModalFooter;
