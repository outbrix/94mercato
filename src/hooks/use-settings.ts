import { useState, useEffect } from 'react';
import api from '@/lib/api';

interface PublicSettings {
    platform_fee_percent: string;
    min_payout_amount: string;
    payout_processing_days: string;
    site_title?: string;
    featured_collections?: string;
    maintenance_mode?: boolean;
    allow_signups?: boolean;
    require_email_verification?: boolean;
}

const defaultSettings: PublicSettings = {
    platform_fee_percent: '12', // Fallback to avoid UI flicker
    min_payout_amount: '50',
    payout_processing_days: '3'
};

export function useSettings() {
    const [settings, setSettings] = useState<PublicSettings>(defaultSettings);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await api.get('/admin/public/settings');
                if (response.data && response.data.settings) {
                    setSettings(response.data.settings);
                }
            } catch (error) {
                console.error('Failed to fetch public settings:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSettings();
    }, []);

    return {
        settings,
        loading,
        commissionRate: settings.platform_fee_percent
    };
}
