import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyecaskvraocxtsqamuw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5ZWNhc2t2cmFvY3h0c3FhbXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2Mjg5OTgsImV4cCI6MjA2NTIwNDk5OH0.vyCpnsUstmzmcGpVtL977FkytkJ7777z-D1SxyqqUn8';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Policy {
    id: number;
    content: string;
    created_at: string;
}

export async function getPolicy(type: 'privacy' | 'cookies', locale: string): Promise<string | null> {
    let column = '';
    if (type === 'privacy') {
        column = locale === 'en' ? 'personal_info_policy_en' : 'personal_info_policy_ru';
    } else if (type === 'cookies') {
        column = locale === 'en' ? 'cookies_usage_en' : 'cookies_usage_ru';
    }

    const { data, error } = await supabase
        .from('policies')
        .select(column)
        .order('id', { ascending: false })
        .limit(1)
        .single();

    if (error) {
        console.error(`[getPolicy] Error fetching ${type} policy:`, error);
        return null;
    }

    return data ? data[column] : null;
}