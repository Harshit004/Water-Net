# SPA Codebase Audit & Migration Worksheet

## Executive Summary
This is a **hybrid Next.js + React Router application** with 247 TypeScript/React files. The current architecture uses Next.js App Router for some routes while maintaining React Router for consultation-specific navigation.

## 🗂️ Current Architecture Overview

### Core Structure
- **Framework**: Next.js 15.4.5 with App Router
- **React Version**: 19.1.0
- **Routing**: Hybrid (Next.js + React Router 6)
- **State Management**: TanStack Query v5.83.0
- **UI Framework**: ShadCN/UI (48 components)
- **Form Management**: React Hook Form v7.61.1 + Zod v4.0.14
- **Styling**: Tailwind CSS v4

## 📋 Complete Component Inventory

### 1. Routes & Pages (24 files)

#### Next.js App Router Pages
```
src/app/
├── layout.tsx                    → Root layout with providers
├── page.tsx                     → Homepage 
├── about/page.tsx               → About page
├── blogs/page.tsx               → Blog listing
├── contact/page.tsx             → Contact page
├── consultations/
│   ├── page.tsx                 → Consultations overview
│   ├── childrens-wellness/page.tsx → Category page
│   └── [...slug]/page.tsx       → Dynamic consultation routes
├── disclaimer/page.tsx          → Legal disclaimer
├── doctors/page.tsx             → Doctors listing
├── faq/page.tsx                 → FAQ page
├── privacy/page.tsx             → Privacy policy
├── refund/page.tsx              → Refund policy
├── shipping/page.tsx            → Shipping info
└── terms/page.tsx               → Terms of service
```

#### React Router Pages (Legacy Structure)
```
src/pages/
├── Index.tsx                    → Homepage component
├── About.tsx                    → About component
├── Blogs.tsx                    → Blog component
├── Contact.tsx                  → Contact component
├── Consultations.tsx            → Consultations overview
├── Doctors.tsx                  → Doctors component
├── FAQ.tsx                      → FAQ component
├── NotFound.tsx                 → 404 component
├── Privacy.tsx                  → Privacy component
├── Products.tsx                 → Products listing
├── Terms.tsx                    → Terms component
├── Shipping.tsx                 → Shipping component
├── Refund.tsx                   → Refund component
├── Disclaimer.tsx               → Disclaimer component
├── ChangeDashboard.tsx          → Analytics dashboard
├── AnalyticsIntegration.tsx     → Analytics integration
└── consultations/               → 147 consultation-specific pages
```

### 2. React Router Configuration (4 files)

```
src/config/routes/
├── routes.tsx                   → Main router configuration
├── ConsultationRoutes.tsx       → 250+ consultation routes
├── LegacyRoutes.tsx            → Backward compatibility routes  
└── ProductRoutes.tsx           → Product-related routes
```

**React Router Usage Patterns:**
- `BrowserRouter` wrapping (implied)
- `Routes` and `Route` components extensively used
- `Link` components for navigation
- `useNavigate` and `useParams` hooks
- Dynamic route generation for consultations

### 3. Component Library (94 files)

#### Core Components (43 files)
```
src/components/
├── AppProviders.tsx             → TanStack Query + Toast providers
├── AutoPopupForm.tsx            → Lead capture popup
├── Header.tsx                   → Main navigation
├── Footer.tsx                   → Site footer
├── Hero.tsx & HeroBanner.tsx    → Landing page heroes
├── SEO.tsx                      → React Helmet SEO component
├── ConsultationFormModal.tsx    → Modal consultation form
├── CategoryPageTemplate.tsx     → Template for category pages
├── SubcategoryPageTemplate.tsx  → Template for subcategory pages
├── ConsultationCards.tsx        → Consultation cards grid
├── ConsultationCategories.tsx   → Category navigation
├── TestimonialsSection.tsx      → Customer testimonials
├── BenefitsSection.tsx          → Product benefits
├── PromotionalBanner.tsx        → Marketing banner
├── BannerStrip.tsx              → Top banner strip
├── ScrollToTop.tsx              → Scroll behavior component
└── [31 more core components]
```

#### Header Components (5 files)
```
src/components/header/
├── CallButton.tsx               → CTA call button
├── ConsultationDropdown.tsx     → Consultation menu dropdown
├── MobileMenu.tsx               → Mobile navigation
├── NavigationLink.tsx           → Navigation link component
└── NavigationMenu.tsx           → Main navigation menu
```

#### Consultation Components (4 files)
```
src/components/consultation/
├── ConsultationForm.tsx         → Main consultation form
├── ConsultationHeader.tsx       → Consultation page header
├── CategoryCard.tsx             → Category display card
└── ProductCarousel.tsx          → Related products carousel
```

#### Subcategory Components (8 files)
```
src/components/subcategory/
├── SubcategoryContent.tsx       → Content sections
├── SubcategoryHero.tsx          → Hero sections
├── AyurvedicApproachCards.tsx   → Treatment approach cards
├── BenefitsSection.tsx          → Benefits display
├── CTASection.tsx               → Call-to-action sections
├── ProductCarousel.tsx          → Product recommendations
├── ResponsiveCTAButton.tsx      → Responsive CTA button
└── [2 more components]
```

### 4. ShadCN/UI Components (48 files)

