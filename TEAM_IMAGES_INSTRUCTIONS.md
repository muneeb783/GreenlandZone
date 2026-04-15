# Our Team Page - Image Setup Instructions

## How to Add Your Own Images

The "Our Team" page currently uses placeholder images from Unsplash. Follow these steps to add your actual project photos:

### Option 1: Using Local Images (Recommended)

1. **Organize Your Images**
   - Create a folder: `/src/assets/team/` or `/public/team/`
   - Name your images descriptively (e.g., `lahore-dairy-installation.jpg`)
   - Recommended image size: 1200x900px (4:3 aspect ratio)
   - Keep file sizes under 500KB for fast loading

2. **Update the Code**
   - Open: `/src/pages/OurTeam.jsx`
   - Find the `galleryItems` array (around line 10)
   - Import your images at the top of the file:
   ```javascript
   import lahoreDairy from '../assets/team/lahore-dairy-installation.jpg';
   import sahiwalForage from '../assets/team/sahiwal-forage-setup.jpg';
   // ... etc
   ```
   - Replace the image URLs:
   ```javascript
   {
     id: 1,
     image: lahoreDairy,  // Changed from Unsplash URL
     title: 'Dairy Farm Installation - Lahore',
     // ... rest of the data
   }
   ```

### Option 2: Using External URLs

If you have images hosted elsewhere (cloud storage, CDN, etc.):
1. Simply replace the Unsplash URLs with your image URLs
2. No need to import anything

Example:
```javascript
{
  id: 1,
  image: 'https://yourdomain.com/images/project1.jpg',
  title: 'Your Project Title',
  // ...
}
```

## Current Gallery Structure

The page has 9 gallery items by default. You can:
- **Add more items**: Copy an existing item object and modify it
- **Remove items**: Delete unwanted items from the array
- **Reorder items**: Rearrange the array items

## Customizing Project Information

For each gallery item, update:

```javascript
{
  id: 1,  // Unique number
  image: 'path/to/image.jpg',
  title: 'Project Name',
  location: 'City, Province',
  date: 'Month Year',
  description: 'Brief description of what was done at this project'
}
```

## Image Best Practices

1. **Aspect Ratio**: Keep images at 4:3 ratio (1200x900, 1600x1200, etc.)
2. **File Format**: Use JPG for photos, PNG for images with transparency
3. **Compression**: Compress images before adding them
4. **Naming**: Use descriptive names without spaces (use hyphens instead)

## Statistics in Hero Section

Update the stats in `/src/pages/OurTeam.jsx` (around line 72):

```javascript
<div className="ourteam-stat-number">500+</div>  // Update this number
<div className="ourteam-stat-label">Projects Completed</div>
```

Change to your actual numbers:
- Projects Completed
- Districts Covered
- Years Experience

## Testing Your Changes

1. Add your images to the appropriate folder
2. Update the imports and image paths
3. Run: `npm run dev`
4. Navigate to: `http://localhost:5173/team`
5. Click on images to test the modal view

## Troubleshooting

**Images not loading:**
- Check file paths are correct
- Verify images are in the right folder
- Check for typos in filenames

**Images look distorted:**
- Ensure images maintain 4:3 aspect ratio
- Use image editing software to crop properly

**Page loads slowly:**
- Compress images (use tools like TinyPNG or Squoosh)
- Target file size under 500KB per image
