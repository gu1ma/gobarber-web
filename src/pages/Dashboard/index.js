import React, { useState, useMemo } from 'react';

import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de ' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDays() {
    setDate(subDays(date, 1));
  }

  function handleNextDays() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDays}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDays}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Gabriel Guimarães</span>
        </Time>
        <Time>
          <strong>09:00</strong>
          <span>Gabriel Guimarães</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Gabriel Guimarães</span>
        </Time>
        <Time avaiable>
          <strong>11:00</strong>
          <span>Em aberto</span>
        </Time>
      </ul>
    </Container>
  );
}
