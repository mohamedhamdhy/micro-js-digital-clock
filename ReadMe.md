# Digital Clock

A modern, feature-rich digital clock with real-time updates, 12/24-hour format toggle, light/dark theme, and timezone display. Built with vanilla JavaScript, this clock provides an elegant display of current time and date with smooth animations.

## Features

- ⏰ Real-time clock updates every second
- 🕐 12-hour and 24-hour format toggle
- 🌓 Light and dark theme toggle
- 📅 Full date display with day name
- 🌍 Automatic timezone detection
- 💾 Saves user preferences in localStorage
- 🎨 Beautiful digital display with animations
- ⚡ Blinking colon separator
- 📱 Fully responsive design
- ✨ Smooth transitions and hover effects

## Files Structure

```
digital-clock/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Clock logic and functionality
└── README.md       # Documentation
```

## How to Use

1. Open `index.html` in a web browser
2. View the current time in real-time
3. Click "Switch to 24-Hour" to toggle between 12-hour and 24-hour formats
4. Click the theme button to switch between dark and light modes
5. Your preferences are automatically saved

## Display Components

### Time Display
- **Hours**: Current hour (00-12 or 00-23)
- **Minutes**: Current minute (00-59)
- **Seconds**: Current second (00-59)
- **Period**: AM/PM (only in 12-hour format)

### Date Display
- **Day Name**: Monday, Tuesday, etc.
- **Full Date**: Month Day, Year (e.g., January 15, 2024)

### Additional Info
- **Timezone**: Automatically detected system timezone

## Time Format Options

### 12-Hour Format
- Hours: 1-12
- Shows AM/PM indicator
- Example: `03:45:22 PM`

### 24-Hour Format
- Hours: 00-23
- No AM/PM indicator
- Example: `15:45:22`

## Technical Implementation

### Real-Time Updates
```javascript
function updateClock() {
  const now = new Date();
  // Get hours, minutes, seconds
  // Update display
}

// Update every second
setInterval(updateClock, 1000);
```

### Time Formatting
```javascript
function padZero(num) {
  return num < 10 ? '0' + num : num;
}

// Convert to 12-hour format
if (!is24HourFormat) {
  period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12
}
```

### Date Formatting
```javascript
const dayNames = ['Sunday', 'Monday', ...];
const monthNames = ['January', 'February', ...];

const dayName = dayNames[date.getDay()];
const month = monthNames[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();
```

### Timezone Detection
```javascript
function updateTimezone() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  timezoneDisplay.textContent = timezone;
}
```

### Preference Persistence
```javascript
// Save preferences
function savePreferences() {
  const preferences = {
    is24HourFormat: is24HourFormat,
    isDarkMode: isDarkMode
  };
  localStorage.setItem('clockPreferences', JSON.stringify(preferences));
}

// Load preferences
function loadPreferences() {
  const saved = localStorage.getItem('clockPreferences');
  if (saved) {
    const preferences = JSON.parse(saved);
    // Apply saved preferences
  }
}
```

## Key Concepts Demonstrated

### 1. Date and Time API
```javascript
const now = new Date();
now.getHours();      // 0-23
now.getMinutes();    // 0-59
now.getSeconds();    // 0-59
now.getDay();        // 0-6 (Sunday-Saturday)
now.getDate();       // 1-31
now.getMonth();      // 0-11
now.getFullYear();   // Full year
```

### 2. setInterval
```javascript
setInterval(updateClock, 1000);
// Executes updateClock every 1000ms (1 second)
```

### 3. String Padding
```javascript
function padZero(num) {
  return num < 10 ? '0' + num : num;
}
// 5 → "05", 15 → "15"
```

### 4. Modulo Operator
```javascript
hours = hours % 12;
// 13 % 12 = 1 (converts 24-hour to 12-hour)
```

### 5. Ternary Operator
```javascript
period = hours >= 12 ? 'PM' : 'AM';
hours = hours ? hours : 12;
```

### 6. CSS Variables
```css
:root {
  --bg-primary: #0f172a;
  --text-primary: #00ff88;
}

body.light-mode {
  --bg-primary: #f1f5f9;
  --text-primary: #0f172a;
}
```

### 7. CSS Animations
```css
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0.3; }
}

.separator {
  animation: blink 1s infinite;
}
```

### 8. LocalStorage
```javascript
// Save
localStorage.setItem('key', JSON.stringify(data));

// Load
const data = JSON.parse(localStorage.getItem('key'));
```

### 9. DOM Manipulation
```javascript
hoursDisplay.textContent = padZero(hours);
periodDisplay.style.display = 'none';
document.body.classList.toggle('light-mode');
```

### 10. Internationalization API
```javascript
Intl.DateTimeFormat().resolvedOptions().timeZone;
// Returns user's timezone (e.g., "America/New_York")
```

## Application Flow

1. **Initialization**
   ```
   Load Preferences → Set Initial Time → Start Interval → Detect Timezone
   ```

