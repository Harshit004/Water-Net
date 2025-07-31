#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Import consultation categories (we'll read the file and parse it)
const consultationCategoriesPath = path.join(__dirname, '../src/data/consultationCategories.ts');
const consultationCategoriesContent = fs.readFileSync(consultationCategoriesPath, 'utf-8');

// Extract routes from consultation categories
function extractConsultationRoutes() {
  const routes = [];
  
  // Static main routes
  const staticRoutes = [
    '/',
    '/about',
    '/blogs',
    '/consultations',
    '/contact',
    '/disclaimer',
    '/doctors',
    '/faq',
    '/privacy',
    '/refund',
    '/shipping',
    '/terms'
  ];
  
  routes.push(...staticRoutes.map(route => ({
    path: route,
    type: 'static',
    priority: route === '/' ? 'high' : 'medium'
  })));

  // Extract consultation categories and subcategories from the file content
  // This is a simplified parser - in a real scenario, you might want to import the actual data
  const categoryMatches = consultationCategoriesContent.match(/href: ['"]([^'"]*)['"]/g);
  
  if (categoryMatches) {
    categoryMatches.forEach(match => {
      const href = match.match(/href: ['"]([^'"]*)['"]/)[1];
      
      // Determine if it's a category or subcategory
      const pathParts = href.split('/').filter(Boolean);
      const isSubcategory = pathParts.length > 2; // /consultations/category/subcategory
      
      routes.push({
        path: href,
        type: isSubcategory ? 'consultation-subcategory' : 'consultation-category',
        priority: 'medium',
        category: isSubcategory ? pathParts[1] : null,
        subcategory: isSubcategory ? pathParts[2] : null
      });
    });
  }

  return routes;
}

// Generate the route manifest
function generateRouteManifest() {
  const routes = extractConsultationRoutes();
  
  const manifest = {
    generated: new Date().toISOString(),
    version: '1.0.0',
    total_routes: routes.length,
    routes: routes,
    categories: {
      static: routes.filter(r => r.type === 'static').length,
      'consultation-category': routes.filter(r => r.type === 'consultation-category').length,
      'consultation-subcategory': routes.filter(r => r.type === 'consultation-subcategory').length
    },
    testing: {
      smoke_test_routes: routes.filter(r => r.priority === 'high' || r.type === 'consultation-category'),
      regression_test_routes: routes
    }
  };

  return manifest;
}

// Main execution
function main() {
  try {
    const manifest = generateRouteManifest();
    
    // Create output directory if it doesn't exist
    const outputDir = path.join(__dirname, '../tests/fixtures');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write the manifest file
    const outputPath = path.join(outputDir, 'route-manifest.json');
    fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));
    
    console.log(`✅ Route manifest generated successfully!`);
    console.log(`📄 File: ${outputPath}`);
    console.log(`📊 Total routes: ${manifest.total_routes}`);
    console.log(`📊 Categories breakdown:`);
    Object.entries(manifest.categories).forEach(([type, count]) => {
      console.log(`   - ${type}: ${count}`);
    });
    console.log(`🧪 Smoke test routes: ${manifest.testing.smoke_test_routes.length}`);
    
    return manifest;
  } catch (error) {
    console.error('❌ Error generating route manifest:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { generateRouteManifest, extractConsultationRoutes };
