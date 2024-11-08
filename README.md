# Recruit Reactive Hobbits

### The West Farthing Resettlement Initiative

Recreation of my previous vanilla JS "Recruit A Hobbit", this time built in React.

# Features

- Recruit hobbits using the 'Recruit Hobbit' button at the top.
- Upgrade buttons 'enable' as player earns enough hobbits to afford. Purchase increases 'hobbits per second', which automatically increases hobbit count by this value every second via useEffect.
- Use of useState to dynamically re-render components as required.
- Upgrades are pulled from an API
- Image updates several times as player takes certain actions. UI colours update to suit image colours.
- Sound effects and music plays depending on user interaction
- UI layout changes depending on screen size to improve UX regardless of device.
- Options menu allows user to:

  - Save current progress to local storage
  - Enable / Disable sounds
  - Restart the main theme music
  - Reset all game data (on page and storage)
  - Cheat (Add 200,000 hobbits, update UI, feel bad ~~Bilbo used "confusion"!~~)

## Future Considerations

- Consolidate useState hooks into useReducer hook
- Clean up / refactor code
- Add ability to upgrade recruit button to add more hobbits each press
- Perhaps add a 'prestige' function to incentivise continued progress
- Add more images and UI colour updates to match as user progresses with upgrades
- Make the UI a bit nicer in general
- Add some more options (display, etc)
- Add/improve accessibility

# Reflection

## What requirements did you achieve?

All

## What was it that you found difficult about these tasks?

Took me a while to figure out how to replace the names of upgrades retrieved from the API with my own names. Got there in the end though!

I don't like how you have to import any assets you want to use instead of just linking to their filepath (unless using public). It was fun figuring out how to import an entire folder as one variable and make use of the files.

## What errors or bugs did you encounter while completing your assignment? How did you solve them?

I had to turn the 'no-unused-vars' rule off almost immediately as I found the errors it generated obnoxiously distracting while trying to focus on write my code. Turned it back on afterwards to clean everything up.

I had a weird issue where for some reason everything styled in pixels (and only those) were considerably larger than they should have been. I couldn't find the cause, so went through meticulously tweaking them all until the UI looked roughly the same as my previous project. A few hours later? It inexplicably decided to recognise what a pixel was and made everything really small, so then had to go through everything and setting the values back to how they were originally.

Another issue I was stuck on for a while was when I forgot to destructure props in a child component and couldn't figure out why it wouldn't let me call the passed functions - there may have been a few choice words involved.

## What went really well and what could have gone better?

I'm quite happy with it overall. In general I really like how states work, although they can be a pain.
I quite like how I was able to implement my UI styling changes as the user takes certain actions.
I would have liked more time to expand on features added in the previous version, but a few of those already proved to be more complicated than expected to implement.
