## How to start

- run `npm i --force` to install packeges. `--force` is needed, because it was deprecated recently.
- run `npm run storybook` to run storybook, or `npm run dev` to run an application

## Tech stack

React, Typescript, Storybook, SCSS, Vite

## Task Details:

- Create a simple React App with Quote block Component that can change the theme using React Context.
- The component should be responsive which follows a mobile-frst approach (Breakpoint:, 768 ).
- This component should be developed in two brands (Brand A, and Brand B). Brand in this context refers to the theme. For example: Brand A can have a blue background with Arial fonts and brand B can have a red background with Times Roman fonts.

- Each brand needs to have a separate Story on StoryBook.
- By default, the component should render the dummy data and can be updated via Storybook knobs.
- Each individual brand will have the following Storybook knobs to change the properties:
  ● Title Underline
  ● Component Background Confg
  ● Text Box Background Color
  ● Text Color
- CTA can remain the same but the rest of the component colors should be based on brands specifcations mentioned below
  a. Brand A CTA colors : #D2B99B & #FFFFFF
  b. Brand B CTA colors : #0057B7 & #FFFFFF
