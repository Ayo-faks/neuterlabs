# 🚀 Pre-Launch Checklist for NeuterLabs Website

## ⚡ Critical Tasks (Must Complete Before Launch)

### Assets & Images
- [ ] **Add favicon.ico** to `/public/` directory
  - Size: 32x32px or 64x64px
  - Format: ICO or PNG
  - Recommended tool: https://favicon.io/

- [ ] **Create Open Graph image** at `/public/og-image.jpg`
  - Size: 1200 x 630 pixels
  - Format: JPG or PNG
  - Include: NeuterLabs logo, tagline "AI research and products that put safety at the frontier"
  - Tools: Canva, Figma, or Adobe Express

- [ ] **Create Twitter Card image** at `/public/twitter-image.jpg`
  - Size: 1200 x 628 pixels
  - Format: JPG or PNG
  - Similar design to OG image
  - Test with: https://cards-dev.twitter.com/validator

- [ ] **Add company logo** at `/public/logo.png`
  - Size: 512 x 512 pixels (transparent background)
  - Format: PNG
  - Used in structured data

### SEO Configuration
- [ ] **Update Google verification code**
  - File: `src/app/layout.tsx`
  - Line: 49
  - Replace: 'your-google-verification-code'
  - Get code from: https://search.google.com/search-console

- [ ] **Verify social media handles**
  - File: `src/lib/structuredData.ts`
  - Update Twitter handle if not @neuterlabs
  - Update LinkedIn URL
  - Update GitHub URL

- [ ] **Confirm production URLs**
  - Search for 'neuterlabs.com' in all files
  - Ensure no localhost URLs remain
  - Check all absolute links

### Build & Test
- [ ] **Run production build**
  ```bash
  npm run build
  ```
  - Should complete without errors
  - Check bundle sizes are reasonable

- [ ] **Test locally in production mode**
  ```bash
  npm start
  ```
  - Browse all pages
  - Test on mobile viewport
  - Check console for errors

- [ ] **Run Lighthouse audit**
  - Open Chrome DevTools
  - Navigate to Lighthouse tab
  - Run audit on homepage
  - Target: 95+ on all metrics

---

## 🔍 Important Tasks (Complete Within 24 Hours)

### Search Engine Setup
- [ ] **Google Search Console**
  - Add property: https://neuterlabs.com
  - Verify ownership (meta tag already in layout.tsx)
  - Submit sitemap: https://neuterlabs.com/sitemap.xml
  - Request indexing for homepage

- [ ] **Bing Webmaster Tools**
  - Add site: https://neuterlabs.com
  - Submit sitemap: https://neuterlabs.com/sitemap.xml
  - Verify robots.txt accessible

- [ ] **Google Analytics 4**
  - Create GA4 property
  - Add tracking code to layout.tsx
  - Test data collection
  - Set up conversion events

### Testing & Validation
- [ ] **Structured Data Testing**
  - URL: https://search.google.com/test/rich-results
  - Test homepage URL
  - Verify Organization, Product, and Website schemas
  - Fix any errors

- [ ] **Social Media Sharing**
  - Test Twitter share: https://cards-dev.twitter.com/validator
  - Test LinkedIn share (post and check preview)
  - Test Facebook share: https://developers.facebook.com/tools/debug/
  - Verify images and text appear correctly

- [ ] **Mobile Testing**
  - Test on iPhone Safari
  - Test on Android Chrome
  - Use Chrome DevTools mobile emulation
  - Check responsive breakpoints

- [ ] **Cross-Browser Testing**
  - Chrome (latest)
  - Firefox (latest)
  - Safari (latest)
  - Edge (latest)

---

## 📊 Recommended Tasks (Complete Within First Week)

### Analytics & Monitoring
- [ ] **Set up Google Tag Manager**
  - Create container
  - Add GTM snippet
  - Configure tags for events

- [ ] **Configure Search Console Goals**
  - Demo requests
  - Contact form submissions
  - Newsletter signups
  - WULO link clicks

- [ ] **Set up Hotjar or similar**
  - Add tracking script
  - Configure heatmaps
  - Set up recordings
  - Create feedback polls

- [ ] **SEO Monitoring Tools**
  - Ahrefs or SEMrush setup
  - Add domain
  - Start keyword tracking
  - Set up backlink monitoring

### Performance Monitoring
- [ ] **Set up Vercel Analytics** (if deploying to Vercel)
  - Enable Web Vitals monitoring
  - Track Core Web Vitals
  - Set up alerts

- [ ] **Configure Sentry** (optional, for error tracking)
  - Create project
  - Add DSN to environment variables
  - Test error reporting

### Content & Marketing
- [ ] **Prepare launch announcement**
  - LinkedIn post
  - Twitter thread
  - Email to existing contacts
  - Press release (if applicable)

- [ ] **Create launch content**
  - Blog post: "Introducing the New NeuterLabs"
  - Case study: WULO success story
  - Team behind the scenes

