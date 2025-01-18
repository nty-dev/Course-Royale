import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

import { useEffect } from 'react';
import { useState } from 'react';

import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';

const Roulette = () => {
  const courses = [
    "CS2030S",
    "CS2040S",
    "CS2100",
    "MA1521",
    "MA1522",
    "GAM7777"
  ];

  const prizes = [
    {
      image: 'https://i.ibb.co/6Z6Xm9d/good-1.png',
      text: "CS2030S",
    },
    {
      image: 'https://i.ibb.co/T1M05LR/good-2.png',
      text: "MA1521",
    },
    {
      image: 'https://i.ibb.co/Qbm8cNL/good-3.png',
      text: "GEA1000",
    },
  ];

  const winPrizeIndex = 0;

  const reproductionArray = (array = [], length = 0) => [
    ...Array(length)
      .fill('_')
      .map(() => array[Math.floor(Math.random() * array.length)]),
  ];

  const reproducedPrizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 3),
    ...prizes,
    ...reproductionArray(prizes, prizes.length),
  ];

  const generateId = () =>
    `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

  const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id: typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : generateId(),
  }));

  const [start, setStart] = useState(false);

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    console.log('🥳 Prize defined! 🥳');
  };

  useEffect(() => {

  }, []);

  return (
    <div>
      <RoulettePro
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handlePrizeDefined}
      />
      <button onClick={handleStart}>Start</button>
    </div>
  )
}

export default Roulette