2. **Clock Update (Every Second)**
   ```
   Get Current Time → Format Hours/Minutes/Seconds → Update DOM → Format Date
   ```

3. **Format Toggle**
   ```
   Switch Format → Update Button Text → Save Preference → Refresh Display
   ```

4. **Theme Toggle**
   ```
   Toggle Theme → Update CSS Class → Change Button Text → Save Preference
   ```

## Visual Features

### Animations
- **Fade In**: Clock appears smoothly on load
- **Blinking Colon**: Separator blinks every second
- **Digit Pulse**: Subtle glow effect on time digits
- **Hover Effects**: Time segments lift on hover
- **Theme Transition**: Smooth color transitions

### Typography
- **Monospace Font**: Courier New for digital display
- **Letter Spacing**: Enhanced readability
- **Bold Weights**: Clear time display

### Color Schemes

**Dark Mode:**
- Background: Dark slate (#0f172a)
- Text: Neon green (#00ff88)
- Accents: Blue-gray tones

**Light Mode:**
- Background: Light slate (#f1f5f9)
- Text: Dark slate (#0f172a)
- Accents: Gray tones

## Browser Compatibility

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Learning Outcomes

After studying this digital clock, you'll understand:
- JavaScript Date object and methods
- setInterval for periodic updates
- Time format conversion (12-hour ↔ 24-hour)
- String manipulation and padding
- CSS custom properties (variables)
- Theme switching with CSS classes
- LocalStorage for persistence
- Internationalization API
- CSS animations and keyframes
- Responsive design techniques
- DOM updates and manipulation
- Array indexing for day/month names
- Modulo arithmetic for time conversion
- State management in vanilla JavaScript

## Time Conversion Logic

### 24-Hour to 12-Hour
```javascript
// Example: 15:30 (3:30 PM)
let hours = 15;
const period = hours >= 12 ? 'PM' : 'AM';  // "PM"
hours = hours % 12;                         // 3
hours = hours ? hours : 12;                 // 3 (not 0)
// Result: 3:30 PM
```

### Special Cases
- **Midnight (00:00)** → 12:00 AM
- **Noon (12:00)** → 12:00 PM
- **1:00 PM (13:00)** → 1:00 PM
- **11:59 PM (23:59)** → 11:59 PM

## Customization

### Change Colors
```css
:root {
  --text-primary: #ff0088;  /* Change to any color */
}
```

### Add Seconds Toggle
```javascript
let showSeconds = true;

function toggleSeconds() {
  showSeconds = !showSeconds;
  secondsDisplay.style.display = showSeconds ? 'block' : 'none';
}
```

### Add Alarm Feature
```javascript
function setAlarm(targetHour, targetMinute) {
  const now = new Date();
  if (now.getHours() === targetHour && now.getMinutes() === targetMinute) {
    alert('Alarm!');
  }
}
```

### Custom Timezone Display
```javascript
function updateTimezone() {
  const options = { timeZone: 'America/New_York', timeZoneName: 'short' };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  // Display different timezone
}
```

## Performance Considerations

- **Efficient Updates**: Only updates changed elements
- **Single Interval**: One setInterval for entire clock
- **Minimal Repaints**: Direct textContent updates
- **CSS Animations**: GPU-accelerated transitions

## Accessibility

Current features:
- Semantic HTML structure
- High contrast color schemes
- Readable font sizes
- Clear visual hierarchy

Potential improvements:
- ARIA labels for time components
- Screen reader announcements
- Keyboard navigation for controls
- Voice time announcement option

## Future Enhancements

Ideas to extend this project:
- Multiple timezone support
- Alarm and timer functionality
- Stopwatch feature
- Countdown timer
- Date picker for different dates
- Custom color themes
- Sound toggle (tick sound)
- Full-screen mode
- World clock (multiple timezones)
- Analog clock option
- Date format options (DD/MM/YYYY vs MM/DD/YYYY)
- Export time as screenshot
- Screensaver mode
- Weather integration
- Calendar view
- Reminder notifications

## Browser Storage

The clock saves:
- **Time Format**: 12-hour or 24-hour preference
- **Theme**: Dark or light mode preference

Data is stored in `localStorage` and persists across:
- Browser restarts
- Page refreshes
- Different sessions

## Fun Facts

### Why 12 Hours?
The 12-hour clock originated from ancient Egyptians who divided day and night into 12-hour periods based on their duodecimal counting system.

### Midnight Confusion
- 12:00 AM is midnight (start of day)
- 12:00 PM is noon (middle of day)
- This is why 24-hour format is clearer!

### Time Zones
There are 38 different time zones worldwide, ranging from UTC-12 to UTC+14.

## Troubleshooting

**Clock not updating?**
- Check if JavaScript is enabled
- Verify setInterval is running
- Check browser console for errors

**Wrong timezone displayed?**
- Clock uses system timezone
- Verify your computer's time settings

**Preferences not saving?**
- Check if localStorage is enabled
- Some browsers block localStorage in private mode

## License

Free to use for learning and personal projects.

---

Keep track of time in style! ⏰✨