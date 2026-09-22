````markdown
# SpendWise Dashboard Shell

## Project Overview

SpendWise is a responsive financial dashboard shell designed to provide users with a clear overview of their personal spending.

This project focuses on creating the visual structure of the dashboard using modern CSS techniques. No JavaScript functionality is required for this stage.

## Features

The dashboard includes:

- Sidebar navigation menu
- Dashboard header
- Six financial category cards
- Responsive layout
- CSS Grid for the main page and card layout
- Flexbox for navigation, header, and card content
- CSS custom properties for the theme
- Hover and keyboard focus animations
- Dark theme using the user's system preference

## Financial Categories

The dashboard contains six static financial categories:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Savings
6. Utilities

Each category displays realistic static financial information.

## File Structure

### index.html

Contains the structure of the SpendWise dashboard, including:

- Sidebar
- Navigation menu
- Header
- User profile area
- Financial category cards

### style.css

Contains all the visual styling for the dashboard.

It includes:

- CSS Grid
- Flexbox
- CSS custom properties
- Responsive media queries
- Hover animations
- Keyboard focus animations
- Dark theme

### README.md

Provides information about the project, its structure, and the technologies used.

## CSS Grid

CSS Grid is used for the main dashboard layout.

The desktop layout contains:

- A sidebar column
- A main content column

CSS Grid is also used to arrange the six financial cards.

## Flexbox

Flexbox is used for:

- Sidebar navigation
- Header content
- Profile section
- Financial card content

## Responsive Design

The dashboard changes to a single-column layout when the screen width is below 768px.

This allows the dashboard to work better on smaller screens such as tablets and mobile devices.

The responsive layout can be tested using the browser's DevTools Device Toolbar.

## Micro-interactions

The financial cards include subtle hover and keyboard focus effects.

The animations use:

- `transform`
- `box-shadow`

The transitions last 200ms, which is within the required 250ms limit.

## Dark Theme

The project includes a dark theme using:

```css
@media (prefers-color-scheme: dark)
````

Only the CSS custom property values are overridden to create the dark theme.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* CSS Media Queries

```
```
