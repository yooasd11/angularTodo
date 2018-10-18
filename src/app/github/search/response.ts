import { User } from '../../store';

export class SearchResponse {
    incomplete_results: boolean;
    items: User[];
    total_count: number;
} 