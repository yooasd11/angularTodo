export class SearchResponse {
    incomplete_results: boolean;
    items: User[];
    total_count: number;
}

// 이거 redux로 
export class User {
    login: string;
    avatar_url: string;
    html_url: string;
}