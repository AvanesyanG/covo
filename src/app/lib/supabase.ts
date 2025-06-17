import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyecaskvraocxtsqamuw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5ZWNhc2t2cmFvY3h0c3FhbXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2Mjg5OTgsImV4cCI6MjA2NTIwNDk5OH0.vyCpnsUstmzmcGpVtL977FkytkJ7777z-D1SxyqqUn8';

export const supabase = createClient(supabaseUrl, supabaseKey);

interface PoliciesTable {
  id: number;
  created_at: string;
  personal_info_policy_en: string;
  personal_info_policy_ru: string;
  cookies_usage_en: string;
  cookies_usage_ru: string;
}

export async function getPolicy(
  type: 'privacy' | 'cookies',
  locale: 'en' | 'ru'
): Promise<string | null> {
  const columnMap: Record<'privacy' | 'cookies', Record<'en' | 'ru', keyof PoliciesTable>> = {
    privacy: {
      en: 'personal_info_policy_en',
      ru: 'personal_info_policy_ru',
    },
    cookies: {
      en: 'cookies_usage_en',
      ru: 'cookies_usage_ru',
    },
  };

  const column = columnMap[type][locale];

  // Указываем тип результата через generic в select()
  const { data, error } = await supabase
    .from('policies')
    .select(column)
    .order('id', { ascending: false })
    .limit(1)
    .single<{ [key in keyof Pick<PoliciesTable, typeof column>]: string }>();

  if (error) {
    console.error(`[getPolicy] Error fetching ${type} policy:`, error);
    return null;
  }

  return data ? data[column] : null;
}
