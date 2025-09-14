# Contact Page Setup Guide

## Overview
The contact page has been successfully created with Resend email integration, matching the existing UI theme with dark backgrounds, gradients, and modern animations.

## Features Implemented

### 🎨 UI/UX
- **Consistent Theme**: Matches the existing dark theme with gradients and animations
- **Responsive Design**: Works on all device sizes
- **Interactive Elements**: Hover effects, animations, and form feedback
- **Background Effects**: Animated gradients and edge glows
- **Form Validation**: Real-time validation with error messages

### 📧 Email Integration
- **Resend Service**: Professional email sending
- **Admin Notifications**: Sends form submissions to admin email
- **Auto-Reply**: Sends confirmation email to users
- **HTML Templates**: Beautiful email templates with branding

### 🔧 Technical Features
- **Form Validation**: Using react-hook-form and zod
- **API Route**: Next.js API route for handling submissions
- **Error Handling**: Comprehensive error handling and user feedback
- **Loading States**: Visual feedback during form submission

## Setup Instructions

### 1. Get Resend API Key
1. Go to [Resend.com](https://resend.com)
2. Create an account or sign in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables
Update the `.env.local` file with your actual Resend API key:

```env
# Replace with your actual Resend API key
RESEND_API_KEY=re_your_actual_api_key_here

# Update with your contact email
CONTACT_EMAIL=hello@adquora.com
```

### 3. Domain Configuration (For Production)
To send emails from your domain:
1. Add your domain in Resend dashboard
2. Configure DNS records as instructed by Resend
3. Verify domain ownership
4. Update the 'from' email addresses in `/src/app/api/contact/route.js`

### 4. Test the Contact Form
1. Start the development server: `npm run dev`
2. Navigate to `/Contact` route
3. Fill out the form and submit
4. Check both admin email and user auto-reply

## File Structure

```
src/
├── app/
│   ├── Contact/
│   │   └── Page.jsx          # Main contact page component
│   └── api/
│       └── contact/
│           └── route.js      # API endpoint for form submissions
├── components/
│   └── ui/                   # Existing UI components used
└── lib/
    └── utils.js             # Utility functions
```

## Contact Form Fields

- **Name** (required): User's full name
- **Email** (required): User's email address
- **Company** (optional): User's company name
- **Subject** (required): Message subject
- **Message** (required): Detailed message

## Email Templates

### Admin Notification Email
- Professional HTML template
- Includes all form data
- Reply-to set to user's email
- Timestamp included

### User Auto-Reply
- Welcome message with branding
- Confirmation of message receipt
- Summary of submitted information
- Call-to-action to visit website

## Customization

### Styling
The component uses:
- Tailwind CSS for styling
- Framer Motion for animations
- Custom gradients matching the theme
- Responsive design patterns

### Form Validation
Validation rules can be modified in the `contactSchema` object:
```javascript
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  // ... other fields
});
```

### Email Content
Email templates can be customized in `/src/app/api/contact/route.js`:
- Update HTML content
- Modify styling
- Add branding elements
- Change recipient emails

## Production Considerations

1. **Rate Limiting**: Consider adding rate limiting to prevent spam
2. **CAPTCHA**: Add reCAPTCHA for additional security
3. **Monitoring**: Set up email delivery monitoring
4. **Backup**: Configure backup email service
5. **Analytics**: Track form submission success rates

## Troubleshooting

### Common Issues

1. **Email not sending**
   - Check API key in environment variables
   - Verify domain configuration in Resend
   - Check console for error messages

2. **Form validation errors**
   - Ensure all required fields are filled
   - Check email format validation
   - Verify minimum character requirements

3. **Styling issues**
   - Ensure Tailwind CSS is properly configured
   - Check for missing UI component imports
   - Verify Framer Motion installation

## Support

For additional help:
- Check Resend documentation: [docs.resend.com](https://resend.com/docs)
- Review Next.js API routes: [nextjs.org/docs/api-routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- Contact form best practices and security guidelines

---

The contact page is now fully functional and ready for production use with proper environment configuration.