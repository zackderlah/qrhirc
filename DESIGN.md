---
name: QRHIRC design directions
description: Three working interpretations of rural health research and collaboration; final selection remains open.
colors:
  ink: "#172b2a"
  paper: "#fafbf8"
  muted: "#50625c"
  accent: "#b44b26"
  soft: "#e9eee6"
  line: "#d6ded7"
  white: "#fff"
  leaf: "#54705c"
  connect: "#253f34"
  button-light: "#e9eddf"
  button-light-ink: "#233c31"
  training: "#f0f0e5"
  country-paper: "#f7f3e9"
  country-ink: "#3c342c"
  country-muted: "#6b6255"
  country-accent: "#925830"
  country-soft: "#e9e3d5"
  country-line: "#d9d0bf"
  country-connect: "#565b3e"
  public-paper: "#fff"
  public-ink: "#182e52"
  public-muted: "#526078"
  public-accent: "#1665bc"
  public-soft: "#edf3f9"
  public-line: "#d5e0ec"
  public-action: "#185cb0"
  public-action-hover: "#134a8e"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(42px, 5.6vw, 78px)"
    fontWeight: 500
    lineHeight: 1.09
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "43px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "27px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.5
  metadata:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.075em"
  country-display:
    fontFamily: "Literata, serif"
    fontSize: "clamp(52px, 6vw, 88px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  public-display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(48px, 5.2vw, 72px)"
    fontWeight: 700
    lineHeight: 1.09
    letterSpacing: "-0.04em"
rounded:
  default: "4px"
  square: "0px"
  topic: "2px"
  hero: "100px 4px 4px 4px"
  hero-mobile: "65px 3px 3px 3px"
  preview: "12px"
spacing:
  gutter: "64px"
  gutter-tablet: "42px"
  gutter-mobile: "24px"
  card: "28px"
  program: "38px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.default}"
    padding: "17px 22px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
  button-light:
    backgroundColor: "{colors.button-light}"
    textColor: "{colors.button-light-ink}"
    rounded: "{rounded.default}"
    padding: "17px 22px"
  button-light-hover:
    backgroundColor: "{colors.white}"
  topic:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.topic}"
    padding: "7px 11px"
  research-card:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.default}"
  training-card:
    backgroundColor: "{colors.training}"
    rounded: "{rounded.default}"
    padding: "{spacing.program}"
  public-service:
    backgroundColor: "{colors.public-action}"
    textColor: "{colors.white}"
    padding: "24px 25px"
  public-service-hover:
    backgroundColor: "{colors.public-action-hover}"
---

# Design System: QRHIRC

## Overview

**Creative North Star: "Regional knowledge, shared possibility"**

This is a descriptive record of the first implementation, not a final brand selection. The three preview alternatives remain equal candidates: Research institute (`institute`, the initial default), Connected to country (`country`), and Health in common (`public`). The shared visual purpose is to make verified regional research approachable and easy to explore. The north-star phrase summarizes the existing direction contract; it is not an additional approved brand commitment.

Research institute pairs restrained Manrope with a Literata phrase, eucalyptus tones, pale stone surfaces, and an asymmetrical photograph. Connected to country uses warmer paper and olive-brown tones, Literata headings and an expansive landscape opening. Health in common uses stronger Manrope, navy and blue, square surfaces, and a direct three-task index. Preserve QRHIRC's existing logo, name, and Acknowledgement of Country in every direction.

**Key Characteristics:**
- Regional landscape photography with attribution.
- Clear research, training, and collaboration routes.
- Spacious editorial sections and mostly flat surfaces.
- Three complete preview alternatives with final selection open.

## Colors

The default palette combines eucalyptus ink and pale paper with a warm action-state accent. Frontmatter records actual CSS values; direction-prefixed tokens preserve the two alternatives.

### Primary
- **Eucalyptus ink:** headings, ordinary text, and primary actions in Research institute.
- **Warm clay accent:** focus outlines and default hover states.
- **Country ink and ochre accent:** warmer text and action-state equivalents in Connected to country.
- **Public navy and action blue:** structural text, action blocks, and emphatic headings in Health in common.

### Secondary
- **Leaf:** the default serif phrase in the opening headline.
- **Connect:** a dark green conversation band; country uses olive, while public uses a pale blue band with dark text.

### Neutral
- **Paper, soft, muted, and line:** page canvas, tonal cards, supporting copy, and section boundaries respectively. Each direction overrides the same semantic CSS variables.
- **Training:** a warmer default programme panel.

**The Direction Integrity Rule.** Apply a direction as a whole; do not mix its palette and typography with another preview alternative without a deliberate redesign.

