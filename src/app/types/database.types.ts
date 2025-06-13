export interface Policy {
    id: number;
    content: string;
    created_at: string;
}

export interface Policies {
    persona_info_policy_en: Policy[];
    personal_info_policy_ru: Policy[];
    cookies_usage_en: Policy[];
    cookies_usage_ru: Policy[];
}