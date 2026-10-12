import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Grid3X3, List, X, ArrowUpDown } from 'lucide-react';
import { Product } from '../types/store.js';
import { siteConfig } from '../data/site.js';
import { ProductCard } from './ProductCard.js';
import { ImageWithFallback } from './ImageWithFallback.js';

interface ProductGridProps {
  initialCategory?: string; // e.g. 'all' | 'quill-organics' | etc.
  title?: string;
  subtitle?: string;
  productsList: Product[];
  hideCategoryFilter?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  initialCategory = 'all',
  title = 'Our Master Catalog',
  subtitle = 'Discover pure organic superfoods, gourmet baking chocolates, and cold-pressed wellness oils.',
  productsList,
  hideCategoryFilter = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTag, setSelectedTag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [maxPrice, setMaxPrice] = useState(3000);

  // Available tags
  const tags = useMemo(() => {
    const set = new Set<string>();
    productsList.forEach((p) => p.tags?.forEach((t) => set.add(t)));
    return ['all', ...Array.from(set).slice(0, 7)];
  }, [productsList]);

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    return productsList
      .filter((p) => {
        // Category filter
        if (selectedCategory !== 'all' && p.categorySlug !== selectedCategory) {
          return false;
        }
        // Tag filter
        if (selectedTag !== 'all' && !p.tags?.includes(selectedTag)) {
          return false;
        }
        // Price filter
        if (p.price > maxPrice) {
          return false;
        }
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchDesc = p.shortDescription.toLowerCase().includes(q);
          const matchCat = p.category.toLowerCase().includes(q);
          if (!matchName && !matchDesc && !matchCat) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured
      });
  }, [productsList, selectedCategory, selectedTag, maxPrice, searchQuery, sortBy]);

  return (
    <div className="space-y-8">
      {/* Title & Stats */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-neutral-900 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-stone-500 mt-1 max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
        <div className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1.5 rounded-full self-start md:self-auto">
          Showing <strong>{filteredProducts.length}</strong> of <strong>{productsList.length}</strong> Products
        </div>
      </div>

      {/* Control Bar: Filters, Search, Sort & View Modes */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
        {/* Row 1: Search & Sort & View toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Live Search Input */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by product name, ingredient..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-8 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-stone-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort products"
                className="text-xs font-semibold py-2 px-3 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Customer Rating</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center border border-stone-200 rounded-xl overflow-hidden bg-stone-50 p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-xs text-neutral-900' : 'text-stone-400 hover:text-stone-700'}`}
                title="Grid View"
                aria-label="Grid View"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-xs text-neutral-900' : 'text-stone-400 hover:text-stone-700'}`}
                title="List View"
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Categories Pills (if not hidden) */}
        {!hideCategoryFilter && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 border-t border-stone-100">
            <span className="text-[11px] font-mono text-stone-400 shrink-0 uppercase tracking-wider mr-1">
              Atelier:
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-colors shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              All Categories ({productsList.length})
            </button>
            {siteConfig.categories.map((c) => {
              const count = productsList.filter((p) => p.categorySlug === c.slug).length;
              return (
                <button
                  key={c.slug}
                  onClick={() => setSelectedCategory(c.slug)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-colors shrink-0 ${
                    selectedCategory === c.slug
                      ? 'bg-neutral-900 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {c.name.split(' ')[0]} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Row 3: Tag Chips & Max Price Slider */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-stone-100 text-xs">
          {/* Tag Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-[11px] font-mono text-stone-400 shrink-0 uppercase tracking-wider mr-1">
              Filter:
            </span>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`text-[11px] px-2.5 py-1 rounded-lg capitalize transition-colors shrink-0 ${
                  selectedTag === t
                    ? 'bg-amber-100 text-amber-900 font-bold border border-amber-300'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200/60'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Price Range Slider */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[11px] font-mono text-stone-500">
              Max: <strong>{siteConfig.currency} {maxPrice.toLocaleString()}</strong>
            </span>
            <input
              type="range"
              min={250}
              max={3000}
              step={50}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="accent-neutral-900 h-1.5 bg-stone-200 rounded-lg cursor-pointer w-28"
            />
          </div>
        </div>
      </div>

      {/* Products Grid or Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center space-y-4 bg-white rounded-3xl border border-dashed border-stone-300">
          <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
            <Search className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-base font-bold text-neutral-800">No matching pantry items found</h3>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search keywords, price filter, or switching to "All Categories".
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedTag('all');
              setSearchQuery('');
              setMaxPrice(3000);
            }}
            className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* List View */
        <div className="space-y-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-neutral-900 transition-colors flex flex-col sm:flex-row items-center gap-4 justify-between"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shrink-0">
                  <ImageWithFallback
                    src={product.images[0]?.url}
                    fallback={product.images[0]?.fallback}
                    alt={product.name}
                    aspectRatioClass="h-full w-full"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">
                    {product.category}
                  </span>
                  <h4 className="text-sm font-bold text-neutral-900">{product.name}</h4>
                  <p className="text-xs text-stone-500 line-clamp-1 max-w-md mt-0.5">
                    {product.shortDescription}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                <div className="text-right">
                  <span className="text-sm font-extrabold text-neutral-900">
                    {siteConfig.currency} {product.price.toLocaleString()}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-xs text-stone-400 line-through block">
                      {siteConfig.currency} {product.compareAtPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