## Typography

Manrope is locally loaded for the body and default headings; Literata is locally loaded for the institute hero phrase and country headings. Country retains Manrope for body copy and priority controls. Public uses Manrope throughout, with a heavier display weight.

The frontmatter captures representative desktop roles, not a rigid universal scale. Section headings vary by context; programme titles and the conversation band have their own larger sizes in the stylesheet. Hero descriptions use a larger body treatment (16px, line height 1.8); metadata is compact and letter-spaced, placed below the project title in sentence case. Supporting body copy is 15px; actions are generally 14px; acknowledgement, topic labels, and contact/footer information are 12px. The hero secondary action is 13px. Preserve heading hierarchy and balanced wrapping rather than adding decorative uppercase headings.

## Layout

The content wrapper is centered at a maximum width of 1320px. Header and institute hero use a 1440px maximum. Desktop content gutters are 64px, reducing to 42px at 1200px and 24px at 700px. A second responsive step at 980px reduces type and gaps and hides the header call to action. The featured card stacks its image above its copy at 1200px.

The institute hero uses a 1.08:1 two-column split; research uses 1.28:1 with a 42px gap. The institute featured card itself uses a 0.65:1 image-to-copy split and 28px copy padding. Intro, priorities, and training use two columns with generous separation. At 700px these become a single reading column; the member names become a two-column grid and the navigation becomes a disclosure below the header.

Country gives the hero a full landscape frame with a dark directional overlay and places the text above it. Public gives the hero a pale blue canvas and a three-column service strip, which becomes three full-width stacked links on mobile. These are alternatives, not additive modules required on every page.

## Elevation & Depth

Content surfaces are flat. Tonal backgrounds, thin dividing rules, photographic framing, and whitespace establish depth. Country's image overlay preserves light-text legibility. The only shadow is attached to the preview-only direction selector (`0 8px 32px #12231e26`); it is review tooling, not the site's card language.

## Shapes

Institute buttons and containers have gently squared corners. Its hero has one large upper-left curve, reduced on mobile. Country and public override the main radius to square. The small topic label has a modest corner treatment. The preview selector's rounded floating form is intentionally separate from the public page's geometry.

## Components

### Buttons and text links
Primary actions are compact, semibold, padded links with a directional arrow. Default primary hover changes ink to the accent; the light action becomes white. Arrows move slightly up and right on hover. Text links have persistent underlines. Global keyboard focus uses a three-pixel accent outline with five-pixel offset. Country's hero and public action blocks have explicit contextual colors that take precedence over the default button declarations.

### Navigation
The logo stays intact. Desktop links are compact with a color hover state. Below 700px the menu button opens a vertical link list below the header; expanded state is exposed to assistive technology. Navigation labels reduce from 14px to 12px at 1200px. A skip link becomes visible when focused.

### Cards and topic label
The featured project combines an image, a small topic label, title, funding metadata, summary and source link. Its image scales slightly on hover over 0.6 seconds. The training card presents structured programme facts separated by rules and one full-width enquiry action. Its format explicitly says four full-day workshops, in person. There are no input fields in this implementation. At 700px, the training panel uses 27px by 23px padding, its action and fact rows use 13px text, the workshop link uses 12px, and the footer stacks into one column. Mobile body and hero description text is 15px; acknowledgement and contact information remain 12px.

### Research priorities
Four disclosure buttons show at most one priority description at a time. The first starts open; the current item can be closed. A chevron rotates on open, and the control exposes expanded state and its associated content identifier.

### Public service strip
Three direct task links sit on a solid blue band with vertical dividing rules on desktop and horizontal rules on mobile. Hover darkens the individual link.

### Preview direction selector
Visible only when the URL includes `preview`, this floating review control selects whole-page alternatives and persists the selection in the `direction` query parameter. It can be minimized. It does not establish a final selected direction.

Motion is limited to state transitions, arrows, and the project image. Respect reduced motion: the implementation removes transitions and animation and disables smooth scrolling when requested.

## Do's and Don'ts

### Do:
- Do preserve all three preview alternatives until the user selects one.
- Do use locally loaded Manrope and Literata in their observed roles.
- Do retain visible keyboard focus and reduced-motion behavior.
- Do preserve the logo, Acknowledgement of Country, and photography attribution.

### Don't:
- Don't treat the initial institute default as final approval.
- Don't spread the preview control's shadow and rounded style to content cards.
- Don't mix direction-specific palettes and heading treatments accidentally.
- Don't invent research outcomes, people, events, or proof statistics to fill a layout.
