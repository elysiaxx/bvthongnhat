import React from 'react';
import Icon from '@ant-design/icons';

import {
  ReactComponent as arrowHideSVG
} from '../../assets/images/svg/arrow_drop_down.svg';
import {
  ReactComponent as arrowAppearSVG
} from '../../assets/images/svg/arrow_drop_down_hien.svg';

import './_ExpandIcon.scss'

const _ExpandIcon: React.FC<{expand: boolean}> = ({expand}) => {
    return (
        <div className='expand-icon-box'>
            <span className='expand-icon-title'>{expand ? 'Ẩn': 'Hiện'}</span>
            <Icon component={expand ? arrowHideSVG: arrowAppearSVG} />
        </div>
    );
};

export default _ExpandIcon;