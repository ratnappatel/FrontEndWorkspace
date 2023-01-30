import React from 'react';
import { render, screen } from '@testing-library/react';
import SubscriptionForm from './SubscriptionForm';

it('Check Subscription Button must be Disabled',()=>{
    render(<SubscriptionForm/>)
    expect(screen.getByRole("button",{name: /subscribe/i})).toBeDisabled();
});