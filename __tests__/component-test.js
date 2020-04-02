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

it('label attribute', () => {
    const LABEL_TEXT = 'label0'
    const renderResult = render(<DateRange label={LABEL_TEXT}/>)
    //const renderResult = render(<div><label htmlFor="">label0</label></div>)
    const {getByText, getByTestId} = renderResult
    expect(getByText(LABEL_TEXT)).toBeInTheDocument()
})

it('onChange event', done => {
    const START_DATE = '2020-3-20', END_DATE='2020-3-25'
    let startDate='', endDate = ''
    const renderResult = render(<DateRange
        startDate={START_DATE} endDate={END_DATE}
        //onChange={(s,e)=>{ startDate=s; endDate=e; }}
        onChange={console.log}
    />)
    //const renderResult = render(<div><label htmlFor="">label0</label></div>)
    const {getByText, getByTestId, getByDisplayValue} = renderResult;

    setTimeout(()=>{
        fireEvent.click(getByDisplayValue(START_DATE))

    },100)

    //console.log(getByDisplayValue(START_DATE).value)

    setTimeout(()=>{

        fireEvent.click(getByText('12').parentElement)
        fireEvent.click(getByText('18').parentElement)
    },300)

    setTimeout(()=>{
        //console.log(getByText('12').outerHTML)
        //console.log(startDate)
        expect('aa').toBe('bb')
        done();
    },800)

    /*expect(startDate).toBe('2020-3-12')
    expect(endDate).toBe('2020-3-18')*/


})


//onChange

/*
it('check on two items - data property - onChange event', () => {
    let selectedItems = []

    const renderResult = render(<CheckboxGroup data={arr1} onChange={items => selectedItems = items}/>)
    const {queryByLabelText, getByLabelText, queryByDisplayValue} = renderResult

    expect(getByLabelText('address')).toBeInTheDocument()

    fireEvent.click(getByLabelText('city'))
    fireEvent.click(getByLabelText('country'))

    const items = selectedItems && selectedItems.length>0 ? selectedItems:[]
    expect((items[0] || {}).value).toBe('a2')
    expect((items[1] || {}).value).toBe('a4')
})


it('clean selected items', () => {
    let selectedItems = []

    const myRef = React.createRef()
    const clean = ()=>{
        myRef.current.clean();
    }

    const renderResult = render(<><CheckboxGroup ref={myRef}
        data={arr1} onChange={items => selectedItems = items}/>
        <button  data-testid="clean" onClick={clean}>clean</button>
        </>)
    const {getByLabelText, getByTestId} = renderResult

    fireEvent.click(getByLabelText('city'))
    fireEvent.click(getByLabelText('country'))

    expect(selectedItems.length).toBe(2)

    fireEvent.click(getByTestId('clean'))

    expect(selectedItems.length).toBe(0)
})*/