- [ ] **Set up email newsletter**
  - Choose platform (Mailchimp, ConvertKit, etc.)
  - Create signup form
  - Add to website
  - Prepare welcome email

---

## 🔐 Security Checklist

### SSL & HTTPS
- [ ] SSL certificate installed
- [ ] HTTPS enforced (redirects from HTTP)
- [ ] Mixed content warnings resolved
- [ ] HSTS headers configured (already in next.config.mjs)

### Environment Variables
- [ ] No API keys in code
- [ ] .env.local configured
- [ ] Production env vars set on hosting platform
- [ ] Secrets properly stored

### Security Headers
- [ ] Security headers active (already in next.config.mjs)
- [ ] Test with: https://securityheaders.com/
- [ ] CSP configured if needed
- [ ] CORS properly configured

---

## 📱 Accessibility Checklist

### Testing
- [ ] **Run WAVE accessibility check**
  - URL: https://wave.webaim.org/
  - Fix any errors
  - Review warnings

- [ ] **Test with screen reader**
  - macOS VoiceOver
  - Windows NVDA
  - Verify navigation
  - Check announcements

- [ ] **Keyboard navigation**
  - Tab through all interactive elements
  - Verify focus indicators visible
  - Check skip links work
  - Test form submission

### WCAG 2.1 AA Compliance
- [ ] Color contrast ratio ≥ 4.5:1 for normal text
- [ ] Color contrast ratio ≥ 3:1 for large text
- [ ] All images have alt text
- [ ] Forms have proper labels
- [ ] Link text is descriptive

---

## 📈 Performance Checklist

### Core Web Vitals
- [ ] **LCP (Largest Contentful Paint)** < 2.5s
  - Test: PageSpeed Insights
  - Optimize hero image if needed
  - Check font loading

- [ ] **FID (First Input Delay)** < 100ms
  - Minimize JavaScript
  - Defer non-critical scripts
  - Use requestIdleCallback

- [ ] **CLS (Cumulative Layout Shift)** < 0.1
  - Reserve space for images
  - Avoid inserting content above fold
  - Use aspect ratios

### Optimization
- [ ] Images optimized and compressed
- [ ] Fonts subseted and optimized
- [ ] JavaScript code-split
- [ ] CSS minified
- [ ] Gzip/Brotli compression enabled

---

## 🎯 Post-Launch Tasks (First 30 Days)

### Week 1
- [ ] Monitor Google Search Console for errors
- [ ] Check Analytics for traffic patterns
- [ ] Review Core Web Vitals daily
- [ ] Fix any reported issues
- [ ] Respond to user feedback

### Week 2
- [ ] Review SEO rankings
- [ ] Analyze user behavior (Hotjar)
- [ ] Optimize underperforming pages
- [ ] Create additional content
- [ ] Build backlinks

### Week 3-4
- [ ] Monthly analytics report
- [ ] SEO performance review
- [ ] Content calendar for next month
- [ ] Competitor analysis
- [ ] Plan improvements

---

## ✅ Sign-Off Checklist

Before marking as complete, verify:

- [ ] All critical tasks completed
- [ ] Build succeeds without errors
- [ ] All pages load correctly
- [ ] Mobile responsiveness verified
- [ ] SEO tools configured
- [ ] Analytics tracking works
- [ ] Social sharing works
- [ ] Performance meets targets
- [ ] Accessibility standards met
- [ ] Security headers active
- [ ] Backup created
- [ ] Team trained on updates

---

## 🚨 Troubleshooting Common Issues

### Build Fails
- Check Node.js version (should be 16+)
- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Check for TypeScript errors

### Images Not Loading
- Verify image paths are correct
- Check `next.config.mjs` domains list
- Clear browser cache
- Check file permissions

### SEO Not Working
- Allow 48-72 hours for indexing
- Check robots.txt allows crawling
- Verify sitemap.xml accessible
- Use "Request Indexing" in Search Console

### Performance Issues
- Check image sizes (compress if needed)
- Review JavaScript bundle size
- Enable CDN if available
- Consider lazy loading

---

## 📞 Need Help?

### Documentation
- REVAMP_SUMMARY.md - Overview
- REVAMP_DOCUMENTATION.md - Technical details
- REVAMP_QUICK_REFERENCE.md - Quick tips

### Resources
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Google Search Central: https://developers.google.com/search

### Testing Tools
- Lighthouse: Chrome DevTools
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/

---

## 🎉 Ready to Launch?

Once all critical tasks are complete:

1. ✅ Make final backup
2. ✅ Run production build
3. ✅ Deploy to hosting
4. ✅ Test live site
5. ✅ Submit to search engines
6. ✅ Announce on social media
7. ✅ Monitor closely for 48 hours

**Good luck with your launch! 🚀**

---

**Last Updated:** November 29, 2025  
**Version:** 2.0.0  
**Status:** Production Ready ✅
