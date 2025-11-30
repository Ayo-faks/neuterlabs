# NeuterLabs Website Revamp - Quick Reference

## 🎯 What Changed

### Messaging (Anthropic-Inspired)
**Old:** "Safe AI for healthcare"
**New:** "AI research and products that put safety at the frontier"

**Mission Statement:**
"AI will have a vast impact on the world. NeuterLabs is dedicated to securing its benefits and mitigating its risks."

### Featured Product: WULO
- Prominent placement in hero section
- Dedicated showcase section with features
- Links to wulo.ai
- Carbon intelligence messaging

## 📁 New Files Created

```
src/components/WuloProduct.tsx          - WULO product showcase
src/components/ResearchPrinciples.tsx   - Research areas & principles
src/lib/structuredData.ts               - SEO schema generation
public/robots.txt                       - Crawler configuration
REVAMP_DOCUMENTATION.md                 - This documentation
REVAMP_QUICK_REFERENCE.md              - Quick reference
```

## ✏️ Files Modified

```
src/app/layout.tsx          - Enhanced SEO metadata
src/app/page.tsx            - New homepage composition
src/components/heropage.tsx - Anthropic-style hero
src/components/intro.tsx    - Mission statement
src/app/sitemap.ts          - Updated priorities
next.config.mjs             - SEO & performance optimizations
```

## 🚀 Development Commands

```bash
# Install dependencies (if needed)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🔍 SEO Checklist

### Before Going Live
- [ ] Replace 'your-google-verification-code' in layout.tsx
- [ ] Create og-image.jpg (1200x630) in public/
- [ ] Create twitter-image.jpg (1200x628) in public/
- [ ] Create logo.png in public/
- [ ] Update Twitter handle (@neuterlabs) if different
- [ ] Verify all URLs point to production domain
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (target: 95+ all categories)

### After Going Live
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify structured data with Google Rich Results Test
- [ ] Test social media sharing (Twitter, LinkedIn, Facebook)
- [ ] Set up Google Analytics 4
- [ ] Monitor Core Web Vitals
- [ ] Check indexed pages after 48 hours

## 📊 Key Metrics Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse SEO | 100 |
| Lighthouse Accessibility | 100 |
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |

## 🎨 Design Tokens

### Colors
- Primary Dark: `neutral-950`
- Primary Light: `white`
- Accent Green: `green-400` / `green-500` / `green-700`
- Gray Scale: `neutral-50` to `neutral-950`

### Typography
- Display Font: Custom font-display
- Body Text: System fonts with antialiasing
- Responsive scales: `text-xl` to `text-7xl`

### Spacing
- Container max-width: Responsive
- Section padding: `py-24 sm:py-32`
- Component gaps: `gap-4` to `gap-8`

## 🔗 Important Links

### Internal
- Homepage: `/`
- About: `/about`
- Work/Portfolio: `/work`
- Blog: `/blog`
- Process: `/process`
- Contact: `/contact`

### External
- WULO Product: https://wulo.ai
- Research anchor: `#research`
- WULO anchor: `#wulo`

## 📱 Responsive Breakpoints

```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

## 🧩 Component Usage

### WuloProduct
```tsx
import WuloProduct from '@/components/WuloProduct'

<WuloProduct />
```

### ResearchPrinciples
```tsx
import ResearchPrinciples from '@/components/ResearchPrinciples'

<ResearchPrinciples />
```

### Structured Data
```tsx
import { generateOrganizationSchema } from '@/lib/structuredData'

const schema = generateOrganizationSchema()
```

## 🐛 Common Issues & Solutions

### Issue: Images not loading from Unsplash
**Solution:** Domain is already added to next.config.mjs. Clear cache and rebuild.

### Issue: Lint warnings about dangerouslySetInnerHTML
**Solution:** These are expected for JSON-LD. Safe to ignore as they're for structured data only.

### Issue: Hydration errors
**Solution:** Check for `suppressHydrationWarning={true}` in body tag (already added).

### Issue: Favicon not showing
**Solution:** Add favicon.ico to public/ directory.

## 📈 Content Guidelines

### Homepage Hero
- Keep headline under 15 words
- Subheading: 20-30 words
- CTA buttons: Clear, action-oriented

### Product Descriptions
- Lead with benefits, not features
- Use customer language
- Include social proof
- Clear CTAs

### Blog Posts
- Focus on AI safety, climate tech, responsible AI
- SEO-optimized titles (60 chars max)
- Meta descriptions (155 chars max)
- Include relevant keywords naturally
- Internal linking strategy

## 🔒 Security Notes

Security headers configured in next.config.mjs:
- HSTS enabled
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- CSP considerations
- Referrer-Policy set

## 📞 Support

### For Design Questions
Review REVAMP_DOCUMENTATION.md sections:
- Design System
- Component Usage
- Typography & Colors

### For SEO Questions
Review REVAMP_DOCUMENTATION.md sections:
- Technical SEO Implementation
- AI SEO Strategy
- Structured Data

### For Development Issues
1. Check Next.js documentation
2. Review component source code
3. Check browser console for errors
4. Verify Node.js version (16+)

## 🎓 Learning Resources

- **Anthropic Website:** Study for design inspiration
- **Next.js Docs:** https://nextjs.org/docs
- **Schema.org:** https://schema.org/
- **Google SEO Guide:** https://developers.google.com/search
- **Core Web Vitals:** https://web.dev/vitals/

---

**Version:** 2.0.0  
**Last Updated:** November 29, 2025  
**Status:** ✅ Ready for Production
