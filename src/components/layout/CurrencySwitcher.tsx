import { useState, useEffect, useMemo } from 'react';
import { useCurrencyStore, CurrencyCode } from '@/store/currencyStore';
import { CURRENCY_CONFIG } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown, Globe, Search, X } from 'lucide-react';

export const CurrencySwitcher = () => {
  const { currentCurrency, setCurrency, fetchRates, exchangeRates } = useCurrencyStore();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  const handleCurrencyChange = (code: CurrencyCode) => {
    setCurrency(code);
    setSearchQuery('');
  };

  const filteredCurrencies = useMemo(() => {
    return (Object.keys(CURRENCY_CONFIG) as CurrencyCode[]).filter(code => {
      const config = CURRENCY_CONFIG[code];
      return (
        code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        config.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

  const selectedCurrency = CURRENCY_CONFIG[currentCurrency];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-9 px-3 gap-2 text-cream/70 hover:text-cream hover:bg-white/10 rounded-full transition-all border border-white/5"
        >
          <span className="text-sm">{selectedCurrency.flag}</span>
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
            {currentCurrency}
          </span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-charcoal/95 border-white/10 backdrop-blur-xl rounded-xl p-1 min-w-[200px] max-h-[400px] flex flex-col overflow-hidden"
      >
        <div className="p-2 sticky top-0 bg-charcoal/95 z-10 border-b border-white/5 mb-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-cream/30" />
            <input
              type="text"
              placeholder="Search currency..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-1.5 pl-8 pr-8 text-xs text-cream placeholder:text-cream/20 focus:outline-none focus:border-champagne/50 transition-all"
              autoFocus
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-cream/30 hover:text-cream"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>
        
        <div className="overflow-y-auto custom-scrollbar flex-1 pb-1">
          {filteredCurrencies.length > 0 ? (
            filteredCurrencies.map((code) => (
              <DropdownMenuItem
                key={code}
                onClick={() => handleCurrencyChange(code)}
                className={`flex items-center gap-3 px-3 py-2 text-xs rounded-lg cursor-pointer transition-colors ${
                  currentCurrency === code 
                    ? 'bg-champagne/10 text-champagne' 
                    : 'text-cream/70 hover:bg-white/5 hover:text-cream'
                }`}
              >
                <span className="text-base leading-none">{CURRENCY_CONFIG[code].flag}</span>
                <div className="flex flex-col">
                  <span className="font-bold uppercase tracking-widest leading-none mb-1">{code} <span className="text-[9px] text-cream/30 font-normal normal-case ml-1">{CURRENCY_CONFIG[code].label}</span></span>
                  <span className="text-[9px] text-cream/40 font-mono tracking-wide">1 USD = {(exchangeRates?.[code] || 1).toLocaleString('en-US', {maximumFractionDigits: 2})} {code}</span>
                </div>
                {currentCurrency === code && (
                  <div className="ml-auto w-1 h-1 rounded-full bg-champagne" />
                )}
              </DropdownMenuItem>
            ))
          ) : (
            <div className="py-8 px-4 text-center">
              <p className="text-xs text-cream/30 italic">No currencies found</p>
            </div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
