import React from 'react'
import {cleanup, fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import DateRange from '../src/component'

afterEach(cleanup)

it('default startDate and endDate', () => {
    let startDate = '', endDate=''
    const START_DATE = '2020-3-20', END_DATE='2020-3-25'

    render(<DateRange
           startDate={START_DATE} endDate={END_DATE}
           onChange={(s, e)=>{ startDate=s; endDate=e }}/>)
    expect(startDate).toBe(START_DATE)
    expect(endDate).toBe(END_DATE)
})

it('label and buttonBegin attribute', () => {
    const LABEL_TEXT = 'Select a time range', BUTTON_BEGIN_TEXT = 'Last '
    const renderResult = render(<DateRange label={LABEL_TEXT} buttonBegin={BUTTON_BEGIN_TEXT}/>)
    const {getByText} = renderResult
    expect(getByText(LABEL_TEXT)).toBeInTheDocument()
    expect(getByText('Last 7 days')).toBeInTheDocument()
})

it('onChange event', () => {
    const START_DATE = '2020-03-21', END_DATE = '2020-03-25'
    let startDate = '', endDate = ''
    const renderResult = render(<DateRange
        startDate={START_DATE} endDate={END_DATE}
        onChange={(s, e) => {
            startDate = s;
            endDate = e;
        }}
    />)
    const {getByText, getByDisplayValue} = renderResult;
    fireEvent(
        getByDisplayValue(START_DATE),
        new MouseEvent('click', {bubbles: true})
    )
    const cell12 = getByText('12'), cell15 = getByText('15'),
            option = {bubbles: true, cancelable: false}
    const selectCell = (cell) => {
        fireEvent(cell, new MouseEvent('mouseover', option))
        fireEvent(cell, new MouseEvent('mousedown', option))
        fireEvent(cell, new MouseEvent('mouseup', option))
    }
    selectCell(cell12)
    selectCell(cell15)

    expect(startDate).toBe('2020-03-12')
    expect(endDate).toBe('2020-03-15')
})
