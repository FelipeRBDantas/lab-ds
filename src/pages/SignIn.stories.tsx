import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SignIn } from './SignIn';

export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args: {},
    argTypes: {}
} as Meta

export const Default: StoryObj = {
    play: ({ canvasElement }) => {
        const canvas = within(canvasElement);

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'feliperbdantas@outlook.com');
        userEvent.type(canvas.getByPlaceholderText('******'), '123456');

        userEvent.click(canvas.getByRole('button'));
    }
}
