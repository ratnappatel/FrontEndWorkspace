import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Renderer } from 'react-test-renderer';
import SubscriptionForm from './SubscriptionForm';


it('Check Subscription Button must be Disabled',()=>{
    render(<SubscriptionForm/>)
    expect(screen.getByRole("button",{name: /subscribe/i})).toBeDisabled();
});

it('The Subscribe Button becomes enabled when onChange event occured..',()=>{
    render(<SubscriptionForm/>);
    userEvent.type(screen.getByRole('textbox',{name: /email/i}),'abc@gmail.com');
    expect(screen.getByRole("button",{name: /subscribe/i})).toBeEnabled();
})

it('Test to match snapshot of component',()=>{
    const subFormTree= Renderer.create(<SubscriptionForm/>).toJSON();

    expect(subFormTree).toMatchSnapshot();
})