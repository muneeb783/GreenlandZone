# Product Catalogue Setup Instructions

## How to Add Your Catalogue PDF

To enable the downloadable catalogue feature on your Products Landing page, follow these steps:

### Step 1: Prepare Your Catalogue PDF
1. Create or finalize your product catalogue as a PDF file
2. Name it `catalogue.pdf` (or any name you prefer)
3. Recommended file size: Keep it under 10MB for faster downloads

### Step 2: Add the PDF to Your Project
1. Place your PDF file in the `/public` folder:
   ```
   /public/catalogue.pdf
   ```

### Step 3: Update the Download Path (Optional)
If you named your file something other than `catalogue.pdf`, update the path in:

**File:** `/src/pages/ProductsLanding.jsx`

**Line:** ~11 (in the `handleDownloadCatalogue` function)

Change:
```javascript
link.href = '/catalogue.pdf';
```

To:
```javascript
link.href = '/your-filename.pdf';
```

### Step 4: Customize the Download Filename (Optional)
You can also customize what the downloaded file will be named on the user's computer:

**Same file:** `/src/pages/ProductsLanding.jsx`

Change:
```javascript
link.download = 'Greenland-Zone-Product-Catalogue.pdf';
```

To your preferred name:
```javascript
link.download = 'Your-Custom-Name.pdf';
```

## Where the Download Buttons Appear

The catalogue download buttons appear in two locations:

1. **Hero Section**: A prominent glassmorphism-styled button below the main description
2. **CTA Section**: A secondary outlined button next to the "Contact Us" button

## Testing the Download

1. Add your `catalogue.pdf` to the `/public` folder
2. Run your development server: `npm run dev`
3. Navigate to `/products`
4. Click either download button
5. Verify that your PDF downloads correctly

## Troubleshooting

**Button clicks but nothing downloads:**
- Check that the PDF file is in `/public/catalogue.pdf`
- Check browser console for errors
- Verify the file path in `handleDownloadCatalogue` function

**PDF opens in browser instead of downloading:**
- This is normal browser behavior for some browsers
- Users can still save it from the browser viewer

**File size too large:**
- Consider compressing your PDF
- Use online tools like Smallpdf or Adobe Acrobat to reduce file size