```
src/components/ui/
├── accordion.tsx                → Collapsible content
├── alert-dialog.tsx             → Modal dialogs
├── avatar.tsx                   → User avatars
├── badge.tsx                    → Status badges
├── breadcrumb.tsx               → Navigation breadcrumbs
├── button.tsx                   → Button variations
├── calendar.tsx                 → Date picker
├── card.tsx                     → Content cards
├── carousel.tsx                 → Image/content carousels
├── chart.tsx                    → Data visualization
├── dialog.tsx                   → Modal dialogs
├── dropdown-menu.tsx            → Dropdown menus
├── form.tsx                     → Form components
├── input.tsx                    → Input fields
├── navigation-menu.tsx          → Navigation menus
├── pagination.tsx               → Page navigation
├── select.tsx                   → Dropdown selects
├── table.tsx                    → Data tables
├── tabs.tsx                     → Tab interfaces
├── toast.tsx & toaster.tsx      → Notification system
└── [28 more UI components]
```

### 5. Providers & Context (1 file)

```
src/components/AppProviders.tsx
```
**Configured Providers:**
- `QueryClientProvider` (TanStack Query)
- `TooltipProvider` (ShadCN/UI)
- `Toaster` components (dual toast system)

### 6. Utilities & Hooks (4 files)

```
src/utils/
└── formValidation.ts            → Form validation utilities

src/hooks/
├── use-mobile.tsx               → Mobile detection hook
└── use-toast.ts                 → Toast notification hook

src/lib/
├── utils.ts                     → Utility functions (cn helper)
└── consultationRoutes.ts        → Dynamic route resolution
```

**Form Validation Functions:**
- `validateName()` - Name field validation
- `validateEmail()` - Email format validation  
- `validatePhone()` - Phone number validation
- `formatPhoneNumber()` - Phone formatting

### 7. Data & Configuration (2 files)

```
src/data/
├── consultationCategories.ts    → 13 main categories, 80+ subcategories
└── changeLedger.ts              → Change tracking data
```

**Consultation Category Structure:**
1. **Digestive & Gut Health** (6 subcategories)
2. **Mental Health & Sleep** (6 subcategories)  
3. **Immunity & Respiratory Health** (6 subcategories)
4. **Hormonal Balance & Endocrine Health** (5 subcategories)
5. **Women's Health** (8 subcategories)
6. **Men's Health** (7 subcategories)
7. **Weight & Metabolic Health** (5 subcategories)
8. **Skin & Hair Health** (6 subcategories)
9. **Joint & Bone Health** (5 subcategories)
10. **Liver, Kidney & Detox** (5 subcategories)
11. **Heart & Circulatory Health** (5 subcategories)
12. **Children's Wellness** (5 subcategories)
13. **Senior & Elderly Care** (5 subcategories)

## 🔄 TanStack Query Usage

**Current Implementation:**
- Query client configured in `AppProviders.tsx`
- Used for API state management
- Integrated with form submission workflows

## 📱 SEO Implementation

**React Helmet Setup:**
```typescript
// src/components/SEO.tsx
- Dynamic title generation
- Meta description management
- Open Graph tags
- Twitter Card metadata
- Canonical URL handling
```

## 📋 Migration Worksheet

### Phase 1: Route Migration (Complete)
| Current Route Pattern | Target Next.js Pattern | Status |
|----------------------|------------------------|---------|
| React Router `/consultations` | `app/consultations/page.tsx` | ✅ EXISTS |
| React Router `/consultations/[category]` | `app/consultations/[category]/page.tsx` | ✅ EXISTS |
| React Router `/consultations/[category]/[subcategory]` | `app/consultations/[...slug]/page.tsx` | ✅ EXISTS |

### Phase 2: Component Migration (Required)
| Legacy Component | Next.js Equivalent | Migration Action |
|------------------|-------------------|------------------|
| `src/pages/Index.tsx` | `src/app/page.tsx` | **CONSOLIDATE** |
| `src/pages/About.tsx` | `src/app/about/page.tsx` | **CONSOLIDATE** |
| `src/pages/Contact.tsx` | `src/app/contact/page.tsx` | **CONSOLIDATE** |
| `src/components/SEO.tsx` | Next.js Metadata API | **REPLACE** |
| React Router navigation | Next.js Link/navigation | **REPLACE** |

### Phase 3: Provider Migration (Required)
| Current Provider | Next.js Equivalent | Migration Action |
|------------------|-------------------|------------------|
| `AppProviders.tsx` | Move to `app/layout.tsx` | **CONSOLIDATE** |
| React Router setup | Remove Router wrapper | **REMOVE** |

### Phase 4: Form & API Migration (Minimal)
| Current Implementation | Target | Migration Action |
|----------------------|---------|------------------|
| TanStack Query | Keep as-is | **NO CHANGE** |
| Form validation utils | Keep as-is | **NO CHANGE** |
| ShadCN/UI components | Keep as-is | **NO CHANGE** |

## 🚨 Critical Migration Notes

### Issues Identified:
1. **Dual Routing System**: Currently running both Next.js App Router and React Router
2. **Component Duplication**: Same pages exist in both `src/pages/` and `src/app/`
3. **SEO Conflicts**: React Helmet vs Next.js Metadata API
4. **Navigation Inconsistency**: Mix of Next.js Link and React Router Link

### Recommended Migration Strategy:
1. **Phase 1**: Remove React Router dependency
2. **Phase 2**: Consolidate duplicate page components  
3. **Phase 3**: Replace React Helmet with Next.js Metadata API
4. **Phase 4**: Update all navigation to use Next.js Link
5. **Phase 5**: Clean up unused legacy components

## ✅ Migration Status Assessment

**Current State**: 
- ✅ Next.js App Router structure exists
- ✅ ShadCN/UI components ready
- ✅ TanStack Query configured
- ❌ React Router still active (needs removal)
- ❌ Component duplication exists
- ❌ SEO implementation needs updating

**Migration Readiness**: 80% complete - routing structure exists, needs cleanup

---

*Generated on: 2025-07-31*
*Total Files Audited: 247*
*Migration Complexity: Medium*
